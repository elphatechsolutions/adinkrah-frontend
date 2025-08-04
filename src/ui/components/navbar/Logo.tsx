import { NavLink } from "react-router-dom";
const Logo = () => {
  return (
    <div className="flex items-center">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `${isActive ? "btn-active" : ""} text-xl font-medium text-black`
        }
      >
        AdinkraHomes
      </NavLink>
    </div>
  );
};

export default Logo;
