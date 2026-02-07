import React from "react";

const PropertiesSection = () => {
  return (
    <section
      id="design-section"
      className="relative bg-[#414242] min-h-screen px-5 sm:px-10 xl:px-48 py-32"
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col justify-end items-end w-fit">
          <h1 className="text-[#D9D9D9] text-3x sm:text-5x xl:text-6xl font-light">
            PAKUWON
          </h1>
          <h1 className="text-[#F3F0E8] text-3xl font-bold">PROPERTIES</h1>
        </div>
        <p className="font-medium text-xl tracking-widest max-w-lg text-[#F3F0E8]">
          Pakuwon Group develops malls, residences, offices, hospitality, and
          superblocks in Surabaya and Jakarta. We take pride in our leadership
          and remain committed to advancing sustainability across the industry
          and for our customers.
        </p>
      </div>
      <div className="py-10 space-y-10">
        <div className="space-y-3">
          <h2 className="text-2xl text-[#F3F0E8] font-medium">Super Block</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-[#7D7D7D] aspect-video"></div>
            <div className="bg-[#7D7D7D] aspect-video"></div>
            <div className="bg-[#7D7D7D] aspect-video"></div>
            <div className="bg-[#7D7D7D] aspect-video"></div>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl text-[#F3F0E8] font-medium">
            Mall & Entertainment
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-[#7D7D7D] aspect-video"></div>
            <div className="bg-[#7D7D7D] aspect-video"></div>
            <div className="bg-[#7D7D7D] aspect-video"></div>
            <div className="bg-[#7D7D7D] aspect-video"></div>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl text-[#F3F0E8] font-medium">Residential</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-[#7D7D7D] aspect-video"></div>
            <div className="bg-[#7D7D7D] aspect-video"></div>
            <div className="bg-[#7D7D7D] aspect-video"></div>
            <div className="bg-[#7D7D7D] aspect-video"></div>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl text-[#F3F0E8] font-medium">Hospitality</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-[#7D7D7D] aspect-video"></div>
            <div className="bg-[#7D7D7D] aspect-video"></div>
            <div className="bg-[#7D7D7D] aspect-video"></div>
            <div className="bg-[#7D7D7D] aspect-video"></div>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl text-[#F3F0E8] font-medium">Offices</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-[#7D7D7D] aspect-video"></div>
            <div className="bg-[#7D7D7D] aspect-video"></div>
            <div className="bg-[#7D7D7D] aspect-video"></div>
            <div className="bg-[#7D7D7D] aspect-video"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
