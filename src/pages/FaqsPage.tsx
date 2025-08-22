import Pagewrapper from "./Pagewrapper";
import Faqs from "../ui/components/faq/Faqs";
import CardWrapper from "../ui/components/CardWrapper";
const FaqsPage = () => {
  return (
    <Pagewrapper>
      <CardWrapper width="lg:w-[80%] w-[95%]">
        <Faqs />
      </CardWrapper>
    </Pagewrapper>
  );
};

export default FaqsPage;
