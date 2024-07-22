import { useRef } from "react";
import PlaceFilters from "@/components/PlaceFilters";
import PlacesResult from "@/components/PlaceResults";
import { placeFilterValues } from "@/lib/validation";
import Hero from "@/components/Hero";

interface PagePros {
  searchParams: {
    q?: string;
    locationType?: string;
    temperatureType?: string;
    isNotVisited?: string;
  };
}

export default async function Home({
  searchParams: { q, locationType, temperatureType, isNotVisited },
}: PagePros) {
  const filterValues: placeFilterValues = {
    q,
    locationType,
    temperatureType,
    isNotVisited: isNotVisited === "true",
  };

  return (
    <main className="">
      <Hero />
      <div>
        <PlaceFilters defaultValues={filterValues} />
        <PlacesResult filterValues={filterValues} />
      </div>
    </main>
  );
}
