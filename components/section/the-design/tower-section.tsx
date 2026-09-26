import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";
import tower_diagram from "@/app/assets/the-design/tower_diagram.svg";
import tower_diagram_mobile from "@/app/assets/the-design/tower_diagram_mobile.svg";
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
          className="font-medium tracking-widest text-lg sm:text-2xl xl:text-3xl 2xl:text-[32px] text-[#F3F0E8]"
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

            <FadeSlide className="text-[#F3F0E8] font-normal 2xl:font-light text-lg sm:text-xl mb-14 lg:mb-16">
              Two towers, two visions—crafted in <br /> harmony, designed to
              elevate.
            </FadeSlide>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center">
        <FadeSlide className="hidden lg:block w-full">
          <Image
            src={tower_diagram}
            alt=""
            className="w-full h-auto object-contain"
            priority
          />
        </FadeSlide>
        <div className="lg:hidden w-full flex flex-col gap-5">
          <FadeSlide className="w-[90%] mx-auto mb-8">
            <Image
              src={tower_diagram_mobile}
              alt=""
              className="w-full h-auto object-contain"
              priority
            />
          </FadeSlide>

          <div className="flex justify-start items-start gap-4 border-t-2 border-[#9D7958] pt-5 w-full">
            <WordsPullUp
              text="1"
              className="bg-[#9D7958] text-[#F3F0E8] w-fit pt-0.5 size-6 rounded-full text-xs scale-100 flex justify-center items-center"
            />
            <div className="flex flex-col justify-start items-start gap-1">
              <WordsPullUp
                text="ELUNA SOCIAL DECK"
                className="text-[#F3F0E8] font-bold tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="20TH FLOOR"
                className="text-[#9D7958] font-bold tracking-[0.1rem] text-sm"
              />
              <FadeSlide>
                <div className="border-t border-[#F3F0E8] w-36 my-1" />
              </FadeSlide>
              <WordsPullUp
                text="Zen Garden"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="Playing Area"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
            </div>
          </div>

          <div className="flex justify-start items-start gap-4 border-t-2 border-[#9D7958] pt-5 w-full">
            <WordsPullUp
              text="2"
              className="bg-[#9D7958] text-[#F3F0E8] w-fit pt-0.5 size-6 rounded-full text-xs scale-100 flex justify-center items-center"
            />
            <div className="flex flex-col justify-start items-start gap-1">
              <WordsPullUp
                text="ELUNA PET PARK"
                className="text-[#F3F0E8] font-bold tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="P7A"
                className="text-[#9D7958] font-bold tracking-[0.1rem] text-sm"
              />
              <FadeSlide>
                <div className="border-t border-[#F3F0E8] w-36 my-1" />
              </FadeSlide>
              <WordsPullUp
                text="Pet Park"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
            </div>
          </div>

          <div className="flex justify-start items-start gap-4 border-t-2 border-[#9D7958] pt-5 w-full">
            <WordsPullUp
              text="3"
              className="bg-[#9D7958] text-[#F3F0E8] w-fit pt-0.5 size-6 rounded-full text-xs scale-100 flex justify-center items-center"
            />
            <div className="flex flex-col justify-start items-start gap-1">
              <WordsPullUp
                text="ELUNA LOBBY"
                className="text-[#F3F0E8] font-bold tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="GROUND FLOOR"
                className="text-[#9D7958] font-bold tracking-[0.1rem] text-sm"
              />
              <FadeSlide>
                <div className="border-t border-[#F3F0E8] w-36 my-1" />
              </FadeSlide>
              <WordsPullUp
                text="Drop Off"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="Main Lobby"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
            </div>
          </div>

          <div className="flex justify-start items-start gap-4 border-t-2 border-[#9D7958] pt-5 w-full">
            <WordsPullUp
              text="4"
              className="bg-[#9D7958] text-[#F3F0E8] w-fit pt-0.5 size-6 rounded-full text-xs scale-100 flex justify-center items-center"
            />
            <div className="flex flex-col justify-start items-start gap-1">
              <WordsPullUp
                text="CONDOMINUM PARKING"
                className="text-[#F3F0E8] font-bold tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="P1-P6"
                className="text-[#9D7958] font-bold tracking-[0.1rem] text-sm"
              />
              <FadeSlide>
                <div className="border-t border-[#F3F0E8] w-36 my-1" />
              </FadeSlide>
            </div>
          </div>

          <div className="flex justify-start items-start gap-4 border-t-2 border-[#9D7958] pt-5 w-full">
            <WordsPullUp
              text="5"
              className="bg-[#9D7958] text-[#F3F0E8] w-fit pt-0.5 size-6 rounded-full text-xs scale-100 flex justify-center items-center"
            />
            <div className="flex flex-col justify-start items-start gap-1">
              <WordsPullUp
                text="FACILITY FLOOR INDOOR"
                className="text-[#F3F0E8] font-bold tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="1ST FLOOR"
                className="text-[#9D7958] font-bold tracking-[0.1rem] text-sm"
              />
              <FadeSlide>
                <div className="border-t border-[#F3F0E8] w-36 my-1" />
              </FadeSlide>
              <WordsPullUp
                text="Function Room (Eluna)"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="Pre Function (Eluna)"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="Gym"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="Gym Class"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="Family Lounge"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="Kids Room"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />

              <WordsPullUp
                text="FACILITY FLOOR OUTDOOR"
                className="text-[#F3F0E8] font-bold tracking-[0.1rem] text-sm mt-5"
              />
              <WordsPullUp
                text="1ST FLOOR"
                className="text-[#9D7958] font-bold tracking-[0.1rem] text-sm"
              />
              <FadeSlide>
                <div className="border-t border-[#F3F0E8] w-36 my-1" />
              </FadeSlide>
              <WordsPullUp
                text="Outdoor Lounge"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="Lap Pool"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="Sunken Pool"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="Cabana Deck"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="Sunken Lounge"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="Lagoon Pool"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="Kids Pool"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="Children Play Ground"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="BBQ Area"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="Tennis Court"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="Jogging Track"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
              <WordsPullUp
                text="Gazebo"
                className="text-[#F3F0E8] tracking-[0.1rem] text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TowerSection;
