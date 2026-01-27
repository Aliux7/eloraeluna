import React from "react";
import whatsapp_logo from "@/app/assets/whatsapp.svg";
import mail_logo from "@/app/assets/mail.svg";
import Image from "next/image";

const FloatingContact = () => {
  return (
    <div className="fixed bottom-5 right-9 flex flex-col justify-center items-center gap-4">
      <button className="bg-white size-12.75 rounded-full flex justify-center items-center hover:bg-[#F3F0E8] cursor-pointer transition-all duration-200 ease-in-out">
        <Image src={mail_logo} alt="" width={32} height={25} />
      </button>
      <button className="bg-white size-12.75 rounded-full flex justify-center items-center hover:bg-[#F3F0E8] cursor-pointer transition-all duration-200 ease-in-out">
        <Image src={whatsapp_logo} alt="" width={30} height={30} />
      </button>
    </div>
  );
};

export default FloatingContact;
