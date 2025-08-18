import ArrangementCards from "./ArrangementCards";
import Heading from "./Heading";
import HomeCard from "./HomeCard";

const Arrangement = () => {
  return (
    <HomeCard view="flex-col">
      <Heading
        heading="Funeral Arrangements Made Simple"
        size="lg:text-4xl xl:text-6xl md:text-4xl"
        position="lg:text-center"
      />
      <p className="text-left lg:text-center">
        Let us help you honor your loved one in a way that feels right{" "}
        <span className="inline-block lg:block">for you and your family.</span>
      </p>
      <div>
        <ArrangementCards />
      </div>
    </HomeCard>
  );
};

export default Arrangement;
