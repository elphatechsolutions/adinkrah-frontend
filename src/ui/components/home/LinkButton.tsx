import { Link } from "react-router-dom";
const LinkButton = ({ linktext }: { linktext?: string }) => {
  return (
    <div>
      <Link
        to={"/products"}
        className="bg-[#d9d9d9] text-black opacity-80 hover:opacity-100 transition-opacity rounded p-2 block w-40"
      >
        {linktext}
      </Link>
    </div>
  );
};

export default LinkButton;
