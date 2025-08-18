import type { Steps } from "../../../../lib/definition";
import HomeCard from "./HomeCard";

const Step = ({ stepdata }: { stepdata: Steps }) => {
  const { step, description, title, id } = stepdata;
  return (
    <HomeCard width="w-full" view="flex-col">
      <div className="relative w-auto">
        {/* ID - background number */}
        <div className="text-7xl font-bold text-gray-800">{id}</div>

        {/* STEP - overlay shifted slightly right */}
        <div className="absolute inset-0 flex items-center justify-start pl-10 pointer-events-none">
          <span className="text-3xl text-[#d9d9d9] ">{step}</span>
        </div>
      </div>
      <h2 className="font-semibold mt-5">{title}</h2>
      <p className="mt-5 w-full lg:w-full md:w-[60%]">{description}</p>
    </HomeCard>
  );
};

export default Step;
