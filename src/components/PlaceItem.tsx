import { Place } from "@prisma/client";
import Tag from "./Tag";

interface PlaceItem {
  place: Place;
}

export default function PlaceItem({
  place: { name, location, locationType, temperatureType, status },
}: PlaceItem) {
  const infoArray = [
    { label: "Location Type", value: locationType || "" },
    { label: "Temperature Type", value: temperatureType || "" },
  ];
  const statusClasses =
    status === "Not Visited" ? "bg-[#ff6b6b]" : "bg-[#1089b1]";

  return (
    <div className="bg-[#EDF1FA] dark:bg-[#1D2333]  relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl ">
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
          </div>
          <p
            className={`block p-2 text-center text-sm text-[#0e0909] font-bold rounded-lg ${statusClasses}`}
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
