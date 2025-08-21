import { NavLink } from "react-router-dom";
import { SideBarLinks } from "../../../../lib/utils";
import type { SideBarLinksType } from "../../../../lib/definition";

const FilterSidebar = () => {
  // SideBarLinks is an array with one object, so destructure it for convenience
  const [filters]: SideBarLinksType = SideBarLinks;

  // Helper function to render a section of links given labels and paths
  const renderSection = (
    title: string,
    labels: Record<string, string>,
    paths: Record<string, string>
  ) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 md:text-sm lg:text-lg">{title}</h3>
      <ul className="flex flex-col gap-2">
        {Object.entries(labels).map(([key, label]) => (
          <li key={key}>
            <NavLink
              to={paths[key]}
              className={({ isActive }) =>
                `block py-1 rounded-md transition-colors hover:text-gray-950 ${isActive ? "bg-red-500 text-white font-bold" : "text-gray-400"
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <aside
      className="overflow-y-auto h-screen text-base md:text-[12px] lg:text-lg my-10"
      style={{ maxHeight: "100vh", scrollbarWidth: "none" }}
    >
      {" "}
      {renderSection(
        filters.categories.name,
        filters.categories.categoryTypes,
        filters.categories.categoryPaths
      )}
      {renderSection(
        filters.prices.name,
        filters.prices.filterPrices,
        filters.prices.pricePaths
      )}
      {renderSection(
        filters.location.name,
        filters.location.locations,
        filters.location.locationPaths
      )}
      {renderSection(
        filters.religion.name,
        filters.religion.religions,
        filters.religion.religionPaths
      )}
      {renderSection(
        filters.packageType.name,
        filters.packageType.package,
        filters.packageType.packagePaths
      )}
      <div className="mb-50">
        {renderSection(
          filters.Vendors.name,
          filters.Vendors.vendors,
          filters.Vendors.vendorPaths
        )}
      </div>
    </aside>
  );
};

export default FilterSidebar;
