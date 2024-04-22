import { useRef, useState } from "react";
import {
  Avatar,
  Button,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Appfont, Appheading } from "../../../utils/theme/typo";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Div from "../../../components/atoms/Div";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../../../components/atoms/Loader";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../../../utils/route-paths";

const RiderSignUp = () => {
  // states
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    dob: "",
    nationality: "",
    gender: "",
    email: "",
    password: "",
    phone: "",
    image: selectedFile,
  });
  // hooks
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();

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
      formData.append("nationality", userData.nationality);
      formData.append("phone", userData.phone);
      formData.append("dob", userData.dob);
      formData.append("gender", userData.gender);
      formData.append("image", selectedFile);
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/user/signUp`,
        formData
      );
      if (response.data.success === true || response.status === 200) {
        toast.success(response.data.message);
        navigate(ROUTE_PATH.AUTH.VERIFY_MAIL);
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
            <Avatar src="/avatar.svg" alt="Avatar" sx={{ width: "90%", height: "90%" }} />
          )}
        </Div>
      </div>

      <Appheading>Rider Sign Up</Appheading>
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
          label="Nationality"
          variant="outlined"
          required
          name="nationality"
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
        <TextField
          sx={{ width: "100%", marginBottom: 2 }}
          label="DOB"
          variant="outlined"
          type="date"
          required
          InputLabelProps={{
            shrink: true,
          }}
          name="dob"
          value={userData.dob}
          onChange={handleChange}
        />
        <FormControl sx={{ width: "100%", marginBottom: 2 }}>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            variant="outlined"
            defaultValue=""
            required
            name="gender"
            value={userData.gender}
            onChange={handleChange}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
        <Div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Appfont>Rider</Appfont>
          <IconButton sx={{ border: "1px solid red", background: "white" }}>
            <AddIcon color="error" fontSize="small" />
          </IconButton>
        </Div>
        <Div height={20} />
        <Div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Appfont>Horse</Appfont>
          <IconButton sx={{ border: "1px solid red", background: "white" }}>
            <RemoveIcon color="success" fontSize="small" />
          </IconButton>
        </Div>

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
  );
};

export default RiderSignUp;

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
