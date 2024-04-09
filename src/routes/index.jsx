import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllEventsPage from "../pages/all-events";
import NotFoundPage from "./../pages/404/index";
import Layout from "../components/molecules/layout";

const AppRouting = () => {
  return (
    <Router>
      <Routes>
        {["/"].map((path, key) => (
          <Route
            key={key}
            exact
            path={path}
            element={
              <Layout>
                <AllEventsPage />
              </Layout>
            }
          />
        ))}
        <Route exact path={"*"} element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouting;
