import { FadeSlide } from "@/components/animation/fade-slide";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import news2 from "@/app/assets/news/news2/02.jpg";
import news3 from "@/app/assets/news/news2/03.jpg";
import news4 from "@/app/assets/news/news2/04.jpg";
import news5 from "@/app/assets/news/news2/05.jpg";
import news6 from "@/app/assets/news/news2/06.jpg";
import Image from "next/image";

const NewsTwoSection = () => {
  return (
    <section className="w-full bg-[#E7E3DB] py-8 sm:py-32 px-5 sm:px-10 xl:px-48">
      <div className="space-y-12">
        <div className="space-y-12">
          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-[22px] 2xl:text-2xl">
            Vertical living has become one of the defining features of
            contemporary urban life. As cities grow denser and land becomes more
            limited, residential towers offer an efficient way to accommodate
            growing populations.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-[22px] 2xl:text-2xl">
            Yet beyond practicality, living in elevated spaces also influences
            how people experience their surroundings. Environmental
            psychologists have long studied how architecture affects human
            behavior and emotional well-being, and vertical living presents a
            particularly interesting case.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-[22px] 2xl:text-2xl">
            From expansive skyline views to increased access to natural light,
            elevated living environments can shape both mood and daily
            perception of the city.
          </FadeSlide>
        </div>

        <FadeSlide className="w-full">
          <Image src={news2} alt="" />
        </FadeSlide>

        <div className="space-y-12">
          <WordsPullUp
            text="Height and Perspective"
            className="text-xl lg:text-4xl 2xl:text-[40px] font-medium text-[#464948]"
          />

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            One of the most immediate differences between high-rise living and
            ground-level housing is perspective.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            From elevated spaces, residents experience the city not only as a
            place of activity but also as a visual landscape. The broader
            horizon created by height can generate a sense of openness and
            distance from the density below.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            This psychological shift often contributes to feelings of calm and
            mental clarity. When residents can look outward toward the skyline,
            greenery, or distant city lights, the environment encourages moments
            of reflection that are rare at street level.
          </FadeSlide>
        </div>

        <FadeSlide className="w-full">
          <Image src={news3} alt="" />
        </FadeSlide>

        <div className="space-y-12">
          <WordsPullUp
            text="Natural Light and Urban Wellness"
            className="text-xl lg:text-4xl 2xl:text-[40px] font-medium text-[#464948]"
          />

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            Another important factor in vertical living is access to natural
            light.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            <p className="mb-4">
              Modern residential towers are typically designed with large
              windows and open layouts that maximize daylight exposure. Research
              in environmental health consistently shows that natural light
              plays a crucial role in supporting:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li>improved mood</li>
              <li>better sleep cycles</li>
              <li>increased productivity</li>
              <li>overall psychological well-being</li>
            </ul>
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            In dense cities, where many buildings compete for space, elevated
            apartments often receive greater sunlight exposure than lower
            floors.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            This combination of light and open views creates a living
            environment that can feel more spacious and balanced.
          </FadeSlide>
        </div>

        <FadeSlide className="w-full">
          <Image src={news4} alt="" />
        </FadeSlide>

        <div className="space-y-12">
          <WordsPullUp
            text="Distance from Urban Noise"
            className="text-xl lg:text-4xl 2xl:text-[40px] font-medium text-[#464948]"
          />

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            Urban noise is one of the most common stressors associated with city
            living. Traffic, street activity, and dense infrastructure can
            generate constant background sound.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            High-rise residences naturally provide a degree of separation from
            this noise. As height increases, the intensity of street-level sound
            often decreases, creating a quieter indoor environment.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            For residents balancing demanding careers and fast-paced lifestyles,
            this acoustic separation can be an important contributor to daily
            comfort.
          </FadeSlide>
        </div>

        <FadeSlide className="w-full">
          <Image src={news5} alt="" />
        </FadeSlide>

        <div className="space-y-12">
          <WordsPullUp
            text="Vertical Communities"
            className="text-xl lg:text-4xl 2xl:text-[40px] font-medium text-[#464948]"
          />

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            While vertical living creates physical distance from the ground,
            modern residential towers are increasingly designed to encourage
            social connection within the building itself.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            Shared amenities, lounges, wellness facilities, and communal outdoor
            areas help residents interact and form relationships with neighbors.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            In this sense, vertical communities function almost like
            micro-neighborhoods within the larger city.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            Residents benefit from both privacy and proximity to others, which
            helps maintain a balance between independence and social engagement.
          </FadeSlide>
        </div>

        <FadeSlide className="w-full">
          <Image src={news6} alt="" />
        </FadeSlide>

        <div className="space-y-12">
          <WordsPullUp
            text="A New Relationship with the City"
            className="text-xl lg:text-4xl 2xl:text-[40px] font-medium text-[#464948]"
          />

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            Ultimately, vertical living changes how residents relate to the city
            around them.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            Instead of experiencing the city solely through streets and
            neighborhoods, residents also engage with it through skyline views,
            sunsets, and the broader urban horizon.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            This dual perspective—being both within the city and above
            it—creates a unique sense of connection to the urban environment.
          </FadeSlide>

          <FadeSlide className="text-[#464948] leading-relaxed text-base lg:text-2xl 2xl:text-2xl">
            As cities like Jakarta continue to grow vertically, understanding
            the psychological impact of these living environments becomes
            increasingly important.
          </FadeSlide>
        </div>
      </div>
    </section>
  );
};

export default NewsTwoSection;
