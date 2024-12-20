"use client";
import Image from "next/image";
import { Logo } from "../ui";
import { useEffect, useState } from "react";
import { authImageSlider } from "@/models/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const variants = {
    entry: {
      opacity: 0.4,
      x: "-100%",
    },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0.4, x: "100%" },
  };

  const images = authImageSlider;

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const startInterval = () => {
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 5000);
    };

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        startInterval();
      } else {
        clearInterval(intervalId);
      }
    });

    startInterval();

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  return (
    <div className="relative w-full md:h-[calc(100vh-2rem)] lg:h-[calc(100vh-3rem)] lg:w-[65%] rounded-lg overflow-hidden">
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          variants={variants}
          transition={{ duration: ".8", ease: "easeInOut" }}
          key={currentImage}
          initial="entry"
          animate="animate"
          exit="exit"
          className="absolute w-full h-full"
        >
          <Image
            alt="pills within a pill container"
            className="relative object-cover"
            src={images[currentImage]}
            fill
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/55 bg-gradient-to-t from-black to-transparent" />
      <div className="relative h-full flex flex-col justify-between">
        <Logo href={"/dashboard"} className="w-fit m-10 ml-auto" />
        <div>
          <p className="text-white mt-10 text-lg lg:text-2xl font-medium capitalize px-8 lg:px-14 mb-10">
            Load your pills and forget about them — SmartPill takes care of the
            rest.
          </p>
          <div
            role="region"
            aria-label="Image carousel"
            className="flex w-full justify-center mb-10"
          >
            {images.map((_, index) => (
              <div
                onKeyDown={(e) => e.key === "Enter" && setCurrentImage(index)}
                key={index}
                aria-label={`Go to image ${index + 1} of ${images.length}`}
                className={cn(
                  `w-4 h-2 rounded-sm transition-all duration-500 mx-1 cursor-pointer bg-gray-300`,
                  {
                    "bg-white w-8": index === currentImage,
                  }
                )}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
