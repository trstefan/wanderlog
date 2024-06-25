import { Place } from "@prisma/client";
import Tag from "./Tag";

interface PlaceItem {
  place: Place;
}

export default function PlaceItem({
  place: { name, locationType, temperatureType },
}: PlaceItem) {
  const infoArray = [
    { label: "Location Type", value: locationType },
    { label: "Temperature Type", value: temperatureType },
  ];

  return (
    <div className="bg-red-500 relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <img
        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        alt="Card Image"
        width={500}
        height={300}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm ">
          Crafted with premium materials for a timeless look and unparalleled
          comfort.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {infoArray.map((item, index) => (
            <Tag key={index} tag={item.value}></Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
