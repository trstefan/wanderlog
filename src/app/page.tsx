import { ModeToggle } from "@/components/toggle";
import PlaceFilters from "@/components/PlaceFilters";
import PlacesResult from "@/components/PlaceResults";
import { placeFilterValues } from "@/lib/validation";

interface PagePros {
  searchParams: {
    q?: string;
    locationType?: string;
    temperatureType?: string;
    isVisited?: string;
  };
}

export default async function Home({
  searchParams: { q, locationType, temperatureType, isVisited },
}: PagePros) {
  const filterValues: placeFilterValues = {
    q,
    locationType,
    temperatureType,
    isVisited: isVisited === "true",
  };

  return (
    <main className="">
      <div>
        <PlaceFilters defaultValues={filterValues} />
        <PlacesResult filterValues={filterValues} />
      </div>
    </main>
  );
}
