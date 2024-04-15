import { Grid } from "@mui/material";
import { AppButton } from "../../components/atoms/AppButton";
import Div from "../../components/atoms/Div";
import Title from "../../components/molecules/title";
import { alpha } from "../../utils/theme/colors";
import { Appfont, Appheading } from "../../utils/theme/typo";

const FirstEvent = () => {
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
        <Div>
          <AppButton sx={{ background: "#CF0E0E" }}>Live</AppButton>
        </Div>
      </Div>
      <AppButton>Result List</AppButton>
      <AppButton>Start Order</AppButton>
      <Title>On Going</Title>
      <Div sx={{ m: 2 }}>
        <Grid container alignItems={"center"}>
          <Grid item lg={6} xs={12}>
            <Appheading>Rider Name </Appheading>
            <Appheading>Horse Name </Appheading>
            <Appheading>Horse Number </Appheading>
          </Grid>
          <Grid item lg={6} xs={12} container>
            <Grid item lg={6} xs={12}>
              <Appfont>Time 1</Appfont>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Appfont>Fault 1</Appfont>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Appfont>Time 2</Appfont>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Appfont>Fault 2</Appfont>
            </Grid>
          </Grid>
        </Grid>
      </Div>
      <Title>Next</Title>
      <Div sx={flexer}>
        <Div>
          <Appfont>Rider name</Appfont>
          <Appfont>Horse name</Appfont>
          <Appfont>Horse number</Appfont>
        </Div>
        <Div>
          <Appfont>xx/xx/xx</Appfont>
        </Div>
      </Div>
      <Title>Current</Title>
      <Div sx={flexer}>
        <Div>
          <Appfont>Rider name</Appfont>
          <Appfont>Horse name</Appfont>
          <Appfont>Horse number</Appfont>
        </Div>
        <Div>
          <Appfont>xx/xx/xx</Appfont>
        </Div>
      </Div>
      <Title>Previous</Title>
      <Div sx={flexer}>
        <Div>
          <Appfont>Rider name</Appfont>
          <Appfont>Horse name</Appfont>
          <Appfont>Horse number</Appfont>
        </Div>
        <Div>
          <Appfont>xx/xx/xx</Appfont>
        </Div>
      </Div>
      <Title>Standings</Title>
      <Div sx={flexer}>
        <Div>
          <Appfont>Rider name</Appfont>
          <Appfont>Horse name</Appfont>
          <Appfont>Horse number</Appfont>
        </Div>
        <Div>
          <Appfont>xx/xx/xx</Appfont>
        </Div>
      </Div>
    </div>
  );
};

export default FirstEvent;
const EventCard = () => {
  return (
    <Div
      sx={{ display: "flex", alignItems: "center", gap: 2, background: alpha, cursor: "pointer" }}
    >
      <img src="/eventlogo.png" alt="" />
      <Div>
        <Appheading>Event Name</Appheading>
        <Appfont>Event Location</Appfont>
        <Appfont>Event Startdate - Event Enddate </Appfont>
      </Div>
    </Div>
  );
};
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
};
