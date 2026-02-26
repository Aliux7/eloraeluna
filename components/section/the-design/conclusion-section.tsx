import Image from "next/image";
import conclusion from "@/app/assets/the-design/conclusion.jpg";
import { FadeSlide } from "@/components/animation/fade-slide";
import illustration_2 from "@/app/assets/home/illustration_2.png";

const ConclusionSection = () => {
  return (
    <div className="relative bg-[#F3F0E8] flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 h-screen max-h-200 sm:max-h-none">
        <Image src={conclusion} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="sm:w-1/2 p-10 lg:p-16">
        <FadeSlide className="text-[#A4704F] text-base lg:text-xl tracking-widest 2xl:max-w-5xl 2xl:text-3xl">
          Eluna's design is a harmonious fusion of serenity and
          sophistication—drawing inspiration from the moon's quiet elegance
          while embracing the expressive energy of modern living. Every
          architectural line and interior detail is crafted to evoke a sense of
          calm confidence, offering a refined sanctuary above the city.
        </FadeSlide>
        <br />
        <FadeSlide className="text-[#A4704F] text-base lg:text-xl tracking-widest 2xl:max-w-5xl 2xl:text-3xl">
          With its soft curves, ambient lighting, and curated materials, Eluna
          reimagines premium apartment living through a lens of intuitive
          luxury—perfect for those who seek a life of quiet splendor and
          inspired stillness.
        </FadeSlide>
      </div>

      <FadeSlide className="absolute -bottom-20 sm:bottom-10 -right-20 sm:right-10 w-60 lg:w-72 xl:w-80 2xl:w-110 h-auto">
        <Image src={illustration_2} alt=""  className="w-full h-full"/>
      </FadeSlide>
    </div>
  );
};

export default ConclusionSection;
