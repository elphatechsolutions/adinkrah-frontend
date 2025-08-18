import { NavLink } from "react-router-dom";
const Logo = () => {
  return (
    <div>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `${
            isActive ? "btn-active" : ""
          } text-xl font-medium text-black font-bold`
        }
      >
        AdinkraHomes
      </NavLink>
    </div>
  );
};

export default Logo;
