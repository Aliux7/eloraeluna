"use client";
import * as React from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type LinkPullUpProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function LinkPullUp({
  href,
  children,
  className = "",
}: LinkPullUpProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: "200%" }}
        animate={isInView ? { y: "0%" } : {}}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="inline-block"
      >
        <Link href={href} passHref className={cn(className)}>
          {children}
        </Link>
      </motion.div>
    </div>
  );
}
