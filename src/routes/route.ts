import type { CustomRoutes } from "../../lib/definition";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import BlogPage from "../pages/BlogPage";
import FaqsPage from "../pages/FaqsPage";
import ContactPage from "../pages/ContactPage";


export const routes: CustomRoutes = [
  {
    path: "/",
    page: HomePage,
    title: "Adinkra Homes - Home",
  },
  {
    path: "/shop",
    page: ShopPage,
    title: "Adinkra Homes - Shop",
  },
  {
    path: "/blog",
    page: BlogPage,
    title: "Adinkra Homes - Blog",
  },
  {
    path: "/faqs",
    page: FaqsPage,
    title: "Adinkra Homes - FAQs",
  },
  {
    path: "/contact",
    page: ContactPage,
    title: "Adinkra Homes - Contact",
  },
];
