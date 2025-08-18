import Heading from "./Heading";
import LinkButton from "./LinkButton";

const StepsText = () => {
  return (
    <>
      <div className="flex flex-col items- justify-center gap-10">
        <Heading
          heading="From First Call to Final Tribute"
          size="lg:text-4xl xl:text-6xl md:text-4xl"
        />
        <p className="w-[80%] lg:w-[70%] md:w-[70%]">
          From first contact to the final farewell, we guide you through a
          simple, respectful process—so you never feel alone in the decisions
          ahead.
        </p>
        <LinkButton />
      </div>
    </>
  );
};

export default StepsText;
