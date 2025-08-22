import type { Shop } from "../../../../lib/definition";
import { Link } from "react-router-dom";
const ShopCard = ({ data }: { data: Shop }) => {
  const { price, quantity, productName, img } = data;
  return (
    <Link to={""} className="relative lg:w-[30%] md:w-[45%] w-[45%] mb-10 h-100 rounded-2xl p-2 bg-[#b9b9b9]">
      <img src={img} alt={productName} />
      <h2>{productName}</h2>
      <p>{quantity}</p>
      <p>{price}</p>
    </Link>
  );
};

export default ShopCard;
