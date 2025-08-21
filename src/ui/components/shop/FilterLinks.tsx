import { NavLink } from "react-router-dom";
import { SideBarLinks } from "../../../../lib/utils";
import type { SideBarLinksType } from "../../../../lib/definition";

interface FilterLinksProps {
  search: string;
}

const FilterLinks = ({ search }: FilterLinksProps) => {
  const [filters]: SideBarLinksType = SideBarLinks;

  // Collect all links from all sections
  const allLinks: { label: string; path: string; section: string }[] = [];

  // Helper to push links from a section
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

  pushLinks(filters.categories.name, filters.categories.categoryTypes, filters.categories.categoryPaths);
  pushLinks(filters.prices.name, filters.prices.filterPrices, filters.prices.pricePaths);
  pushLinks(filters.location.name, filters.location.locations, filters.location.locationPaths);
  pushLinks(filters.religion.name, filters.religion.religions, filters.religion.religionPaths);
  pushLinks(filters.packageType.name, filters.packageType.package, filters.packageType.packagePaths);
  pushLinks(filters.Vendors.name, filters.Vendors.vendors, filters.Vendors.vendorPaths);

  // Filter links by search query
  const filteredLinks = search
    ? allLinks.filter(link => link.label.toLowerCase().includes(search.toLowerCase()))
    : allLinks;

  return (
    <aside className="overflow-y-auto text-base md:text-[12px] lg:text-lg my-10">
      {filteredLinks.length === 0 ? (
        <div className="text-gray-400">No filters found.</div>
      ) : (
        <ul className="flex flex-col gap-2 mb-30">
          {filteredLinks.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block py-1 rounded-md transition-colors hover:text-gray-950 ${isActive ? "bg-red-500 text-white font-bold" : "text-gray-400"
                  }`
                }
              >
                <span className="font-semibold">{link.section}:</span> {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default FilterLinks;
