import { Link } from "react-router-dom";
import { itemsInShop } from "../../../../../lib/data";

const ItemName = ({ id }: { id: string }) => {
  const product = itemsInShop.find((item) => item.id === Number(id));
  return (
    <div className="bg-[#d9d9d9] py-5">
      <p className="xl:w-[90%] xl:ml-auto ml-5">
        <Link to="/shop">Shop</Link> {" >"} {product?.productName}
      </p>
    </div>
  );
};

export default ItemName;
