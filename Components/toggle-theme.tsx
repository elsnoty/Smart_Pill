"use client";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export function ToggleThem() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="text-black">
      {theme === "light" ? (
        <motion.button
          whileHover={{ scale: 1.2, rotate: 45 }}
          key={"sun"}
          onClick={() => setTheme("dark")}
        >
          <Icon icon="si:sun-line" />
        </motion.button>
      ) : (
        <motion.button
          whileHover={{ scale: 1.2, rotate: -8 }}
          key={"moon"}
          onClick={() => setTheme("light")}
        >
          <Icon icon="line-md:moon-alt-loop" />
        </motion.button>
      )}
    </div>
  );
}