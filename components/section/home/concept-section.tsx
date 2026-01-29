import Image from "next/image";
import illustration_2 from "@/app/assets/home/illustration_2.png";
import concept_1 from "@/app/assets/home/concept_1.png";
import concept_2 from "@/app/assets/home/concept_2.png";

const ConceptSection = () => {
  return (
    <section
      id="concept-section"
      className="relative bg-[#2B3036] min-h-screen"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={illustration_2}
          alt=""
          className="absolute top-7 -left-62 sm:-left-40 lg:-left-28 rotate-19"
        />
        <Image
          src={illustration_2}
          alt=""
          className="absolute top-96 sm:top-72 -right-40 sm:-right-20 lg:top-20 lg:-right-12"
        />
        <Image
          src={illustration_2}
          alt=""
          className="absolute bottom-12 left-96"
        />
      </div>
      <div className="relative z-10 p-32 px-5 sm:px-10 xl:p-40 gap-16 flex flex-col justify-between items-start">
        <h3 className="font-bold tracking-widest text-2xl sm:text-3xl text-[#F3F0E8]">
          THE CONCEPT
        </h3>
        <div className="flex flex-col lg:flex-row justify-between w-full items-start lg:items-center gap-20 lg:gap-0 min-h-162.5 xl:h-162.5">
          <div className="flex flex-col gap-2 sm:gap-4">
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-extralight text-[#F3F0E8] tracking-widest">
              THE BIRTH OF
            </h2>
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-normal text-[#F3F0E8] tracking-widest sm:ml-20 mb-6 sm:mb-10">
              THE UNIVERSE
            </h2>

            <p className="text-[#F3F0E8] font-normal text-xl sm:w-122 mb-14 lg:mb-20">
              Elora and Eluna, inspired by the sun and moon, offer a harmonious
              blend of vibrance and tranqulity in South Jakarta's premier
              lifestyle hub.
            </p>

            <button className="flex justify-center items-center cursor-pointer font-medium capitalize text-xl pt-px w-70.5 h-11.25 text-[#9D7958] bg-[#F3F0E8] border border-[#9D7958] hover:bg-[#9D7958]/90 hover:text-[#F3F0E8] transition-all duration-200 ease-in-out">
              UNCOVER OUR CONCEPT
            </button>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col sm:flex-row justify-end items-center gap-10 sm:gap-2 xl:gap-5 h-full xl:py-10">
            <div className="w-full sm:h-3/5 xl:h-[70%] sm:mb-[20%] xl:mb-auto">
              <Image
                src={concept_1}
                alt=""
                width={1000}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full sm:h-3/5 xl:h-[70%] sm:mt-[20%] xl:mt-auto">
              <Image
                src={concept_2}
                alt=""
                width={1000}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
