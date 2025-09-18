import Faqs from "../ui/components/faq/Faqs";
import CardWrapper from "../ui/components/CardWrapper";
import Hero from "../ui/components/Hero";
const FaqsPage = () => {
  return (
    <section id="faqs">
      {/* Hero section below the navbar */}
      <Hero page="page" />
      <CardWrapper width="xl:w-[80%] lg:w-[95%] md:w-full w-[95%]" page="page">
        <Faqs />
      </CardWrapper>
    </section>
  );
};

export default FaqsPage;
