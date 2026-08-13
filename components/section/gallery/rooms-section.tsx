import { GalleryCarousel } from "@/components/ui/gallery-carousel";
import { FadeSlide } from "@/components/animation/fade-slide";
import illustration_bottom from "@/app/assets/home/illustration_bottom.png";
import Image from "next/image";

import bc2_front from "@/app/assets/gallery/Show Unit Eluna 2BC By Metaphor/2/Front Face View.webp";
import bc2_living_1 from "@/app/assets/gallery/Show Unit Eluna 2BC By Metaphor/2/Living View 1.webp";
import bc2_living_2 from "@/app/assets/gallery/Show Unit Eluna 2BC By Metaphor/2/Living View 2.webp";
import bc2_living_3 from "@/app/assets/gallery/Show Unit Eluna 2BC By Metaphor/2/Living View 3.webp";
import bc2_dining_1 from "@/app/assets/gallery/Show Unit Eluna 2BC By Metaphor/2/Dining & Kitchen View 1.webp";
import bc2_dining_2 from "@/app/assets/gallery/Show Unit Eluna 2BC By Metaphor/2/Dining & Kitchen View 2.webp";
import bc2_foyer_1 from "@/app/assets/gallery/Show Unit Eluna 2BC By Metaphor/2/Foyer View 1.webp";
import bc2_foyer_2 from "@/app/assets/gallery/Show Unit Eluna 2BC By Metaphor/2/Foyer View 2.webp";
import bc2_balcony_1 from "@/app/assets/gallery/Show Unit Eluna 2BC By Metaphor/2/Balcony View 1.webp";
import bc2_bathroom_1 from "@/app/assets/gallery/Show Unit Eluna 2BC By Metaphor/2/Main Bathroom View 1.webp";

import bc2_office_1 from "@/app/assets/gallery/Show Unit Eluna 2BC By Metaphor/3/Office View 1.webp";
import bc2_office_2 from "@/app/assets/gallery/Show Unit Eluna 2BC By Metaphor/3/Office View 2.webp";
import bc2_office_3 from "@/app/assets/gallery/Show Unit Eluna 2BC By Metaphor/3/Office View 3.webp";
import bc2_office_4 from "@/app/assets/gallery/Show Unit Eluna 2BC By Metaphor/3/Office View 4.webp";

import bc2_kids_1 from "@/app/assets/gallery/Show Unit Eluna 2BC By Metaphor/4/Kids Bedroom View 1.webp";
import bc2_kids_2 from "@/app/assets/gallery/Show Unit Eluna 2BC By Metaphor/4/Kids Bedroom View 2.webp";
import bc2_kids_3 from "@/app/assets/gallery/Show Unit Eluna 2BC By Metaphor/4/Kids Bedroom View 3.webp";

import bc3_master_main from "@/app/assets/gallery/Show Unit Eluna 3BC By HBA/1/V2_Master Bedroom Main View.webp";
import bc3_master_closet_closed from "@/app/assets/gallery/Show Unit Eluna 3BC By HBA/1/V4_Master Bedroom & Walk-In Closet Closed.webp";
import bc3_master_closet_open from "@/app/assets/gallery/Show Unit Eluna 3BC By HBA/1/V4_Master Bedroom & Walk-In Closet Open.webp";
import bc3_master_bathroom from "@/app/assets/gallery/Show Unit Eluna 3BC By HBA/1/V5_Master Bathroom.webp";

import bc3_ldk_main from "@/app/assets/gallery/Show Unit Eluna 3BC By HBA/2/V1_Dining, Kitchen, & Living Main View.webp";
import bc3_ldk_lounge from "@/app/assets/gallery/Show Unit Eluna 3BC By HBA/2/V1_LDK Lounge & Pantry.webp";
import bc3_ldk_pantry from "@/app/assets/gallery/Show Unit Eluna 3BC By HBA/2/V2_LDK Pantry.webp";
import bc3_foyer from "@/app/assets/gallery/Show Unit Eluna 3BC By HBA/2/V0_Foyer View.webp";
import bc3_bathroom from "@/app/assets/gallery/Show Unit Eluna 3BC By HBA/2/V8_Common Bathroom.webp";

