import news_1 from "@/app/assets/news/news1/01_Banner.webp";
import news_2 from "@/app/assets/news/news2/01_Banner.webp";
import news_3 from "@/app/assets/news/news3/01_Banner.webp";
import news_4 from "@/app/assets/news/news4/01_Banner.webp";
// 1200×630 JPEG crops of the banners for link previews (WhatsApp/Facebook don't reliably show WebP).
import news_1_og from "@/app/assets/news/news1/og.jpg";
import news_2_og from "@/app/assets/news/news2/og.jpg";
import news_3_og from "@/app/assets/news/news3/og.jpg";
import news_4_og from "@/app/assets/news/news4/og.jpg";

export const newsData = [
  {
    id: 1,
    date: "2026-03-17",
    image: news_1,
    ogImage: news_1_og,
    description:
      "Why Jakarta residents are choosing integrated, lifestyle-centered developments that bring home, work, leisure and community together in one place.",
    title:
      "The Rise of Integrated Living in Jakarta: Why Urban Residents Are Choosing Lifestyle-Centered Developments",
  }, 
  {
    id: 2,
    date: "2026-03-17",
    image: news_2,
    ogImage: news_2_og,
    description:
      "How vertical living shapes well-being: skyline views, natural light and elevated spaces influence mood and how residents experience the city.",
    title:
      "The Psychology of Living High: How Vertical Living Shapes Well-Being in Modern Cities",
  }, 
  {
    id: 3,
    date: "2026-03-17",
    image: news_3,
    ogImage: news_3_og,
    description:
      "How modern homes balance two rhythms of city life — the vibrant energy of the day and the need for a quiet, personal sanctuary at night.",
    title:
      "Designing Homes for Two Rhythms of Life: Energy and Sanctuary in Urban Living",
  }, 
  {
    id: 4,
    date: "2026-03-17",
    image: news_4,
    ogImage: news_4_og,
    description:
      "Luxury living in Jakarta has evolved from size and exclusivity to quality of life, design intelligence and access to meaningful lifestyle experiences.",
    title:
      "The New Definition of Luxury Living in Jakarta",
  }, 
];
