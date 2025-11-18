import { Button } from "@/components/UI/Button";
import { motion } from "motion/react";

import nsw2 from "/assets/ninsw2-pic-2.png";
import logo from "/assets/logo2.png";

export default function BannerSection() {
  return (
    <motion.section className="relative w-full h-[90vh] overflow-hidden bg-bgRed">
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 4, ease: [0.2, 1, 0.31, 0.99] }}
        className="absolute bottom-0 left-0 w-full bg-[#efefef]"
      />

      <motion.div className="flex flex-col-reverse md:flex-row justify-center items-center h-full">
        <div className="flex-1/3 lg:flex-1/2">
          <motion.img
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              type: "spring",
              ease: "easeOut",
              duration: 2.5,
              delay: 0.5,
            }}
            className=""
            src={nsw2}
          />
        </div>
        <motion.div
          initial={{ y: "-10%", opacity: "0%" }}
          animate={{ y: "0%", opacity: "100%" }}
          transition={{
            type: "spring",
            duration: 1.5,
            delay: 1,
          }}
          className="flex flex-col justify-center items-center w-full flex-2/3 lg:flex-1/2"
        >
          <img className="w-[15rem] lg:w-[35rem]" src={logo} />

          <div className="w-full flex flex-col gap-2 items-center justify-center">
            <Button>Saiba Mais</Button>
            <span className="text-white">
              Aumente a diversão dos seus dias!
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
