"use client";

import { CheckIcon, Landmark, MapPin, Thermometer, XIcon } from "lucide-react";
import { useState, useEffect } from "react";
import type { Place } from "@prisma/client";
import AdminSidebar from "./AdminSidebar";

interface AdminPlacePageProps {
  place: Place;
}

export default function AdminPlacePage({ place }: AdminPlacePageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const statusStyles =
    place.status === "Visited"
      ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white"
      : "bg-gradient-to-r from-rose-500 to-pink-500 text-white";

  return (
    <div className="py-8 px-4 md:px-12 min-h-full">
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
              src={place.picture ?? "/placeholder.svg?height=600&width=800"}
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
                  {place.status || "Not Visited"}
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

                <div>
                  <AdminSidebar place={place} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
