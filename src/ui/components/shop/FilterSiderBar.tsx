import { useEffect, useRef, useState } from "react";
import FilterLinks from "./FilterLinks";
import Close from "../navbar/Close";
import { IoFilter } from "react-icons/io5";
import type { SideBarLinksData } from "../../../../lib/definition";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  links: SideBarLinksData;
  variant: "mobile" | "desktop";
}

const FilterSideBar = ({ isOpen, onClose, variant, links }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");

  // Handle body scroll lock only on mobile
  useEffect(() => {
    if (variant === "mobile") {
      document.body.style.overflow = isOpen ? "hidden" : "unset";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen, variant]);

  // Handle outside clicks only for mobile
  useEffect(() => {
    if (variant !== "mobile") return;

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
  }, [isOpen, onClose, variant]);

  if (variant === "mobile") {
    return (
      <>
        {/* Enhanced overlay with blur and smooth transition */}
        <div
          className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
            isOpen
              ? "bg-black/50 backdrop-blur-sm pointer-events-auto"
              : "bg-transparent pointer-events-none"
          }`}
          onClick={onClose}
        />

        {/* Enhanced sidebar with smooth slide animation */}
        <div
          ref={sidebarRef}
          className={`fixed top-0 left-0 h-screen w-[80%] max-w-sm bg-white z-50 shadow-2xl transform transition-all duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } overflow-y-auto filterSideBar `}
        >
          <div className="sticky top-0 w-full flex justify-between items-center p-5 bg-[#d9d9d9] z-10">
            <div className="flex items-center gap-2">
              <span className="text-2xl">
                <IoFilter />
              </span>
              <span className="text-base font-semibold">FILTER</span>
            </div>
            <Close onClose={onClose} />
          </div>
          <div className="p-5">
            <form
              className="w-full flex justify-between mb-10 border-b border-black"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="search"
                className="outline-0 border-none w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">&#128269;</button>
            </form>
            <FilterLinks links={links} search={search} />
          </div>
        </div>
      </>
    );
  }

  // Desktop sidebar (always visible)
  if (variant === "desktop") {
    return (
      <div
        ref={sidebarRef}
        className="mt-20 w-full flex flex-col h-auto overflow-y-auto justify-center mb-40"
      >
        <form
          className="w-full flex justify-between border-b border-black mb-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="search"
            className="outline-0 border-none w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">&#128269;</button>
        </form>
        <FilterLinks links={links} search={search} />
      </div>
    );
  }
};

export default FilterSideBar;
