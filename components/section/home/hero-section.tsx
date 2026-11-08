"use client";
import hero_background from "@/app/assets/home/hero_background.webp";
import Image, { getImageProps } from "next/image";
import arrow from "@/app/assets/arrow_gold.svg";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { LinkPullUp } from "@/components/animation/link-pull-up";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Served from public/videos with a one-year cache (see next.config.ts). File
// names carry a content hash, so a re-encoded video must get a new name.
// One file for every screen: the original 1080p master, unmodified (re-encoding
// it smaller visibly softens it on large screens). It is "fast start", so it
// begins playing while the rest downloads.
const HERO_VIDEO_SRC = "/videos/hero-5c65ff3f.mp4";

// <video poster> can't use next/image directly; get the optimized URL instead
// of shipping the original file.
const {
  props: { src: heroPosterSrc },
} = getImageProps({ src: hero_background, alt: "", sizes: "100vw" });

const HeroSection = () => {
  const [slide, setSlide] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Some mobile browsers ignore autoPlay until play() is called. The video
  // stays mounted on both slides (hidden on slide 2) so its buffer is kept.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    try {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    } catch {
      /* ignore */
    }
  }, []);

  const goTo = (idx: number) => setSlide(idx);
  const prev = () => setSlide((s) => (s === 0 ? 1 : 0));
  const next = () => setSlide((s) => (s === 0 ? 1 : 0));

  return (
    <section
      id="hero-section"
      className="relative bg-[#464948] overflow-hidden pt-14 sm:pt-18 lg:pt-0"
    >
      {/* Slide stage — 16:9 like the video and images, so nothing is cropped */}
      <div className="relative w-full aspect-video">
        {/* Slide 1: Video only (always mounted so it preloads and keeps playing) */}
        <div
          className={`absolute inset-0 z-0 transition-opacity duration-700 ease-out ${
            slide === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <video
            ref={videoRef}
            src={HERO_VIDEO_SRC}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={heroPosterSrc}
            onCanPlay={() => setVideoReady(true)}
            onCanPlayThrough={() => setVideoReady(true)}
            className="w-full h-full object-cover object-top"
          />
          {!videoReady && (
            <div
              aria-hidden
              className="absolute inset-0 bg-[#464948]/40 pointer-events-none"
            />
          )}
        </div>

        {/* Slide 2: Image + text + CTA */}
        <AnimatePresence>
          {slide === 1 && (
            <motion.div
              key="slide-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 z-10"
            >
              <div className="absolute inset-0 overflow-hidden overlay-hero after:content-[''] after:absolute after:inset-0 after:bg-linear-to-tr after:from-black/25 after:to-transparent after:pointer-events-none after:select-none">
                <Image
                  src={hero_background}
                  alt="Elora and Eluna towers rising above the South Jakarta skyline"
                  priority
                  fill
                  sizes="100vw"
                  className="object-cover object-top"
                />
                {/* The title sits over bright sky; darken the left side so it stays readable. */}
                <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/25 xl:from-black/45 xl:via-black/15 to-transparent" />
              </div>

              {/* Sizes and spacing scale with the width, like the 16:9 frame. Side padding clears the arrows below xl. */}
              <div className="relative z-10 h-full px-14 sm:px-24 xl:px-48 pb-[clamp(1.25rem,3.4vw,4rem)] w-full flex flex-col justify-end items-start">
                <WordsPullUp
                  text="THE ECHOES"
                  className="text-[clamp(1.375rem,3.75vw,4.5rem)] leading-[1.15] font-light 2xl:font-extralight text-[#F3F0E8] tracking-widest mb-[0.2em]"
                />
                <WordsPullUp
                  text="OF SPLENDOR"
                  className="text-[clamp(1.375rem,3.75vw,4.5rem)] leading-[1.15] font-medium sm:font-bold 2xl:font-medium text-[#F3F0E8] tracking-widest ml-[13vw] mb-[clamp(0.75rem,2.9vw,3.5rem)]"
                />
                <WordsPullUp
                  text="Eluna Is Where Elegance Lingers In Every Detail"
                  className="hidden sm:block text-[clamp(0.8125rem,1.25vw,1.5rem)] leading-normal font-normal 2xl:font-light text-[#F3F0E8]"
                />
                <WordsPullUp
                  text="— A Quiet Statement Of Timeless Living For"
                  className="hidden sm:block text-[clamp(0.8125rem,1.25vw,1.5rem)] leading-normal font-normal 2xl:font-light text-[#F3F0E8]"
                />
                <WordsPullUp
                  text="Those Who Seek Understated Luxury."
                  className="hidden sm:block text-[clamp(0.8125rem,1.25vw,1.5rem)] leading-normal font-normal 2xl:font-light text-[#F3F0E8] mb-[clamp(1rem,3.3vw,4rem)]"
                />

                <LinkPullUp
                  href="/the-design"
                  className="flex justify-center items-center cursor-pointer font-medium capitalize text-sm lg:text-base 2xl:text-lg pt-px w-40 lg:w-47.5 2xl:w-60 h-10 lg:h-11.25 2xl:h-14 text-[#F3F0E8] border border-[#9D7958] hover:bg-[#F3F0E8]/90 hover:text-[#9D7958] transition-all duration-200 ease-in-out"
                >
                  EXPLORE NOW
                </LinkPullUp>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Carousel nav arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="group z-30 absolute top-1/2 -translate-y-1/2 left-[clamp(0.75rem,2.9vw,3.5rem)] cursor-pointer p-2"
        >
          <Image
            src={arrow}
            alt=""
            className="w-[clamp(1rem,1.46vw,1.75rem)] h-auto [filter:brightness(0)_invert(1)] transition-[filter] duration-200 group-hover:filter-none"
          />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="group z-30 absolute top-1/2 -translate-y-1/2 right-[clamp(0.75rem,2.9vw,3.5rem)] cursor-pointer p-2"
        >
          <Image
            src={arrow}
            alt=""
            className="w-[clamp(1rem,1.46vw,1.75rem)] h-auto rotate-180 [filter:brightness(0)_invert(1)] transition-[filter] duration-200 group-hover:filter-none"
          />
        </button>

        {/* Dot indicators */}
        {/* <div className="z-30 absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {[0, 1].map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                slide === i
                  ? "w-8 bg-[#F3F0E8]"
                  : "w-4 bg-[#F3F0E8]/40 hover:bg-[#F3F0E8]/70"
              }`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
