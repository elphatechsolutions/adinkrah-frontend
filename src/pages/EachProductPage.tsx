import CardWrapper from "../ui/components/CardWrapper";
import EachShopCard from "../ui/components/shop/ShopItem/EachShopCard";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ItemName from "../ui/components/shop/ShopItem/ItemName";
import { itemsInShop } from "../../lib/data";
const EachProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Redirect to shop page if no ID is provided
  useEffect(() => {
    if (!id) {
      navigate("/shop");
    }
  }, [id, navigate]);

  if (!id) {
    return null; // or a loading spinner
  }

  return (
    <section id="eachProduct" className="h-auto">
      <ItemName id={id} />
      <CardWrapper page="eachPage" width="lg:w-[80%] w-[95%]" className="my-10">
        <EachShopCard productId={id} itemsInShop={itemsInShop} />
      </CardWrapper>
    </section>
  );
};

export default EachProductPage;
