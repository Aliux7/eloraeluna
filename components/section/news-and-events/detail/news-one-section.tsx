import { FadeSlide } from "@/components/animation/fade-slide";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import news2 from "@/app/assets/news/news1/02.jpg";
import news3 from "@/app/assets/news/news1/03.jpg";
import Image from "next/image";

const NewsOneSection = () => {
  return (
    <section className="w-full bg-[#E7E3DB] py-8 sm:py-32 px-5 sm:px-10 xl:px-48">
      <div className="space-y-12">
        <div className="space-y-12">
          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            Jakarta is undergoing a transformation in the way people think about
            residential living. For decades, housing in the city was primarily
            defined by location and price. Today, however, residents
            increasingly prioritize lifestyle integration, accessibility, and
            community when choosing where to live.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            Across global cities—from Singapore to Tokyo and London—urban
            planning has shifted toward integrated developments that combine
            residential towers, retail areas, public spaces, and lifestyle
            facilities within a single environment. Jakarta is now entering a
            similar phase of evolution.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            This shift reflects a broader understanding that a home in a major
            city is no longer only a place to sleep. Instead, it becomes part of
            a larger ecosystem where work, leisure, social interaction, and
            personal well-being coexist.
          </FadeSlide>
        </div>

        <FadeSlide className="w-full">
          <Image src={news2} alt="" />
        </FadeSlide>

        <div className="space-y-12">
          <WordsPullUp
            text="The Urban Challenge: Time and Mobility"
            className="text-xl lg:text-4xl 2xl:text-[40px] font-medium text-[#464948]"
          />

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            Jakarta is one of the most dynamic cities in Southeast Asia, but it
            is also a city where mobility challenges shape daily life. Long
            commuting times have historically defined the experience of living
            and working in the capital.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            Jakarta is one of the most dynamic cities in Southeast Asia, but it
            is also a city where mobility challenges shape daily life. Long
            commuting times have historically defined the experience of living
            and working in the capital.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            Urban planners often describe this concept as “15-minute living,”
            where essential activities can be reached within a short walk or
            commute.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            In Jakarta, where density continues to increase, this model is
            becoming increasingly relevant.
          </FadeSlide>
        </div>

        <FadeSlide className="w-full">
          <Image src={news3} alt="" />
        </FadeSlide>

        <div className="space-y-12">
          <WordsPullUp
            text="Integrated Developments and Community Formation"
            className="text-xl lg:text-4xl 2xl:text-[40px] font-medium text-[#464948]"
          />

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            Beyond convenience, integrated developments also contribute to
            something less tangible but equally important: community formation.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            Traditional urban living can sometimes create social fragmentation.
            Large cities are vibrant, yet they can also feel anonymous.
            Integrated living environments encourage interaction through shared
            spaces such as gardens, lounges, fitness areas, and cultural venues.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            These environments create opportunities for residents to connect
            with neighbors and participate in a community that extends beyond
            the walls of individual apartments.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            The result is a living experience that balances privacy with
            belonging—an aspect that many residents now value highly.
          </FadeSlide>
        </div>

        <div className="space-y-12">
          <WordsPullUp
            text="Lifestyle Infrastructure in Modern Residences"
            className="text-xl lg:text-4xl 2xl:text-[40px] font-medium text-[#464948]"
          />

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            Modern residential developments increasingly incorporate lifestyle
            infrastructure designed to support diverse daily activities.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            <p className="mb-4">Examples often include:</p>

            <ul className="list-disc pl-8 space-y-2">
              <li>wellness and fitness facilities</li>
              <li>communal gardens and outdoor spaces</li>
              <li>work lounges and flexible meeting areas</li>
              <li>dining and entertainment environments</li>
              <li>recreational amenities for families and children</li>
            </ul>
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            These elements reflect a deeper shift in urban expectations. Rather
            than separating work, recreation, and relaxation into different
            parts of the city, integrated developments allow these activities to
            coexist within a single environment.
          </FadeSlide>
        </div>

        <div className="space-y-12">
          <WordsPullUp
            text="The Future of Urban Living in Jakarta"
            className="text-xl lg:text-4xl 2xl:text-[40px] font-medium text-[#464948]"
          />

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            Jakarta's future as a global city will depend partly on how
            successfully it adapts to evolving patterns of urban living.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            Integrated developments are likely to play a key role in this
            transformation. By bringing together residential, commercial, and
            lifestyle spaces, these environments respond to the needs of a new
            generation of residents who seek both efficiency and quality of
            life.
          </FadeSlide>

          <FadeSlide className="text-[#464948] text-base lg:text-2xl">
            In many ways, this model represents the next stage of Jakarta's
            urban maturity—one where the city becomes not only larger, but also
            more thoughtfully connected.
          </FadeSlide>
        </div>
      </div>
    </section>
  );
};

export default NewsOneSection;
