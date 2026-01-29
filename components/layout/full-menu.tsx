import { X, ArrowRight } from "lucide-react";

interface FullMenuProps {
  open: boolean;
  onClose: () => void;
}

const MENU: string[] = [
  "HOME",
  "KOTA KASABLANKA",
  "THE DESIGN",
  "THE CONCEPT",
  "FACILITIES",
  "LOCATION MAP",
  "THE DEVELOPER",
  "NEWS & EVENTS",
];

const FullMenu: React.FC<FullMenuProps> = ({ open }) => {
  if (!open) return null;

  return (
    <div className="fixed top-20 px-5 sm:px-10 xl:px-38 inset-0 z-40 bg-[#9D7958]/95 text-white overflow-y-auto no-scrollbar backdrop-blur-xs "> 
      <div className="py-5">
        <ul className="space-y-2">
          {MENU.map((item: string, i: number) => (
            <li
              key={i}
              className="flex items-center justify-between group cursor-pointer p-5 xl:px-20 hover:bg-[#614429] bg-transparent transition-all duration-300 ease-in-out"
            >
              <span className="text-lg md:text-xl tracking-wide">
                {item}
              </span>

              <ArrowRight
                size={22}
                className="opacity-70 group-hover:translate-x-1 transition-transform"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FullMenu;
