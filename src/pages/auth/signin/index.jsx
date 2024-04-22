import { useState } from "react";
import { Container, TextField } from "@mui/material";
import { Appheading } from "../../../utils/theme/typo";
import Div from "../../../components/atoms/Div";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../../../components/atoms/Loader";
import { AppButton } from "../../../components/atoms/AppButton";
import Cookies from "js-cookie";

const SignInPage = () => {
  // states
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // fns
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when form is being submitted
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/user/logIn`,
        userData
      );
      if (response.data.success === true || response.status === 200) {
        toast.success(response.data.message);
        Cookies.set("accessToken", response.data.token, { expires: 7 }); // Expires in 7 days

        // Optionally, you can redirect the user to another page after successful sign-in
      }
    } catch (error) {
      console.error("Sign-in Error:", error);
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Div
      sx={{
        p: 2,
        backgroundColor: "#ABA8A8",
        height: "100vh",
        width: "100wh",
      }}
    >
      <Div height={50} />

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          width: {
            lg: 600,
            xs: "100%",
          },
        }}
      >
        <Appheading>Sign In</Appheading>
        <Div height={70} />

        <form
          style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}
          onSubmit={handleSubmit}
        >
          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            label="Email"
            variant="outlined"
            type="email"
            required
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            label="Password"
            variant="outlined"
            type="password"
            required
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <Div sx={{ width: "100%", mt: 3 }}>
            {isLoading ? ( // Render loader if loading
              <Loader />
            ) : (
              <AppButton
                fullWidth
                sx={{ width: "100%" }}
                type="submit"
                variant="contained"
                color="primary"
                disabled={isLoading}
              >
                Sign In
              </AppButton>
            )}
          </Div>
        </form>
      </Container>
    </Div>
  );
};

export default SignInPage;
