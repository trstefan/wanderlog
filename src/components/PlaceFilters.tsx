import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Select from "./ui/select";
import prisma from "@/lib/primsa";
import { Button } from "./ui/button";
import { placeFilterSchema, placeFilterValues } from "@/lib/validation";
import { redirect } from "next/navigation";
import { temperatureTypes } from "@/lib/place-types";

async function filterPlaces(formData: FormData) {
  "use server";

  const values = Object.fromEntries(formData.entries());

  const { q, locationType, temperatureType, isVisited } =
    placeFilterSchema.parse(values);

  const searchParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
    ...(locationType && { locationType }),
    ...(temperatureType && { temperatureType }),
    ...(isVisited && { isVisited: "true" }),
  });

  redirect(`/?${searchParams.toString()}`);
}

interface PlaceFiltersProps {
  defaultValues: placeFilterValues;
}

export default async function PlaceFilters({
  defaultValues,
}: PlaceFiltersProps) {
  const distinctLocationTypes = (await prisma.place
    .findMany({
      where: { approved: true },
      select: { locationType: true },
      distinct: ["locationType"],
    })
    .then((locationTypes) =>
      locationTypes.map(({ locationType }) => locationType).filter(Boolean)
    )) as string[];

  return (
    <div className="bg-red-500 p-4">
      <form action={filterPlaces} key={JSON.stringify(defaultValues)}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="q">Search</Label>
            <Input
              id="q"
              name="q"
              placeholder="Search by name"
              defaultValue={defaultValues.q}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="locationType">Location types</Label>
            <Select
              id="locationType"
              name="locationType"
              defaultValue={defaultValues.locationType || ""}
            >
              <option value="">All location types</option>
              {distinctLocationTypes.map((locationType) => (
                <option key={locationType} value={locationType}>
                  {locationType}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="temperatureType">Temperature types</Label>
            <Select
              id="temperatureType"
              name="temperatureType"
              defaultValue={defaultValues.temperatureType || ""}
            >
              <option value="">All temperature types</option>
              {temperatureTypes.map((temperatureType) => (
                <option key={temperatureType} value={temperatureType}>
                  {temperatureType}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <input
              id="isVisited"
              name="isVisited"
              type="checkbox"
              className="scale-125 accent-black"
              defaultChecked={defaultValues.isVisited}
            />
            <label htmlFor="isVisited">Visted</label>
          </div>
          <Button type="submit" className="w-full">
            Filter Places
          </Button>
        </div>
      </form>
    </div>
  );
}
