"use client";
import hero_background from "@/app/assets/home/hero_background.webp";
import Image from "next/image";
import arrow from "@/app/assets/arrow_gold.svg";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { LinkPullUp } from "@/components/animation/link-pull-up";
import { SwipeShiftButton } from "@/components/ui/swipeable-button";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HERO_VIDEO_SRC =
  "https://firebasestorage.googleapis.com/v0/b/dupi-aad53.firebasestorage.app/o/Elora%20Eluna-Web-Y-%20D20263009_1.mp4?alt=media&token=d0eb4c5a-7efb-4e95-aef0-f299074c4da8";

const HeroSection = () => {
  const [slide, setSlide] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Kick the video load as early as possible so it is ready before the user
  // reaches the hero. We also keep the video element mounted on both slides
  // (hidden on slide 2) so the browser never discards its buffer.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    try {
      v.load();
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
      className="relative sm:min-h-screen bg-[#464948] overflow-hidden"
    >
      {/* Slide stage — fixed height so both slides share the same frame */}
      <div className="relative w-full h-[70vh] sm:h-screen">
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
            preload="auto"
            poster={hero_background.src}
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
                  alt=""
                  priority
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="relative z-10 h-full px-5 sm:px-10 xl:px-48 py-8 sm:py-0 w-full pb-10 lg:pb-16 flex flex-col justify-end items-start">
                <WordsPullUp
                  text="THE ECHOES"
                  className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-light 2xl:font-extralight text-[#F3F0E8] tracking-widest mb-2 lg:mb-4"
                />
                <WordsPullUp
                  text="OF SPLENDOR"
                  className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-medium sm:font-bold 2xl:font-medium text-[#F3F0E8] tracking-widest ml-20 lg:ml-[10vw] xl:ml-64 mb-6 md:mb-10 xl:mb-14"
                />
                <WordsPullUp
                  text="Eluna Is Where Elegance Lingers In Every Detail"
                  className="hidden sm:block text-sm sm:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#F3F0E8]"
                />
                <WordsPullUp
                  text="— A Quiet Statement Of Timeless Living For"
                  className="hidden sm:block text-sm sm:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#F3F0E8]"
                />
                <WordsPullUp
                  text="Those Who Seek Undersstand Luxury."
                  className="hidden sm:block text-sm sm:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#F3F0E8] mb-16"
                />
                <WordsPullUp
                  text="Eluna Is Where Elegance Lingers In Every Detail — A Quiet Statement Of Timeless Living For Those Who Seek Undersstand Luxury."
                  className="sm:hidden text-sm sm:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#F3F0E8] my-16 ml-20"
                />

                <LinkPullUp
                  href="/the-design"
                  className="hidden sm:flex justify-center items-center cursor-pointer font-medium capitalize text-sm sm:text-base 2xl:text-lg pt-px w-40 sm:w-47.5 2xl:w-60 h-11.25 2xl:h-14 text-[#F3F0E8] border border-[#9D7958] hover:bg-[#F3F0E8]/90 hover:text-[#9D7958] transition-all duration-200 ease-in-out"
                >
                  EXPLORE NOW
                </LinkPullUp>
                <SwipeShiftButton href="/the-design">
                  EXPLORE NOW
                </SwipeShiftButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Carousel nav arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="group z-30 absolute top-1/2 -translate-y-1/2 left-5 sm:left-10 xl:left-16 cursor-pointer p-1"
        >
          <Image
            src={arrow}
            alt=""
            className="scale-60 sm:scale-90 xl:scale-100 [filter:brightness(0)_invert(1)] transition-[filter] duration-200 group-hover:filter-none"
          />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="group z-30 absolute top-1/2 -translate-y-1/2 right-5 sm:right-10 xl:right-16 cursor-pointer p-1"
        >
          <Image
            src={arrow}
            alt=""
            className="scale-60 sm:scale-90 xl:scale-100 rotate-180 [filter:brightness(0)_invert(1)] transition-[filter] duration-200 group-hover:filter-none"
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
