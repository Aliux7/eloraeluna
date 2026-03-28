"use client";

import { useEffect, useRef, useState } from "react";
import arrow_1 from "@/app/assets/home/arrow_1.png";
import Image from "next/image";
import { LinkPullUp } from "@/components/animation/link-pull-up";
import { ChevronDown } from "lucide-react";
import { newsData } from "@/constants/news";

const NewsSection = () => {
  const [sort, setSort] = useState<"newest" | "oldest">("newest");

  const sortedNews = [...newsData].sort((a, b) => {
    if (sort === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const getSpan = (index: number) => {
    const pattern = [
      "col-span-1",
      "xl:col-span-2",
      "xl:col-span-2",
      "col-span-1",
    ];
    return pattern[index % 4];
  };

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative bg-[#F3F0E8] py-26 sm:py-36 px-5 sm:px-10 xl:px-48 flex flex-col gap-10">
      <div className="flex justify-between items-center gap-10">
        <h1 className="text-[#464948] text-4xl sm:text-5xl lg:text-6xl font-normal tracking-widest">
          NEWS & EVENTS
        </h1>
        <div className="flex items-center gap-3">
          <div ref={ref} className="relative inline-block z-20">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-end gap-2 px-4 py-2 border border-[#B38569] text-[#464948] hover:text-black bg-[#F3F0E8] cursor-pointer"
            >
              Sort: {sort === "newest" ? "Newest" : "Oldest"}
              <ChevronDown
                size={16}
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-48 bg-[#F3F0E8] shadow-lg border border-[#B38569] py-2">
                <button
                  onClick={() => {
                    setSort("newest");
                    setOpen(false);
                  }}
                  className="w-full text-left px-5 py-3 hover:bg-black/5 text-[#464948] hover:text-black cursor-pointer"
                >
                  Newest to Oldest
                </button>

                <button
                  onClick={() => {
                    setSort("oldest");
                    setOpen(false);
                  }}
                  className="w-full text-left px-5 py-3 hover:bg-black/5 text-[#464948] hover:text-black cursor-pointer"
                >
                  Oldest to Newest
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {sortedNews.map((news, index) => (
          <div
            key={news.id}
            className={`relative after:content-[''] after:absolute after:inset-0 after:bg-black/30 ${getSpan(index)}`}
          >
            <Image
              src={news.image}
              alt=""
              className="w-full h-96 lg:h-118 2xl:h-200 object-cover"
            />

            <div className="absolute top-0 z-10 p-5 flex flex-col justify-between items-start h-full w-full">
              <h3
                style={{ wordSpacing: "-2px" }}
                className="text-3xl text-white max-w-130"
              >
                {news.title}
              </h3>

              <LinkPullUp
                href={`/news-detail/${news.id}`}
                wfull={true}
                className="h-14 border border-[#B38569] w-full flex justify-between items-center text-[#B38569] p-5 text-lg bg-white/90 hover:bg-white transition-all duration-200 ease-in-out cursor-pointer"
              >
                <span>Read More</span>

                <Image
                  src={arrow_1}
                  alt=""
                  width={100}
                  height={100}
                  className="w-7"
                />
              </LinkPullUp>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
