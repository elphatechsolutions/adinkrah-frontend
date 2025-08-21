import ArrangementCards from "./ArrangementCards";
import Heading from "./Heading";

const Arrangement = () => {
  return (
    <div
      className={`w-[95%] mt-10 lg:mt-30 mx-auto flex flex-col justify-center`}
    >
      <Heading
        heading="Funeral Arrangements Made Simple"
        position="lg:text-center"
      />
      <p className="text-left lg:text-center">
        Let us help you honor your loved one in a way that feels right{" "}
        <span className="inline-block lg:block">for you and your family.</span>
      </p>
      <ArrangementCards />
    </div>

  );
};

export default Arrangement;
