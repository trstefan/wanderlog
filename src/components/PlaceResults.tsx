import prisma from "@/lib/primsa";
import PlaceItem from "@/components/PlaceItem";
import { placeFilterValues } from "@/lib/validation";
import { Prisma } from "@prisma/client";

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
    <div>
      {places.map((place) => (
        <PlaceItem place={place} key={place.id} />
      ))}
      {places.length === 0 && (
        <p className="text-center m-auto">No places found</p>
      )}
    </div>
  );
}
