import { NavLink } from "react-router-dom";
import type { SideBarData } from "../../../../lib/definition";

interface FilterLinksProps {
  links: SideBarData[];
  search: string;
}

const FilterLinks = ({ links, search }: FilterLinksProps) => {
  // Filter categories and their links by search query
  const searchTerm = search.toLowerCase().trim();
  const filteredCategories = links

    //create a new array of links using map function based on if
    //the search term can be found in any category name from our array
    .map((category) => {
      // If search term matches category name, show all its links
      if (searchTerm && category.name.toLowerCase().includes(searchTerm)) {
        return category;
      }

      // Otherwise, filter links within the category
      const filteredLinks = searchTerm
        ? category.links.filter((link) =>
            link.name.toLowerCase().includes(searchTerm)
          )
        : category.links;

      return { ...category, links: filteredLinks };
    })
    .filter((category) => category.links.length > 0);

  if (filteredCategories.length === 0) {
    return <div className="text-gray-400 p-4">No filters found.</div>;
  }

  return (
    <aside className="overflow-y-auto text-base md:text-sm lg:text-base">
      {filteredCategories.map((category) => (
        <div key={category.id} className="mb-6">
          <h2 className="font-bold text-lg mb-2 text-gray-900">
            {category.name}
          </h2>
          <ul className="space-y-1">
            {category.links.map((link, idx) => (
              <li key={`${category.id}-${idx}`}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block py-1 px-2 rounded-md transition-colors hover:bg-gray-100 ${
                      isActive
                        ? "bg-red-500 text-white font-medium"
                        : "text-gray-600 hover:text-gray-900"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default FilterLinks;
