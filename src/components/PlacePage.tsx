"use client";
import { Place } from "@prisma/client";
import { Globe2, Thermometer, Link, Landmark } from "lucide-react";
import TextMarkdown from "./TextMarkdown";
import PageStatus from "./PlaceStatus";

interface PlacePageProps {
  place: Place;
}

export default function PlacePage({ place }: PlacePageProps) {
  return (
    <div className=" py-4 px-12">
      <div className="w-full flex md:flex-row flex-col gap-4 ">
        <div className="md:w-1/2 h-min p-4 ">
          <div>
            <h1 className="font-bold italic text-2xl">The British Museum </h1>
            <div className="flex items-center gap-1.5">
              <Globe2 size={16} className="shrink-0" />
              <p className="font-semibold italic text-base">London</p>
            </div>
            <div className="flex items-center gap-1.5">
              <Landmark size={16} className="shrink-0" />
              <p className="text-base font-medium">Museum</p>
            </div>
            <div className="flex items-center gap-1.5">
              <Thermometer size={16} className="shrink-0" />
              <p className="text-base font-medium">Temperature</p>
            </div>
            <div className="flex items-center gap-1.5">
              <Link size={16} className="shrink-0" />
              <p className="text-base font-medium">Link</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-base font-medium">{place.status}</p>

            <PageStatus place={place} />
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/British_Museum_from_NE_2.JPG/1200px-British_Museum_from_NE_2.JPG"
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="mt-4">
        {place.description && <TextMarkdown>{place.description}</TextMarkdown>}
      </div>
    </div>
  );
}
