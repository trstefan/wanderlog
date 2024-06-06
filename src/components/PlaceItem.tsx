import { Place } from "@prisma/client";

interface PlaceItem {
  place: Place;
}

export default function PlaceItem({
  place: { name, locationType },
}: PlaceItem) {
  return (
    <article className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h1>{name}</h1>
      <h2>{locationType}</h2>
    </article>
  );
}
