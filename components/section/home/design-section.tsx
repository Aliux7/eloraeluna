import the_design from "@/app/assets/home/the_design.png";
import Image from "next/image";

const DesignSection = () => {
  return (
    <section id="design-section" className="relative bg-[#464948] min-h-screen">
      <div className="xl:absolute inset-0 z-10 pt-32 px-5 sm:px-10 py-16 xl:p-16 flex flex-col gap-60 xl:gap-0 justify-between items-start">
        <h3 className="font-bold tracking-widest text-2xl xl:text-3xl text-[#F3F0E8]">
          THE DESIGN
        </h3>
        <div className="flex flex-col xl:flex-row justify-between xl:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#F3F0E8] tracking-widest">
              <span className="font-extralight">A</span> LEGACY
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#F3F0E8] tracking-widest md:ml-20">
              <span className="font-thin">OF</span> URBAN
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#F3F0E8] tracking-widest md:ml-40">
              EXCELLENCE
            </h2>

            <p className="block xl:hidden lg:w-1/2 text-[#F3F0E8] font-normal text-lg sm:text-xl md:text-2xl text-balance mt-5 sm:mt-10">
              An iconic development on 12.9 gectares of prime land, Kota
              Kasablanka redefines what a modern city hub can be bold, vibrant,
              and unforgetable.
            </p>
            <button className="flex justify-center items-center cursor-pointer font-medium capitalize text-xl mt-20 pt-px w-64 h-11.25 text-[#9D7958] bg-[#F3F0E8] border border-[#9D7958] hover:bg-[#9D7958]/80 hover:text-[#F3F0E8] transition-all duration-200 ease-in-out">
              UNCOVER OUR DESIGN
            </button>
          </div>
          <p className="hidden xl:block w-1/2 text-[#F3F0E8] font-normal text-2xl text-balance">
            An iconic development on 12.9 gectares of prime land, Kota
            Kasablanka redefines what a modern city hub can be bold, vibrant,
            and unforgetable.
          </p>
        </div>
      </div>
      <Image
        src={the_design}
        alt=""
        className="absolute inset-0 z-0 xl:relative h-full xl:w-full object-cover"
      />
    </section>
  );
};

export default DesignSection;
