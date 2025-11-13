import { FullscreenPhoto } from "@/components/UI/FullscreenPhoto";
import { Reveal } from "@/components/UI/Reveal";
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

export default function WaysToPlayComponent({ item }: Props) {
  return (
    <motion.div className="w-lg min-h-[550px] 2xl:min-h-[630px] h-fit bg-white rounded-4xl shadow-xl flex flex-col">
      <div className="w-full h-1/2 p-4">
        <FullscreenPhoto
          className="w-full h-1/2 rounded-4xl object-cover hover:cursor-zoom-in hover:border-8 hover:border-red-500 transition-all"
          image={item.img}
          alt={item.alt}
        />
      </div>

      <div className="w-full h-1/2 px-8 2xl:px-12 2xl:pb-8">
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
