/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";
import Div from "../../components/atoms/Div";
import Title from "../../components/molecules/title";
import { Appfont } from "../../utils/theme/typo";
import { ROUTE_PATH } from "../../utils/route-paths";
import { AppButton } from "../../components/atoms/AppButton";
import { alpha } from "../../utils/theme/colors";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IntroCard from "./components/IntroCard";

const AllEvents = () => {
  const navigate = useNavigate();
  const handleCreateEvent = () => {
    navigate(ROUTE_PATH.SUPERVISOR.CREATE_EVENT);
  };
  return (
    <Div>
      <IntroCard />
      <Title bg={"#1B2A41"}>Registered</Title>
      <EventCard />
      <hr />
      <EventCard />
      <Div sx={{ p: 3 }}>
        <Div sx={{ display: "flex ", alignItems: "center" }}>
          <IconButton onClick={handleCreateEvent} size="small" sx={{ border: "1px solid red" }}>
            <AddIcon fontSize="small" />
          </IconButton>
          <Appfont sx={{ ml: 2, fontSize: 20 }}>Create Event</Appfont>
        </Div>
      </Div>

      <Div height={40} />
    </Div>
  );
};

export default AllEvents;

const EventCard = () => {
  return (
    <Link to={ROUTE_PATH.CREATE_EVENT_SUPERVISOR}>
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
        <Div sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2, mb: 2 }}>
          <AppButton sx={{ mr: 2, background: "green" }}>{"Edit"}</AppButton>
          <AppButton sx={{ mr: 2, background: "red" }}>{"Delete"}</AppButton>
          <AppButton sx={{ mr: 2, background: "#DBDE27" }}>{"Judge"}</AppButton>
        </Div>
      </Div>
    </Link>
  );
};
