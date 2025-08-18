// RouteWrapper component: Sets document title based on current route
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { routes } from "../routes/route";

// RouteWrapper updates the document title when the route changes
export function RouteWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // Find the current route object by matching the pathname
    const route = routes.find((r) => r.path === location.pathname);
    // If the route has a title, set it as the document title
    if (route?.title) {
      document.title = route.title;
    }
  }, [location]);

  // Render children components
  return <>{children}</>;
}

export default RouteWrapper;
