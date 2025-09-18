import type { Shop } from "../../../../../lib/definition";
import CartBtn from "./CartBtn";
import { useState } from "react";

const ItemInfo = ({
  productData,
  incrementBtn,
  decrementBtn,
  quantity,
  handleAddToCart,
  isAnimating,
}: {
  productData: Shop;
  incrementBtn: () => void;
  decrementBtn: () => void;
  quantity: number;
  handleAddToCart: () => void;
  isAnimating: boolean;
}) => {
  // Use a state variable to track the active tab
  const [activeTab, setActiveTab] = useState<"description" | "shipping">(
    "description"
  );

  const {
    id,
    categories,
    productName,
    price,
    description,
    productDetails,
    customization,
  } = productData;

  return (
    <div className="flex flex-col gap-y-5 px-2 md:px-2 lg:px-2">
      {/* Product Name & Price */}
      <div className="space-y-2">
        <h1 className="font-bold text-2xl xl:text-3xl md:text-2xl">
          {productName}
        </h1>
        <p className="text-gray-800">
          <b className="font-semibold text-lg">GH₵ {price.toFixed(2)}</b>
          <span className="text-sm ml-2 text-gray-600">
            {"(includes personalization & gift packaging)"}
          </span>
        </p>
      </div>

      {/* Product Description (Static) */}
      <p className="text-gray-700">{description}</p>

      {/* Product Details */}
      <div className="space-y-2">
        <h2 className="font-semibold text-lg xl:text-xl md:text-xl">
          Product Details
        </h2>
        <ul className="space-y-1">
          {productDetails?.map((detail, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <span className="text-sm mr-5">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Customization */}
      <div className="space-y-2">
        <h2 className="font-semibold text-lg xl:text-xl md:text-xl">
          Customization
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 pl-4 md:pl-0">
          {customization?.map((detail, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <span className="text-sm mr-5">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
      <CartBtn
        incrementBtn={incrementBtn}
        decrementBtn={decrementBtn}
        handleAddToCart={handleAddToCart}
        isAnimating={isAnimating}
        quantity={quantity}
      />

      {/* SKU & Category */}
      <div className="text-sm text-gray-500 space-y-1">
        <p>SKU: {id}</p>
        <p>Category: {categories}</p>
      </div>

      {/* Toggling Tabs Section */}
      <div>
        <div className="tabs flex gap-x-4">
          <button
            onClick={() => setActiveTab("description")}
            className={`font-medium py-2 px-4 ${
              activeTab === "description"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("shipping")}
            className={`font-medium py-2 px-4 ${
              activeTab === "shipping"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Shipping & Delivery
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4 p-4 border border-gray-200 rounded-lg">
          {activeTab === "description" && (
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus sed, libero illo modi architecto dignissimos
              maiores alias placeat itaque quis ab id cupiditate dolores
              incidunt saepe adipisci distinctio tempore sapiente.
            </p>
          )}
          {activeTab === "shipping" && (
            <p>
              This is the content for Shipping & Delivery. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Incidunt saepe adipisci
              distinctio tempore sapiente.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
