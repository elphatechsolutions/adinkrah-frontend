import { Link } from "react-router-dom";
import Search from "../navbar/Search";
import Social from "../shop/ShopItem/Social";

const Footer = ({ width = "w-full" }: { width?: string }) => {
  return (
    <div className={`bg-[#d9d9d9] ${width}`}>
      <div className="flex flex-col justify-between md:flex-row lg:flex-row gap-y-5 p-5 lg:w-[82%] mx-auto">
        <h1 className="text-lg font-semibold">AdinkraHomes</h1>
        <div className="flex flex-col gap-y-5">
          <div>
            <p>Be the first to know</p>
            <p>We'll send you what matters - no noise, no spam. </p>
          </div>
          <div>
            <Search searchStyles="" />
          </div>

          <div className="text-base">
            <h2 className="mb-2 font-semibold">Social Media</h2>
            <Social />
          </div>
        </div>
        <div>
          <h2 className="mb-2 font-semibold text-base">Quick Links</h2>
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
