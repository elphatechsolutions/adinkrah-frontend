import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { linkNames } from "../../../../lib/utils";
import Dropdown from "./Dropdown";
const Navbar = () => {
  return (
    <div className="bg-white navbar flex justify-between items-center w-7xl mt-10 mx-auto p-3 top-0">
      <Logo />
      <NavLinks links={linkNames} />
      <Dropdown />
    </div>
  );
};

export default Navbar;
