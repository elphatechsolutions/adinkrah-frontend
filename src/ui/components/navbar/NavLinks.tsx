// Import type for link names and NavLink from react-router-dom
import type { LinkName } from "../../../../lib/definition";
import { NavLink } from "react-router-dom";

// NavLinks component renders a list of navigation links
const NavLinks = ({
  links,
  flexType,
  itemsCenter,
  spacing,
}: {
  links: LinkName;
  flexType: string;
  itemsCenter: string;
  spacing: string;
}) => {
  return (
    <div>
      {/* Navigation links list */}
      <ul className={`flex ${flexType} ${itemsCenter}`}>
        {links.map((link, i) => (
          // Each link rendered as a list item
          <li key={i} className={`${spacing} text-base`}>
            {/* NavLink provides active styling based on route */}
            <div className="w-full">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block w-full text-base transition-colors duration-200 ${
                    isActive ? "text-red-500 font-bold" : "text-black font-light"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
