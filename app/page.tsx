import hero_background from "@/app/assets/home/hero_background.png";
import eluna_logo from "@/app/assets/home/eluna_logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="hero-section" className="relative">
        <div className="relative w-full h-screen overflow-hidden">
          <Image
            src={hero_background}
            alt=""
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        {/* pb-25.5 */}
        <div className="w-full h-[calc(100vh-160px)] absolute top-0 mt-40 p-16 pb-16 flex flex-col justify-end items-start">
          <Image
            src={eluna_logo}
            alt=""
            width={206}
            height={38}
            className="absolute right-51.25 top-16"
            // top-24.25
          />
          <div className="">
            <h1 className="text-6xl font-light text-[#F3F0E8] tracking-widest ml-9.25">
              THE ECHOES
            </h1>
            <h1 className="text-6xl font-bold text-[#F3F0E8] tracking-widest ml-79">
              OF SPLENDOR
            </h1>
            <h5 className="text-[22px] font-normal text-[#F3F0E8] mt-16 mb-24 ml-9.25">
              Eluna Is Where Elegance Lingers In Every Detail <br />
              — A Quiet Statement Of Timeless Living For <br />
              Those Who Seek Undersstand Luxury.
            </h5>
            <button className="flex justify-center items-center cursor-pointer font-medium capitalize text-xl pt-px w-47.5 h-11.25 text-[#F3F0E8] border border-[#9D7958] hover:bg-[#F3F0E8]/90 hover:text-[#9D7958] transition-all duration-200 ease-in-out">
              EXPLORE NOW
            </button>
          </div>
        </div>
      </section>
      <section id="discover-section"></section>
    </main>
  );
}
