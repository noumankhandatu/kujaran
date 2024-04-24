import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ROUTE_PATH } from "../utils/route-paths";
import SuspenseLoader from "../components/molecules/suspenseLoader";
import SignUpVerificationMaiPage from "../pages/auth/signup/verification-mail";

const SignUpPage = lazy(() => import("../pages/auth/signup"));
const NotFoundPage = lazy(() => import("../pages/404/index"));
const SignInPage = lazy(() => import("../pages/auth/signin"));

const PublicRoutes = () => {
  return (
    <div>
      <Suspense fallback={<SuspenseLoader />}>
        <Router>
          <Routes>
            {["/", ROUTE_PATH.AUTH.SIGNIN].map((path, id) => (
              <Route key={id} exact path={path} element={<SignInPage />} />
            ))}

            <Route
              exact
              path={ROUTE_PATH.AUTH.VERIFY_MAIL}
              element={<SignUpVerificationMaiPage />}
            />
            <Route exact path={ROUTE_PATH.AUTH.SIGNUP} element={<SignUpPage />} />

            <Route exact path={"*"} element={<NotFoundPage />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default PublicRoutes;
