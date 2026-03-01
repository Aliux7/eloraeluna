"use client";
import Image from "next/image";
import pakuwon_logo from "@/app/assets/pakuwon_logo.svg";
import pakuwon_mini_logo from "@/app/assets/pakuwon_mini_logo.png";
import and from "@/app/assets/and.svg";
import elora from "@/app/assets/elora.svg";
import eluna from "@/app/assets/eluna.svg";
import { useState } from "react";
import FullMenu from "./full-menu";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{backgroundColor: "#92653B"}} className="z-50 fixed top-0 left-0 w-full h-14 sm:h-18 flex justify-between items-center px-5 sm:px-10 xl:px-16 ">
      <div
        className="flex flex-col justifty-center items-center gap-1 sm:gap-1.25 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${open ? "rotate-45 origin-left w-8 -translate-y-1.25 sm:-translate-y-1" : "w-6"} `}
        />
        <span
          className={`h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${open ? "opacity-0" : "opacity-100 w-6"} `}
        />
        <span
          className={`h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${open ? "-rotate-45 origin-left w-8 translate-y-1.25 sm:translate-y-1" : "w-6"} `}
        />
      </div>
      <div className="flex justify-center items-center gap-4 sm:gap-5 h-6 sm:h-7 lg:h-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-auto h-3 sm:h-4.5">
          <Image
            src={elora}
            alt=""
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>

        <div className="relative w-auto h-auto">
          <Image
            src={and}
            alt=""
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>

        <div className="relative w-auto h-3 sm:h-4.5">
          <Image
            src={eluna}
            alt=""
            width={1000}
            height={1000}
            className="w-full h-3 sm:h-4.5"
          />
        </div>
      </div>
      <div className="lg:h-8.5 w-auto hidden lg:block">
        <Image
          src={pakuwon_logo}
          alt=""
          width={1000}
          height={1000}
          className="h-full w-full"
        />
      </div>
      <div className="h-6 sm:h-9 w-auto block lg:hidden">
        <Image
          src={pakuwon_mini_logo}
          alt=""
          width={1000}
          height={1000}
          className="h-full w-full"
        />
      </div>
      <FullMenu open={open} onClose={() => setOpen(false)} />
    </nav>
  );
};

export default Header;
