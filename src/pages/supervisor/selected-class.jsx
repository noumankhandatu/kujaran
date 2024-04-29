import { Link } from "react-router-dom";
import Title from "../../components/molecules/title";
import Div from "../../components/atoms/Div";
import { Appfont } from "../../utils/theme/typo";
import { ROUTE_PATH } from "../../utils/route-paths";
import { AppButton } from "../../components/atoms/AppButton";
import EventCard from "./components/EventCard";
import { Avatar } from "@mui/material";

const SelectedClass = () => {
  // useGetClassByIdMutation
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
        <Link to={ROUTE_PATH.SECOND_SUPERVISOR_EVENT}>
          <AppButton sx={{ background: "#CF0E0E" }}>Live</AppButton>
        </Link>
      </Div>
      <AppButton>Result List</AppButton>
      <AppButton>Start Order</AppButton>
      <Div sx={{ p: 2 }}>
        <img src="" alt="" />
      </Div>

      <Div sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <Div sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar />
          <div>
            <Appfont>Rider Name</Appfont>
            <Appfont>Horse Name </Appfont>
            <Appfont>Horse Number</Appfont>
          </div>
        </Div>
        <div>
          <Appfont>Estimated Starttime : xx.xx</Appfont>
        </div>
      </Div>
    </div>
  );
};

export default SelectedClass;
