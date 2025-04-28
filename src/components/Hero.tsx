"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import AnimatedLocationCards from "./AnimtedLocationCards";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-12 md:gap-16 p-6 md:p-12 items-center">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col items-start justify-center flex-1 space-y-6 z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
        >
          Ready for your <span className="text-primary">next great</span>{" "}
          escape?
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground font-medium max-w-md"
        >
          Unleash your inner explorer and start your adventure now! Find hidden
          gems and unforgettable experiences.
        </motion.p>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex-1 w-full flex justify-center items-center"
      >
        <AnimatedLocationCards />
      </motion.div>
    </div>
  );
}
