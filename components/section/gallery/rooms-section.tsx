import { GalleryCarousel } from "@/components/ui/gallery-carousel";
import { FadeSlide } from "@/components/animation/fade-slide";
import front_view from "@/app/assets/gallery/PICT 3.png";
import office_room from "@/app/assets/gallery/PICT 2.png";
import kids_room_2bc from "@/app/assets/gallery/Kids Bedroom View 2 1.png";
import living_room_2bc from "@/app/assets/gallery/PICT 4.png";
import master_bedroom_3bc from "@/app/assets/gallery/V2_Master Bedroom Main View 1.png";
import kids_room_3bc from "@/app/assets/gallery/Kids Bedroom View 2 1.png";
import illustration_bottom from "@/app/assets/home/illustration_bottom.png";
import Image from "next/image";

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
          images={[front_view]}
          label="2BC Front View"
          className="w-full border aspect-15/6"
        />

        <div className="flex flex-col md:flex-row gap-5 sm:gap-10 xl:gap-16">
          <GalleryCarousel
            images={[office_room]}
            label="2BC Office Room"
            className="w-full md:w-1/2 aspect-[4/3]"
          />
          <GalleryCarousel
            images={[kids_room_2bc]}
            label="2BC Kids Room"
            className="w-full md:w-1/2 aspect-[4/3]"
          />
        </div>

        <div className="relative">
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
            images={[living_room_2bc]}
            label="2BC Living Room"
            className="w-full aspect-3/2"
          />
        </div>

        <div className="flex flex-col md:flex-row items-stretch md:gap-4">
          <GalleryCarousel
            images={[master_bedroom_3bc, kids_room_3bc]}
            label="2BC Master Bedroom"
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
            images={[master_bedroom_3bc]}
            label="3BC Master Bedroom"
            className="w-full md:w-1/2 aspect-[4/3]"
          />
          <GalleryCarousel
            images={[kids_room_3bc]}
            label="3BC Kids Room"
            className="w-full md:w-1/2 aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
