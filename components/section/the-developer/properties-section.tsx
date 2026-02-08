import { FadeSlide } from "@/components/animation/fade-slide";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import React from "react";

const PropertiesSection = () => {
  return (
    <section
      id="design-section"
      className="relative bg-[#414242] min-h-screen px-5 sm:px-10 xl:px-48 py-32"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-7 md:gap-20 lg:gap-0">
        <div className="flex flex-col justify-end items-end w-fit">
          <WordsPullUp
            text="PAKUWON"
            className="text-[#D9D9D9] text-4xl sm:text-5xl xl:text-6xl font-light mr-10 md:mr-0"
          />
          <WordsPullUp
            text="PROPERTIES"
            className="text-[#F3F0E8] text-2xl sm:text-3xl font-bold"
          />
        </div>
        <FadeSlide className="font-medium text-sm sm:text-lg lg:text-xl tracking-widest max-w-lg text-[#F3F0E8]">
          Pakuwon Group develops malls, residences, offices, hospitality, and
          superblocks in Surabaya and Jakarta. We take pride in our leadership
          and remain committed to advancing sustainability across the industry
          and for our customers.
        </FadeSlide>
      </div>
      <div className="py-14 space-y-10">
        <div className="space-y-3">
          <WordsPullUp
            text="Super Block"
            className="text-2xl text-[#F3F0E8] font-medium"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
          </div>
        </div>

        <div className="space-y-3">
          <WordsPullUp
            text="Mall & Entertainment"
            className="text-2xl text-[#F3F0E8] font-medium"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
          </div>
        </div>

        <div className="space-y-3">
          <WordsPullUp
            text="Residential"
            className="text-2xl text-[#F3F0E8] font-medium"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
          </div>
        </div>

        <div className="space-y-3">
          <WordsPullUp
            text="Hospitality"
            className="text-2xl text-[#F3F0E8] font-medium"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
          </div>
        </div>

        <div className="space-y-3">
          <WordsPullUp
            text="Offices"
            className="text-2xl text-[#F3F0E8] font-medium"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
            <FadeSlide direction="right" className="bg-[#7D7D7D] aspect-video"> </FadeSlide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
