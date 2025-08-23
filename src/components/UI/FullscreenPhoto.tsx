import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface Props {
  image: string;
  alt: string;
  className?: string | null;
}

export const FullscreenPhoto = ({ image, alt, className }: Props) => {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isPhotoOpen && (
          <motion.img
            layoutId={alt}
            src={image}
            alt={alt}
            className={
              className
                ? className
                : "w-full h-full rounded-4xl object-cover hover:cursor-zoom-in hover:border-8 hover:border-red-500 transition-all"
            }
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
            className="fixed inset-0 bg-black/25 backdrop-blur-md flex items-center justify-center z-50 cursor-zoom-out"
            onClick={() => setIsPhotoOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              layoutId={alt}
              src={image}
              alt={alt}
              className="max-w-[90vw] max-h-[90vh] object-fill rounded-4xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
