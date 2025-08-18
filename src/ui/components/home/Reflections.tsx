import Heading from "./Heading";
import HomeCard from "./HomeCard";
import LinkButton from "./LinkButton";
import { Link } from "react-router-dom";
const Reflections = () => {
  return (
    <HomeCard>
      <div className="my-10 rounded-2xl">
        <Heading heading="Insights & Reflections" />
        <p>
          Thoughtful reflections, planning tips, and words of comfort — all here
          to help you feel supported.
        </p>
        <LinkButton />
        <div>
          <img src="/img-placeholder.webp" alt="image here" />
          <div>
            <span></span> <span></span>
          </div>
        </div>
        <Link to={"/post"}>
          <Heading heading="10 Inspirational Quotations About Grief and Comforting" />
        </Link>
      </div>
    </HomeCard>
  );
};

export default Reflections;
