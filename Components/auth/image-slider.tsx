"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { authImageSlider } from "@/models/images";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMdScreen, setIsMdScreen] = useState(false);

  const variants = {
    entry: {
      opacity: 0.4,
      x: "100%",
    },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0.4, x: "-100%" },
  };

  const images = authImageSlider;

  useEffect(() => {
    const isMd = window.matchMedia("(min-width: 768px)").matches;

    setIsMdScreen(isMd);

    let intervalId: NodeJS.Timeout;
    function updateScreenSize() {
      if (isMd) {
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
      }
    }

    updateScreenSize();

    document.addEventListener("resize", updateScreenSize);

    return () => {
      document.removeEventListener("resize", updateScreenSize);
      clearInterval(intervalId);
    };
  }, [images.length]);

  return (
    isMdScreen && (
      <div className="relative hidden w-full overflow-hidden rounded-lg md:block md:h-[calc(100vh-2rem)] lg:h-[calc(100vh-3rem)] lg:w-[65%]">
        {/* image slider */}
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            variants={variants}
            transition={{ duration: ".8", ease: "easeInOut" }}
            key={currentImage}
            initial="entry"
            animate="animate"
            exit="exit"
            className="absolute h-full w-full"
          >
            <Image
              alt="pills within a pill container"
              className="bg-white object-contain"
              src={images[currentImage]}
              fill
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="relative z-10 flex h-full flex-col justify-end">
          <div>
            <p className="mb-10 mt-10 px-8 text-lg font-medium capitalize text-white lg:px-14 lg:text-2xl">
              Load your pills and forget about them — SmartPill takes care of
              the rest.
            </p>
            <div
              role="region"
              aria-label="Image carousel"
              className="mb-10 flex w-full justify-center"
            >
              {images.map((_, index) => (
                <div
                  onKeyDown={(e) => e.key === "Enter" && setCurrentImage(index)}
                  key={index}
                  aria-label={`Go to image ${index + 1} of ${images.length}`}
                  className={cn(
                    `mx-1 h-2 w-4 cursor-pointer rounded-sm bg-gray-300 transition-all duration-500`,
                    {
                      "w-8 bg-white": index === currentImage,
                    },
                  )}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
        {/* black overaly */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black to-transparent" />
      </div>
    )
  );
}
