import Image from "next/image";
import conclusion from "@/app/assets/the-design/conclusion.jpg";

const ConclusionSection = () => {
  return (
    <div className="bg-[#F3F0E8] flex flex-col sm:flex-row">
      <div className="w-full h-screen max-h-200">
        <Image src={conclusion} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ConclusionSection;
