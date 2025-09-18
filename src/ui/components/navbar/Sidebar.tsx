import { useEffect, useRef } from "react";
import NavLinks from "./NavLinks";
import { linkNames } from "../../../../lib/data";
import { Link } from "react-router-dom";
import Close from "./Close";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
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
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isOpen
            ? "bg-black/50 backdrop-blur-sm pointer-events-auto"
            : "bg-transparent pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar with enhanced slide animation */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-50 h-screen w-[80%] p-6 transform transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-[#d9d9d9] shadow-2xl overflow-y-auto filterSideBar`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">Menu</h2>
          <Close onClose={onClose} />
        </div>

        <nav className="space-y-2">
          <NavLinks
            spacing="px-0 py-3 font-medium text-gray-700"
            flexType="flex-col"
            links={linkNames}
            itemsCenter="none"
          />

          <Link
            to="/account/login"
            className="block w-full mt-6 px-4 py-2 text-center font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105"
          >
            Login
          </Link>
        </nav>

        {/* Optional: Add a nice decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
      </div>
    </>
  );
};

export default Sidebar;
