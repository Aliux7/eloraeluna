import { GalleryCarousel } from "@/components/ui/gallery-carousel";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";
import master_bedroom from "@/app/assets/gallery/PICT 1.png";

const HeroSection = () => {
  return (
    <section
      id="gallery-hero"
      className="relative bg-[#464948] flex flex-col md:flex-row items-stretch z-10 px-5 sm:px-10 xl:px-48"
    >

      <div className="w-full md:w-2/5 lg:w-1/3 flex flex-col gap-5 sm:gap-10 xl:gap-16 z-10">
        <div className="flex flex-col gap-1 sm:gap-2">
          <WordsPullUp
            text="SHOW UNIT"
            className="text-lg sm:text-xl xl:text-[28px] xl:leading-[30px] leading-tight font-normal tracking-[0.2em] uppercase text-[#F3F0E8]"
          />
          <WordsPullUp
            text="GALLERY"
            className="text-5xl sm:text-5xl xl:text-[60px] xl:leading-[70px] leading-tight font-medium tracking-widest text-[#F3F0E8]"
          />
        </div>
        <FadeSlide className="px-5 py-6 sm:px-6 sm:py-8 xl:px-7 xl:py-10 xl:w-full xl:h-full text-[#F3F0E8] bg-[#9D7958] font-normal 2xl:font-light text-sm sm:text-base 2xl:text-lg leading-relaxed text-balance">
          {
            "Guided by a timeless design approach, the showcase highlights considered spatial planning, refined material selections, and understated detailing that define the living experience at Elora & Eluna. Rather than simply presenting a residence, it provides an opportunity to appreciate the quality, atmosphere, and design philosophy that shape a contemporary home within one of Jakarta’s most established integrated developments."
          }
        </FadeSlide>
      </div>

      <GalleryCarousel
        images={[master_bedroom, master_bedroom]}
        label="2BC Master Bedroom"
        className="w-full md:flex-1 aspect-4/3 md:aspect-auto md:-ml-6"
        priority
      />
    </section>
  );
};

export default HeroSection;
