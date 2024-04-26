import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ROUTE_PATH } from "../utils/route-paths";
import SuspenseLoader from "../components/molecules/suspenseLoader";
import SelectedEvent from "../pages/supervisor/selected-event";
import SelectedClass from "../pages/supervisor/selected-class";

const NotFoundPage = lazy(() => import("../pages/404/index"));
const Layout = lazy(() => import("./../components/molecules/layout"));
const AllEvents = lazy(() => import("../pages/supervisor/all-event"));
const CreateEvent = lazy(() => import("../pages/supervisor/create-event"));

const SupervisorRoutes = () => {
  return (
    <div>
      <Suspense fallback={<SuspenseLoader />}>
        <Router>
          <Routes>
            {["/", ROUTE_PATH.SUPERVISOR.ALL_EVENT].map((path, id) => (
              <Route
                key={id}
                exact
                path={path}
                element={
                  <Layout>
                    <AllEvents />
                  </Layout>
                }
              />
            ))}
            <Route
              exact
              path={ROUTE_PATH.SUPERVISOR.CREATE_EVENT}
              element={
                <Layout>
                  <CreateEvent />
                </Layout>
              }
            />
            <Route
              exact
              path={`${ROUTE_PATH.SUPERVISOR.SELECT_EVENT}/:id`}
              element={
                <Layout>
                  <SelectedEvent />
                </Layout>
              }
            />{" "}
            <Route
              exact
              path={`${ROUTE_PATH.SUPERVISOR.SELECT_CLASS}/:id`}
              element={
                <Layout>
                  <SelectedClass />
                </Layout>
              }
            />
            <Route
              exact
              path={"*"}
              element={
                <Layout>
                  <NotFoundPage />
                </Layout>
              }
            />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default SupervisorRoutes;
