/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Div from "../../components/atoms/Div";
import Title from "../../components/molecules/title";
import { AppMessage, Appfont } from "../../utils/theme/typo";
import { ROUTE_PATH } from "../../utils/route-paths";
import { AppButton } from "../../components/atoms/AppButton";
import { alpha } from "../../utils/theme/colors";
import IntroCard from "./components/IntroCard";
import { useGetUserQuery } from "../../redux/services/supervisor-apis";
import AppDateFormatter from "../../components/hooks/DateFormatter";
import Apploader from "../../components/atoms/Apploader";

const JudgeAllEvents = () => {
  const { data, isLoading, isError } = useGetUserQuery();

  if (isLoading) return <Apploader />;
  if (isError) return "Something went wrong";
  return (
    <Div>
      <IntroCard />
      <Title bg={"#1B2A41"}>Assigned Events</Title>
      {data?.user?.events?.length === 0 && <AppMessage>No Events founds</AppMessage>}
      {data?.user?.event.map((items, id) => {
        return (
          <div key={id}>
            <EventCard {...items} />
          </div>
        );
      })}

      <Div height={40} />
    </Div>
  );
};

export default JudgeAllEvents;

const EventCard = ({ title, image, startDate, endDate, location, id }) => {
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
      <Link to={`${ROUTE_PATH.JUDGE.SELECT_EVENT}/${id}`}>
        <Div sx={{ display: "flex", gap: 2 }}>
          <img style={{ width: 200, height: 200 }} src={image} alt="" />
          <Div>
            <Appfont sx={{ textTransform: "capitalize" }}>{title}</Appfont>
            <Appfont sx={{ mb: 1, mt: 1 }}>{location}</Appfont>
            <Appfont>
              <AppDateFormatter date={startDate} /> -
              <AppDateFormatter date={endDate} />
            </Appfont>
          </Div>
        </Div>
      </Link>
      <Div sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2, mb: 2 }}>
        <AppButton sx={{ mr: 2, background: "#afb200" }}>{"Judge"}</AppButton>
      </Div>
    </Div>
  );
};
