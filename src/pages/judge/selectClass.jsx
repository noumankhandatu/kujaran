import Title from "../../components/molecules/title";
import Div from "../../components/atoms/Div";
import { AppMessage, Appfont, Appheading } from "../../utils/theme/typo";
import { ROUTE_PATH } from "../../utils/route-paths";
import { Link, useParams } from "react-router-dom";
import { AppButton } from "../../components/atoms/AppButton";
// import IntroCard from "./components/IntroCard";
import EventCard from "./components/EventCard";
import { useGetClassDetailsQuery } from "../../redux/services/supervisor-apis";
import Apploader from "../../components/atoms/Apploader";
import AppDateFormatter from "../../components/hooks/DateFormatter";
import { useState } from "react";
import moment from 'moment';
import JudgeScoring from "./scoring";

const SelectClassJudge = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const classId = searchParams.get("selectclass");
  const { id } = useParams();
  const { data, isLoading } = useGetClassDetailsQuery({ eventId: id, classId: classId });
  const [showJudge, setShowJudge] = useState(null)
  // useGetClassByIdMutation

  if (isLoading) return <Apploader />;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getParticipantStatus = (endTime) => {
    const endDate = moment(endTime).startOf('day');
    const today = moment().startOf('day');

    if (endDate.isBefore(today)) {
      return "Previous";
    } else if (endDate.isAfter(today)) {
      return "Next";
    } else {
      return "On Going";
    }
  };
  return (
    <div>
      {!data && <AppMessage>No Class Data Found</AppMessage>}
      <EventCard />
      <Title color="black" bg="#969696">
        Class {classId}
      </Title>
      <Div sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
        <Div>
          <Appfont>Name :  {data && data?.classDetails?.className}</Appfont>
          <Appfont>Status : {data && data?.classDetails?.classStatus}</Appfont>
          Start Time : <AppDateFormatter date={data?.classDetails?.classStartTime} />
          <Appfont>   No of participants {data && data?.classDetails?.participants.length}</Appfont>
        </Div>
      </Div>
      <AppButton>Result List</AppButton>
      <AppButton>Start Order</AppButton>
      {showJudge ?
        <>
          <JudgeScoring showJudge={showJudge} />
        </>
        :
        <>
          <div>
            {/* Your existing code */}
            {/* Rendering participants based on their status */}
            {["On Going", "Next", "Current", "Previous", "Standings"].map((status) => {
              const filteredParticipants = data.classDetails.participants.filter(participant => getParticipantStatus(participant.endTime) === status);
              return (
                <div key={status}>
                  <Title>{status}</Title>
                  {filteredParticipants.length > 0 ? (
                    filteredParticipants.map((participant, index) => (
                      <Div sx={flexer} key={index}>
                        <Div>
                          <Appfont >Rider Name :<b> {participant.userName}</b> </Appfont>
                          <Appfont>Horse Name : <b>{participant.horseDetails.name}</b></Appfont>
                          <Appfont>Horse No</Appfont>
                        </Div>
                        <AppButton onClick={() => setShowJudge(participant)} sx={{ background: "#DBDE27" }}>
                          <Appfont>Judge</Appfont>
                        </AppButton>
                      </Div>
                    ))
                  ) : (
                    <AppMessage>No Registraions Found</AppMessage>
                  )}
                </div>
              );
            })}
          </div></>}


    </div >
  );
};

export default SelectClassJudge;

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
  mt: 3,
  mb: 3
};
