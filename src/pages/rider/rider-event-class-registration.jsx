/* eslint-disable react/prop-types */
import { Appfont } from "../../utils/theme/typo";
import Div from "../../components/atoms/Div";
import Title from "../../components/molecules/title";
import { alpha } from "../../utils/theme/colors";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../../utils/route-paths";
import { MenuItem, Select, TextField } from "@mui/material";
import { AppButton } from "../../components/atoms/AppButton";
import IntroCardRider from "./components/IntroCardRider";
import { useGetRiderQuery, useRiderAllClassesQuery } from "../../redux/services/rider";
import { useState } from "react";

const RiderEventClassRegistration = () => {
  const { data } = useRiderAllClassesQuery();
  const { data: myData } = useGetRiderQuery();

  const [selectedClass, setSelectedClass] = useState("");
  const [selectedHorse, setSelectedHorse] = useState("");
  const [selectStartDate, setselectStartDate] = useState("");
  const [selectEndDate, setselectEndDate] = useState("");
  const handleChangeClass = (event) => {
    const selectedClassName = event.target.value;
    setSelectedClass(selectedClassName);
    const selectedClassData = data?.data.find((item) => item.className === selectedClassName);
    if (selectedClassData) {
      alert(`Selected class ID: ${selectedClassData.id}`);
    }
  };

  const handleChangeHorse = (event) => {
    const selectedHorseName = event.target.value;
    setSelectedHorse(selectedHorseName);
    alert(`Selected horse: ${selectedHorseName}`);
  };

  return (
    <Div>
      <IntroCardRider />
      <Title bg={"#1B2A41"}>Registered</Title>
      <EventCard />
      <Div sx={{ m: 2 }}>
        <Appfont>Select a Class</Appfont>
        <Select
          sx={{ width: "100%", marginBottom: 2 }}
          value={selectedClass}
          onChange={handleChangeClass}
          variant="outlined"
          required
        >
          {/* Map over data?.data to generate MenuItem components */}
          {data &&
            data.data.map((item) => (
              <MenuItem key={item.id} value={item.className}>
                {item.className}
              </MenuItem>
            ))}
        </Select>
        {/* Horse Select */}
        <Appfont>Select a Horse</Appfont>
        <Select
          sx={{ width: "100%", marginBottom: 2 }}
          value={selectedHorse}
          onChange={handleChangeHorse}
          variant="outlined"
          required
        >
          {myData?.user?.horses?.map((horse) => (
            <MenuItem key={horse.id} value={horse.name}>
              {horse.name}
            </MenuItem>
          ))}
        </Select>

        <Div sx={{ display: "flex", gap: 3 }}>
          <Div sx={{ width: "100%" }}>
            <Appfont>Start Date</Appfont>
            <TextField
              onChange={(e) => setselectStartDate(e.target.value)}
              sx={{ width: "100%", marginBottom: 2 }}
              variant="outlined"
              type="date"
              required
            />
          </Div>
          <Div sx={{ width: "100%" }}>
            <Appfont>End Horse</Appfont>
            <TextField
              onChange={(e) => setselectEndDate(e.target.value)}
              sx={{ width: "100%", marginBottom: 2 }}
              variant="outlined"
              type="date"
              required
            />
          </Div>
        </Div>
      </Div>

      <Div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          backgroundColor: "#ABA8A8",
        }}
      >
        <Appfont>Total</Appfont>
        <Appfont>Payment</Appfont>
        <Link to={ROUTE_PATH.ALL_EVENT_JUDGE}>
          <AppButton sx={{ background: "green" }}>Payment</AppButton>
        </Link>
      </Div>
    </Div>
  );
};

export default RiderEventClassRegistration;

const EventCard = () => {
  return (
    <Link to={""}>
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
      </Div>
    </Link>
  );
};
