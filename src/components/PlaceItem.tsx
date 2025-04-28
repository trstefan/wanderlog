"use client";

import type { Place } from "@prisma/client";
import { MapPin, Thermometer, Clock } from "lucide-react";
import { useState } from "react";
import Tag from "./Tag";

interface PlaceItem {
  place: Place;
}

export default function PlaceItem({
  place: { name, picture, locationType, temperatureType, status },
}: PlaceItem) {
  const [isHovered, setIsHovered] = useState(false);

  const pictureElement = picture || "/placeholder.jpg";

  // Status styling
  const getStatusStyles = () => {
    if (status === "Not Visited") {
      return {
        bgColor: "bg-gradient-to-r from-rose-500 to-pink-500",
        textColor: "text-white",
        icon: <Clock className="w-4 h-4 mr-1" />,
      };
    }
    return {
      bgColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
      textColor: "text-white",
      icon: <Clock className="w-4 h-4 mr-1" />,
    };
  };

  const statusStyles = getStatusStyles();

  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl dark:shadow-indigo-500/10 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card background with subtle pattern */}
      <div className="absolute inset-0 bg-[#EDF1FA] dark:bg-[#1D2333] opacity-90 z-0" />

      {/* Image container with parallax effect */}
      <div className="relative overflow-hidden h-56">
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10 transition-opacity duration-300 ${
            isHovered ? "opacity-60" : "opacity-40"
          }`}
        />
        <img
          src={pictureElement || "/placeholder.svg"}
          alt={`View of ${name}`}
          width={500}
          height={300}
          className={`object-cover w-full h-full transition-transform duration-700 ease-out ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Status badge */}
        <div className="absolute top-4 right-4 z-20">
          <div
            className={`flex items-center px-3 py-1.5 rounded-full ${statusStyles.bgColor} ${statusStyles.textColor} text-sm font-medium shadow-lg`}
          >
            {statusStyles.icon}
            {status}
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="relative z-10 p-5">
        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
          {name}
        </h3>

        <div className="space-y-2.5 mb-4">
          {locationType && (
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <MapPin className="w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm">{locationType}</span>
            </div>
          )}

          {temperatureType && (
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <Thermometer className="w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm">{temperatureType}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {[locationType, temperatureType]
            .filter(Boolean)
            .map((item, index) => (
              <Tag key={index} tag={item || ""} />
            ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-indigo-500/10 to-transparent rounded-tl-full -z-10" />
      </div>

      {/* Animated border on hover */}
      <div
        className={`absolute inset-0 border border-indigo-500/0 rounded-xl transition-all duration-300 ${
          isHovered ? "border-indigo-500/50" : ""
        } pointer-events-none`}
      />
    </div>
  );
}
