import { Link, useParams } from "react-router-dom";
import Title from "../../components/molecules/title";
import Div from "../../components/atoms/Div";
import { AppMessage, Appfont } from "../../utils/theme/typo";
import { ROUTE_PATH } from "../../utils/route-paths";
import { AppButton } from "../../components/atoms/AppButton";
import EventCard from "./components/EventCard";
import { useGetClassDetailsQuery } from "../../redux/services/supervisor-apis";
import Apploader from "../../components/atoms/Apploader";
import AppDateFormatter from "../../components/hooks/DateFormatter";

const SelectedClass = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const classId = searchParams.get("selectclass");
  const { id } = useParams();
  const { data, isLoading } = useGetClassDetailsQuery({ eventId: id, classId: classId });
  // useGetClassByIdMutation

  if (isLoading) return <Apploader />;
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
          <Appfont>
            Class StartTime :
            <AppDateFormatter> {data?.classDetails?.classStartTime}</AppDateFormatter>
          </Appfont>
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
        <AppMessage>No Participants found</AppMessage>
      )}
      {data?.classDetails?.participants.length !== 0 && (
        <div>
          {data?.classDetails?.participants.map((participant, index) => (
            <div key={index}>
              <Div
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: 2,
                  background: "#ECECEC",
                }}
              >
                <Div sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <img src="/threedot.png" alt="" />
                  <div>
                    <Appfont sx={{ textTransform: "capitalize" }}>{participant.userName}</Appfont>
                    <Appfont>{participant.horseDetails.name}</Appfont>
                    <Appfont>{participant.registrationId}</Appfont>
                  </div>
                </Div>
                <div>
                  <Appfont>Estimated Starttime : xx.xx</Appfont>
                </div>
              </Div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedClass;
