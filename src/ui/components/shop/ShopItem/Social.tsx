import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div>
      {" "}
      <div className="text-base">
        <Link to={""}>
          <FaInstagram className="inline-block mr-2" />
        </Link>
        <Link to={""}>
          <FaTiktok className="inline-block mr-2" />{" "}
        </Link>
        <Link to={""}>
          <FaXTwitter className="inline-block mr-2" />
        </Link>
        <Link to={""}>
          <CiFacebook className="inline-block mr-2" />
        </Link>
      </div>
    </div>
  );
};

export default Social;
