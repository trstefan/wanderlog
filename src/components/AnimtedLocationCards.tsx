"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tag from "./Tag";

// Sample location data
const locations = [
  {
    id: 1,
    name: "Seto Inland Sea",
    description: "A stunning coastal area with beautiful islands and beaches.",
    image:
      "https://img.buzzfeed.com/buzzfeed-static/static/2024-03/15/0/asset/f34ca90d22b1/sub-buzz-1828-1710462954-1.jpg?downsize=600:*&output-format=auto&output-quality=auto",
    tags: ["Beach", "Tropical", "Warm"],
  },
  {
    id: 2,
    name: "Kyoto Gardens",
    description: "Traditional Japanese gardens with serene atmosphere.",
    image:
      "https://images.unsplash.com/photo-1692302707746-89b6b1104f46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=300&width=400",
    tags: ["Cultural", "Peaceful", "Historic"],
  },
  {
    id: 3,
    name: "Mount Fuji",
    description: "Japan's highest mountain and an iconic natural landmark.",
    image:
      "https://cdn-ikppcfn.nitrocdn.com/jqtVDbjdfBPrQSiPhMihAdYLibcqMkkx/assets/images/optimized/rev-4c3905d/sevennaturalwonders.org/wp-content/uploads/2023/12/Natural-wonders-of-Japan.jpg?height=300&width=400",
    tags: ["Mountain", "Hiking", "Scenic"],
  },
  {
    id: 4,
    name: "Okinawa Beaches",
    description: "Tropical paradise with crystal clear waters and white sand.",
    image:
      "https://www.worldbeachguide.com/photos/aharen-beach-okinawa.jpg?height=300&width=400",
    tags: ["Beach", "Tropical", "Warm"],
  },
];

export default function AnimatedLocationCards() {
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  // Update card every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDirection(1);
      setCurrentLocationIndex((prev) => (prev + 1) % locations.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto h-[450px] flex items-center justify-center overflow-hidden rounded-lg">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={locations[currentLocationIndex].id}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.5,
          }}
          className="absolute w-full"
        >
          <LocationCard location={locations[currentLocationIndex]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

interface LocationCardProps {
  location: {
    id: number;
    name: string;
    description: string;
    image: string;
    tags: string[];
  };
}

const LocationCard = ({ location }: LocationCardProps) => {
  return (
    <motion.div
      layout
      className="bg-[#EDF1FA] dark:bg-[#1D2333] rounded-lg shadow-lg"
    >
      <div className="h-full">
        <img
          src={location.image || "/placeholder.svg"}
          alt={`${location.name} image`}
          className="rounded-t-md object-cover w-full aspect-[4/3]"
        />
        <div className="p-6 space-y-2">
          <h3 className="text-xl font-semibold">{location.name}</h3>
          <p className="text-muted-foreground text-sm">
            {location.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {location.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
