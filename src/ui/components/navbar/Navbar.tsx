import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { MdOutlineVerticalDistribute } from "react-icons/md";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { linkNames } from "../../../../lib/utils";
import Cart from "./Cart";
import Account from "./Account";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close sidebar on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // md breakpoint in Tailwind
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className="fixed w-full bg-[#d9d9d9] top-0 z-50 p-5 bg-brand m-0 flex justify-between items-center 
                md:sticky md:top-0 md:bg-white md:mx-auto md:mt-10 md:w-[95%] lg:w-[80%] lg:mx-auto"
      >
        {/* Left: Hamburger + Logo small screens only */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden cursor-pointer"
          >
            <MdOutlineVerticalDistribute className="w-7 h-7" />
          </button>
        </div>

        {/* Middle: Logo small screens only */}
        <div className="flex justify-center">
          <Logo />
        </div>

        {/*Middle NavLinks (desktop only) */}
        <div className="hidden md:block">
          <NavLinks
            spacing="px-5"
            links={linkNames}
            flexType="row"
            itemsCenter="items-center"
          />
        </div>
        {/* Call to action on small all screens */}
        <div className="flex items-center gap-2">
          <Cart />
          <Account />
        </div>
      </div>

      {/* Sidebar (mobile only) */}
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
