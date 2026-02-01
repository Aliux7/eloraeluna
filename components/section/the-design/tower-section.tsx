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
      className="relative bg-linear-to-b from-[#333333] to-[#575757]  min-h-screen px-5 sm:px-10 xl:px-48 py-32"
    >
      <FadeSlide className="absolute top-10 sm:top-40 lg:top-64 -right-10 lg:left-10 xl:left-16 scale-x-[-1] w-60 lg:w-72 xl:w-96">
        <Image src={illustration_2} alt="" />
      </FadeSlide>
      <FadeSlide className="absolute bottom-0 -right-30 xl:-right-64 scale-y-[-1] scale-x-[-1] w-72 xl:w-96">
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
        <div className="relative sm:w-[60vw] max-w-150 min-w-60 space-y-10 sm:space-y-0">
          <div className="text-xs lg:text-lg absolute left-[51.5%] sm:left-[55%] top-[70%] sm:top-[10%] w-[25%] text-center text-[#F3F0E8]">
            <WordsPullUp text="COMING" className="lg:font-bold" />
            <WordsPullUp text="SOON" className="lg:font-bold" />
          </div>
          <div className="absolute left-0 xl:-left-[10%] top-[77%] sm:top-[41%] w-[20%] xl:w-[25%] border-t-2 border-[#9D7958]">
            <div className="block sm:hidden bg-[#9D7958] text-[#F3F0E8] w-fit p-1 px-2.5 rounded-full text-xs absolute -top-8">
              1
            </div>
          </div>
          <div className="sm:text-xs lg:text-base relative sm:absolute sm:-left-[30%] xl:-left-[45%] sm:top-[39%] w-full">
            <WordsPullUp
              text="ELUNA SOCIAL DECK"
              className="text-[#F3F0E8] font-bold tracking-widest"
            />
            <WordsPullUp
              text="20TH FLOOR"
              className="text-[#9D7958] font-bold tracking-widest"
            />
            <FadeSlide>
              <div className="border-t border-[#F3F0E8] w-20 lg:w-32 my-1" />
            </FadeSlide>
            <WordsPullUp
              text="Zen Garden"
              className="text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="Playing Area"
              className="text-[#F3F0E8] tracking-widest"
            />
          </div>
          <div className="absolute left-0 xl:-left-[10%] top-[87.5%] sm:top-[68%] w-[20%] xl:w-[25%] border-t-2 border-[#9D7958]">
            <div className="block sm:hidden bg-[#9D7958] text-[#F3F0E8] w-fit p-1 px-2.5 rounded-full text-xs absolute -top-8">
              2
            </div>
          </div>
          <div className="sm:text-xs lg:text-base relative sm:absolute sm:-left-[30%] xl:-left-[45%] sm:top-[66%] w-full">
            <WordsPullUp
              text="ELUNA PET PARK"
              className="text-[#F3F0E8] font-bold tracking-widest"
            />
            <WordsPullUp
              text="P12"
              className="text-[#9D7958] font-bold tracking-widest"
            />
            <FadeSlide>
              <div className="border-t border-[#F3F0E8] w-20 lg:w-32 my-1" />
            </FadeSlide>
            <WordsPullUp
              text="Pet Park"
              className="text-[#F3F0E8] tracking-widest"
            />
          </div>
          <div className="absolute left-0 xl:-left-[10%] bottom-[1%] sm:bottom-[6%] w-[20%] xl:w-[25%] border-t-2 border-[#9D7958]">
            <div className="block sm:hidden bg-[#9D7958] text-[#F3F0E8] w-fit p-1 px-2.5 rounded-full text-xs absolute -top-8">
              3
            </div>
          </div>
          <div className="sm:text-xs lg:text-base relative sm:absolute sm:-left-[30%] xl:-left-[45%] sm:-bottom-[1%] w-full">
            <WordsPullUp
              text="ELUNA LOBBY"
              className="text-[#F3F0E8] font-bold tracking-widest"
            />
            <WordsPullUp
              text="GROUND FLOOR"
              className="text-[#9D7958] font-bold tracking-widest"
            />
            <FadeSlide>
              <div className="border-t border-[#F3F0E8] w-20 lg:w-32 my-1" />
            </FadeSlide>
            <WordsPullUp
              text="Drop Off"
              className="text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="Main Lobby"
              className="text-[#F3F0E8] tracking-widest"
            />
          </div>
          <div className="absolute left-[44%] top-[68%] sm:top-[26%] w-[50%] xl:w-[75%] h-[20%] sm:h-[40%] border-l-2 border-t-2 border-[#9D7958]">
            <div className="block sm:hidden bg-[#9D7958] text-[#F3F0E8] w-fit p-1 px-2.5 rounded-full text-xs absolute -top-8 right-0">
              4
            </div>
          </div>
          <div className="sm:text-xs lg:text-base relative sm:absolute sm:-right-[30%] xl:-right-[50%] sm:top-[24%] w-fit sm:text-end flex flex-col sm:items-end">
            <WordsPullUp
              text="FACILITY FLOOR"
              className="text-[#F3F0E8] font-bold tracking-widest"
            />
            <WordsPullUp
              text="1ST FLOOR"
              className="text-[#9D7958] font-bold tracking-widest"
            />
            <FadeSlide>
              <div className="border-t border-[#F3F0E8] w-20 lg:w-32 my-1" />
            </FadeSlide>
            <WordsPullUp
              text="Function Room (Eluna)"
              className="text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="Pre Function (Eluna)"
              className="text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="Gym"
              className="text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="Gym Class"
              className="text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="Family Lounge"
              className="text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="Kids Room"
              className="text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="Outdoor Lounge"
              className="text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="Lap Pool"
              className="text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="Sunken PooI"
              className="text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="Cabana Deck"
              className="text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="Sunken Lounge"
              className="text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="Lagoon Pool"
              className="text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="Kids Pool"
              className="text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="Children Play Ground"
              className="text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="BBQ Area"
              className="text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="Tennis Court"
              className="text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="Jogging Track"
              className="text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="Gazebo"
              className="text-[#F3F0E8] tracking-widest"
            />
          </div>
          <Image
            src={tower}
            alt=""
            className="w-[80%] mx-auto sm:w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default TowerSection;
