/* eslint-disable react/prop-types */
import { Appfont, Appheading } from "../../../utils/theme/typo";
import Div from "../../../components/atoms/Div";
import Title from "../../../components/molecules/title";
import { alpha } from "../../../utils/theme/colors";
import { AppButton } from "../../../components/atoms/AppButton";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../../../utils/route-paths";

const AllEventsJudge = () => {
  return (
    <Div>
      <Div sx={{ p: 2, background: "#BEC9D9" }}>
        <Appheading>Judge</Appheading>
        <Div height={30} />
        <Div sx={{ display: "flex" }}>
          <img src="/avatar.svg" alt="" />
          <Div sx={{ ml: 2 }}>
            <Appfont>Judge Name</Appfont>
            <Appfont>DOB</Appfont>
            <Appfont>Nationality</Appfont>
          </Div>
        </Div>
      </Div>
      <Title bg={"#1B2A41"}>Registered</Title>
      <EventCard />
      <hr />
      <EventCard />
    </Div>
  );
};

export default AllEventsJudge;

const EventCard = ({ btnText = "Judge", bg = "#DBDE27" }) => {
  return (
    <Link to={ROUTE_PATH.ARENA_ID_JUDGE}>
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
        <AppButton sx={{ mr: 2, background: bg }}>{btnText}</AppButton>
      </Div>
    </Link>
  );
};
