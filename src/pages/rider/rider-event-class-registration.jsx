/* eslint-disable react/prop-types */
import { Appfont } from "../../utils/theme/typo";
import Div from "../../components/atoms/Div";
import Title from "../../components/molecules/title";
import { useParams } from "react-router-dom";
import { MenuItem, Select, TextField } from "@mui/material";
import { AppButton } from "../../components/atoms/AppButton";
import IntroCardRider from "./components/IntroCardRider";
import {
  useCreateRegistrationMutation,
  useGetRiderQuery,
  useRiderAllClassesQuery,
} from "../../redux/services/rider";
import { useState } from "react";
import EventCard from "./components/EventCard";
import Loader from "../../components/atoms/Loader";
import { toast } from "react-toastify";

const RiderEventClassRegistration = () => {
  const { id } = useParams();
  const { data } = useRiderAllClassesQuery();
  const { data: myData } = useGetRiderQuery();
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedHorse, setSelectedHorse] = useState("");
  const [createRegistration, { isLoading }] = useCreateRegistrationMutation();

  // states
  const [selectStartDate, setselectStartDate] = useState("");
  const [selectEndDate, setselectEndDate] = useState("");
  const [selectClassId, setselectClassId] = useState("");
  const [selectHorseId, setselectHorseId] = useState("");
  const handleChangeClass = (event) => {
    const selectedClassName = event.target.value;
    setSelectedClass(selectedClassName);
    const selectedClassData = data?.data.find((item) => item.className === selectedClassName);
    if (selectedClassData.id) {
      setselectClassId(selectedClassData.id);
    }
  };

  const handleChangeHorse = (event) => {
    const selectedHorseName = event.target.value;
    const selectedHorse = myData.user.horses.find((horse) => horse.name === selectedHorseName);
    if (selectedHorse) {
      const selectedHorseId = selectedHorse.id;
      setselectHorseId(selectedHorseId);
      setSelectedHorse(selectedHorseName);
    }
  };
  const handleEventClassRegistration = async () => {
    const payload = {
      horseId: selectHorseId,
      classId: selectClassId,
      eventId: parseInt(id),
      stabling: myData.user.stableId,
      paymentStatus: "PAID",
      startDate: new Date(selectStartDate).toISOString(),
      endDate: new Date(selectEndDate).toISOString(),
    };
    const response = await createRegistration(payload);
    if (response.data.success === true) {
      return toast.success("Registration successfull");
    }
    if (response.error.status === 400) {
      return toast.warn(response.error.data.error);
    }
  };
  return (
    <Div>
      <IntroCardRider />
      <EventCard />
      <Title bg={"#1B2A41"}>Registering</Title>
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

        {!isLoading && (
          <AppButton onClick={handleEventClassRegistration} sx={{ background: "green" }}>
            Payment
          </AppButton>
        )}
        {isLoading && <Loader />}
      </Div>
    </Div>
  );
};

export default RiderEventClassRegistration;
