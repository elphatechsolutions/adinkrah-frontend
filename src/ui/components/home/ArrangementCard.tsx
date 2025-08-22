import { Link } from "react-router-dom";
import type { Arrangement } from "../../../../lib/definition"; // Notice the import is for the single object interface

// The component expects a single object matching the ArrangementData interface.
const ArrangementCard = ({ data }: { data: Arrangement }) => {
  const { img, alt, name } = data;
  return (
    <div className="w-full h-100 bg-[#d9d9d9] relative rounded-2xl">
      <img
        src={img}
        alt={alt}
        loading={"lazy"}
        className="w-full m-0 p-0 h-full rounded-2xl"
      />
      <Link
        to={"/services"}
        className="w-[80%] block absolute bottom-10 left-1/2 font-semibold text-center -translate-x-1/2 bg-white p-5 text-base text-black rounded-2xl"
      >
        {name}
      </Link>
    </div>
  );
};

export default ArrangementCard;
