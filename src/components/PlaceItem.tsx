import { Place } from "@prisma/client";
import Tag from "./Tag";

interface PlaceItem {
  place: Place;
}

export default function PlaceItem({
  place: { name, locationType, temperatureType, status },
}: PlaceItem) {
  const infoArray = [
    { label: "Location Type", value: locationType || "" },
    { label: "Temperature Type", value: temperatureType || "" },
  ];
  const statusClasses =
    status === "Not Visited" ? "bg-blue-500" : "bg-green-500";

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
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">{name}</h3>
            <h4 className="text-lg font-semibold italic ">London</h4>
          </div>
          <p
            className={`block p-2 text-sm font-bold rounded-lg ${statusClasses}`}
          >
            {status}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {infoArray.map((item, index) => (
            <Tag key={index} tag={item.value}></Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
