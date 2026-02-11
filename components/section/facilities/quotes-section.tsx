import qoutes_background from "@/app/assets/facilities/quotes_background.png";
import qoutes_sign from "@/app/assets/facilities/quote_sign.svg";
import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";

const QuotesSection = () => {
  return (
    <section className="relative flex justify-center items-center">
      <Image
        src={qoutes_background}
        alt=""
        className="w-full h-340 object-cover"
      />
      <div className="absolute flex flex-col justify-center items-start gap-3">
        <FadeSlide>
          <Image
            src={qoutes_sign}
            alt=""
            className="w-9 h-fit absolute top-4 -left-7"
          />
        </FadeSlide>
        <WordsPullUp
          text="WE DO NOT"
          className="px-5 text-4xl sm:text-6xl lg:text-7xl 3xl:text-8xl tracking-widest font-light text-white"
        />
        <WordsPullUp
          text="REMEMBER"
          className="px-5 text-4xl sm:text-6xl lg:text-7xl 3xl:text-8xl tracking-widest font-light text-white ml-14"
        />
        <WordsPullUp
          text="DAYS,"
          className="px-5 text-4xl sm:text-6xl lg:text-7xl 3xl:text-8xl tracking-widest font-light text-white ml-14"
        />
        <WordsPullUp
          text="WE REMEMBER"
          className="px-5 text-4xl sm:text-6xl lg:text-7xl 3xl:text-8xl tracking-widest font-light text-white"
        />
        <WordsPullUp
          text="MOMENTS."
          className="px-5 text-4xl sm:text-6xl lg:text-7xl 3xl:text-8xl tracking-widest font-medium text-white ml-14"
        />
        <WordsPullUp
          text=" CESARE PAVESE"
          className="flex justify-end items-center border-t border-[#9D7958] w-full p-4 text-white tracking-widest text-xl 3xl:text-2xl font-bold"
        />
      </div>
    </section>
  );
};

export default QuotesSection;
