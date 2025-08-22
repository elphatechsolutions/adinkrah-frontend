import type { StepsData } from "../../../../lib/definition";
import HomeCard from "./HomeCard";
import Step from "./Step";
import { useEffect, useState } from "react";
import StepsText from "./StepsText";

const Steps = () => {
  // const [steps, setSteps] = useState<StepsData>([]);
  const steps = [
    {
      id: "01",
      step: "Step-01",
      title: "Discover Your Options",
      description:
        "Begin by exploring a carefully curated range of funeral services — from traditional burials to modern memorials.",
    },
    {
      id: "02",
      step: "Step-02",
      title: "Customize What Matters",
      description:
        "Select the services that reflect your loved one's wishes. You can personalize elements like venue, music, clergy, or transport.",
    },
    {
      id: "03",
      step: "Step-03",
      title: "Confirm and Book Securely",
      description:
        "Book the services that best fit your needs through our secure platform. We ensure full documentation from start to finish.",
    },
    {
      id: "04",
      step: "Step-04",
      title: "Let Us Coordinate the Details",
      description:
        "Once confirmed, we work closely with our trusted providers to manage every detail. You'll receive updates and guidance throughout.",
    },
  ];
  // useEffect(() => {
  //   const fetchSteps = async () => {
  //     const fetchData = await fetch("/api/steps");
  //     const data: StepsData = await fetchData.json();
  //     setSteps(data);
  //   };
  //   fetchSteps();
  // }, []);

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
