import { useState, useEffect, useRef } from "react";
import NavLinks from "./NavLinks";
import { linkNames } from "../../../../lib/utils";
import { Link } from "react-router-dom";
import Close from "./Close";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [show, setShow] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setShow(true); // Show immediately
      document.body.style.overflow = "hidden"; // Disable scroll when open
    } else {
      // Delay hiding only enough for animation
      const timeout = setTimeout(() => setShow(false), 400); // matches shorter duration
      document.body.style.overflow = "unset"; // Re-enable scroll when closed
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    // The handleOutsideClick function is defined here
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if the click is outside the sidebar
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      // Add a small delay before attaching the listener to avoid the race condition
      const timeoutId = setTimeout(() => {
        document.addEventListener("mousedown", handleOutsideClick);
      }, 0); // 0ms delay pushes the listener to the end of the event queue

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }
    // Cleanup function for when the sidebar is not open
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Background overlay with smooth fade */}
      {isOpen && (
        <div
          className={`fixed block inset-0 bg-[#d9d9d9] w-[80%] z-50 md:hidden h-screen transition-opacity duration-300 ease-out
          ${isOpen ? "bg-opacity-40" : "bg-opacity-0"}`}
          onClick={onClose}
        />
      )}

      {/* Sidebar with smooth slide animation */}
      {show && (
        <div
          ref={sidebarRef}
          className={`fixed top-0 left-0 z-50 h-screen w-4/5 p-4 transition-transform duration-300 ease-out transform
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            md:static md:translate-x-0 md:block`}
        >
          <Close onClose={onClose} />
          <NavLinks
            spacing="px-0 py-2 font-medium text-base leading-[12px] border-b border-b-gray-400 outline-none"
            flexType="flex-col"
            links={linkNames}
            itemsCenter="none"
          />
          <Link
            to="/account/login"
            className="px-1 p-2 w-30 mt-10 block font-medium text-base leading-[12px] rounded-md text-center border border-gray-400"
          >
            Login
          </Link>
        </div>
      )}
    </>
  );
};

export default Sidebar;
