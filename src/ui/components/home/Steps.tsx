import type { StepsData } from "../../../../lib/definition";
import HomeCard from "./HomeCard";
import Step from "./Step";
import { useEffect, useState } from "react";
import StepsText from "./StepsText";

const Steps = () => {
  const [steps, setSteps] = useState<StepsData>([]);

  useEffect(() => {
    const fetchSteps = async () => {
      const fetchData = await fetch("/api/steps");
      const data: StepsData = await fetchData.json();
      setSteps(data);
    };
    fetchSteps();
  }, []);

  return (
    <HomeCard view="lg:flex-row flex-col">
      <StepsText />
      <div className="relative w-full grid grid-cols-1 md:grid-cols-2">
        {steps.map((step, index) => {
          const isLeftCol = index % 2 === 0;
          const isTopRow = index < 2;

          return (
            <div
              key={step.id}
              className={`
                relative
                md:p-6 lg:p-6
                ${isLeftCol ? "md:border-r-2 md:border-gray-300" : ""}
                ${isTopRow ? "md:border-b-2 md:border-gray-300" : ""}
              `}
            >
              <Step stepdata={step} />
            </div>
          );
        })}

        {/* Gap square only visible on md+ */}
        <div className="hidden md:block absolute top-1/2 left-1/2 w-6 h-6 bg-white -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </HomeCard>
  );
};

export default Steps;
