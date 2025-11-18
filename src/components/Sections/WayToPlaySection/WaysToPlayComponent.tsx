import { FullscreenPhoto } from "@/components/UI/FullscreenPhoto";
import { Reveal } from "@/components/UI/Reveal";
import { useWindowSize } from "@/lib/getWindowWidth";
import { motion } from "motion/react";

type ComponentTypes = {
  img: string;
  alt: string;
  title: string;
  text: string;
};

interface Props {
  item: ComponentTypes;
}

export function Card({ item }: Props) {
  const { width } = useWindowSize();

  function resizeAnimation() {
    if (width < 1024) {
      return {
        y: 0,
        opacity: 100,
      };
    }
    return {
      y: 0,
      opacity: 100,
    };
  }

  function initialAnimation() {
    if (width < 1024) {
      return {
        y: 100,
        opacity: 0,
      };
    }
    return {
      y: 0,
      opacity: 100,
    };
  }

  return (
    <motion.div
      initial={initialAnimation()}
      whileInView={resizeAnimation()}
      transition={{ type: "spring", delay: 0.5, stiffness: 50 }}
      className="max-w-[90vw] lg:w-lg min-h-auto 2xl:min-h-[630px] h-fit bg-white rounded-4xl shadow-xl flex flex-col"
    >
      <div className="w-full h-1/2 p-4">
        <FullscreenPhoto
          className="w-full h-1/2 rounded-4xl object-cover hover:cursor-zoom-in hover:border-8 hover:border-red-500 transition-all"
          image={item.img}
          alt={item.alt}
        />
      </div>

      <div className="w-full h-1/2 px-8 2xl:px-12 pb-8">
        <Reveal color="red">
          <h2 className="subtitle text-lg 2xl:text-2xl">{item.title}</h2>
        </Reveal>
        <Reveal color="red">
          <p className="paragraph">{item.text}</p>
        </Reveal>
      </div>
    </motion.div>
  );
}
