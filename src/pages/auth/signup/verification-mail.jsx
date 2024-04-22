import { useEffect, useState } from "react";
import Div from "../../../components/atoms/Div";
import { beta, primary } from "../../../utils/theme/colors";
import { Appfont, Appheading } from "../../../utils/theme/typo";
import { AppButton } from "../../../components/atoms/AppButton";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../../../utils/route-paths";

const SignUpVerificationMailPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Function to extract token from URL and log it
    const extractTokenFromURL = () => {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const token = urlSearchParams.get("token");
      if (token) {
        setIsVerified(true);
      }
    };

    extractTokenFromURL();
  }, []);

  const [isVerified, setIsVerified] = useState(false);

  const handleLogin = () => {
    navigate(ROUTE_PATH.AUTH.SIGNIN);
  };

  return (
    <Div sx={{ height: "100vh", width: "100wh", background: beta }}>
      <Div
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {!isVerified && (
          <Appheading sx={{ color: "white" }}>
            <b>Sign Up Verification</b>{" "}
          </Appheading>
        )}

        <Div height={50} />
        {isVerified ? (
          <>
            <Appfont sx={{ textAlign: "center", color: "white" }}>
              Congrats You are now verified! <br/>
              Let&lsquo;s Login now click the below button thankyou ... !
            </Appfont>
            <Div height={30} />
            <AppButton
              sx={{ background: primary }}
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </AppButton>
          </>
        ) : (
          <Appfont sx={{ textAlign: "center", color: "white" }}>
            A verification email has been sent to your{" "}
            <span style={{ color: "yellow" }}>inbox</span>. <br /> Please follow the instructions in
            the email to complete the sign-up process.
          </Appfont>
        )}
      </Div>
    </Div>
  );
};

export default SignUpVerificationMailPage;
