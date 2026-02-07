import React from "react";

const DescriptionSection = () => {
  return (
    <section className="w-full bg-[#E7E3DB] py-32 px-5 sm:px-10 xl:px-48">
      <div className="space-y-12">
        <p className="text-[#464948] leading-relaxed text-base lg:text-[22px]">
          City life means everything is close — and when you live at Eluna,
          everything really does mean everything. Step outside and find yourself
          surrounded by vibrant cafes, curated boutiques, fitness studios, and
          green parks. Need to get somewhere fast? Major MRT stations, toll
          access, and a friendly lanes are all within reach. Whether you're a
          busy professional, a creative entrepreneur, or a couple building a new
          chapter together, Eluna puts you right in the middle of opportunity
          and inspiration.
        </p>

        <div className="w-full h-65 sm:h-90 lg:h-150 bg-gray-400 rounded-sm" />

        <div className="space-y-6">
          <h2 className="text-xl lg:text-4xl font-medium text-[#464948]">
            A Lifestyle That Matches Your Pace
          </h2>

          <p className="text-[#464948] leading-relaxed text-xl lg:text-2xl">
            Urban living doesn't have to mean chaos. Inside Eluna, you'll find
            spaces thoughtfully designed for both momentum and mindfulness.
            Start your morning at the private gym, work remotely from the
            co-working lounge, then wind down at the sky garden as the sun sets
            over the skyline.
          </p>

          <p className="text-[#464948] leading-relaxed text-xl lg:text-2xl">
            Every feature, from the lobby to the rooftop, is curated to support
            modern, flexible living — so you can enjoy the rush of the city
            while always having a place to recharge.
          </p>
        </div>

        <div className="w-full h-65 sm:h-90 lg:h-150 bg-gray-400 rounded-sm" />
      </div>
    </section>
  );
};

export default DescriptionSection;
