// TitleWrapper.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { routes } from "../routes/route";

export function RouteWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    const route = routes.find((r) => r.path === location.pathname);
    if (route?.title) {
      document.title = route.title;
    }
  }, [location]);

  return <>{children}</>;
}

export default RouteWrapper;
