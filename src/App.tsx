import "./App.css";
import { Route, Routes } from "react-router-dom";
import RouteWrapper from "../src/routewrapper/RouteWrapper";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import { routes } from "./routes/route";

function App() {
  return (
    <RouteWrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {routes.map((r, i) => (
            <Route key={i} path={r.path} element={<r.page />} />
          ))}
        </Route>
      </Routes>
    </RouteWrapper>
  );
}

export default App;
