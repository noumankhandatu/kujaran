import { useRef, useState } from "react";
import { Avatar, Button, Container, TextField } from "@mui/material";
import Div from "../../../components/atoms/Div";
import { toast } from "react-toastify";
import Loader from "../../../components/atoms/Loader";
import { useNavigate } from "react-router-dom";
import { Appfont, Appheading } from "../../../utils/theme/typo";
import { useCreateStableMutation } from "../../../redux/services/auth";

const StableSignup = () => {
  // states
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
    phone: "",
    image: selectedFile,
  });
  // hooks
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  const [createStable] = useCreateStableMutation();
  // fns
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageURL) {
      toast.warn("Please select an image");
      return;
    }
    setIsLoading(true); // Set loading to true when form is being submitted
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("email", userData.email);
      formData.append("password", userData.password);
      formData.append("address", userData.address);
      formData.append("phone", userData.phone);
      formData.append("image", selectedFile);

      const response = await createStable(formData);
      if (response.data.success === true || response.status === 200) {
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.error("Signup Error:", error);
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

  // upload image
  const hiddenFileInput = useRef(null);

  const handleImageClick = () => {
    hiddenFileInput.current.click();
  };
  const handleImage = (e) => {
    if (e.target.files.length !== 0) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setSelectedFile(file);
      setImageURL(url);
    }
  };

  return (
    <Div sx={{ p: 2, backgroundColor: "#d1d1d1" }}>
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
        <Div height={30} />
        <Appheading sx={{ textAlign: "center" }}> Stable Registration </Appheading>
        <Appfont sx={{ textAlign: "center", mt: 3, mb: 3 }}>Please register and continue</Appfont>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <input
            ref={hiddenFileInput}
            onChange={handleImage}
            type="file"
            id="getFile"
            style={{ display: "none" }}
          />
          <hr />
          <Div className="button-upload" onClick={handleImageClick} sx={imageBoxStyle}>
            {imageURL ? (
              <img
                src={imageURL}
                alt="ímg"
                style={{ width: "90%", height: "90%", borderRadius: 100 }}
              />
            ) : (
              <Avatar src="/stable.jpg" alt="Avatar" sx={{ width: "90%", height: "90%" }} />
            )}
          </Div>
        </div>

        <form
          style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}
          onSubmit={handleSubmit}
        >
          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            label="Name"
            variant="outlined"
            required
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
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
          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            label="Address"
            variant="outlined"
            required
            name="address"
            value={userData.nationality}
            onChange={handleChange}
          />
          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            label="Phone"
            variant="outlined"
            type="tel"
            required
            name="phone"
            value={userData.phone}
            onChange={handleChange}
          />
          <Div sx={{ width: "100%", mt: 3 }}>
            {isLoading ? ( // Render loader if loading
              <Loader />
            ) : (
              <Button
                fullWidth
                sx={{ width: "100%" }}
                type="submit"
                variant="contained"
                color="primary"
                disabled={isLoading}
              >
                Sign Up
              </Button>
            )}
          </Div>
        </form>
      </Container>
    </Div>
  );
};

export default StableSignup;

const imageBoxStyle = {
  borderRadius: "100%",
  backgroundColor: "#FFFFFF",
  boxShadow: "0 10px 40px 0 rgba(0, 64, 128, 0.1)",
  width: "120px",
  height: "120px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mt: 4,
};
