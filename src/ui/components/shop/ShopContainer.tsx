import { useState } from "react";
import { itemsInShop } from "../../../../lib/data";
import FilterSideBar from "./FilterSiderBar";
import ShopCards from "./ShopCards";
import Pagination from "./Pagination";
import { SideBarLinks } from "../../../../lib/data";
import FilterButton from "./FilterButton";

const CARDS_PER_PAGE = 6;

const ShopContainer = () => {
  // const [itemsInShop, setItemsInShop] = useState<ShopData>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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
      <div className="block">
        <FilterButton onClick={() => setIsOpen(true)} />
      </div>

      {/* Layout: Sidebar + Content */}
      <div className="flex">
        {/* Sidebar (Sticky and Scrollable)
        <div className="hidden lg:block w-64">
          <div className="sticky top-0 h-screen md:h-150 lg:h-150 filterSideBar overflow-y-auto bg-white">
            <FilterSideBar
              isOpen={true}
              onClose={() => {}}
              variant="desktop"
              links={SideBarLinks}
            />
          </div>
        </div>
 */}
        {/* Main Content (Scrollable) */}
        <div className="flex-1">
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
      <FilterSideBar
        isOpen={isOpen}
        onClose={closeSidebar}
        links={SideBarLinks}
        variant="mobile"
      />
    </div>
  );
};

export default ShopContainer;
