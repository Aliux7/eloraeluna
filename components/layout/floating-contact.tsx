import React from "react";
import whatsapp_logo from "@/app/assets/whatsapp.svg";
import mail_logo from "@/app/assets/mail.svg";
import Image from "next/image";

const FloatingContact = () => {
  return (
    <div className="fixed bottom-10 right-5 sm:right-10 xl:right-16 flex flex-col justify-center items-center gap-4 z-40">
      <button className="bg-white size-10 md:size-12.75 rounded-full flex justify-center items-center hover:bg-[#F3F0E8] cursor-pointer transition-all duration-200 ease-in-out">
        <div className="w-6.5 md:w-8">
          <Image src={mail_logo} alt="" width={100} height={100} />
        </div>
      </button>
      <button className="bg-white size-10 md:size-12.75 rounded-full flex justify-center items-center hover:bg-[#F3F0E8] cursor-pointer transition-all duration-200 ease-in-out">
        <div className="w-6.5 md:w-7.5">
          <Image src={whatsapp_logo} alt="" width={100} height={100} />
        </div>
      </button>
    </div>
  );
};

export default FloatingContact;
