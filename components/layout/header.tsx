import Image from "next/image";
import React from "react";
import eloraeluna_logo from "@/app/assets/eloraeluna_logo.png";
import pakuwon_logo from "@/app/assets/pakuwon_logo.png";

const Header = () => {
  return (
    <nav className="z-50 fixed top-0 left-0 w-full bg-linear-to-r from-[#391F07] via-[#9D7958] to-[#391F07] h-22 flex justify-between items-center px-16">
      <div className="flex flex-col justifty-center items-center gap-1.5">
        <span className="bg-white w-6 h-0.5 rounded-full"></span>
        <span className="bg-white w-6 h-0.5 rounded-full"></span>
        <span className="bg-white w-6 h-0.5 rounded-full"></span>
      </div>
      <Image
        src={eloraeluna_logo}
        alt=""
        width={240}
        height={34}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <Image src={pakuwon_logo} alt="" width={203} height={40} />
    </nav>
  );
};

export default Header;
