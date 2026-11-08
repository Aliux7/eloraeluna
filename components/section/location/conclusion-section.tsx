import Image from "next/image";
import conclusion from "@/app/assets/kota-kasablanka/hero_background.webp";

const ConclusionSection = () => {
  return (
    <div className="bg-[#F3F0E8] flex flex-col sm:flex-row">
      <div className="w-full h-full">
        <Image
          src={conclusion}
          alt="Aerial view of Elora and Eluna towers at Kota Kasablanka"
          className="w-full h-full object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default ConclusionSection;
