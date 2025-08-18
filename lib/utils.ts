import type { LinkName, SideBarLinksType } from "./definition";

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
