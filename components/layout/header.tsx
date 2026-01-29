"use client";
import Image from "next/image";
import eloraeluna_logo from "@/app/assets/eloraeluna_logo.png";
import pakuwon_logo from "@/app/assets/pakuwon_logo.png";
import pakuwon_mini_logo from "@/app/assets/pakuwon_mini_logo.png";
import { useEffect, useState } from "react";
import FullMenu from "./full-menu";

const Header = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav className="z-50 fixed top-0 left-0 w-full bg-linear-to-r from-[#391F07]/95 via-[#9D7958]/95 to-[#391F07]/95 h-20 flex justify-between items-center px-5 sm:px-10 xl:px-16 ">
      <div
        className="flex flex-col justifty-center items-center gap-1.25 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span
          className={` h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${open ? "rotate-45 origin-left w-8 -translate-y-1" : "w-6"} `}
        />
        <span
          className={` h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${open ? "opacity-0" : "opacity-100 w-6"} `}
        />
        <span
          className={` h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${open ? "-rotate-45 origin-left w-8 translate-y-1" : "w-6"} `}
        />
      </div>
      <div className="w-48 lg:w-56 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src={eloraeluna_logo}
          alt=""
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>
      <div className="lg:w-60 hidden lg:block">
        <Image src={pakuwon_logo} alt="" width={1000} height={1000} />
      </div>
      <div className="w-9 block lg:hidden">
        <Image src={pakuwon_mini_logo} alt="" width={1000} height={1000} />
      </div>
      <FullMenu open={open} onClose={() => setOpen(false)} />
    </nav>
  );
};

export default Header;
