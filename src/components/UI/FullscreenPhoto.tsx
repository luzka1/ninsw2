import { AnimatePresence, motion, scale } from "motion/react";
import { useState } from "react";

interface Props {
  image: string;
  alt: string;
}

export const FullscreenPhoto = ({ image, alt }: Props) => {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isPhotoOpen && (
          <motion.img
            layoutId={alt}
            src={image}
            alt={alt}
            className="w-full h-full rounded-4xl object-cover hover:cursor-pointer"
            onClick={() => setIsPhotoOpen(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isPhotoOpen && (
          <motion.div
            className="fixed inset-0 bg-black/25 backdrop-blur-md flex items-center justify-center z-50 cursor-pointer"
            onClick={() => setIsPhotoOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              layoutId={alt}
              src={image}
              alt={alt}
              className="max-w-full max-h-full object-fill rounded-4xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
