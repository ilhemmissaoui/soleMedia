// File: @/data/menu-data.ts

export type MenuItem = {
  id: number;
  title: string;
  link: string;
  has_dropdown?: boolean;
  sub_menus?: {
    title: string;
    link: string;
    has_inner_dropdown?: boolean;
    inner_submenu?: {
      title: string;
      link: string;
    }[];
  }[];
};

const menu_data: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About Us",
    link: "/about-us",
  },
  {
    id: 3,
    title: "Services",
    link: "/service",
  },
  {
    id: 4,
    title: "TikTok Agency",
    link: "/tiktok-agency",
  },
  {
    id: 5,
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    id: 6,
    title: "Blogs",
    link: "/blog",
  },
];

export default menu_data;
