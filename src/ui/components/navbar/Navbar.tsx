import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { MdOutlineVerticalDistribute } from "react-icons/md";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { linkNames } from "../../../../lib/data";
import Cart from "./Cart";
import Account from "./Account";

const Navbar = ({
  width = "md:w-[95%] lg:w-[70%] xl:max-w-[60%]",
  topMargin = "md:mt-10",
  onClick,
}: {
  width?: string;
  topMargin?: string;
  onClick: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  // Update cart count when cart changes
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const count = cart.reduce(
        (total: number, item: any) => total + (item.quantity || 0),
        0
      );
      setCartCount(count);
    };

    // Initial load
    updateCartCount();

    // Listen for cart updates
    window.addEventListener("cartUpdated", updateCartCount);

    // Cleanup
    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

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
        className={`relative w-full bg-[#d9d9d9] lg:bg-white top-0 z-20 p-5 bg-brand m-0 flex justify-between items-center 
                md:top-0 md:bg-white md:mx-auto ${width} ${topMargin} lg:mx-auto`}
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
          <Cart itemsInCart={cartCount} />
          <Account onClick={onClick} />
        </div>
      </div>

      {/* Sidebar (mobile only) */}
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
