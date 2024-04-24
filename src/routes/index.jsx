import { lazy, Suspense } from "react";
import SuspenseLoader from "../components/molecules/suspenseLoader";
const PublicRoutes = lazy(() => import("./PublicRoutes"));
const SupervisorRoutes = lazy(() => import("./SupervisorRoutes"));
const RiderRoutes = lazy(() => import("./RiderRoutes"));

import Cookies from "js-cookie"; // Import Cookies library
import { useSelector } from "react-redux";
import { reduxAccesstoken, reduxRole } from "../redux/slices/auth";
import { APP_ROLES } from "../utils/route-paths";

const AppRouting = () => {
  // tokens
  const accessTokenRedux = useSelector(reduxAccesstoken);
  const accessTokenCookies = Cookies.get("accessToken");
  // roles
  const RoleRedux = useSelector(reduxRole);
  const roleCookies = Cookies.get("role");

  // redux & cookies
  let authTokenValid = accessTokenRedux || accessTokenCookies;
  let appRole = RoleRedux || roleCookies;

  console.log(appRole, "appRole");
  return (
    <div>
      <Suspense fallback={<SuspenseLoader />}>
        {authTokenValid && appRole === APP_ROLES.SUPERVISOR && <SupervisorRoutes />}
        {authTokenValid && appRole === APP_ROLES.RIDER && <RiderRoutes />}
        {(!authTokenValid || !appRole) && <PublicRoutes />}
      </Suspense>
    </div>
  );
};

export default AppRouting;

// import AllEventsPage from "../pages/all-events";
// import NotFoundPage from "./../pages/404/index";
// import Layout from "../components/molecules/layout";
// import { ROUTE_PATH } from "../utils/route-paths";
// import ArenaPage from "../pages/arena";
// import ArenaDetails from "../pages/arena-details";
// import FirstEvent from "./../pages/first-event/index";
// import SecondEvent from "../pages/second-event";
// import ThirdEvent from "../pages/third-event";
// import FourthEvent from "../pages/fourth-event";
// import FifthEvent from "../pages/fifth-event";
// import RiderProfile from "../pages/rider-profile";
// import HorseProfile from "../pages/horse-profile";
// import StableProfile from "../pages/stable-profile";
// import SignUpPages from "../pages/auth";
// import AllEventsRider from "../pages/event-registration/rider/all-events";
// import RiderRegistration from "../pages/event-registration/rider/rider-registraion";
// import AllEventsJudge from "../pages/event-registration/judge/all-events";
// import ArenaJudgePage from "../pages/event-registration/judge/arena-judge";
// import JudgeFirstEvent from "../pages/event-registration/judge/first-event";
// import JudgeSecondEvent from "../pages/event-registration/judge/second-event";
// import JudgeThirdEvent from "../pages/event-registration/judge/third-event";
// import AllEventsSuperVisor from "../pages/event-registration/supervisor/all-events";
// import CreateEventSupervisorPage from "../pages/event-registration/supervisor/create-event";
// import FirstEventSupervisor from "../pages/event-registration/supervisor/first-event";
// import SupervisorSecondEvent from "../pages/event-registration/supervisor/second-event";
// import SupervisorThirdEvent from "../pages/event-registration/supervisor/third-event";

// const AppRouting = () => {
//   return (
//     <Router>
//       <Routes>
//         {["/", ROUTE_PATH.ALL_EVENTS].map((path, key) => (
//           <Route
//             key={key}
//             exact
//             path={path}
//             element={
//               <Layout>
//                 <AllEventsPage />
//               </Layout>
//             }
//           />
//         ))}
//         <Route
//           exact
//           path={`${ROUTE_PATH.ARENA_ID}/:id`}
//           element={
//             <Layout>
//               <ArenaPage />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.ARENA_DETAILS}`}
//           element={
//             <Layout>
//               <ArenaDetails />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.FIRST_EVENT}`}
//           element={
//             <Layout>
//               <FirstEvent />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.SECOND_EVENT}`}
//           element={
//             <Layout>
//               <SecondEvent />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.THIRD_EVENT}`}
//           element={
//             <Layout>
//               <ThirdEvent />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.FOURTH_EVENT}`}
//           element={
//             <Layout>
//               <FourthEvent />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.FIFTH_EVENT}`}
//           element={
//             <Layout>
//               <FifthEvent />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.RIDER_PROFILE}`}
//           element={
//             <Layout>
//               <RiderProfile />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.HORSE_PROFILE}`}
//           element={
//             <Layout>
//               <HorseProfile />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.STABLE_PROFILE}`}
//           element={
//             <Layout>
//               <StableProfile />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.SIGNUP_PAGES}`}
//           element={
//             <Layout>
//               <SignUpPages />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.ALL_EVENTS_RIDER}`}
//           element={
//             <Layout>
//               <AllEventsRider />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.RIDER_REGISTRAION}`}
//           element={
//             <Layout>
//               <RiderRegistration />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.ALL_EVENT_JUDGE}`}
//           element={
//             <Layout>
//               <AllEventsJudge />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.ARENA_ID_JUDGE}`}
//           element={
//             <Layout>
//               <ArenaJudgePage />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.FIRST_JUDGE_EVENT}`}
//           element={
//             <Layout>
//               <JudgeFirstEvent />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.SECOND_JUDGE_EVENT}`}
//           element={
//             <Layout>
//               <JudgeSecondEvent />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.SECOND_JUDGE_EVENT}`}
//           element={
//             <Layout>
//               <JudgeSecondEvent />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.THIRD_JUDGE_EVENT}`}
//           element={
//             <Layout>
//               <JudgeThirdEvent />
//             </Layout>
//           }
//         />

//         {/* super visor */}
//         <Route
//           exact
//           path={`${ROUTE_PATH.ALL_EVENTS_SUPERVISOR}`}
//           element={
//             <Layout>
//               <AllEventsSuperVisor />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.CREATE_EVENT_SUPERVISOR}`}
//           element={
//             <Layout>
//               <CreateEventSupervisorPage />
//             </Layout>
//           }
//         />

//         <Route
//           exact
//           path={`${ROUTE_PATH.FIRST_SUPERVISOR_EVENT}`}
//           element={
//             <Layout>
//               <FirstEventSupervisor />
//             </Layout>
//           }
//         />
//         <Route
//           exact
//           path={`${ROUTE_PATH.SECOND_SUPERVISOR_EVENT}`}
//           element={
//             <Layout>
//               <SupervisorSecondEvent />
//             </Layout>
//           }
//         />

//         <Route
//           exact
//           path={`${ROUTE_PATH.THIRD_SUPERVISOR_EVENT}`}
//           element={
//             <Layout>
//               <SupervisorThirdEvent />
//             </Layout>
//           }
//         />
//         <Route exact path={"*"} element={<NotFoundPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRouting;
