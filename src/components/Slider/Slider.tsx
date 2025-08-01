import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react";
import { forwardRef, useState } from "react";
import Portable from "./SliderComponents/Portable";
import SemiPortable from "./SliderComponents/SemiPortable";
import Tv from "./SliderComponents/Tv";

export default function Slider() {
  const itemsTest = [
    { component: <></> },
    { component: <SemiPortable /> },
    { component: <Tv /> },
    { component: <Portable /> },
  ];

  const [selectedItem, setSelectedItem] = useState(itemsTest.length);
  const [direction, setDirection] = useState<1 | -1>(1);

  function setSlide(newDirection: 1 | -1) {
    const nextItem = wrap(1, itemsTest.length, selectedItem + newDirection);
    setSelectedItem(nextItem);
    setDirection(newDirection);
  }

  const color = `var(--hue-${selectedItem})`;

  return (
    <div className="relative flex items-center justify-center gap-12">
      <motion.button
        initial={false}
        animate={{ backgroundColor: color }}
        aria-label="Previous"
        style={button}
        onClick={() => setSlide(-1)}
        whileFocus={{ outline: `2px solid ${color}` }}
        whileTap={{ scale: 0.9 }}
      >
        &#x276E;
      </motion.button>

      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <Slide
          key={selectedItem}
          component={itemsTest[selectedItem].component}
        />
      </AnimatePresence>

      <motion.button
        initial={false}
        animate={{ backgroundColor: color }}
        aria-label="Next"
        style={button}
        onClick={() => setSlide(1)}
        whileFocus={{ outline: `2px solid ${color}` }}
        whileTap={{ scale: 0.9 }}
      >
        &#x276F;
      </motion.button>
    </div>
  );
}

const Slide = forwardRef(function Slide(
  { component }: { component: React.ReactNode },
  ref: React.Ref<HTMLDivElement>
) {
  const direction = usePresenceData();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction * 50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2,
          type: "spring",
          visualDuration: 0.3,
          bounce: 0.4,
        },
      }}
      exit={{ opacity: 0, x: direction * -50 }}
    >
      {component}
    </motion.div>
  );
});

const button: React.CSSProperties = {
  backgroundColor: "#0cdcf7",
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 1,
  outlineOffset: 2,
};
