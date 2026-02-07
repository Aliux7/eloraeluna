import master_plan from "@/app/assets/the-design/master_plan.png";
import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";

const MasterplanSection = () => {
  return (
    <section
      id="discover-section"
      className="relative bg-[#F3F0E8] min-h-screen px-5 sm:px-10 xl:px-48 py-8 lg:py-32 flex flex-col-reverse xl:flex-row justify-between gap-24"
    >
      <div className="">
        <div>
          <WordsPullUp
            text="SPANNING 12.9 HECTARES, THE KOTA"
            className="text-lg sm:text-xl lg:text-2xl font-medium text-[#9D7958] tracking-widest"
          />
          <WordsPullUp
            text="KASABLANKA COMPLEX IS AN EXPANSE"
            className="text-lg sm:text-xl lg:text-2xl font-medium text-[#9D7958] tracking-widest"
          />
          <WordsPullUp
            text="OF VISION AND VITALITY"
            className="text-lg sm:text-xl lg:text-2xl font-medium text-[#9D7958] tracking-widest"
          />
        </div>
        <FadeSlide
          direction="right"
          className="mt-8 text-[#464948] tracking-widest"
        >
          <ol className="space-y-0 sm:text-lg uppercase">
            <li className="flex gap-4">
              <span>1</span>
              <span>Office Tower 88</span>
            </li>

            <li className="flex gap-4">
              <span>2</span>
              <span>Prudential Centre</span>
            </li>

            <li className="flex gap-4">
              <span>3</span>
              <div className="">
                <div>Mall Kota Kasablanka</div>
                <div className="pl-0">
                  <div>A Existing</div>
                  <div>B Mall Kota Kasablanka Extension</div>
                </div>
              </div>
            </li>

            <li className="flex gap-4">
              <span>4</span>
              <div className="">
                <div>Casa Grande Residence 1</div>
                <div className="">Mirage - Avalon - Montreal - Montana</div>
              </div>
            </li>

            <li className="flex gap-4">
              <span>5</span>
              <div className="">
                <div>Casa Grande Residence 2</div>
                <div className="">Angelo - Bella - Chianti</div>
              </div>
            </li>

            <li className="flex gap-4">
              <span>6</span>
              <span>Pakuwon Tower</span>
            </li>

            <li className="flex gap-4">
              <span>7</span>
              <span>Eluna Tower</span>
            </li>

            <li className="flex gap-4">
              <span>8</span>
              <span>Elora Tower</span>
            </li>

            <li className="flex gap-4">
              <span>9</span>
              <span>W Hotels & Courtyard by Marriott</span>
            </li>
          </ol>
        </FadeSlide>
        <FadeSlide
          direction="right"
          className="mt-16 text-[#9D7958] sm:text-lg max-w-lg"
        >
          The master plan's meticulous design ensures seamless interaction
          between bustling retail corridors, tranquil green spaces, and premium
          residences, creating a self-contained haven of luxury. At the heart of
          Kota Kasablanka's visionary layout, Elora and Eluna rise as luxurious
          towers that complement this dynamic superblock—Elora connecting
          effortlessly to vibrant retail, hospitality, and dining, while Eluna
          offers a serene retreat, thoughtfully positioned for tranquility.
        </FadeSlide>
      </div>
      <div className="xl:w-1/2 flex flex-col justify-start xl:items-end">
        <WordsPullUp
          direction="left"
          text="MASTERPLAN"
          className="text-[#9D7958] font-medium text-3xl sm:text-5xl xl:text-6xl tracking-wider xl:mr-20"
        />
        <WordsPullUp
          direction="left"
          text="OVERVIEW"
          className="text-[#9D7958] font-light text-3xl sm:text-5xl xl:text-6xl tracking-wider ml-20 sm:ml-40 xl:ml-0"
        />
        <FadeSlide direction="left" className="relative aspect-square mt-8">
          <Image
            src={master_plan}
            alt=""
            className="w-full h-full object-cover"
          />
        </FadeSlide>
      </div>
    </section>
  );
};

export default MasterplanSection;
