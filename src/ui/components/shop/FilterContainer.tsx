import { useState, useEffect } from "react";
import type { ShopData } from "../../../../lib/definition";
import FilterButton from "./FilterButton";
import FilterSideBar from "./FilterSiderBar";
import ShopCards from "./ShopCards";
import Pagination from "./Pagination";

const CARDS_PER_PAGE = 6;

const FilterContainer = () => {
  // const [itemsInShop, setItemsInShop] = useState<ShopData>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsInShop: ShopData = [
    {
      id: 1,
      productName: "Ashanti Kente Cloth",
      price: 120.0,
      quantity: 10,
      img: "../public/img-placeholder.webp",
    },
    {
      id: 2,
      productName: "Adinkra Symbol Shirt",
      price: 45.99,
      quantity: 25,
      img: "../public/img-placeholder.webp",
    },
    {
      id: 3,
      productName: "African Drum",
      price: 80.5,
      quantity: 5,
      img: "/img-placeholder.webp",
    },
    {
      id: 4,
      productName: "Traditional Beaded Necklace",
      price: 30.0,
      quantity: 15,
      img: "/img-placeholder.webp",
    },
    {
      id: 5,
      productName: "Hand-Carved Stool",
      price: 150.0,
      quantity: 3,
      img: "/img-placeholder.webp",
    },
    {
      id: 6,
      productName: "Adinkra Wall Art",
      price: 70.0,
      quantity: 12,
      img: "/img-placeholder.webp",
    },
    {
      id: 7,
      productName: "Fugu Shirt",
      price: 55.0,
      quantity: 20,
      img: "/img-placeholder.webp",
    },
    {
      id: 8,
      productName: "Calabash Bowl Set",
      price: 35.0,
      quantity: 18,
      img: "../public/img-placeholder.webp",
    },
    {
      id: 9,
      productName: "Gye Nyame Pendant",
      price: 25.5,
      quantity: 40,
      img: "/img-placeholder.webp",
    },
    {
      id: 10,
      productName: "African Print Bag",
      price: 60.0,
      quantity: 8,
      img: "/img-placeholder.webp",
    },
    {
      id: 11,
      productName: "Cultural Fan",
      price: 18.0,
      quantity: 50,
      img: "/img-placeholder.webp",
    },
    {
      id: 12,
      productName: "Handwoven Basket",
      price: 40.0,
      quantity: 22,
      img: "/img-placeholder.webp",
    },
    {
      id: 13,
      productName: "Royal Headwrap",
      price: 28.0,
      quantity: 35,
      img: "/img-placeholder.webp",
    },
    {
      id: 14,
      productName: "Ancestral Mask",
      price: 95.0,
      quantity: 7,
      img: "/img-placeholder.webp",
    },
    {
      id: 15,
      productName: "Palm Wine Cup Set",
      price: 22.0,
      quantity: 13,
      img: "/img-placeholder.webp",
    },
    {
      id: 16,
      productName: "Symbolic Walking Stick",
      price: 85.0,
      quantity: 4,
      img: "/img-placeholder.webp",
    },
    {
      id: 17,
      productName: "African Leather Sandals",
      price: 50.0,
      quantity: 16,
      img: "/img-placeholder.webp",
    },
    {
      id: 18,
      productName: "Traditional Fan Drum",
      price: 110.0,
      quantity: 6,
      img: "/img-placeholder.webp",
    },
  ];

  const closeSidebar = () => setIsOpen(false);

  // useEffect(() => {
  //   const fetchShopData = async () => {
  //     const fetchData = await fetch("/api/shop");
  //     const data: ShopData = await fetchData.json();
  //     setItemsInShop(data);
  //   };

  //   fetchShopData();
  // }, []);

  const totalPages = Math.ceil(itemsInShop.length / CARDS_PER_PAGE);
  const startIdx = (currentPage - 1) * CARDS_PER_PAGE;
  const endIdx = startIdx + CARDS_PER_PAGE;
  const paginatedItems = itemsInShop.slice(startIdx, endIdx);

  return (
    <div className="h-auto flex flex-col">
      {/* Mobile Filter Button */}
      <div className="block lg:hidden p-4">
        <FilterButton onClick={() => setIsOpen(true)} />
      </div>

      {/* Layout: Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar (Sticky and Scrollable) */}
        <div className="hidden lg:block w-64">
          <div className="sticky top-0 h-screen filterSideBar overflow-y-auto bg-white">
            <FilterSideBar isOpen={true} onClose={() => {}} variant="desktop" />
          </div>
        </div>

        {/* Main Content (Scrollable) */}
        <div className="flex-1 px-4 py-6 space-y-6">
          <ShopCards shopCardsData={paginatedItems} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page: number) => setCurrentPage(page)}
            onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            onNext={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          />
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      <FilterSideBar isOpen={isOpen} onClose={closeSidebar} variant="mobile" />
    </div>
  );
};

export default FilterContainer;
