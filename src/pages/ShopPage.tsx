import CardWrapper from "../ui/components/CardWrapper";
import FilterContainer from "../ui/components/shop/FilterContainer";
import ShopCards from "../ui/components/shop/ShopCards";
import Pagewrapper from "./Pagewrapper";

const ShopPage = () => {
  return (
    <Pagewrapper>
      <CardWrapper>
        <FilterContainer />
        <ShopCards />
      </CardWrapper>
    </Pagewrapper>
  );
};

export default ShopPage;
