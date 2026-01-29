import eloraeluna from "@/app/assets/eloraeluna_logo.png";
import kota from "@/app/assets/kota.png";
import pakuwon_logo from "@/app/assets/pakuwon_logo.png";
import Image from "next/image";
import facebook from "@/app/assets/home/facebook.png";
import instagram from "@/app/assets/home/instagram.png";
import twitter from "@/app/assets/home/twitter.png";
import linkedin from "@/app/assets/home/linkedin.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#9D7958] text-white">
      <div className="px-5 sm:px-10 xl:px-48 py-20">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end md:gap-16">
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="relative sm:w-fit h-full flex flex-col justify-center items-center gap-2">
                <Image src={eloraeluna} alt="" className="object-cover w-[80%] sm:w-100" />
                <Image src={kota} alt="" className="object-cover" />
              </div>

              <div className="flex items-center gap-3 w-52">
                <Image src={pakuwon_logo} alt="" className="object-cover" />
              </div>

              <p className="uppercase tracking-wider text-xl font-bold">
                PT Elite Prima Hutama
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-start md:items-end gap-4">
              <div className="space-y-3 text-sm leading-relaxed max-w-sm ">
                <p className="font-medium text-lg">Head Marketing Office</p>
                <p className="text-balance text-lg font-light">
                  Eightyeight@Kasablanka Tower B Lt. 20, Jl. Casablanca Raya Kav
                  88, Menteng Dalam, Tebet, Jakarta Selatan, DKI Jakarta 12870
                </p>
              </div>

              <div className="flex flex-col justify-between">
                <div className="space-y-1 text-xl font-light">
                  <p>
                    <span className="font-medium mr-3 pr-1">P</span>{" "}
                    081189996968
                  </p>
                  <p>
                    <span className="font-medium mr-3 pr-1">E</span>{" "}
                    info@elora-eluna.id
                  </p>
                  <p>
                    <span className="font-medium mr-3">W</span> elora-eluna.id
                  </p>
                </div>
              </div>
            </div>
          </div> 
          <div className="flex gap-6 mt-10 md:mt-0 text-lg">
            <Link href="#" className="size-7 flex justify-center items-center cursor-pointer">
              <Image src={facebook} alt="" className="object-cover" />
            </Link>
            <Link href="#" className="size-7 flex justify-center items-center cursor-pointer">
              <Image src={instagram} alt="" className="object-cover" />
            </Link>
            <Link href="#" className="size-7 flex justify-center items-center cursor-pointer">
              <Image src={twitter} alt="" className="object-cover" />
            </Link>
            <Link href="#" className="size-7 flex justify-center items-center cursor-pointer">
              <Image src={linkedin} alt="" className="object-cover" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-lg gap-6">
          <p>Disclaimer | Terms and Conditions</p>
          <p className="text-center">Copyright © Elora & Eluna | 2025 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
