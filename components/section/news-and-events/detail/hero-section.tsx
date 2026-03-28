import Image, { StaticImageData } from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";

type Article = {
  id: number;
  title: string;
  date: string;
  image: StaticImageData;
};

type Props = {
  article: Article;
};

const HeroSection = ({ article }: Props) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <section
      id="hero-section"
      className="relative sm:min-h-screen bg-[#F3F0E8]"
    >
      <div className="relative sm:absolute inset-0 z-0 pointer-events-none top-0 w-full pt-14 sm:pt-0 h-96 sm:h-screen overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-linear-to-t after:from-black/40 after:to-transparent after:pointer-events-none after:select-none">
        <Image
          src={article.image}
          alt=""
          width={2000}
          height={2000}
          className="w-full h-full object-cover object-top"
          priority
        />
      </div>
      <div className="relative z-10 px-5 sm:px-10 xl:px-48 w-full sm:min-h-screen sm:pb-10 lg:pb-16 flex flex-col justify-end items-center">
        <div className="py-8 sm:py-0 text-center">
          <WordsPullUp
            text={formatDate(article.date)}
            className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl text-[#9D7958] sm:text-[#FFFFFF] tracking-widest mb-2 lg:mb-4"
          />
          <WordsPullUp
            text={article.title}
            className="max-w-3xl text-balance text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-[#9D7958] sm:text-[#F3F0E8] tracking-widest"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
