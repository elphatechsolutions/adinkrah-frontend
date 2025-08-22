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
  loading: "eager" | "lazy" | undefined;
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
  image: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface LinkItem {
  label: string;
  path: string;
  section?: string;
}

export type SideBarLinksType = Array<{
  categories: {
    name: string;
    pathData: string;
    categoryTypes: {
      burial: string;
      crement: string;
      memorial: string;
      religious: string;
      products: string;
    };
    categoryPaths: Record<string, string>;
  };
  prices: {
    name: string;
    pathData: string;
    filterPrices: Record<string, string>;
    pricePaths: Record<string, string>;
  };
  location: {
    name: string;
    pathData: string;
    locations: Record<string, string>;
    locationPaths: Record<string, string>;
  };
  religion: {
    name: string;
    pathData: string;
    religions: {
      chrsitian: string;
      muslim: string;
      traditional: string;
      secular: string;
    };
    religionPaths: Record<string, string>;
  };
  packageType: {
    name: string;
    pathData: string;
    package: {
      basic: string;
      standard: string;
      premium: string;
    };
    packagePaths: Record<string, string>;
  };
  Vendors: {
    name: string;
    pathData: string;
    vendors: {
      venderA: string;
      venderB: string;
      venderC: string;
    };
    vendorPaths: Record<string, string>;
  };
}>;

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  image: string;
}

export interface BlogType {
  id: number
  title: string
  content: string
  tag: string
  author: {
    id: number
    name: string
    relation: string
  },
  tags: []
  likes: number
  img: string
  created_at: Date

}


// Base interface for all contact items
export interface Contact {
  label: string;
  address: string
  contactIcon: IconType;
}


// A union type that represents all possible contact items
export type ContactData = Contact[]

export type TestimonialData = Testimonial[];

export type BlogData = BlogType[]

export type FAQData = FAQItem[]

export type ShopData = Shop[];

export type ArrangementData = Arrangement[];

export type StepsData = Steps[];

export type CustomRoutes = Route[];

export type LinkName = LinkNames[];

export type LinkItemData = LinkItem[]
