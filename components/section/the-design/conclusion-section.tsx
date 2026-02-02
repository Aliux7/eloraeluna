import Image from "next/image";
import conclusion from "@/app/assets/the-design/conclusion.jpg";

const ConclusionSection = () => {
  return (
    <div className="bg-[#F3F0E8] flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 h-screen max-h-200">
        <Image src={conclusion} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="sm:w-1/2 p-10 lg:p-16">
        <p className="text-[#A4704F] text-base lg:text-xl xl:text-2xl tracking-widest">
          Eluna's design is a harmonious fusion of serenity and
          sophistication—drawing inspiration from the moon's quiet elegance
          while embracing the expressive energy of modern living. Every
          architectural line and interior detail is crafted to evoke a sense of
          calm confidence, offering a refined sanctuary above the city.
        </p>
        <br />
        <p className="text-[#A4704F] text-base lg:text-xl xl:text-2xl tracking-widest">
          With its soft curves, ambient lighting, and curated materials, Eluna
          reimagines premium apartment living through a lens of intuitive
          luxury—perfect for those who seek a life of quiet splendor and
          inspired stillness.
        </p>
      </div>
    </div>
  );
};

export default ConclusionSection;
