import developer_ornament from "@/app/assets/home/developer_ornament.png";
import developer_background from "@/app/assets/home/developer_background.png";
import developer_logo from "@/app/assets/pakuwon_logo.png";
import Image from "next/image";

const DeveloperSection = () => {
  return (
    <section className="relative bg-[#2B3036] min-h-screen flex flex-col xl:flex-row">
      <div className="relative w-full xl:w-1/2 min-h-screen z-10">
        <Image src={developer_ornament} alt="" fill className="object-cover" />

        <div className="absolute inset-0 z-10 flex flex-col justify-center py-16 px-5 sm:px-10 xl:px-16">
          <h3 className="font-bold tracking-widest text-2xl sm:text-3xl text-[#F3F0E8] mb-32">
            THE DEVELOPER
          </h3>
          <div className="relative w-72 sm:w-100 lg:w-130 mb-16">
            <Image src={developer_logo} alt="" width={1000} height={1000} />
          </div>

          <p className="text-[#F3F0E8] font-normal text-lg sm:text-xl md:text-2xl mb-14 lg:mb-16 max-w-140 sm:pr-10 text-balance">
            Pakuwon Group is a pioneer in Indonesia's property scene, known for
            visionary superblocks that blend luxury living, vibrant retail, and
            world-class hospitality across major cities.
          </p>

          <button className="flex justify-center items-center cursor-pointer font-medium capitalize text-xl pt-px w-56 h-11.25 border border-[#9D7958] hover:bg-[#9D7958]/90 text-[#F3F0E8] transition-all duration-200 ease-in-out">
            LOCATION MAP
          </button>
        </div>
      </div>
      <div className="relative w-full xl:w-1/2 min-h-[70vh] xl:min-h-screen">
        <Image
          src={developer_background}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default DeveloperSection;
