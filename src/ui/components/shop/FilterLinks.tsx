import { NavLink } from "react-router-dom";

interface LinkItem {
  label: string;
  path: string;
  section?: string;
}

interface FilterLinksProps {
  links: LinkItem[];
  search: string;
}

const FilterLinks = ({ links, search }: FilterLinksProps) => {
  // Filter links by search query
  const filteredLinks = search
    ? links.filter(link => link.label.toLowerCase().includes(search.toLowerCase()))
    : links;

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
                {link.section && <span className="font-semibold">{link.section}:</span>} {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default FilterLinks;
