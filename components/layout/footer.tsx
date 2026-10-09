import pakuwon_logo from "@/app/assets/pakuwon_logo.svg";
import kota from "@/app/assets/kota.svg";
import Image from "next/image";
import facebook from "@/app/assets/home/facebook.webp";
import instagram from "@/app/assets/home/instagram.webp";
import twitter from "@/app/assets/home/twitter.webp";
import linkedin from "@/app/assets/home/linkedin.webp";
import and from "@/app/assets/and.svg";
import elora from "@/app/assets/elora.svg";
import eluna from "@/app/assets/eluna.svg";
import { FadeSlide } from "../animation/fade-slide";
import { WordsPullUp } from "../animation/word-pull-up";
import { LinkPullUp } from "../animation/link-pull-up";

const Footer = () => {
  return (
    <footer className="bg-[#9D7958] text-white">
      <div className="px-5 sm:px-10 xl:px-48 py-7 sm:py-16">
        <div className="relative flex flex-row md:flex-col lg:flex-row justify-between items-end md:items-start lg:items-end gap-10 lg:gap-16">
          <div className="">
            <div className="w-auto">
              <div className="w-fit flex flex-col justify-center items-start 2xl:gap-2">
                <FadeSlide
                  direction="up"
                  className="relative w-auto h-full flex justify-start sm:justify-center items-center gap-5"
                >
                  <Image
                    src={elora}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-auto h-5 sm:h-6 2xl:h-8"
                  />
                  <Image
                    src={and}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-auto h-7 sm:h-8 "
                  />
                  <Image
                    src={eluna}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-auto h-5 sm:h-6 2xl:h-8 "
                  />
                </FadeSlide>

                <FadeSlide
                  direction="up"
                  className="flex justify-start items-start gap-3 h-2.5 sm:h-3 w-full mt-3 mb-5 sm:mb-8"
                >
                  <Image
                    src={kota}
                    alt=""
                    className="object-contain w-full h-full"
                  />
                </FadeSlide>
              </div>

              <FadeSlide
                direction="up"
                className="flex justify-start items-start gap-3 h-8 sm:h-9 w-fit mb-4 sm:mb-8 "
              >
                <Image
                  src={pakuwon_logo}
                  alt=""
                  className="object-contain w-auto h-full"
                />
              </FadeSlide>

              <WordsPullUp
                text="PT Elite Prima Hutama"
                className="uppercase tracking-widest text-sm sm:text-lg font-bold"
              />
            </div>
            <div className="flex flex-col md:flex-row md:justify-start md:items-start gap-8 lg:gap-16">
              <div className="space-y-3 text-xs leading-relaxed max-w-sm ">
                <WordsPullUp
                  text="Office"
                  className="font-medium sm:text-base tracking-wider"
                />
                <FadeSlide className="text-balance text-xs sm:text-base font-light tracking-wider">
                  Gandaria 8 Office Tower Lt. 32, Gandaria City Jl. Sultan
                  Iskandar Muda No. 8, Kebayoran Lama, Jakarta Selatan, DKI
                  Jakarta 12240
                </FadeSlide>
              </div>

              <div className="space-y-3 text-xs leading-relaxed max-w-sm ">
                <WordsPullUp
                  text="Marketing Gallery"
                  className="font-medium sm:text-base tracking-wider"
                />
                <FadeSlide className="text-balance text-xs sm:text-base font-light tracking-wider">
                  Pakuwon Tower Lt. 47 Kota Kasablanka Jl. Casablanca Raya Kav
                  88, Menteng Dalam, Tebet, Jakarta Selatan, DKI Jakarta 12870
                </FadeSlide>
                <div className="flex justify-start gap-5 space-y-1 text-lg font-light">
                  <FadeSlide className="tracking-wider text-xs sm:text-sm text-nowrap">
                    <span className="pr-1 font-medium text-xs sm:text-base">P</span> 021 - 8370 9880
                  </FadeSlide>
                  <FadeSlide className="tracking-wider text-xs sm:text-base text-nowrap">
                    <span className="pr-1 font-medium">E</span> elora-eluna.com
                  </FadeSlide>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 sm:relative flex gap-5 sm:gap-6 md:gap-9 mt-10 md:mt-0 text-lg">
            {/* <LinkPullUp
              href="#"
              className="relative size-4.5 sm:size-6 flex justify-center items-center cursor-pointer"
            >
              <Image
                src={facebook}
                alt=""
                className="w-full h-full object-contain"
              />
            </LinkPullUp> */}
            <LinkPullUp
              href="https://www.instagram.com/elora.eluna/"
              className="relative size-4.5 sm:size-6 flex justify-center items-center cursor-pointer"
            >
              <Image
                src={instagram}
                alt=""
                className="w-full h-full object-contain"
              />
            </LinkPullUp>
            {/* <LinkPullUp
              href="#"
              className="relative size-4.5 sm:size-6 flex justify-center items-center cursor-pointer"
            >
              <Image
                src={twitter}
                alt=""
                className="w-full h-full object-contain"
              />
            </LinkPullUp> */}
            {/* <LinkPullUp
              href="#"
              className="relative size-4.5 sm:size-6 flex justify-center items-center cursor-pointer"
            >
              <Image
                src={linkedin}
                alt=""
                className="w-full h-full object-contain"
              />
            </LinkPullUp> */}
          </div>
        </div>

        <div className="border-t border-white my-3 sm:my-6 md:my-8" />

        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-2 sm:gap-3 md:gap-6">
          <WordsPullUp
            text="Disclaimer | Terms and Conditions"
            className="text-xs sm:text-base tracking-wider"
          />
          <WordsPullUp
            text="Copyright © Elora & Eluna | 2025 | All Rights Reserved"
            className="text-center tracking-wider text-xs sm:text-base"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
