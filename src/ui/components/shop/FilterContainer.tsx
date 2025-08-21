import { useState, useEffect } from "react";
import type { ShopData } from "../../../../lib/definition";
import FilterButton from "./FilterButton";
import FilterSideBar from "./FilterSiderBar";
import ShopCards from "./ShopCards";
import Pagination from "./Pagination";

const CARDS_PER_PAGE = 6;

const FilterContainer = () => {
  const [itemsInShop, setItemsInShop] = useState<ShopData>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    const fetchShopData = async () => {
      const fetchData = await fetch("/api/shop");
      const data: ShopData = await fetchData.json();
      setItemsInShop(data);
    };

    fetchShopData();
  }, []);

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
            <FilterSideBar isOpen={true} onClose={() => { }} variant="desktop" />
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
            onNext={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          />
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      <FilterSideBar isOpen={isOpen} onClose={closeSidebar} variant="mobile" />
    </div>
  );
};

export default FilterContainer;