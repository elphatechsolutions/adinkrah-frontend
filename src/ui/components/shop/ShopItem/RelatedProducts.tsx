import type { Shop } from "../../../../../lib/definition";
import RelatedCard from "./RelatedCard";

const RelatedProducts = ({
  productId,
  itemsInShop,
}: {
  productId: string;
  itemsInShop: Shop[];
}) => {
  const numProductId = productId ? parseInt(productId, 10) : null;

  // 1. Filter out the current product
  const otherProducts = itemsInShop.filter(
    (product) => product.id !== numProductId
  );

  // 2. Shuffle the remaining products
  const shuffledProducts = [...otherProducts].sort(() => 0.5 - Math.random());

  // 3. Take the first three products from the shuffled array
  const randomProducts = shuffledProducts.slice(0, 3);

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold my-5">Related Products</h2>
      <div className="flex justify-between items-center gap-5 flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row">
        {randomProducts.map((product) => (
          <RelatedCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
