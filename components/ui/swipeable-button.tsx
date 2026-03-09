"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type Direction = "up" | "left";

type SwipeShiftButtonProps = {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  href: string;
};

export function SwipeShiftButton({
  children,
  className,
  direction = "up",
  delay = 0,
  href,
}: SwipeShiftButtonProps) {
  const router = useRouter();
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const [x, setX] = React.useState(0);
  const [dragging, setDragging] = React.useState(false);

  const startX = React.useRef(0);

  const MAX_SHIFT = 40;
  const THRESHOLD = 25;

  const initialPosition =
    direction === "left"
      ? { x: "-20%", opacity: 0 }
      : { y: "200%", opacity: 0 };

  const handleDown = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = "clientX" in e ? e.clientX : e.touches[0].clientX;

    startX.current = clientX;
    setDragging(true);
  };

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!dragging) return;

    const clientX = "clientX" in e ? e.clientX : e.touches[0].clientX;

    const delta = clientX - startX.current;

    const clamped = Math.max(0, Math.min(delta, MAX_SHIFT));

    setX(clamped);
  };

  const handleUp = () => {
    if (!dragging) return;

    setDragging(false);

    if (x > THRESHOLD) {
      router.push(href);
    }

    setX(0);
  };

  React.useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => handleMove(e);
    const up = () => handleUp();

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
    document.addEventListener("touchmove", move);
    document.addEventListener("touchend", up);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("touchend", up);
    };
  });

  return (
    <div ref={ref} className="">
      <motion.div
        initial={initialPosition}
        animate={isInView ? { x: "0%", y: "0%", opacity: 1 } : {}}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div
          onClick={() => router.push(href)}
          onMouseDown={handleDown}
          onTouchStart={handleDown}
          className={cn(
            "flex items-center justify-center",
            "cursor-pointer select-none",
            "border border-[#9D7958]",
            "text-[#F3F0E8]",
            "w-40 h-11 text-sm sm:hidden",
            className,
          )}
          style={{
            transform: `translateX(${x}px)`,
            transition: dragging ? "none" : "transform 0.25s ease",
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
