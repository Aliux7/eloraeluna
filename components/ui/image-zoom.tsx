"use client";

import { useRef } from "react";

type Props = {
  src: string;
  alt?: string;
};

export default function ImageZoom({ src, alt }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleZoom = (clientX: number, clientY: number) => {
    const container = containerRef.current;
    const img = imgRef.current;

    if (!container || !img) return;

    const rect = container.getBoundingClientRect();

    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    img.style.transformOrigin = `${x}% ${y}%`;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleZoom(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    handleZoom(touch.clientX, touch.clientY);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onContextMenu={(e) => e.preventDefault()}
      className="w-full h-full overflow-hidden cursor-zoom-in"
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        draggable={false}
        className="
          w-full
          h-full
          object-cover
          object-center 
          transition-transform
          duration-200
          hover:scale-[2]
          z-10
        "
        style={{
          WebkitTouchCallout: "none",
          touchAction: "none",
        }}
      />
    </div>
  );
}