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
    <motion.div className="w-lg h-[630px] bg-white rounded-4xl shadow-xl flex flex-col">
      <div className="w-full h-1/2 p-4">
        <FullscreenPhoto image={item.img} alt={item.alt} />
      </div>

      <div className="w-full h-1/2 px-12 pb-8">
        <Reveal color="red">
          <h2 className="subtitle">{item.title}</h2>
        </Reveal>
        <Reveal color="red">
          <p className="paragraph">{item.text}</p>
        </Reveal>
      </div>
    </motion.div>
  );
}
