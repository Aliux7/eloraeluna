"use client";

import * as React from "react";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import arrow_gold from "@/app/assets/arrow_gold.svg";
import { cn } from "@/lib/utils";

type GalleryCarouselProps = {
  images: StaticImageData[];
  label?: string | string[];
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function GalleryCarousel({
  images,
  label,
  className,
  imageClassName,
  priority,
}: GalleryCarouselProps) {
  const [[index, direction], setState] = React.useState<[number, number]>([
    0, 0,
  ]);
  const total = images.length;

  const currentLabel = Array.isArray(label) ? label[index] : label;

  const prev = () => setState(([i]) => [(i - 1 + total) % total, -1]);
  const next = () => setState(([i]) => [(i + 1) % total, 1]);

  const entryRef = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(entryRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={entryRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative overflow-hidden", className)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ x: direction > 0 ? "6%" : direction < 0 ? "-6%" : 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? "-6%" : "6%", opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={currentLabel ?? ""}
            className={cn("w-full h-full object-cover", imageClassName)}
            priority={priority}
          />
        </motion.div>
      </AnimatePresence>

      {total > 1 && (
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="group absolute top-1/2 -translate-y-1/2 left-3 sm:left-5 xl:left-8 z-10 cursor-pointer p-1"
        >
          <Image
            src={arrow_gold}
            alt=""
            className="scale-60 sm:scale-90 xl:scale-100 [filter:brightness(0)_invert(1)] transition-[filter] duration-200 group-hover:filter-none"
          />
        </button>
      )}

      {total > 1 && (
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="group absolute top-1/2 -translate-y-1/2 right-3 sm:right-5 xl:right-8 z-10 cursor-pointer p-1"
        >
          <Image
            src={arrow_gold}
            alt=""
            className="scale-60 sm:scale-90 xl:scale-100 rotate-180 [filter:brightness(0)_invert(1)] transition-[filter] duration-200 group-hover:filter-none"
          />
        </button>
      )}

      <AnimatePresence mode="wait">
        {currentLabel && (
          <motion.span
            key={currentLabel}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-2.5 sm:bottom-3 right-5 sm:right-6 z-10 text-[#F3F0E8] text-sm sm:text-base xl:text-[18px] xl:leading-7 leading-tight font-normal tracking-normal"
          >
            {currentLabel}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
