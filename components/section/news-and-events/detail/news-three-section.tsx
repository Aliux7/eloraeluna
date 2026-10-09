import { FadeSlide } from "@/components/animation/fade-slide";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import news2 from "@/app/assets/news/news3/02.webp";
import news3 from "@/app/assets/news/news3/03.webp"; 
import Image from "next/image";

const NewsThreeSection = () => {
  return (
    <section className="w-full bg-[#E7E3DB] py-8 sm:py-32 px-5 sm:px-10 xl:px-48">
      <div className="space-y-12">
        <div className="space-y-12">
          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            Life in a global city often unfolds across two distinct rhythms.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            During the day, the city pulses with activity—business meetings,
            social gatherings, restaurants, and cultural events. At night,
            however, the home becomes a place for quiet reflection, personal
            time, and recovery.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            Modern residential architecture increasingly recognizes this
            duality. The challenge for designers is to create homes that
            accommodate both the vibrant energy of urban life and the need for
            personal sanctuary.
          </FadeSlide>
        </div>

        <FadeSlide className="w-full">
          <Image src={news2} alt="" />
        </FadeSlide>

        <div className="space-y-12">
          <WordsPullUp
            text="Urban Energy and Social Life"
            className="text-xl lg:text-4xl 2xl:text-[40px] font-medium text-[#464948]"
          />

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            Cities thrive on interaction. Restaurants, galleries, cafes, and
            cultural venues create environments where people gather and exchange
            ideas.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            Many residents choose to live in central districts precisely because
            of this dynamic atmosphere. Proximity to cultural and social
            activity allows residents to participate more fully in the life of
            the city.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            However, this vibrancy also requires balance. Without thoughtful
            residential design, constant exposure to urban activity can become
            overwhelming.
          </FadeSlide>
        </div>

        <FadeSlide className="w-full">
          <Image src={news3} alt="" />
        </FadeSlide>

        <div className="space-y-12">
          <WordsPullUp
            text="The Home as a Retreat"
            className="text-xl lg:text-4xl 2xl:text-[40px] font-medium text-[#464948]"
          />

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            Architects increasingly approach residential design with the idea
            that the home must function as a retreat from the city.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            <p className="mb-4">Design strategies often include:</p>

            <ul className="list-disc pl-8 space-y-2">
              <li>private wellness spaces</li>
              <li>quiet lounges or libraries</li>
              <li>landscaped gardens and outdoor terraces</li>
              <li>spa-like environments for relaxation</li>
            </ul>
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            These spaces allow residents to transition gradually from the
            external energy of the city into a more personal and reflective
            environment.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            In effect, architecture becomes a tool for managing emotional and
            psychological balance.
          </FadeSlide>
        </div> 

        <div className="space-y-12">
          <WordsPullUp
            text="Layered Spatial Design"
            className="text-xl lg:text-4xl 2xl:text-[40px] font-medium text-[#464948]"
          />

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            One of the most effective strategies in modern residential design is
            layered spatial planning.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            <p className="mb-4">
              Instead of creating a single type of environment, architects
              design multiple layers of experience within a building:
            </p>

            <ul className="list-decimal pl-8 space-y-2">
              <li>public or social spaces</li>
              <li>semi-private communal areas</li>
              <li>private residential environments</li>
            </ul>
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            This layered approach allows residents to move fluidly between
            different moods and activities.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            A resident might begin the evening in a lively restaurant nearby,
            continue a conversation in a shared lounge, and then retreat to the
            quiet comfort of their private residence.
          </FadeSlide>
        </div> 

        <div className="space-y-12">
          <WordsPullUp
            text="Architecture and Daily Rituals"
            className="text-xl lg:text-4xl 2xl:text-[40px] font-medium text-[#464948]"
          />

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            Well-designed residential spaces support daily rituals that
            contribute to long-term well-being.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            Morning routines, exercise, social gatherings, and moments of
            solitude all require different environments. By thoughtfully
            designing these environments within residential buildings,
            architects help residents develop sustainable urban lifestyles.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            These design principles are increasingly visible in modern
            residential developments across global cities.
          </FadeSlide>
        </div> 
        
        <div className="space-y-12">
          <WordsPullUp
            text="The Future of Urban Homes"
            className="text-xl lg:text-4xl 2xl:text-[40px] font-medium text-[#464948]"
          />

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            As urban life continues to accelerate, the importance of residential
            design will only increase.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            Homes must function not only as shelter but also as environments
            that support physical health, emotional balance, and meaningful
            social interaction.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            The most successful residential architecture will be the kind that
            allows residents to move effortlessly between the energy of the city
            and the tranquility of home.
          </FadeSlide> 
        </div>
      </div>
    </section>
  );
};

export default NewsThreeSection;
