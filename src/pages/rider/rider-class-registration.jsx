/* eslint-disable react/prop-types */
import { Appfont, Appheading } from "../../utils/theme/typo";
import Div from "../../components/atoms/Div";
import Title from "../../components/molecules/title";
import { alpha } from "../../utils/theme/colors";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../../utils/route-paths";
import { IconButton, TextField } from "@mui/material";
import { AppButton } from "../../components/atoms/AppButton";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const RiderClassRegistration = () => {
  return (
    <Div>
      <Div sx={{ p: 2, background: "#BEC9D9" }}>
        <Appheading>Rider Name</Appheading>
        <Div height={30} />
        <Div sx={{ display: "flex" }}>
          <img src="/avatar.svg" alt="" />
          <Div sx={{ ml: 2 }}>
            <Appfont>DOB</Appfont>
            <Appfont>Nationality</Appfont>
            <Appfont>Gender</Appfont>
            <Appfont>Stable</Appfont>
          </Div>
        </Div>
      </Div>
      <Title bg={"#1B2A41"}>Registered</Title>
      <EventCard />
      <Div sx={{ m: 2 }}>
        <TextField
          sx={{ width: "100%", marginBottom: 2 }}
          label="Class"
          variant="outlined"
          type="Class"
          required
        />
        <TextField
          sx={{ width: "100%", marginBottom: 2 }}
          label="Horse"
          variant="outlined"
          type="password"
          required
        />
        <Div sx={{ display: "flex", gap: 3 }}>
          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            label="Stabling"
            variant="outlined"
            type="tel"
            required
            InputProps={{
              endAdornment: (
                <IconButton>
                  <CalendarMonthIcon />
                </IconButton>
              ),
            }}
          />
          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            label="Stabling"
            variant="outlined"
            type="tel"
            required
            InputProps={{
              endAdornment: (
                <IconButton>
                  <CalendarMonthIcon />
                </IconButton>
              ),
            }}
          />
        </Div>
      </Div>

      <Div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          backgroundColor: "#ABA8A8",
        }}
      >
        <Appfont>Total</Appfont>
        <Appfont>Payment</Appfont>
        <Link to={ROUTE_PATH.ALL_EVENT_JUDGE}>
          <AppButton sx={{ background: "green" }}>Payment</AppButton>
        </Link>
      </Div>
    </Div>
  );
};

export default RiderClassRegistration;

const EventCard = () => {
  return (
    <Link to={ROUTE_PATH.ALL_EVENT_JUDGE}>
      <Div
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          background: alpha,
          cursor: "pointer",
          justifyContent: "space-between",
        }}
      >
        <Div sx={{ display: "flex", gap: 2 }}>
          <img src="/eventlogo.png" alt="" />
          <Div>
            <Appfont>Event Name</Appfont>
            <Appfont>Event Location</Appfont>
            <Appfont>Event Startdate - Event Enddate </Appfont>
          </Div>
        </Div>
      </Div>
    </Link>
  );
};
