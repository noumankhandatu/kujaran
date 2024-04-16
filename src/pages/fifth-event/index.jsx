import { AppButton } from "../../components/atoms/AppButton";
import Div from "../../components/atoms/Div";
import Title from "../../components/molecules/title";
import { alpha } from "../../utils/theme/colors";
import { Appfont, Appheading } from "../../utils/theme/typo";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "./../../utils/route-paths/index";

const FifthEvent = () => {
  return (
    <div>
      <EventCard />
      <Title color="black" bg="#969696">
        Arena 1
      </Title>
      <Div sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
        <Div>
          <Appfont>Class Name</Appfont>
          <Appfont>Class Status</Appfont>
          <Appfont>Class Starttime</Appfont>
          <Appfont>Class Number of Participants</Appfont>
        </Div>
        <Link to={ROUTE_PATH.RIDER_PROFILE}>
          <AppButton sx={{ background: "#CF0E0E" }}>Live</AppButton>
        </Link>
      </Div>
      <AppButton>Result List</AppButton>
      <AppButton>Start Order</AppButton>
      <Title></Title>

      {[1, 2, 3, 4, 5, 6, 7, 8].map((items) => {
        return (
          <Div key={items}>
            <Div sx={flexer}>
              <Div>
                <Appfont>Rider name</Appfont>
                <Appfont>Horse name</Appfont>
                <Appfont>Horse number</Appfont>
              </Div>
              <Div>
                <Appfont>Estimated Starttime : xx/xx/xx</Appfont>
              </Div>
            </Div>
            <hr />
          </Div>
        );
      })}
    </div>
  );
};

export default FifthEvent;
const EventCard = () => {
  return (
    <Div
      sx={{ display: "flex", alignItems: "center", gap: 2, background: alpha, cursor: "pointer" }}
    >
      <img src="/eventlogo.png" alt="" />
      <Div>
        <Appheading>Event Name</Appheading>
        <Appfont>Event Location</Appfont>
        <Appfont>Event Startdate - Event Enddate </Appfont>
      </Div>
    </Div>
  );
};
const flexer = {
  display: "flex",
  justifyContent: "space-between",
  ml: {
    lg: 8,
    xs: 1,
  },
  mr: {
    lg: 8,
    xs: 1,
  },
  alignItems: "center",
};
