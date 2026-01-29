import Image from "next/image";
import eluna_white from "@/app/assets/home/eluna_white.png";
import eloraeluna from "@/app/assets/eloraeluna_logo.png";
import illustration_1 from "@/app/assets/home/illustration_cs_1.png"
import illustration_2 from "@/app/assets/home/illustration_cs_2.png"
const CommingSoon = () => {
  return (
    <section className="relative bg-[#F3F0E8] p-5 sm:p-10 xl:p-20 flex flex-col gap-10">
      <div className="relative bg-[#9D7958] w-full h-full p-5 md:p-10 xl:p-20 grid xl:grid-cols-2">
        <Image src={illustration_2} alt="" className="w-40 sm:w-60 md:w-80 lg:w-90 xl:w-140 absolute top-0 right-0"/>
        <Image src={illustration_1} alt="" className="w-30 sm:w-40 md:w-50 lg:w-70 xl:w-80 absolute bottom-0 left-0"/>
        <div className="flex flex-col w-full sm:w-40 md:w-60 lg:w-auto gap-40 md:gap-56">
          <Image src={eluna_white} alt="" className="object-cover w-30 sm:w-full lg:w-90" />
          <div className="text-end w-full sm:w-fit">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#F3F0E8] tracking-widest text-nowrap">
              <span className="font-extralight">SOMETHING</span> SPECIAL
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#F3F0E8] tracking-widest text-nowrap">
              <span className="font-thin">IS</span> COMING
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#F3F0E8] tracking-widest">
              FOR YOU
            </h2>
          </div>
        </div>
        <div className="xl:pt-130 flex flex-col pb-64 xl:pb-80 sm:ml-auto xl:ml-0">
          <div className="border-t w-full border-white my-5 md:my-10"></div>
          <h3 className="text-[#F3F0E8] text-4xl md:text-5xl lg:text-6xl font-semibold mb-3 md:mb-5 pr-20">
            0811 8999 6968
          </h3>
          <h3 className="text-[#F3F0E8] text-2xl md:text-3xl lg:text-4xl font-extralight md:mb-2">
            marketing@elora-eluna.com
          </h3>
          <h3 className="text-[#F3F0E8] text-2xl md:text-3xl lg:text-4xl font-extralight">
            elora-eluna.com
          </h3>
        </div>
        <Image src={eloraeluna} alt="" width={1000} height={1000} className="absolute bottom-5 sm:bottom-10 h-6.5 sm:h-8 lg:h-9 w-fit object-cover left-1/2 -translate-x-1/2"/>
      </div>
    </section>
  );
};

export default CommingSoon;
