// Layout component: wraps the main structure of the app
import { Outlet } from "react-router-dom";
import Navbar from "../ui/components/navbar/Navbar";
import Footer from "../ui/components/footer/Footer";
import { useLocation } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";
import LoadingOverlay from "../ui/components/animation/LoadingOverlay";
import BackToTop from "../ui/components/animation/BackToTop";
import AuthModal from "../ui/components/account/AuthModal";
// Layout renders the Navbar, Hero section, and the current route's content

const Layout = () => {
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);
  const [serverOtp] = useState<string>("1234");

  //prevent document body from scrolling when login form is displayed
  useEffect(() => {
    document.body.style.overflow = showLogin ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showLogin]);

  return (
    <div>
      {/* Top navigation bar - Hide for blog post pages */}
      {!location.pathname.startsWith("/blog/") &&
        (location.pathname.startsWith("/shop/") &&
        location.pathname.length > 6 ? (
          <Navbar
            onClick={() => setShowLogin(true)}
            width="md:w-[95%] lg:w-[95%] xl:max-w-[95%]"
            topMargin="md:mt-0"
          />
        ) : (
          <Navbar onClick={() => setShowLogin(true)} />
        ))}

      {showLogin && (
        <AuthModal
          onOtp={() => setShowLogin(false)}
          onClose={() => setShowLogin(false)}
          serverOtp={serverOtp}
        />
      )}
      {/* Render the matched child route component */}
      <Suspense fallback={<LoadingOverlay />}>
        <Outlet />
      </Suspense>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Layout;
