import AsideImages from "./AsideImages";
import HeroImg from "./HeroImg";
import ItemInfo from "./ItemInfo";
import { useState } from "react";
import Social from "./Social";
import Reviews from "./Reviews";
import RelatedProducts from "./RelatedProducts";
import type { Shop } from "../../../../../lib/definition";
import { reviews } from "../../../../../lib/data";
import ProductNotFound from "../../errors/ProductNotFound";
import {
  saveAddToCartToLocalStorage,
  getCartFromLocalStorage,
} from "../../../../../lib/utils";

interface EachShopCardProps {
  productId: string;
  itemsInShop: Shop[];
}
const EachShopCard = ({ productId, itemsInShop }: EachShopCardProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  const productData = itemsInShop.find(
    (item: { id: number }) => item.id === Number(productId)
  );

  if (!productData) {
    return <ProductNotFound />;
  }

  const incrementBtn = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementBtn = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const reviewsToShow = reviews.slice(0, 3);

  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1200);
    const cart = getCartFromLocalStorage();
    const item = cart.find(
      (item: { product_id: number }) => item.product_id === Number(productId)
    );
    if (item) {
      item.quantity += quantity;
    } else {
      cart.push({
        product_id: Number(productId),
        quantity,
        price: productData.price,
      });
    }
    saveAddToCartToLocalStorage(cart);
    
    // Dispatch custom event to notify about cart update
    window.dispatchEvent(new Event('cartUpdated'));
  };

  return (
    // {"mdium and small screesn design "}
    <div className="w-full bg-white shadow p-2">
      <div className="flex flex-col gap-6 md:flex lg:flex xl:hidden 2xl:hidden">
        {/* Top Row - Hero and Info Side by Side on MD+ */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Hero Image - Left side on MD+ */}
          <div className="w-full md:flex-1">
            <div className="">
              <HeroImg images={productData.img || ""} />
            </div>
          </div>

          {/* Product Info - Right side on MD+ */}
          <div className="w-full md:w-96 lg:w-[28rem] md:sticky md:top-4 md:self-start">
            <ItemInfo
              productData={productData}
              quantity={quantity}
              isAnimating={isAnimating}
              incrementBtn={incrementBtn}
              decrementBtn={decrementBtn}
              handleAddToCart={handleAddToCart}
            />
          </div>
        </div>

        {/* Bottom Row - Aside Images */}
        <div className="full">
          <AsideImages images={productData.images || []} />
        </div>
      </div>

      {/*xxl 2xl screen design */}
      <div className="container w-full hidden h-auto xl:grid gap-5 grid-cols-7 grid-rows-1">
        <div className="col-span-1">
          <AsideImages images={productData.images || []} />
        </div>
        <div className="col-span-3">
          <HeroImg images={productData.img || ""} />
        </div>
        <div className="col-span-3">
          <ItemInfo
            productData={productData}
            quantity={quantity}
            isAnimating={isAnimating}
            incrementBtn={incrementBtn}
            decrementBtn={decrementBtn}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2 mx-auto py-5">
        <div className="px-2">Share:</div>
        <Social />
      </div>
      <div>
        <Reviews reviews={reviewsToShow || []} />
      </div>
      <div>
        <RelatedProducts productId={productId} itemsInShop={itemsInShop} />
      </div>
    </div>
  );
};

export default EachShopCard;
