import type { ShopData } from "../../../../lib/definition";
import ShopCard from "./ShopCard";

const ShopCards = ({ shopCardsData }: { shopCardsData: ShopData }) => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Products
        </h1>
        {/* The responsive grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shopCardsData.map((product) => (
            <ShopCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCards;
