/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";
import Div from "../../components/atoms/Div";
import Title from "../../components/molecules/title";
import { AppMessage, Appfont } from "../../utils/theme/typo";
import { ROUTE_PATH } from "../../utils/route-paths";
import { AppButton } from "../../components/atoms/AppButton";
import { alpha } from "../../utils/theme/colors";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IntroCard from "./components/IntroCard";
import { useGetAllEventsQuery } from "../../redux/services/supervisor-apis";
import AppDateFormatter from "../../components/hooks/DateFormatter";

const AllEvents = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetAllEventsQuery();

  const handleCreateEvent = () => {
    navigate(ROUTE_PATH.SUPERVISOR.CREATE_EVENT);
  };
  if (isLoading) return <div>Loading...</div>;
  console.log(data.events);
  return (
    <Div>
      <IntroCard />
      <Title bg={"#1B2A41"}>Created Evented</Title>
      {error && (
        <Appfont sx={{ textAlign: "center", mt: 3, mb: 3 }}>
          Couldnt Load Event Please try again later ⚠️
        </Appfont>
      )}
      {data?.events?.length === 0 && <AppMessage>No Events founds</AppMessage>}
      {data?.events.map((items, id) => {
        return (
          <div key={id}>
            <EventCard {...items} />
          </div>
        );
      })}

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
      <Link to={`${ROUTE_PATH.SUPERVISOR.SELECT_EVENT}/${id}`}>
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
        <AppButton sx={{ mr: 2, background: "green" }}>{"Edit"}</AppButton>
        <AppButton sx={{ mr: 2, background: "red" }}>{"Delete"}</AppButton>
        <AppButton sx={{ mr: 2, background: "#DBDE27" }}>{"Judge"}</AppButton>
      </Div>
    </Div>
  );
};
