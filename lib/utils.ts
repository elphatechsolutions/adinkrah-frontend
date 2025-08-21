import type { LinkName, SideBarLinksType, DateInput, LinkItemData } from "./definition";

export const linkNames: LinkName = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Blog", path: "/blog" },
  { name: "FAQS", path: "/faqs" },
  { name: "Contact Us", path: "/contact" },
];

export const SideBarLinks: SideBarLinksType = [
  {
    categories: {
      name: "Categories",
      pathData: "/shop/categories",
      categoryTypes: {
        burial: "Burial Packages",
        crement: "Cremation Packages",
        memorial: "Memorial Services",
        religious: "Religious Ceremonies",
        products: "Products",
      },
      categoryPaths: {
        burial: "/shop/categories/burial",
        crement: "/shop/categories/crement",
        memorial: "/shop/categories/memorial",
        religious: "/shop/categories/religious",
        products: "/shop/categories/products",
      },
    },
    prices: {
      name: "Prices",
      pathData: "/shop/prices",
      filterPrices: {
        low: "Under $500",
        medium: "$500 - $1500",
        high: "Over $1500",
      },
      pricePaths: {
        low: "/shop/prices/low",
        medium: "/shop/prices/medium",
        high: "/shop/prices/high",
      },
    },
    location: {
      name: "Location / Region",
      pathData: "/shop/location",
      locations: {
        accra: "Accra",
        kumasi: "Kumasi",
        takoradi: "Takoradi",
      },
      locationPaths: {
        accra: "/shop/location/accra",
        kumasi: "/shop/location/kumasi",
        takoradi: "/shop/location/takoradi",
      },
    },
    religion: {
      name: "Religious Affiliation",
      pathData: "/shop/religion",
      religions: {
        chrsitian: "Christian",
        muslim: "Muslim",
        traditional: "Traditional",
        secular: "Secular / Non-religious",
      },
      religionPaths: {
        chrsitian: "/shop/religion/chrsitian",
        muslim: "/shop/religion/muslim",
        traditional: "/shop/religion/traditional",
        secular: "/shop/religion/secular",
      },
    },
    packageType: {
      name: "Package Type",
      pathData: "/shop/package-type",
      package: {
        basic: "Basic",
        standard: "Standard",
        premium: "Premium",
      },
      packagePaths: {
        basic: "/shop/package-type/basic",
        standard: "/shop/package-type/standard",
        premium: "/shop/package-type/premium",
      },
    },
    Vendors: {
      name: "Vendors",
      pathData: "/shop/vendors",
      vendors: {
        venderA: "Vendor A",
        venderB: "Vendor A",
        venderC: "Vendor C",
      },
      vendorPaths: {
        venderA: "/shop/vendors/venderA",
        venderB: "/shop/vendors/venderB",
        venderC: "/shop/vendors/venderC",
      },
    },
  },
];


export const blogSideBarLinks: LinkItemData = [
  {
    label: "Planning & Preparation",
    path: "/blog/planning-preparation"
  },
  {
    label: "Grief & Healing",
    path: "/blog/grief-healing"
  },
  {
    label: "Financial Guidance",
    path: "/blog/financial-guidance"
  },
  {
    label: "Stories & Reflections",
    path: "/blog/stories-reflections"
  },
  {
    label: "Faith & Spirituality",
    path: "/blog/faith-spirituality"
  }
];

//edit date format for blog dates
const toDate = (input: DateInput): Date => {
  return input instanceof Date ? input : new Date(input)
}

const getDataWithSuffix = (input: DateInput): String => {
  const date = toDate(input)
  const day: number = date.getDate()

  day > 3 && day > 21 ? (
    `${day}th`
  ) : "";

  switch (day % 10) {
    case 1: return `${day}st`;
    case 2: return `${day}nd`
    case 3: return `${day}rd`
    default: return `${day}th`
  }
}

export const formatFullDate = (input: DateInput, locale: string = "en-GB"): string => {
  const date = toDate(input);
  const weekDayWithSuffix = getDataWithSuffix(date);
  const month: string = date.toLocaleDateString(locale, { month: "long" })
  const year: string = date.getFullYear().toString()
  return `${weekDayWithSuffix} ${month} ${year}`
}