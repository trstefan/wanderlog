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
    page?: string;
  };
}

export default async function Home({
  searchParams: { q, locationType, temperatureType, isNotVisited, page },
}: PagePros) {
  const filterValues: placeFilterValues = {
    q,
    locationType,
    temperatureType,
    isNotVisited: isNotVisited === "true",
  };

  return (
    <main>
      <Hero />

      <PlaceFilters defaultValues={filterValues} />

      <PlacesResult
        filterValues={filterValues}
        page={page ? parseInt(page) : undefined}
      />
    </main>
  );
}
