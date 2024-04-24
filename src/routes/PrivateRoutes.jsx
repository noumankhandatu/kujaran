import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ROUTE_PATH } from "../utils/route-paths";
import SuspenseLoader from "../components/molecules/suspenseLoader";

const NotFoundPage = lazy(() => import("../pages/404/index"));
const Layout = lazy(() => import("./../components/molecules/layout"));
const RiderEvents = lazy(() => import("../pages/rider/rider-all-events"));
const RiderEventRegistration = lazy(() => import("../pages/rider/rider-event-register"));
const RiderClassRegistration = lazy(() => import("../pages/rider/rider-class-registration"));

const PublicRoutes = () => {
  return (
    <div>
      <Suspense fallback={<SuspenseLoader />}>
        <Router>
          <Routes>
            {["/", ROUTE_PATH.RIDER.ALL_EVENTS].map((path, id) => (
              <Route
                key={id}
                exact
                path={path}
                element={
                  <Layout>
                    <RiderEvents />
                  </Layout>
                }
              />
            ))}

            <Route
              exact
              path={ROUTE_PATH.RIDER.EVENT_REGISTER}
              element={
                <Layout>
                  <RiderEventRegistration />
                </Layout>
              }
            />
            <Route
              exact
              path={ROUTE_PATH.RIDER.CLASS_REGISTER}
              element={
                <Layout>
                  <RiderClassRegistration />
                </Layout>
              }
            />

            <Route exact path={"*"} element={<NotFoundPage />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default PublicRoutes;
