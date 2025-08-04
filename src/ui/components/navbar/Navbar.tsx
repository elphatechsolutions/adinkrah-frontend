import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Search from "./Search";
import Dropdown from "./Dropdown";
import { linkNames } from "../../../../lib/utils";

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
    <div>
      <div className="bg-white navbar flex justify-between items-center w-auto md:max-w-3xl lg:max-w-4xl md:mt-10 mt-0 mx-auto p-3 top-0">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden cursor-pointer"
          >
            {isOpen ? (
              <RxCross1 className="w-7 h-7" />
            ) : (
              <RxHamburgerMenu className="w-7 h-7" />
            )}
          </button>
          <Logo />
        </div>

        {/* Middle: Search bar on medium screens */}
        <div className="hide-below-530 hide-md-up">
          <Search searchStyles="none" />
        </div>

        {/* Right: NavLinks (desktop only) */}
        <div className="hidden md:block">
          <NavLinks
            spacing="px-5"
            links={linkNames}
            flexType="row"
            itemsCenter="items-center"
          />
        </div>

        <Dropdown />
      </div>

      {/* Sidebar (mobile only) */}
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Navbar;
