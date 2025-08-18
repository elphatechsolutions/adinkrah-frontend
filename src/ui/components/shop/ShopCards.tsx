import { useEffect, useState } from "react";
import type { ShopData } from "../../../../lib/definition";
import ShopCard from "./ShopCard";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 6;

const ShopCards = () => {
  const [itemsInShop, setItemsInShop] = useState<ShopData>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchShopData = async () => {
      const fetchData = await fetch("/api/shop");
      const data: ShopData = await fetchData.json();
      setItemsInShop(data);
    };
    fetchShopData();
  }, []);

  const totalPages = Math.ceil(itemsInShop.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = itemsInShop.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      <div className="flex flex-wrap justify-between">
        {currentItems.map((item) => (
          <ShopCard key={item.id} data={item} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
};

export default ShopCards;
