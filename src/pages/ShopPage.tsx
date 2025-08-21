import CardWrapper from "../ui/components/CardWrapper";
import FilterContainer from "../ui/components/shop/FilterContainer";
import Pagewrapper from "./Pagewrapper";

const ShopPage = () => {
  return (
    <Pagewrapper>
      <CardWrapper width="w-[95%]">
        <FilterContainer />
      </CardWrapper>
    </Pagewrapper>
  );
};

export default ShopPage;
