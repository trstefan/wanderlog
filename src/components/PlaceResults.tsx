import prisma from "@/lib/primsa";
import PlaceItem from "@/components/PlaceItem";
import { placeFilterValues } from "@/lib/validation";
import { Prisma } from "@prisma/client";
import Link from "next/link";
import NoResults from "./NoResults";
import { ArrowLeft, ArrowRight } from "lucide-react";
import cn from "classnames";

interface PlaceResultsProps {
  filterValues: placeFilterValues;
  page?: number;
}

export default async function PlacesResult({
  filterValues,
  page = 1,
}: PlaceResultsProps) {
  const { q, locationType, temperatureType, isNotVisited } = filterValues;

  const placesPerPage = 4;
  const skip = (page - 1) * placesPerPage;

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

  const placesPromise = prisma.place.findMany({
    where,
    orderBy: { createdAt: "desc" },
    take: placesPerPage,
    skip,
  });

  const countPromise = prisma.place.count({ where });

  const [places, totalResults] = await Promise.all([
    placesPromise,
    countPromise,
  ]);

  return (
    <div className="bg-background  mb-4">
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
      {places.length > 0 && (
        <Pagination
          currentPage={page}
          totalResults={Math.ceil(totalResults / placesPerPage)}
          filterValues={filterValues}
        />
      )}
    </div>
  );
}

interface PaginationProps {
  currentPage: number;
  totalResults: number;
  filterValues: placeFilterValues;
}

function Pagination({
  currentPage,
  totalResults,
  filterValues: { q, locationType, temperatureType, isNotVisited },
}: PaginationProps) {
  function generatePageLink(page: number) {
    const query = new URLSearchParams({
      ...(q && { q }),
      ...(locationType && { locationType }),
      ...(temperatureType && { temperatureType }),
      ...(isNotVisited && { isNotVisited: "true" }),
      page: page.toString(),
    }).toString();

    return `?${query}`;
  }
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4">
      <Link
        href={generatePageLink(currentPage - 1)}
        className={cn(
          "flex items-center gap-2 font-semibold",
          currentPage <= 1 && "invisible"
        )}
      >
        <ArrowLeft size={16} />
        Previous page
      </Link>
      <span className="font-semibold">
        Page {currentPage} of {totalResults}
      </span>
      <Link
        href={generatePageLink(currentPage + 1)}
        className={cn(
          "flex items-center gap-2 font-semibold",
          currentPage >= totalResults && "invisible"
        )}
      >
        Next page
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
