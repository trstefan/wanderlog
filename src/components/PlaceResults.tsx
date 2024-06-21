import prisma from "@/lib/primsa";
import PlaceItem from "@/components/PlaceItem";
import { placeFilterValues } from "@/lib/validation";
import { Prisma } from "@prisma/client";
import Link from "next/link";

interface PlaceResultsProps {
  filterValues: placeFilterValues;
}

export default async function PlacesResult({
  filterValues: { q, locationType, temperatureType, isVisited },
}: PlaceResultsProps) {
  const searchString = q
    ?.split(" ")
    .filter((word) => word.length > 0)
    .join(" & ");

  const searchFilter: Prisma.PlaceWhereInput = searchString
    ? {
        OR: [
          { name: { search: searchString } },
          { locationType: { search: searchString } },
          { temperatureType: { search: searchString } },
        ],
      }
    : {};

  const where: Prisma.PlaceWhereInput = {
    AND: [
      searchFilter,
      locationType ? { locationType } : {},
      temperatureType ? { temperatureType } : {},

      { approved: true },
    ],
  };

  const places = await prisma.place.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="my-4 p-4 flex flex-wrap gap-4 items-center justify-center">
      {places.map((place) => (
        <Link key={place.id} href={`/places/${place.slug}`} className="block">
          <PlaceItem place={place} />
        </Link>
      ))}
      {places.length === 0 && (
        <p className="text-center m-auto">No places found</p>
      )}
    </div>
  );
}
