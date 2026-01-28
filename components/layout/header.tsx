import Image from "next/image"; 
import eloraeluna_logo from "@/app/assets/eloraeluna_logo.png";
import pakuwon_logo from "@/app/assets/pakuwon_logo.png";
import pakuwon_mini_logo from "@/app/assets/pakuwon_mini_logo.png";

const Header = () => {
  return (
    <nav className="z-50 fixed top-0 left-0 w-full bg-linear-to-r from-[#391F07]/90 via-[#9D7958]/90 to-[#391F07]/90 h-20 lg:h-22 flex justify-between items-center px-5 sm:px-10 xl:px-16">
      <div className="flex flex-col justifty-center items-center gap-1.5">
        <span className="bg-white w-6 h-0.5 rounded-full"></span>
        <span className="bg-white w-6 h-0.5 rounded-full"></span>
        <span className="bg-white w-6 h-0.5 rounded-full"></span>
      </div>
      <div className="w-48 lg:w-60 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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
    </nav>
  );
};

export default Header;
