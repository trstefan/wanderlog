import prisma from "@/lib/primsa";
import PlaceItem from "@/components/PlaceItem";
import { placeFilterValues } from "@/lib/validation";
import { Prisma } from "@prisma/client";
import Link from "next/link";
import NoResults from "./NoResults";

interface PlaceResultsProps {
  filterValues: placeFilterValues;
}

export default async function PlacesResult({
  filterValues: { q, locationType, temperatureType, isNotVisited },
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
      isNotVisited ? { status: "Not Visited" } : {},

      { approved: true },
    ],
  };
  //console.log("Filter WHERE clause:", where);

  const places = await prisma.place.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="bg-background dark:bg-gray-900">
      <div className="px-4 py-4">
        <h1 className="text-3xl font-bold">
          Journey logs from all around the Globe
        </h1>
      </div>
      <section className="w-full grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-8">
        {places.map((place) => (
          <Link key={place.id} href={`/places/${place.slug}`} className="block">
            <PlaceItem place={place} />
          </Link>
        ))}
      </section>
      {places.length === 0 && <NoResults />}
    </div>
  );
}
