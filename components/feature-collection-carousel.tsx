"use client";

import { useState } from "react";
import { useUser } from "@/contexts/user-context";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so we can use it with frame-based animations
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export function FeatureCollectionCarousel() {
  const { products } = useUser();
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, products.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  if (!products || products.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">No products in your collection.</p>
      </div>
    );
  }

  const product = products[imageIndex];

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-center h-[500px]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute w-full h-full"
        >
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-80 h-80 relative">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain rounded-lg shadow-2xl"
                        priority
                    />
                </div>
                <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.isOwner ? "Propriétaire" : "Vu récemment"}</p>
                </div>
            </div>
        </motion.div>
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        <Button variant="outline" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        <Button variant="outline" size="icon">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Button>
      </div>
      <style jsx>{`
        .next, .prev {
          top: calc(50% - 20px);
          position: absolute;
          background: white;
          border-radius: 30px;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          font-size: 20px;
          z-index: 2;
        }
        
        .next {
          right: 10px;
        }
        
        .prev {
          left: 10px;
        }
      `}</style>
    </div>
  );
}
