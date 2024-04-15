import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllEventsPage from "../pages/all-events";
import NotFoundPage from "./../pages/404/index";
import Layout from "../components/molecules/layout";
import { ROUTE_PATH } from "../utils/route-paths";
import ArenaPage from "../pages/arena";
import ArenaDetails from "../pages/arena-details";
import FirstEvent from "./../pages/first-event/index";
import SecondEvent from "../pages/second-event";

const AppRouting = () => {
  return (
    <Router>
      <Routes>
        {["/", ROUTE_PATH.ALL_EVENTS].map((path, key) => (
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
        <Route
          exact
          path={`${ROUTE_PATH.ARENA_ID}/:id`}
          element={
            <Layout>
              <ArenaPage />
            </Layout>
          }
        />
        <Route
          exact
          path={`${ROUTE_PATH.ARENA_DETAILS}`}
          element={
            <Layout>
              <ArenaDetails />
            </Layout>
          }
        />
        <Route
          exact
          path={`${ROUTE_PATH.FIRST_EVENT}`}
          element={
            <Layout>
              <FirstEvent />
            </Layout>
          }
        />
        <Route
          exact
          path={`${ROUTE_PATH.SECOND_EVENT}`}
          element={
            <Layout>
              <SecondEvent />
            </Layout>
          }
        />
        <Route exact path={"*"} element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouting;
