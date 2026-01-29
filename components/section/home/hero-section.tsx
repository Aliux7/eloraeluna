import hero_background from "@/app/assets/home/hero_background.png";
import eluna_logo from "@/app/assets/home/eluna_logo.png";
import Image from "next/image";
import arrow from "@/app/assets/home/arrow.png";

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative min-h-screen bg-[#464948]">
      <div className="relative sm:absolute inset-0 z-0 pointer-events-none top-0 w-full pt-18 sm:pt-0 h-150 sm:h-screen overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-black/0">
        <Image
          src={hero_background}
          alt=""
          width={2000}
          height={2000}
          className="w-full h-full object-cover object-top"
          priority
        />
        <Image
          src={arrow}
          alt=""
          className="block sm:hidden xl:block absolute top-1/2 -translate-y-1/2 left-5 sm:left-10 xl:left-16 cursor-pointer scale-70 sm:scale-100"
        />
        <Image
          src={arrow}
          alt=""
          className="block sm:hidden xl:block absolute top-1/2 -translate-y-1/2 right-5 sm:right-10 xl:right-16 rotate-180 cursor-pointer scale-70 sm:scale-100"
        />
      </div>
      <div className="relative z-10 px-5 sm:px-10 xl:px-48 w-full sm:min-h-screen pb-10 lg:pb-16 flex flex-col justify-end items-start">
        <div className="hidden sm:block h-7 absolute right-5 sm:right-10 md:right-16 xl:right-40 top-32 lg:top-36 ">
          <Image
            src={eluna_logo}
            alt=""
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="py-8 sm:py-0">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#F3F0E8] tracking-widest mb-2 lg:mb-4">
            THE ECHOES
          </h1>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium sm:font-bold text-[#F3F0E8] tracking-widest ml-20 lg:ml-[10vw] xl:ml-64 mb-6 md:mb-10 xl:mb-14">
            OF SPLENDOR
          </h1>
          <h5 className="text-lg sm:text-xl font-normal text-[#F3F0E8] mb-16">
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
