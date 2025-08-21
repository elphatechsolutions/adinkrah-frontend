import type { ShopData } from "../../../../lib/definition";
import ShopCard from "./ShopCard";

const ShopCards = ({ shopCardsData }: { shopCardsData: ShopData }) => {

  return (
    <div className="flex flex-wrap justify-between grow">
      {shopCardsData.map((item) => (
        <ShopCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ShopCards;
