import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ROUTE_PATH } from "../utils/route-paths";
import SuspenseLoader from "../components/molecules/suspenseLoader";

const NotFoundPage = lazy(() => import("../pages/404/index"));
const Layout = lazy(() => import("./../components/molecules/layout"));
import JudgeAllEvents from "./../pages/judge/AllEvents";
import SelectedEvent from "../pages/judge/selectEvent";
import SelectClassJudge from "../pages/judge/selectClass";

const JudgeRoutes = () => {
  return (
    <div>
      <Suspense fallback={<SuspenseLoader />}>
        <Router>
          <Routes>
            {["/", ROUTE_PATH.JUDGE.ALL_EVENT].map((path, id) => (
              <Route
                key={id}
                exact
                path={path}
                element={
                  <Layout>
                    <JudgeAllEvents />
                  </Layout>
                }
              />
            ))}
            <Route
              exact
              path={`${ROUTE_PATH.JUDGE.SELECT_EVENT}/:id`}
              element={
                <Layout>
                  <SelectedEvent />
                </Layout>
              }
            />

            <Route
              exact
              path={`${ROUTE_PATH.JUDGE.SELECT_CLASS}/:id`}
              element={
                <Layout>
                  <SelectClassJudge />
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

export default JudgeRoutes;
