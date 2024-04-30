import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ROUTE_PATH } from "../utils/route-paths";
import SuspenseLoader from "../components/molecules/suspenseLoader";
import HorseSignup from "../pages/auth/signup/horse-signup";
import StableSignup from "../pages/auth/signup/stable-signup";

const NotFoundPage = lazy(() => import("../pages/404/index"));
const Layout = lazy(() => import("./../components/molecules/layout"));
const RiderEvents = lazy(() => import("../pages/rider/rider-all-events"));
const RiderEventClassRegistration = lazy(() =>
  import("../pages/rider/rider-event-class-registration")
);

const RiderRoutes = () => {
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
              path={ROUTE_PATH.RIDER.HORSE_REGISTER}
              element={
                <Layout>
                  <HorseSignup />
                </Layout>
              }
            />
            <Route
              exact
              path={ROUTE_PATH.RIDER.STABLE_REGISTER}
              element={
                <Layout>
                  <StableSignup />
                </Layout>
              }
            />
            <Route
              exact
              path={ROUTE_PATH.RIDER.EVENT_CLASS_REGISTER}
              element={
                <Layout>
                  <RiderEventClassRegistration />
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

export default RiderRoutes;
