import type { LinkName } from "../../../../lib/definition";
import { NavLink } from "react-router-dom";
const NavLinks = ({ links }: { links: LinkName }) => {
  return (
    <div>
      <ul className="flex items-center">
        {links.map((link, i) => (
          <li key={i} className="px-5">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `relative px-2 py-1 transition-colors duration-200
     ${
       isActive
         ? "text-red-500"
         : `text-gray-800 hover:text-black 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:h-[2px] after:bg-black after:w-0 
          hover:after:w-full after:transition-all after:duration-300`
     }
    `
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
