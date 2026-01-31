import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";
import tower from "@/app/assets/the-design/tower_design.png";

const TowerSection = () => {
  return (
    <section
      id="design-section"
      className="relative bg-linear-to-b from-[#333333] to-[#575757]  min-h-screen px-5 sm:px-10 xl:px-48 py-32"
    >
      <div className="relative z-10 gap-16 flex flex-col lg:flex-row justify-between items-start">
        <WordsPullUp
          text="OUR TOWERS"
          className="font-bold tracking-widest text-lg sm:text-2xl xl:text-3xl text-[#F3F0E8]"
        />
        <div className="sm:w-1/2 lg:w-3/5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-20 lg:gap-0">
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
        <div className="relative w-[60vw] max-w-150 min-w-60">
          <div className="absolute left-[55%] top-[10%] w-[25%] text-center text-lg text-[#F3F0E8]">
            <WordsPullUp text="COMING" className="font-bold" />
            <WordsPullUp text="SOON" className="font-bold" />
          </div>
          <div className="absolute -left-[10%] top-[41%] w-[25%] border-t-2 border-[#9D7958]" />
          <div className="absolute -left-[45%] top-[39%] w-full">
            <WordsPullUp
              text="ELUNA SOCIAL DECK"
              className="text-[#F3F0E8] font-bold tracking-widest"
            />
            <WordsPullUp
              text="20TH FLOOR"
              className="text-[#9D7958] font-bold tracking-widest"
            />
            <FadeSlide>
              <div className="border-t border-[#F3F0E8] w-32 my-1" />
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
          <div className="absolute -left-[10%] top-[68%] w-[25%] border-t-2 border-[#9D7958]" />
          <div className="absolute -left-[45%] top-[66%] w-full">
            <WordsPullUp
              text="ELUNA PET PARK"
              className="text-[#F3F0E8] font-bold tracking-widest"
            />
            <WordsPullUp
              text="P12"
              className="text-[#9D7958] font-bold tracking-widest"
            />
            <FadeSlide>
              <div className="border-t border-[#F3F0E8] w-32 my-1" />
            </FadeSlide>
            <WordsPullUp
              text="Pet Park"
              className="text-[#F3F0E8] tracking-widest"
            />
          </div>
          <div className="absolute -left-[10%] bottom-[6%] w-[25%] border-t-2 border-[#9D7958]" />
          <div className="absolute -left-[45%] -bottom-[1%] w-full">
            <WordsPullUp
              text="ELUNA LOBBY"
              className="text-[#F3F0E8] font-bold tracking-widest"
            />
            <WordsPullUp
              text="GROUND FLOOR"
              className="text-[#9D7958] font-bold tracking-widest"
            />
            <FadeSlide>
              <div className="border-t border-[#F3F0E8] w-32 my-1" />
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
          <div className="absolute left-[44%] top-[26%] w-[75%] h-[40%] border-l-2 border-t-2 border-[#9D7958]" />
          <div className="absolute -right-[50%] top-[24%] w-fit text-end">
            <WordsPullUp
              text="FACILITY FLOOR"
              className="text-[#F3F0E8] font-bold tracking-widest"
            />
            <WordsPullUp
              text="1ST FLOOR"
              className="text-[#9D7958] font-bold tracking-widest"
            />
            <FadeSlide>
              <div className="border-t border-[#F3F0E8] w-32 my-1" />
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
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default TowerSection;
