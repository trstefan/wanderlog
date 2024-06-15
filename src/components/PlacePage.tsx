import { Place } from "@prisma/client";

interface PlacePageProps {
  place: Place;
}

export default function PlacePage({
  place: { name, locationType, temperatureType },
}: PlacePageProps) {
  return (
    <div>
      {name && <h1>{name}</h1>}
      {locationType && <h1>{locationType}</h1>}
      {temperatureType && <h1>{temperatureType}</h1>}
    </div>
  );
}
