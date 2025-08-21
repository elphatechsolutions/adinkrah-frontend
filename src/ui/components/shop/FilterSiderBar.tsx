import { useEffect, useRef, useState } from "react";
import FilterLinks from "./FilterLinks";
import Close from "../navbar/Close";
import { IoFilter } from "react-icons/io5";
import { SideBarLinks } from "../../../../lib/utils";
import type { SideBarLinksType } from "../../../../lib/definition";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  variant: "mobile" | "desktop";
}

const FilterSideBar = ({ isOpen, onClose, variant }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");

  // Collect all links from SideBarLinks
  const [filters]: SideBarLinksType = SideBarLinks;
  const allLinks: { label: string; path: string; section?: string }[] = [];

  const pushLinks = (
    section: string,
    labels: Record<string, string>,
    paths: Record<string, string>
  ) => {
    Object.entries(labels).forEach(([key, label]) => {
      allLinks.push({
        label,
        path: paths[key],
        section,
      });
    });
  };

  pushLinks(
    filters.categories.name,
    filters.categories.categoryTypes,
    filters.categories.categoryPaths
  );
  pushLinks(
    filters.prices.name,
    filters.prices.filterPrices,
    filters.prices.pricePaths
  );
  pushLinks(
    filters.location.name,
    filters.location.locations,
    filters.location.locationPaths
  );
  pushLinks(
    filters.religion.name,
    filters.religion.religions,
    filters.religion.religionPaths
  );
  pushLinks(
    filters.packageType.name,
    filters.packageType.package,
    filters.packageType.packagePaths
  );
  pushLinks(filters.Vendors.name, filters.Vendors.vendors, filters.Vendors.vendorPaths);

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
        {isOpen && (
          <div className="fixed inset-0 bg-opacity-40 z-20" onClick={onClose} />
        )}

        <div
          ref={sidebarRef}
          className={`fixed top-0 left-0 w-[80%] h-full bg-white z-40 shadow-lg transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex justify-between items-center p-5 bg-[#d9d9d9]">
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
              className="w-full flex justify-between border-b border-black"
              onSubmit={e => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="search"
                className="outline-0 border-none w-full"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button type="submit">&#128269;</button>
            </form>
            <FilterLinks links={allLinks} search={search} />
          </div>
        </div>
      </>
    );
  }

  // Desktop sidebar (always visible)
  if (variant === "desktop") {
    return (
      <div ref={sidebarRef} className="p-5 w-full">
        <form
          className="w-full flex justify-between border-b border-black mb-4"
          onSubmit={e => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="search"
            className="outline-0 border-none w-full"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button type="submit">&#128269;</button>
        </form>
        <FilterLinks links={allLinks} search={search} />
      </div>
    );
  }
};

export default FilterSideBar;