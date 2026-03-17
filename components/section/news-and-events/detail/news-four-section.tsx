import { FadeSlide } from "@/components/animation/fade-slide";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import news2 from "@/app/assets/news/news4/02.jpg";
import news3 from "@/app/assets/news/news4/03.jpg";
import news4 from "@/app/assets/news/news4/04.jpg";
import news5 from "@/app/assets/news/news4/05.jpg";
import Image from "next/image";

const NewsFourSection = () => {
  return (
    <section className="w-full bg-[#E7E3DB] py-8 sm:py-32 px-5 sm:px-10 xl:px-48">
      <div className="space-y-12">
        <div className="space-y-12">
          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-[22px] 2xl:text-2xl">
            Luxury living in Jakarta has evolved significantly over the past two
            decades. In earlier periods, luxury was often defined by size,
            exclusivity, and material finishes.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-[22px] 2xl:text-2xl">
            Today, however, the concept of luxury has expanded to include a
            broader range of experiences. Modern residents increasingly
            associate luxury with quality of life, design intelligence, and
            access to meaningful lifestyle opportunities.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-[22px] 2xl:text-2xl">
            This transformation reflects a deeper cultural shift in how people
            perceive urban living.
          </FadeSlide>
        </div>

        <FadeSlide className="w-full">
          <Image src={news2} alt="" />
        </FadeSlide>

        <div className="space-y-12">
          <WordsPullUp
            text="Experience Over Excess"
            className="text-xl lg:text-4xl 2xl:text-[40px] font-medium text-[#464948]"
          />

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            One of the defining characteristics of contemporary luxury is the
            emphasis on experience rather than excess.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            <p className="mb-4">
              Residents now look for environments that enhance daily life.
              Instead of focusing only on physical space, they value elements
              such as:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li>thoughtful architectural design</li>
              <li>curated amenities</li>
              <li>access to nature and outdoor spaces</li>
              <li>proximity to cultural and dining destinations</li>
            </ul>
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            Luxury, in this context, becomes an ecosystem rather than a
            collection of material features.
          </FadeSlide>
        </div>

        <FadeSlide className="w-full">
          <Image src={news3} alt="" />
        </FadeSlide>

        <div className="space-y-12">
          <WordsPullUp
            text="Wellness as a Core Component"
            className="text-xl lg:text-4xl 2xl:text-[40px] font-medium text-[#464948]"
          />

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            Another important dimension of modern luxury living is wellness.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            Across global cities, residential developments increasingly
            incorporate facilities that support physical and mental health.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            <p className="mb-4">Examples often include:</p>

            <ul className="list-disc pl-8 space-y-2">
              <li>fitness centers and yoga studios</li>
              <li>outdoor gardens and walking paths</li>
              <li>spa and relaxation areas</li>
              <li>spaces designed for mindfulness and reflection</li>
            </ul>
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            These elements reflect the growing understanding that well-being is
            an essential part of modern urban life.
          </FadeSlide>
        </div>

        <FadeSlide className="w-full">
          <Image src={news4} alt="" />
        </FadeSlide>

        <div className="space-y-12">
          <WordsPullUp
            text="Architecture and Identity"
            className="text-xl lg:text-4xl 2xl:text-[40px] font-medium text-[#464948]"
          />

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            Luxury residential architecture also contributes to a city's
            identity.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            Iconic buildings shape the skyline and create landmarks that define
            neighborhoods. For residents, living in a thoughtfully designed
            building can create a sense of pride and belonging.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            Architecture, in this sense, becomes part of a broader cultural
            conversation about the character of the city itself.
          </FadeSlide>
        </div>

        <FadeSlide className="w-full">
          <Image src={news5} alt="" />
        </FadeSlide>

        <div className="space-y-12">
          <WordsPullUp
            text="Jakarta's Emerging Luxury Landscape"
            className="text-xl lg:text-4xl 2xl:text-[40px] font-medium text-[#464948]"
          />

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            Jakarta's luxury residential landscape continues to evolve as
            developers and architects experiment with new forms of urban living.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            Integrated developments, vertical communities, and design-focused
            residences are becoming increasingly prominent.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            These environments reflect the ambitions of a city that is both
            growing rapidly and redefining its relationship with architecture,
            lifestyle, and urban identity.
          </FadeSlide>
        </div> 
      </div>
    </section>
  );
};

export default NewsFourSection;
