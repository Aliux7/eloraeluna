import pakuwon_logo from "@/app/assets/pakuwon_logo.svg";
import kota from "@/app/assets/kota.svg";
import Image from "next/image";
import facebook from "@/app/assets/home/facebook.png";
import instagram from "@/app/assets/home/instagram.png";
import twitter from "@/app/assets/home/twitter.png";
import linkedin from "@/app/assets/home/linkedin.png";
import and from "@/app/assets/and.svg";
import elora from "@/app/assets/elora.svg";
import eluna from "@/app/assets/eluna.svg";
import { FadeSlide } from "../animation/fade-slide";
import { WordsPullUp } from "../animation/word-pull-up";
import { LinkPullUp } from "../animation/link-pull-up";

const Footer = () => {
  return (
    <footer className="bg-[#9D7958] text-white">
      <div className="px-5 sm:px-10 xl:px-48 py-20">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end md:gap-16">
          <div className="space-y-5">
            <div className="w-fit">
              <FadeSlide
                direction="up"
                className="relative sm:w-fit h-full flex justify-start sm:justify-center items-center gap-5"
              >
                <Image
                  src={elora}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-fit sm:w-full h-6"
                />
                <Image
                  src={and}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-fit sm:w-full h-8"
                />
                <Image
                  src={eluna}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-fit sm:w-full h-6"
                />
              </FadeSlide> 

              <FadeSlide
                direction="up"
                className="flex justify-start items-start gap-3 h-3 w-full mt-3 mb-8"
              >
                <Image src={kota} alt="" className="object-contain w-full h-full" />
              </FadeSlide>

              <FadeSlide
                direction="up"
                className="flex justify-start items-start gap-3 h-9 w-fit mb-8"
              >
                <Image src={pakuwon_logo} alt="" className="object-contain w-full h-full" />
              </FadeSlide>

              <WordsPullUp
                text="PT Elite Prima Hutama"
                className="uppercase tracking-wider text-lg font-bold"
              />
            </div>
            <div className="flex flex-col md:flex-row md:justify-start md:items-end gap-4">
              <div className="space-y-3 text-sm leading-relaxed max-w-sm ">
                <WordsPullUp
                  text="Head Marketing Office"
                  className="font-medium text-lg"
                />
                <FadeSlide className="text-balance text-base font-light">
                  Eightyeight@Kasablanka Tower B Lt. 20, Jl. Casablanca Raya Kav
                  88, Menteng Dalam, Tebet, Jakarta Selatan, DKI Jakarta 12870
                </FadeSlide>
              </div>

              <div className="flex flex-col justify-between">
                <div className="space-y-0 text-lg font-light">
                  <FadeSlide>
                    <span className="font-medium mr-3 pr-1">P</span>{" "}
                    081189996968
                  </FadeSlide>
                  <FadeSlide>
                    <span className="font-medium mr-3 pr-1">E</span>{" "}
                    info@elora-eluna.id
                  </FadeSlide>
                  <FadeSlide>
                    <span className="font-medium mr-3">W</span> elora-eluna.id
                  </FadeSlide>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 mt-10 md:mt-0 text-lg">
            <LinkPullUp
              href="#"
              className="size-6 flex justify-center items-center cursor-pointer"
            >
              <Image src={facebook} alt="" className="object-cover" />
            </LinkPullUp>
            <LinkPullUp
              href="#"
              className="size-6 flex justify-center items-center cursor-pointer"
            >
              <Image src={instagram} alt="" className="object-cover" />
            </LinkPullUp>
            <LinkPullUp
              href="#"
              className="size-6 flex justify-center items-center cursor-pointer"
            >
              <Image src={twitter} alt="" className="object-cover" />
            </LinkPullUp>
            <LinkPullUp
              href="#"
              className="size-6 flex justify-center items-center cursor-pointer"
            >
              <Image src={linkedin} alt="" className="object-cover" />
            </LinkPullUp>
          </div>
        </div>

        <div className="border-t border-white my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <WordsPullUp text="Disclaimer | Terms and Conditions" />
          <WordsPullUp
            text="Copyright © Elora & Eluna | 2025 | All Rights Reserved"
            className="text-center"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
