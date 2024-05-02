/* eslint-disable react/prop-types */
import Div from "../../components/atoms/Div";
import Title from "../../components/molecules/title";
import { alpha } from "../../utils/theme/colors";
import { AppButton } from "../../components/atoms/AppButton";
import { Link } from "react-router-dom";
import RiderModel from "./modal";
import { useEffect, useState } from "react";
import { ROUTE_PATH } from "../../utils/route-paths";
import { AppMessage, Appfont } from "../../utils/theme/typo";
import IntroCardRider from "./components/IntroCardRider";
import AppDateFormatter from "../../components/hooks/DateFormatter";
import { useGetAllEventsRiderQuery, useGetRiderQuery } from "../../redux/services/rider";
import Apploader from "../../components/atoms/Apploader";

const RiderEvents = () => {
  // rtk hooks
  const { data, isLoading, isError } = useGetAllEventsRiderQuery();
  const { data: user, isError: userError, isLoading: userLoading } = useGetRiderQuery();

  // app states
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [unregisteredEvents, setUnregisteredEvents] = useState([]);
  const [showModel, setshowModel] = useState(false);
  // Filter out registered events

  useEffect(() => {
    if (data && user) {
      const registeredEventIds = user?.user?.registrations?.map(
        (registration) => registration.eventId
      );
      const registered = data?.events.filter((event) => registeredEventIds.includes(event.id));
      const unregistered = data?.events.filter((event) => !registeredEventIds.includes(event.id));

      setRegisteredEvents(registered);
      setUnregisteredEvents(unregistered);
    }
  }, [data, user]);
  if (isError) {
    <Appfont>Something Went wrong</Appfont>;
  }

  // states

  if (userError) {
    <Appfont>User issue , plesae check internet</Appfont>;
  }
  if (isLoading || userLoading) {
    return <Apploader />;
  }

  // Fns
  const handleModel = () => {
    setshowModel(true);
  };
  return (
    <Div>
      {showModel && <RiderModel setOpen={setshowModel} open={showModel} />}
      <IntroCardRider />
      {/*  REGISTERED EVENTS */}
      <Title bg={"#1B2A41"}>Registered Events</Title>
      {registeredEvents.length === 0 && <AppMessage>No Regsitered Events Found</AppMessage>}
      {registeredEvents.length !== 0 &&
        registeredEvents.map((items, id) => {
          return <RegisteredCard key={id} {...items} handleClick={handleModel} />;
        })}

      {/* UN REGISTERED EVENTS */}
      <Title bg={"#1B2A41"}> All Events</Title>
      {unregisteredEvents.length === 0 && <AppMessage>No Events Founds</AppMessage>}
      {unregisteredEvents.length !== 0 && (
        <>
          {unregisteredEvents.map((items, id) => {
            return <RegisteringCard {...items} key={id} btnText={"Registered"} bg={"green"} />;
          })}
        </>
      )}
    </Div>
  );
};

export default RiderEvents;

const RegisteredCard = ({ title, image, startDate, endDate, location, id, handleClick }) => {
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
      <Link to={`${ROUTE_PATH.RIDER.EVENT_CLASS_DETAILS}/${id}`}>
        <Div sx={{ display: "flex", gap: 2, alignItems: "center" }}>
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
        <AppButton onClick={handleClick} sx={{ mr: 2, background: "red" }}>
          {"Cancel"}
        </AppButton>
      </Div>
    </Div>
  );
};
const RegisteringCard = ({ title, image, startDate, endDate, location, id }) => {
  return (
    <Link to={`${ROUTE_PATH.RIDER.EVENT_CLASS_REGISTER}/${id}`}>
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
        <Div sx={{ display: "flex", gap: 2, alignItems: "center" }}>
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
        <Div sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2, mb: 2 }}>
          <AppButton sx={{ mr: 2, background: "#268F50" }}>{"Register"}</AppButton>
        </Div>
      </Div>
    </Link>
  );
};
