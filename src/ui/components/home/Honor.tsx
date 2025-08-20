import { FaRegCheckCircle } from "react-icons/fa";
import HomeCard from "./HomeCard";
import LinkButton from "./LinkButton";
import Heading from "./Heading";

const Honor = () => {
  const services: string[][] = [
    ["Burial", "Faith-Based"],
    ["Cremation", "Eco-Friendly"],
    ["Memorial"],
  ];

  return (
    <HomeCard view="flex-col">
      <Heading
        heading="Honoring Every Journey with Care"
        size="lg:text-4xl xl:text-6xl md:text-4xl"
      />

      <div className="flex flex-col justify-between my-10">
        <div className="w-full lg:w-[80%] md:w-[70%]">
          <p>
            No two lives are the same — and neither should their farewells be.
            Each life holds its own memories, milestones, and moments of joy. At
            [Your Brand Name], we believe every farewell should be as unique as
            the person being remembered.
          </p>
          <p className="mt-5">
            Our curated funeral packages are designed to honor heritage, and
            love. Whether you envision a quiet or intimate service, we're here
            to help you bring that vision to life.
          </p>
        </div>

        <ul className="w-[80%] lg:w-full md:w-[70%] mt-5 space-y-3">
          {services.map((row, rowIndex) => (
            <li key={rowIndex} className="flex justify-between">
              {row.map((item, index) => (
                <span key={index} className="flex items-center w-1/2">
                  <FaRegCheckCircle className="mr-3" />
                  {item}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>

      <LinkButton linktext="View Products" />
    </HomeCard>
  );
};

export default Honor;
