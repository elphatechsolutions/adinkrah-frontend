import { Link } from "react-router-dom";
import Search from "../navbar/Search";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#d9d9d9] flex flex-col gap-y-5 p-5">
      <h1 className="text-3xl font-semibold">AdinkraHomes</h1>
      <div>
        <p>Be the first to know</p>
        <p>We'll send you what matters - no noise, no spam. </p>
      </div>
      <div>
        <Search searchStyles="" />
      </div>
      <div>
        <h2 className="mb-2">Quick Links</h2>
        <div className="flex flex-col gap-y-2">
          <Link to={"/about"}>About us</Link>
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/shop"}>Block</Link>
          <Link to={"/shop"}>Contact Us</Link>
        </div>
      </div>
      <div>
        <h2 className="mb-2">Social Media</h2>
        <div className="flex gap-x-5">
          <FaInstagram className=" w-7 h-7" />
          <CiFacebook className=" w-7 h-7" />
          <FaTiktok className=" w-7 h-7" />
          <FaXTwitter className=" w-7 h-7" />
        </div>
      </div>
      <hr />
      <div>
        <p>{`${new Date().getFullYear()}. © Adinkra Homes. All Rights Reserved`}</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
    </div>
  );
};

export default Footer;
