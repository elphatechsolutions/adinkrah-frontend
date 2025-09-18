import { Link } from "react-router-dom";
const LinkButton = ({ linktext,path }: { linktext?: string, path:string }) => {
  return (
    <div>
      <Link
        to={path}
        className="bg-[#d9d9d9] text-center text-black opacity-80 hover:opacity-100 transition-opacity rounded p-2 block w-aut0 max-w-30"
      >
        {linktext}
      </Link>
    </div>
  );
};

export default LinkButton;
