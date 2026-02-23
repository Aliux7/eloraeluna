import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";
import tower from "@/app/assets/the-design/tower_design.png";
import illustration_2 from "@/app/assets/home/illustration_2.png";
import illustration_bottom from "@/app/assets/home/illustration_bottom.png";

const TowerSection = () => {
  return (
    <section
      id="design-section"
      className="relative bg-linear-to-b from-[#333333] to-[#464948]  min-h-screen px-5 sm:px-10 xl:px-48 py-32"
    >
      <FadeSlide className="absolute top-10 sm:top-40 lg:top-64 -right-10 lg:left-10 xl:left-16 scale-x-[-1] w-60 lg:w-72 xl:w-96 2xl:w-130">
        <Image src={illustration_2} alt="" />
      </FadeSlide>
      <FadeSlide className="absolute bottom-0 -right-30 xl:right-0 xl:translate-x-1/3 scale-y-[-1] scale-x-[-1] w-72 xl:w-96 2xl:w-130">
        <Image src={illustration_bottom} alt="" />
      </FadeSlide>
      <div className="relative z-10 gap-16 flex flex-col lg:flex-row justify-between items-start">
        <WordsPullUp
          text="OUR TOWERS"
          className="font-bold tracking-widest text-lg sm:text-2xl xl:text-3xl text-[#F3F0E8]"
        />
        <div className="lg:w-3/5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-20 lg:gap-0">
          <div className="flex flex-col gap-2 sm:gap-4">
            <WordsPullUp
              text="SCULPTED"
              className="text-3xl sm:text-5xl lg:text-6xl font-extralight text-[#F3F0E8] tracking-widest"
            />

            <WordsPullUp
              text="FOR THE SOUL"
              className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#F3F0E8] tracking-widest ml-16 sm:ml-20 mb-6 sm:mb-10"
            />

            <FadeSlide className="text-[#F3F0E8] font-normal text-lg sm:text-xl mb-14 lg:mb-16">
              Two towers, two visions—crafted in <br /> harmony, designed to
              elevate.
            </FadeSlide>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="relative sm:w-[60vw] max-w-150 2xl:max-w-200 min-w-60 space-y-5 sm:space-y-0">
          <div className="relative sm:static">
            <Image
              src={tower}
              alt=""
              className="w-[80%] mx-auto sm:w-full h-auto object-contain"
              priority
            />

            {/* Line */}
            <div className="absolute left-5 sm:left-0 xl:-left-[10%] top-[40%] sm:top-[41%] w-[15%] sm:w-[20%] xl:w-[25%] border-t-3 sm:border-t-2 border-[#9D7958]">
              <div className="block sm:hidden bg-[#9D7958] text-[#F3F0E8] w-fit p-1 px-2.5 rounded-full text-xs absolute -top-3.5">
                1
              </div>
            </div>
            {/* Line */}
            <div className="absolute left-5 sm:left-0 xl:-left-[10%] top-[67.5%] sm:top-[68%] w-[15%] sm:w-[20%] xl:w-[25%] border-t-3 sm:border-t-2 border-[#9D7958]">
              <div className="block sm:hidden bg-[#9D7958] text-[#F3F0E8] w-fit p-1 px-2.5 rounded-full text-xs absolute -top-3.5">
                2
              </div>
            </div>
            {/* Line */}
            <div className="absolute left-0 xl:-left-[10%] top-[95%] sm:bottom-[6%] w-[15%] sm:w-[20%] xl:w-[25%] border-t-3 sm:border-t-2 border-[#9D7958]">
              <div className="block sm:hidden bg-[#9D7958] text-[#F3F0E8] w-fit p-1 px-2.5 rounded-full text-xs absolute -top-3.5">
                3
              </div>
            </div>
            {/* Line */}
            <div className="absolute left-[44%] top-[60%] sm:top-[26%] sm:w-[50%] xl:w-[75%] h-[7%] sm:h-[40%] border-l-3 sm:border-l-2 border-t-2 border-[#9D7958]">
              <div className="block sm:hidden bg-[#9D7958] text-[#F3F0E8] w-fit p-1 px-2.5 rounded-full text-xs absolute -top-3.5 -right-3 sm:right-0">
                4
              </div>
            </div>
          </div>
 
          <div className="text-xs lg:text-lg absolute left-[51.5%] sm:left-[55%] top-[5%] sm:top-[10%] w-[25%] text-center text-[#F3F0E8]">
            <WordsPullUp text="COMING" className="lg:font-bold" />
            <WordsPullUp text="SOON" className="lg:font-bold" />
          </div>
          {/* Content */}
          <div className="flex justify-start items-start gap-4 border-t-2 border-[#9D7958] pt-5 sm:p-0 sm:border-0 sm:text-xs lg:text-base relative sm:absolute sm:-left-[30%] xl:-left-[45%] sm:top-[39%] w-full">
            <WordsPullUp
              text="1"
              className="bg-[#9D7958] text-[#F3F0E8] w-fit pt-0.5 size-6 rounded-full text-xs scale-100 flex sm:hidden justify-center items-center"
            />
            <div className="flex flex-col justify-start items-start gap-1">
              <WordsPullUp
                text="ELUNA SOCIAL DECK"
                className="text-[#F3F0E8] font-bold tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="20TH FLOOR"
                className="text-[#9D7958] font-bold tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <FadeSlide>
                <div className="border-t border-[#F3F0E8] w-36 sm:w-20 lg:w-32 my-1" />
              </FadeSlide>
              <WordsPullUp
                text="Zen Garden"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="Playing Area"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
            </div>
          </div>
          {/* Content */}
          <div className="flex justify-start items-start gap-4 border-t-2 border-[#9D7958] pt-5 sm:p-0 sm:border-0 sm:text-xs lg:text-base relative sm:absolute sm:-left-[30%] xl:-left-[45%] sm:top-[66%] w-full">
            <WordsPullUp
              text="2"
              className="bg-[#9D7958] text-[#F3F0E8] w-fit pt-0.5 size-6 rounded-full text-xs scale-100 flex sm:hidden justify-center items-center"
            />
            <div className="flex flex-col justify-start items-start gap-1">
              <WordsPullUp
                text="ELUNA PET PARK"
                className="text-[#F3F0E8] font-bold tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="P12"
                className="text-[#9D7958] font-bold tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <FadeSlide>
                <div className="border-t border-[#F3F0E8] w-36 sm:w-20 lg:w-32 my-1" />
              </FadeSlide>
              <WordsPullUp
                text="Pet Park"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
            </div>
          </div>
          {/* Content */}
          <div className="flex justify-start items-start gap-4 border-t-2 border-[#9D7958] pt-5 sm:p-0 sm:border-0 sm:text-xs lg:text-base relative sm:absolute sm:-left-[30%] xl:-left-[45%] sm:-bottom-[1%] w-full">
            <WordsPullUp
              text="3"
              className="bg-[#9D7958] text-[#F3F0E8] w-fit pt-0.5 size-6 rounded-full text-xs scale-100 flex sm:hidden justify-center items-center"
            />
            <div className="flex flex-col justify-start items-start gap-1">
              <WordsPullUp
                text="ELUNA LOBBY"
                className="text-[#F3F0E8] font-bold tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="GROUND FLOOR"
                className="text-[#9D7958] font-bold tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <FadeSlide>
                <div className="border-t border-[#F3F0E8] w-36 sm:w-20 lg:w-32 my-1" />
              </FadeSlide>
              <WordsPullUp
                text="Drop Off"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="Main Lobby"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
            </div>
          </div>
          {/* Content */}
          <div className="flex justify-start items-start gap-4 border-t-2 border-[#9D7958] pt-5 sm:p-0 sm:border-0 w-full sm:w-fit sm:text-xs lg:text-base relative sm:absolute sm:-right-[30%] xl:-right-[50%] sm:top-[24%] sm:text-end sm:flex sm:flex-col sm:items-end">
            <WordsPullUp
              text="4"
              className="bg-[#9D7958] text-[#F3F0E8] w-fit pt-0.5 size-6 rounded-full text-xs scale-100 flex sm:hidden justify-center items-center"
            />
            <div className="flex flex-col justify-start sm:items-end gap-1">
              <WordsPullUp
                text="FACILITY FLOOR"
                className="text-[#F3F0E8] font-bold tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="1ST FLOOR"
                className="text-[#9D7958] font-bold tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <FadeSlide>
                <div className="border-t border-[#F3F0E8] w-36 sm:w-20 lg:w-32 my-1" />
              </FadeSlide>
              <WordsPullUp
                text="Function Room (Eluna)"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="Pre Function (Eluna)"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="Gym"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="Gym Class"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="Family Lounge"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="Kids Room"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="Outdoor Lounge"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="Lap Pool"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="Sunken PooI"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="Cabana Deck"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="Sunken Lounge"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="Lagoon Pool"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="Kids Pool"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="Children Play Ground"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="BBQ Area"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="Tennis Court"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="Jogging Track"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
              <WordsPullUp
                text="Gazebo"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm sm:text-base 2xl:text-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TowerSection;
