import hero_background from "@/app/assets/home/hero_background.png";
import eluna_logo from "@/app/assets/home/eluna_logo.png";
import Image from "next/image";
import arrow from "@/app/assets/home/arrow.png";

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative min-h-screen">
      <div className="absolute inset-0 z-0 pointer-events-none top-0 w-full h-screen overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-black/0">
        <Image
          src={hero_background}
          alt=""
          width={2000}
          height={2000}
          className="w-full h-full object-cover object-top"
          priority
        />
      </div>
      <div className="relative z-10 px-5 sm:px-10 xl:px-48 w-full min-h-screen pb-10 lg:pb-16 flex flex-col justify-end items-start">
        <div className="h-7 absolute right-5 sm:right-10 md:right-16 xl:right-40 top-32 lg:top-36 ">
          <Image
            src={eluna_logo}
            alt=""
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <Image
          src={arrow}
          alt=""
          className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-10 xl:left-16 cursor-pointer"
        />
        <Image
          src={arrow}
          alt=""
          className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-10 xl:right-16 rotate-180 cursor-pointer"
        />
        <div className="">
          <h1 className="text-4xl sm:text-5xl font-light text-[#F3F0E8] tracking-widest mb-2 lg:mb-4">
            THE ECHOES
          </h1>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F3F0E8] tracking-widest lg:ml-[10vw] xl:ml-72 mb-6 md:mb-10 xl:mb-14">
            OF SPLENDOR
          </h1>
          <h5 className="text-lg sm:text-xl font-normal text-[#F3F0E8] mb-14 lg:mb-16">
            Eluna Is Where Elegance Lingers In Every Detail <br />
            — A Quiet Statement Of Timeless Living For <br />
            Those Who Seek Undersstand Luxury.
          </h5>
          <button className="flex justify-center items-center cursor-pointer font-medium capitalize text-lg lg:text-xl pt-px w-47.5 h-11.25 text-[#F3F0E8] border border-[#9D7958] hover:bg-[#F3F0E8]/90 hover:text-[#9D7958] transition-all duration-200 ease-in-out">
            EXPLORE NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
