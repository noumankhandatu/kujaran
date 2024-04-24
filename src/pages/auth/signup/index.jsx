import { Appfont, Appheading } from "../../../utils/theme/typo";
import Div from "../../../components/atoms/Div";
import RiderSignUp from "./rider-signup";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "./../../../utils/route-paths/index";

const SignUpPage = () => {
  return (
    <Div sx={{ p: 2, backgroundColor: "#ABA8A8" }}>
      <Div height={30} />
      <Appheading sx={{ textAlign: "center" }}> Welcome to Kujaran</Appheading>
      <Appfont sx={{ textAlign: "center", mt: 3, mb: 3 }}>Please register and continue</Appfont>
      <RiderSignUp />
      <Div height={30} />
      <Appfont sx={{ textAlign: "center" }}>
        Already registered ? <Link to={ROUTE_PATH.AUTH.SIGNIN}> Login</Link>
      </Appfont>
    </Div>
  );
};

export default SignUpPage;
