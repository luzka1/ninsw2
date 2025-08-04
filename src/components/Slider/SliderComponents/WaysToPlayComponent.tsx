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

export default function WaysToPlayComponent({item} : Props) {
  return <motion.div className="w-lg h-max bg-white rounded-4xl shadow-xl flex flex-col gap-12 px-12 py-4">
    <div className="w-full h-1/2">
      <img src={item.img} alt={item.alt} className="w-full h-full object-contain" />
    </div>

    <div className="w-full h-1/2">
      <h2 className="subtitle">{item.title}</h2>
      <p className="paragraph">
        {item.text}
      </p>
    </div>
  </motion.div>;
}
