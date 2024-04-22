/* eslint-disable react/prop-types */
import { Appfont, Appheading } from "../../../utils/theme/typo";
import Div from "../../../components/atoms/Div";
import Title from "../../../components/molecules/title";
import { alpha } from "../../../utils/theme/colors";
import { AppButton } from "../../../components/atoms/AppButton";
import { useNavigate } from "react-router-dom";
import RiderModel from "./modal";
import { useState } from "react";
import { ROUTE_PATH } from "../../../utils/route-paths";

const AllEventsRider = () => {
  const navigate = useNavigate();
  const [showModel, setshowModel] = useState(false);

  const handleModel = () => {
    setshowModel((pre) => !pre);
  };

  const handleReg = () => {
    navigate(ROUTE_PATH.RIDER_REGISTRAION);
  };
  return (
    <Div>
      {showModel && <RiderModel />}

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
      <EventCard handleClick={handleModel} />
      <hr />
      <EventCard handleClick={handleModel} />
      <Title bg={"#1B2A41"}>Events</Title>
      <EventCard btnText={"Registered"} bg={"green"} handleClick={handleReg} />
      <hr />
      <EventCard btnText={"Registered"} bg={"green"} handleClick={handleReg} />
      <hr />
      <EventCard btnText={"Registered"} bg={"green"} handleClick={handleReg} />
      <hr />
      <EventCard btnText={"Registered"} bg={"green"} handleClick={handleReg} />
    </Div>
  );
};

export default AllEventsRider;

const EventCard = ({ btnText = "Cancel", bg = "red", handleClick }) => {
  return (
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
      <AppButton onClick={handleClick} sx={{ mr: 2, background: bg }}>
        {btnText}
      </AppButton>
    </Div>
  );
};
