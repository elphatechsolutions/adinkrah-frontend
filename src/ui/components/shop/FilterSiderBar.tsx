import { useEffect, useRef } from "react";
import FilterLinks from "./FilterLinks";
import Close from "../navbar/Close";
import { IoFilter } from "react-icons/io5";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterSideBar = ({ isOpen, onClose }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle outside clicks to close sidebar
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }
  }, [isOpen, onClose]);

  return (
    <>
      {/* Background overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-40 z-40" onClick={onClose} />
      )}

      {/* Sidebar panel */}
      <div
        ref={sidebarRef}
        onClick={(e) => e.stopPropagation()} // Prevent bubbling to overlay
        className={`fixed bg-[#d9d9d9] shadow top-0 left-0 z-40 h-screen w-4/5 p-4 transition-transform duration-300 ease-out transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:block`}
      >
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-2 font-bold">
            {" "}
            <span className="mr-1 font-bold">
              <IoFilter />
            </span>
            <span className="text-sm">FILTER</span>
          </div>
          <Close onClose={onClose} />
        </div>
        <FilterLinks />
      </div>
    </>
  );
};

export default FilterSideBar;
