/* eslint-disable react/prop-types */
import { Appfont, Appheading } from "../../utils/theme/typo";
import Div from "../../components/atoms/Div";
import Title from "../../components/molecules/title";
import { alpha } from "../../utils/theme/colors";
import { AppButton } from "../../components/atoms/AppButton";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../../utils/route-paths";

const HorseProfile = () => {
  return (
    <Div>
      <Div sx={{ p: 2, background: "#BEC9D9" }}>
        <Appheading>Horse Name</Appheading>
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
        <Appfont>Listed Horse : </Appfont>
        <Div sx={{ ml: 2, mt: 3 }}>
          <ul>
            <li>
              <Appfont>Horse #1</Appfont>
            </li>
            <li>
              <Appfont>Horse #2</Appfont>
            </li>
            <li>
              <Appfont>Horse #3</Appfont>
            </li>
          </ul>
        </Div>
      </Div>
      <Title bg={"#1B2A41"}>Registered</Title>
      <EventCard />
      <hr />
      <EventCard />
      <Title bg={"#1B2A41"}>History</Title>
      <EventCard btnText={"Placed #1"} />
      <hr />
      <EventCard btnText={"Placed #2"} />
      <hr />
      <EventCard btnText={"Placed #3"} />
      <hr />
      <EventCard btnText={"Placed #4"} />
    </Div>
  );
};

export default HorseProfile;

const EventCard = ({ btnText = "Class Name" }) => {
  return (
    <Link to={ROUTE_PATH.STABLE_PROFILE}>
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
        <AppButton sx={{ mr: 2 }}>{btnText}</AppButton>
      </Div>
    </Link>
  );
};
