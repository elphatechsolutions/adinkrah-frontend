import type { IconType } from 'react-icons';

export type DateInput = Date | string | number;

interface Route {
  path: string;
  page: React.ComponentType<any>;
  title: string;
}

interface LinkNames {
  name: string;
  path: string;
}

// Corrected interface
export interface Arrangement {
  img: string;
  alt: string;
  name: string;
}

export type Steps = {
  id: string;
  title: string;
  step: string;
  description: string;
};

export interface Shop {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  img: string;
  description?: string;
  images?: string[];
  reviews?: string[];
  categories?: string[]
  relatedProducts?: string[];
  productDetails?: string[];
  customization?: string[];

}

// /lib/definition.ts

export interface QuestionItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQItem {
  id: string;
  category: string;
  questions: QuestionItem[];
}


export interface LinkItem {
  label: string;
  path: string;
  section?: string;
}

// This is the interface for a single link within a category.
export interface SideBarLink {
  name: string;
  path: string;
}

// This is the interface for an entire sidebar category,
// such as "Categories" or "Prices."
export interface SideBarData {
  id: string;
  name: string;
  pathData: string;
  links: Array<{ name: string; path: string }>;
  categoryTypes?: {
    [key: string]: string;
  };
  filterPrices?: {
    [key: string]: string;
  };
  pricePaths?: {
    [key: string]: string;
  };
  locations?: {
    [key: string]: string;
  };
  locationPaths?: {
    [key: string]: string;
  };
  religions?: {
    [key: string]: string;
  };
  religionPaths?: {
    [key: string]: string;
  };
  package?: {
    [key: string]: string;
  };
  packagePaths?: {
    [key: string]: string;
  };
  vendors?: {
    name: string;
    pathData: string;
    vendorNames: {
      [key: string]: string;
    };
    vendorPaths: {
      [key: string]: string;
    };
  };
}

export interface TestimonialType {
  id: number;
  quote: string;
  author: string;
  title: string;
  image: string;
}

export type BlogType = {
  id: number;
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    relation: string;
  };
  tags: string[];
  tag: string;
  likes: number;
  img: string;
  created_at: string;
};

// Base interface for all contact items
export interface Contact {
  label: string;
  address: string
  contactIcon: IconType;
}

// Review interface for each prodcuts
export interface Review {
  id: number;
  by: reviewBy[];
  review: ReviewData[];
}

export interface reviewBy {
  name: string;
  rating: number;
  date: string;
}

export interface ReviewData {
  title: string;
  comment: string;
}

export type ReviewProps = Review[];


// A union type that represents all possible contact items
export type ContactData = Contact[]

export type TestimonialData = TestimonialType[];

export type BlogData = BlogType[]

export type FAQData = FAQItem[]

export type ShopData = Shop[];

export type ArrangementData = Arrangement[];


// This is the final interface for the complete array of sidebar data.
export type SideBarLinksData = SideBarData[];


export type StepsData = Steps[];

export type CustomRoutes = Route[];

export type LinkName = LinkNames[];

export type LinkItemData = LinkItem[]
