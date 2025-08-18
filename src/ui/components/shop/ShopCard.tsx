import type { Shop } from "../../../../lib/definition";

const ShopCard = ({ data }: { data: Shop }) => {
  const { price, quantity, productName, image } = data;
  return (
    <div className="relative w-[48%] my-10 rounded-2xl p-2 bg-[#b9b9b9]">
      <img src={image} alt={productName} />
      <h2>{productName}</h2>
      <p>{quantity}</p>
      <p>{price}</p>
    </div>
  );
};

export default ShopCard;
