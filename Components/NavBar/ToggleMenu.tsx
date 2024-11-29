"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LinksMenu from "../SideMenu/LinksMenu";
import { Icon } from "@iconify/react/dist/iconify.js";

const SideBar = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${className} text-black z-[100] w-full`}>
      {/* Toggle Button */}
      <Icon
        icon="mdi:forwardburger"
        className="cursor-pointer rounded-full p-2 h-10 w-10"
        onClick={toggleMenu}
      />
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }} // Start off-screen
            animate={{ x: 0 }} // Slide into view
            exit={{ x: "-100%" }} // Slide out of view
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute left-0 top-0 shadow-2xl border-gray-200 text-gray-900 min-h-screen max-lg:w-[40%] max-PHS:w-full lg:min-w-[300px] rounded-r-lg bg-white dark:bg-[#0f172a]"
            style={{ zIndex: 100 }}
          >
            <div className="flex justify-end items-center dark:text-white absolute right-0 top-2">
              <Icon
                icon="ion:close-outline"
                className="cursor-pointer rounded-full p-2 h-10 w-10 z-[100]"
                onClick={toggleMenu}
              />
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <LinksMenu />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideBar;
