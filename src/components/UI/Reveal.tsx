import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  color: "red" | "white" | "none";
}

export const Reveal = ({ children, color }: RevealProps) => {
  const [bgColor, setBgColor] = useState<"red" | "white" | "none">("none");

  useEffect(() => {
    switch (color) {
      case "red":
        setBgColor("red");
        break;
      case "white":
        setBgColor("white");
        break;
      case "none":
        setBgColor("none");
        break;
    }
  }, [color]);

  return (
    <div className="relative w-fit">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
        }}
        initial="hidden"
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>

      <motion.div
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: bgColor,
          zIndex: 20,
        }}
        variants={{
          hidden: { left: 0 },
        }}
        initial="hidden"
        whileInView={{ left: "100%" }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      ></motion.div>
    </div>
  );
};