import bc3_kids_main from "@/app/assets/gallery/Show Unit Eluna 3BC By HBA/3/V3_Kid_s Bedroom Main View.webp";
import bc3_kids_1 from "@/app/assets/gallery/Show Unit Eluna 3BC By HBA/3/V6_Kids Bedroom 1 Perspective.webp";
import bc3_kids_2 from "@/app/assets/gallery/Show Unit Eluna 3BC By HBA/3/V7_Kids Bedroom 2 Perspective.webp";

const bc2LivingDining = [
  bc2_front,
  bc2_living_1,
  bc2_living_2,
  bc2_living_3,
  bc2_dining_1,
  bc2_dining_2,
  bc2_foyer_1,
  bc2_foyer_2,
  bc2_balcony_1,
  bc2_bathroom_1,
];

const bc2Office = [bc2_office_1, bc2_office_2, bc2_office_3, bc2_office_4];

const bc2Kids = [bc2_kids_1, bc2_kids_2, bc2_kids_3];

const bc3Master = [
  bc3_master_main,
  bc3_master_closet_closed,
  bc3_master_closet_open,
  bc3_master_bathroom,
];

const bc3LivingDining = [
  bc3_ldk_main,
  bc3_ldk_lounge,
  bc3_ldk_pantry,
  bc3_foyer,
  bc3_bathroom,
];

const bc3Kids = [bc3_kids_main, bc3_kids_1, bc3_kids_2];

const RoomsSection = () => {
  return (
    <section
      id="gallery-rooms"
      className="relative bg-[#464948] z-10 px-5 sm:px-10 xl:px-48"
    >
      <FadeSlide
        direction="right"
        className="absolute top-7 left-0 -translate-1/3 z-20 pointer-events-none"
      >
        <Image
          src={illustration_bottom}
          alt=""
          className="w-68 sm:w-96 md:w-120"
        />
      </FadeSlide>
      <div className="flex flex-col gap-5 sm:gap-10 xl:gap-16">
        <GalleryCarousel
          images={bc2LivingDining}
          label="2BC Living & Dining"
          className="w-full aspect-15/6"
        />

        <div className="flex flex-col md:flex-row gap-5 sm:gap-10 xl:gap-16">
          <GalleryCarousel
            images={bc2Office}
            label="2BC Office Room"
            className="w-full md:w-1/2 aspect-[4/3]"
          />
          <GalleryCarousel
            images={bc2Kids}
            label="2BC Kids Room"
            className="w-full md:w-1/2 aspect-[4/3]"
          />
        </div>

        <div className="relative flex flex-col md:flex-row items-stretch md:gap-4">
          <FadeSlide
            direction="right"
            className="absolute top-0 -right-23 sm:-right-30 z-20 translate-x-1/5 -translate-y-1/5 pointer-events-none"
          >
            <Image
              src={illustration_bottom}
              alt=""
              className="w-68 sm:w-96 md:w-120 rotate-180"
            />
          </FadeSlide>
          <GalleryCarousel
            images={bc3Master}
            label="3BC Master Bedroom"
            className="w-full md:flex-1 aspect-4/3 md:-mr-6"
            priority
          />
          <div className="w-full md:w-2/5 lg:w-1/3 flex flex-col justify-start z-10">
            <FadeSlide className="px-5 py-6 sm:px-6 sm:py-8 xl:px-7 xl:py-10 xl:w-full xl:h-fit my-auto text-[#F3F0E8] bg-[#9D7958] font-normal 2xl:font-light text-sm sm:text-base 2xl:text-lg leading-relaxed text-balance">
              {
                "Designed as an immersive expression of the residences, every space within the showcase has been carefully curated to communicate a sense of balance, warmth, and enduring refinement. Natural light, harmonious proportions, and a restrained material palette work together to create interiors that feel both elegant and welcoming, while thoughtful detailing reflects a commitment to craftsmanship at every scale. Each room illustrates how functionality and aesthetics coexist seamlessly, revealing spaces that are intuitive to live in and timeless in character."
              }
            </FadeSlide>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 sm:gap-10 xl:gap-16">
          <GalleryCarousel
            images={bc3LivingDining}
            label="3BC Living & Dining"
            className="w-full md:w-1/2 aspect-[4/3]"
          />
          <GalleryCarousel
            images={bc3Kids}
            label="3BC Kids Room"
            className="w-full md:w-1/2 aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
