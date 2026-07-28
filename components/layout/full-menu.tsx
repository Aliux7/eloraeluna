import { X, ArrowRight } from "lucide-react";
import { LinkPullUp } from "../animation/link-pull-up";

interface FullMenuProps {
  open: boolean;
  onClose: () => void;
}

type MenuItem = {
  title: string;
  link: string;
};

const MENU: MenuItem[] = [
  { title: "HOME", link: "" },
  { title: "KOTA KASABLANKA", link: "kota-kasablanka" },
  { title: "THE DESIGN", link: "the-design" },
  { title: "THE CONCEPT", link: "the-concept" },
  { title: "FACILITIES", link: "facilities" },
  { title: "GALLERY", link: "gallery" },
  { title: "LOCATION MAP", link: "location-map" },
  { title: "THE DEVELOPER", link: "the-developer" },
  { title: "NEWS & EVENTS", link: "news-events" },
];

const FullMenu: React.FC<FullMenuProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed top-14 sm:top-18 px-5 sm:px-10 xl:px-38 inset-0 z-40 bg-[#9D7958]/95 text-white overflow-y-auto no-scrollbar backdrop-blur-xs ">
      <div className="py-5">
        <ul className="space-y-2">
          {MENU.map((item: MenuItem, i: number) => (
            <LinkPullUp
              href={`/${item.link}`}
              key={i}
              direction="left"
              delay={i * 0.08}
              onClick={onClose}
              className="w-full flex items-center justify-between group cursor-pointer p-5 xl:px-20 hover:bg-[#614429] bg-transparent transition-all duration-300 ease-in-out"
            >
              <span className="sm:text-lg md:text-xl 2xl:text-2xl tracking-wide 2xl:font-light">
                {item.title}
              </span>

              <ArrowRight
                size={22}
                className="opacity-70 group-hover:translate-x-1 transition-transform 2xl:scale-120"
              />
            </LinkPullUp>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FullMenu;
