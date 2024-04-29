import { Link, useParams } from "react-router-dom";
import Title from "../../components/molecules/title";
import Div from "../../components/atoms/Div";
import { Appfont } from "../../utils/theme/typo";
import { ROUTE_PATH } from "../../utils/route-paths";
import { AppButton } from "../../components/atoms/AppButton";
import EventCard from "./components/EventCard";
import { Avatar } from "@mui/material";
import { useGetClassDetailsQuery } from "../../redux/services/supervisor-apis";

const SelectedClass = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const classId = searchParams.get("selectclass");
  const { id } = useParams();
  console.log(classId, "classId");
  const { data } = useGetClassDetailsQuery({ eventId: id, classId: classId });
  console.log(data?.classDetails, "classDetails");
  // useGetClassByIdMutation
  return (
    <div>
      <EventCard />
      <Title color="black" bg="#969696">
        Arena {data?.classDetails?.classId}
      </Title>
      <Div sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
        <Div>
          <Appfont>Class Name : {data?.classDetails?.className}</Appfont>
          <Appfont>Class Status : {data?.classDetails?.classStatus}</Appfont>
          <Appfont>Class StartTime : {data?.classDetails?.classStartTime}</Appfont>
          <Appfont>
            Class Number of Participants : {data?.classDetails?.participants.length}
          </Appfont>
        </Div>
        <Link to={ROUTE_PATH.SECOND_SUPERVISOR_EVENT}>
          <AppButton sx={{ background: "#CF0E0E" }}>Live</AppButton>
        </Link>
      </Div>

      <AppButton>Result List</AppButton>
      <AppButton>Start Order</AppButton>
      {data?.classDetails?.participants.length === 0 && (
        <Appfont sx={{ textAlign: "center", mt: 3, mb: 3 }}>No Participant&apos;s Found</Appfont>
      )}
      {data?.classDetails?.participants.length !== 0 && (
        <div>
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
      )}
    </div>
  );
};

export default SelectedClass;
