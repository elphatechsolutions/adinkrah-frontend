import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { linkNames } from "../../../../lib/utils";
import Search from "./Search";
import Logo from "./Logo";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true); // Show immediately
    } else {
      // Delay hiding only enough for animation
      const timeout = setTimeout(() => setShow(false), 100); // matches shorter duration
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {show && (
        <div
          className={`fixed top-0 left-0 z-50 h-screen w-64 p-4 shadow-md bg-[#d9d9d9] transition-transform duration-100 ease-in-out transform
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            md:static md:translate-x-0 md:block`}
        >
          <Logo />
          <Search searchStyles="py-5" />
          <NavLinks
            spacing="px-0 py-2"
            flexType="flex-col"
            links={linkNames}
            itemsCenter="none"
          />
        </div>
      )}
    </>
  );
};

export default Sidebar;
