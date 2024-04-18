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
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../../utils/route-paths";
import { Appfont } from "./../../utils/theme/typo";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Div from "./../../components/atoms/Div";

const RiderSignUp = () => {
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
      <Avatar src="/avatar.svg" alt="Avatar" sx={{ width: 80, height: 80, marginBottom: 2 }} />
      <Typography variant="h5" gutterBottom>
        Rider Sign Up
      </Typography>
      <form
        style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}
      >
        <TextField
          sx={{ width: "100%", marginBottom: 2 }}
          label="Name"
          variant="outlined"
          required
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
        />
        <TextField
          sx={{ width: "100%", marginBottom: 2 }}
          label="Nationality"
          variant="outlined"
          required
        />
        <FormControl sx={{ width: "100%", marginBottom: 2 }}>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select labelId="gender-label" variant="outlined" defaultValue="" required>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ width: "100%", marginBottom: 2 }}
          label="Email"
          variant="outlined"
          type="email"
          required
        />
        <TextField
          sx={{ width: "100%", marginBottom: 2 }}
          label="Password"
          variant="outlined"
          type="password"
          required
        />
        <TextField
          sx={{ width: "100%", marginBottom: 2 }}
          label="Phone"
          variant="outlined"
          type="tel"
          required
        />
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

        <Div sx={{ width: "100%" ,mt:3 }}>
          <Link to={ROUTE_PATH.ALL_EVENTS_RIDER}>
            <Button
              fullWidth
              sx={{ width: "100%" }}
              type="submit"
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </Link>
        </Div>
      </form>
    </Container>
  );
};

export default RiderSignUp;
