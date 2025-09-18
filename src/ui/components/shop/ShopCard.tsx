import type { Shop } from "../../../../lib/definition";
import { Link } from "react-router-dom";

const ShopCard = ({ data }: { data: Shop }) => {
  const { price, quantity, productName, img } = data;

  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
      <Link to={"/shop/" + data.id} className="block h-full">
        {/* Product Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={img}
            alt={productName}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/400x400/FFF/000?text=Image+Unavailable";
              e.currentTarget.onerror = null;
            }}
          />
          {quantity > 0 ? (
            <span className="absolute right-2 top-2 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              In Stock
            </span>
          ) : (
            <span className="absolute right-2 top-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
              Out of Stock
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="mb-1 text-lg font-semibold text-gray-900 line-clamp-2 h-12">
            {productName}
          </h3>

          <div className="mb-3 flex items-center">
            <span className="text-sm text-gray-600">Available: {quantity}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              GH₵ {price.toFixed(2)}
            </span>
            <p className="rounded-md bg-black px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-black">
              View Product
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ShopCard;
