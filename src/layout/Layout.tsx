// Layout component: wraps the main structure of the app
import { Outlet } from "react-router-dom";
import Navbar from "../ui/components/navbar/Navbar";
import Hero from "../ui/components/Hero";

// Layout renders the Navbar, Hero section, and the current route's content
const Layout = () => {
  return (
    <div>
      {/* Top navigation bar */}
      <Navbar />
      {/* Hero section below the navbar */}
      <Hero />
      {/* Render the matched child route component */}
      <Outlet />
    </div>
  );
};

export default Layout;
