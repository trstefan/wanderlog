"use client";
import { Place } from "@prisma/client";

import { Globe2, Thermometer, Link, Landmark } from "lucide-react";

import TextMarkdown from "@/components/TextMarkdown";

interface AdminPlacePageProps {
  place: Place;
}

export default function AdminPlacePage({ place }: AdminPlacePageProps) {
  console.log(place);
  return (
    <section className="w-full grow space-y-5">
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-8  ">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={place.picture ?? "place.picture"}
            alt="Destination Image"
            width={800}
            height={600}
            className="w-full h-64 md:h-auto object-cover"
          />
        </div>
        <div className="grid gap-4">
          <div className="flex items-center justify-between ">
            <div>
              <h2 className="text-2xl font-bold">{place.name}</h2>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <div className="flex items-center gap-2 text-sm font-medium">
                {place.status && place.status === "Visited" ? (
                  <CheckIcon className="w-5 h-5 text-green-500" />
                ) : (
                  <XIcon className="text-red-500" />
                )}

                <span>{place.status}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {place.locationType && (
              <div className="flex items-center gap-1.5">
                <Landmark size={16} className="shrink-0" />
                <p className="text-base font-medium">{place.locationType}</p>
              </div>
            )}
            {place.locationType && (
              <div className="flex items-center gap-1.5">
                <Landmark size={16} className="shrink-0" />
                <p className="text-base font-medium">Link</p>
              </div>
            )}
            {place.temperatureType && (
              <div className="flex items-center gap-1.5">
                <Thermometer size={16} className="shrink-0" />
                <p className="text-base font-medium">{place.temperatureType}</p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            {place.location && (
              <div className="flex items-center gap-2">
                <LocateIcon className="w-5 h-5 text-muted-foreground " />
                <span className="text-muted-foreground font-semibold">
                  {place.location}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="M6 6 18 18" />
    </svg>
  );
}
