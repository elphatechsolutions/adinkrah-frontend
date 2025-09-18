import CardWrapper from "../ui/components/CardWrapper";
import Hero from "../ui/components/Hero";
import ShopContainer from "../ui/components/shop/ShopContainer";

const ShopPage = () => {
  return (
    <div>
      {/* Hero section below the navbar */}
      <Hero page="page" />
      <CardWrapper width="lg:w-[90%] xl:w-[90%] md:w-[90%] w-[80%]" page="page">
        <ShopContainer />
      </CardWrapper>
    </div>
  );
};

export default ShopPage;
