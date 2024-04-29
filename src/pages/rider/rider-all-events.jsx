/* eslint-disable react/prop-types */
import Div from "../../components/atoms/Div";
import Title from "../../components/molecules/title";
import { alpha } from "../../utils/theme/colors";
import { AppButton } from "../../components/atoms/AppButton";
import { Link, useNavigate } from "react-router-dom";
import RiderModel from "./modal";
import { useState } from "react";
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

  if (isError) {
    <Appfont>Something Went wrong</Appfont>;
  }

  // states
  const navigate = useNavigate();
  const [showModel, setshowModel] = useState(false);

  const handleModel = () => {
    setshowModel((pre) => !pre);
  };

  const handleReg = () => {
    navigate(`/${ROUTE_PATH.RIDER.EVENT_REGISTER}`);
  };

  if (userError) {
    <Appfont>User issue , plesae check internet</Appfont>;
  }
  if (isLoading || userLoading) {
    return <Apploader />;
  }

  const handleRegisterEvent = () => {
    alert("asd");
  };
  return (
    <Div>
      {showModel && <RiderModel />}
      <IntroCardRider />
      <Title bg={"#1B2A41"}>Registered Events</Title>

      {user && user?.user?.registrations.length === 0 && (
        <AppMessage>No Regsitered Events Found</AppMessage>
      )}
      {user && user?.user?.registrations.length !== 0 && <RegisteredCard />}

      <Title bg={"#1B2A41"}> All Events</Title>
      {data?.events.length === 0 && <AppMessage>No Events Founds</AppMessage>}
      {data?.events.length !== 0 && (
        <>
          {data?.events.map((items, id) => {
            return (
              <RegisteringCard
                {...items}
                key={id}
                btnText={"Registered"}
                bg={"green"}
                handleClick={handleRegisterEvent}
              />
            );
          })}
        </>
      )}
    </Div>
  );
};

export default RiderEvents;

const RegisteredCard = ({ title, image, startDate, endDate, location, id }) => {
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
        <AppButton sx={{ mr: 2, background: "red" }}>{"Cancel"}</AppButton>
      </Div>
    </Div>
  );
};
const RegisteringCard = ({ title, image, startDate, endDate, location, id, handleClick }) => {
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
      onClick={handleClick}
    >
      <Link to={`${ROUTE_PATH.SUPERVISOR.SELECT_EVENT}/${id}`}>
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
        <AppButton sx={{ mr: 2, background: "#268F50" }}>{"Register"}</AppButton>
      </Div>
    </Div>
  );
};
