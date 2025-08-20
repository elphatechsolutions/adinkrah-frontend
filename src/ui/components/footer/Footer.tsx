import { Link } from "react-router-dom";
import Search from "../navbar/Search";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#d9d9d9]">
      <div className="flex flex-col justify-between md:flex-row lg:flex-row gap-y-5 p-5 lg:w-[82%] mx-auto" >
        <h1 className="text-3xl font-semibold">AdinkraHomes</h1>
        <div className="flex flex-col gap-y-5">
          <div>
            <p>Be the first to know</p>
            <p>We'll send you what matters - no noise, no spam. </p>
          </div>
          <div>
            <Search searchStyles="" />
          </div>

          <div className="text-base md:text-2xl lg:text-2xl">
            <h2 className="mb-2 font-bold">Social Media</h2>
            <Link to={""}><FaInstagram className="inline-block mr-2" /></Link>
            <Link to={""}><FaTiktok className="inline-block mr-2" /> </Link>
            <Link to={""}><FaXTwitter className="inline-block mr-2" /></Link>
            <Link to={""}><CiFacebook className="inline-block mr-2" /></Link>
          </div>
        </div>
        <div>
          <h2 className="mb-2 font-bold text-base md:text-2xl lg:text-2xl">Quick Links</h2>
          <div className="flex flex-col gap-y-2">
            <Link to={"/about"}>About us</Link>
            <Link to={"/shop"}>Shop</Link>
            <Link to={"/shop"}>Block</Link>
            <Link to={"/shop"}>Contact Us</Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col justify-between md:flex-row gap-y-5 p-5 lg:w-[82%] mx-auto">
        <p>{`${new Date().getFullYear()}. © Adinkra Homes. All Rights Reserved`}</p>
        <div className="flex flex-col md:flex-row lg:flex-row gap-x-5 xl:flex-row">
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
