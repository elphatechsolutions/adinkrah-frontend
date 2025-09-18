import type { CustomRoutes } from "../../lib/definition";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"))
const ShopPage = lazy(() => import("../pages/ShopPage"))
const BlogPage = lazy(() => import("../pages/BlogPage"))
const FaqsPage = lazy(() => import("../pages/FaqsPage"))
const ContactPage = lazy(() => import("../pages/ContactPage"))
const EachBlogPage = lazy(() => import("../pages/EachBlogPage"))
const EachProductPage = lazy(() => import("../pages/EachProductPage"))


export const routes: CustomRoutes = [
  {
    path: "/",
    page: HomePage,
    title: "Adinkra Homes - Home",
  },
  {
    path: "/blog/:id",
    page: EachBlogPage,
    title: "Adinkra Homes - Blog",
  },
  {
    path: "/shop/:id",
    page: EachProductPage,
    title: "Adinkra Homes - Shop",
  },
  {
    path: "/shop",
    page: ShopPage,
    title: "Adinkra Homes - Shop",
  },
  {
    path: "/blog",
    page: BlogPage,
    title: "Adinkra Homes - Blogs",
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
