"use client";

import type React from "react";

import type { Place } from "@prisma/client";
import { useState, useEffect } from "react";
import TextMarkdown from "./TextMarkdown";
import PageStatus from "./PlaceStatus";
import { Thermometer, Landmark, ExternalLink, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface PlacePageProps {
  place: Place;
}

export default function PlacePage({ place }: PlacePageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const statusStyles =
    place.status === "Visited"
      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
      : "bg-gradient-to-r from-rose-500 to-pink-500 text-white";

  return (
    <div className="py-8 px-4 md:px-12 min-h-full ">
      <div
        className={`w-full max-w-6xl mx-auto rounded-2xl overflow-hidden bg-white dark:bg-[#1D2333] shadow-xl transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image section with parallax effect */}
          <div
            className="relative overflow-hidden h-64 md:h-[500px]"
            onMouseEnter={() => setImageHovered(true)}
            onMouseLeave={() => setImageHovered(false)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20 z-10 transition-opacity duration-500 ${
                imageHovered ? "opacity-70" : "opacity-50"
              }`}
            ></div>

            <img
              src={place.picture || "/placeholder.jpg"}
              alt={`View of ${place.name}`}
              width={800}
              height={600}
              className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                imageHovered ? "scale-110" : "scale-100"
              }`}
            />
          </div>

          {/* Content section */}
          <div className="p-6 md:p-10 flex flex-col gap-4">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                {place.name}
              </h2>
              {/* Location badge if available */}
              {place.location && (
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 mb-4">
                  <MapPin className="w-4 h-4 mr-1.5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-sm font-medium">{place.location}</span>
                </div>
              )}

              {/* Status badge */}
              <div className="mb-4">
                <div
                  className={`inline-flex items-center px-4 py-2 rounded-full ${statusStyles} text-sm font-medium shadow-lg`}
                >
                  {place.status === "Visited" ? (
                    <CheckIcon className="w-4 h-4 mr-1.5" />
                  ) : (
                    <XIcon className="w-4 h-4 mr-1.5" />
                  )}
                  {place.status}
                </div>
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {place.locationType && (
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                      <Landmark className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Location Type
                      </p>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {place.locationType}
                      </p>
                    </div>
                  </div>
                )}

                {place.temperatureType && (
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                      <Thermometer className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Temperature
                      </p>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {place.temperatureType}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-auto">
              <PageStatus place={place} />

              {place.link && (
                <Link href={place.link} className="mt-4 block">
                  <Button className="w-full group bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                    <span>View more</span>
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Description section */}
        {place.description && (
          <div className="px-6 md:px-10 pb-10 pt-4">
            <div className="relative">
              <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              <h3 className="text-xl font-bold mt-4 pt-4 text-gray-800 dark:text-white">
                About this place
              </h3>
            </div>
            <div className="mt-4 prose prose-indigo dark:prose-invert max-w-none">
              <TextMarkdown>{place.description}</TextMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
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
