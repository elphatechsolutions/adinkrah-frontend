import { Link } from "react-router-dom";
import type { Shop } from "../../../../../lib/definition";

const RelatedCard = ({ product, size }: { product: Shop; size?: string }) => {
  const { id, productName, price, img } = product;

  return (
    <div className={`${size || "w-full"} h-full`}>
      <Link
        to={`/shop/${id}`}
        className="bg-white rounded-xl overflow-hidden h-full flex flex-col"
      >
        <div className="relative overflow-hidden h-100 bg-gray-50">
          <img
            src={img}
            alt={productName}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-5 flex flex-col">
          <div className="flex text-sm  items-center flex-col gap-x-2 text-gray-500 mb-2">
            <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 break-words overflow-hidden text-ellipsis">
              {productName}
            </h2>
            <p>GH₵ {price.toFixed(2)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RelatedCard;
