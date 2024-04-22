import { Button, Grid, TextField } from "@mui/material";
import { AppButton } from "../../../components/atoms/AppButton";
import Div from "../../../components/atoms/Div";
import Title from "../../../components/molecules/title";
import { alpha } from "../../../utils/theme/colors";
import { Appfont, Appheading } from "../../../utils/theme/typo";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "./../../../utils/route-paths/index";

const JudgeFirstEvent = () => {
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
        <Link to={ROUTE_PATH.SECOND_JUDGE_EVENT}>
          <AppButton sx={{ background: "#CF0E0E" }}>Live</AppButton>
        </Link>
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
            <Grid sx={{mb:2}} lg={12} xs={12}>
              <Button variant="contained" size="small" sx={{ background: "#FEA500" }}>
                E-J
              </Button>{" "}
              <Button variant="contained" size="small" sx={{ background: "#FEA500" }}>
                RF-J
              </Button>{" "}
              <Button variant="contained" size="small" sx={{ background: "#FEA500" }}>
                WD-J
              </Button>{" "}
              <Button variant="contained" size="small" sx={{ background: "#FEA500" }}>
                R-J
              </Button>{" "}
              <Button variant="contained" size="small" sx={{ background: "#FEA500" }}>
                DQ-J
              </Button>{" "}
              <Button variant="contained" size="small" sx={{ background: "#FEA500" }}>
                --J
              </Button>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Appfont>Time 1</Appfont>
              <TextField size="small" />
            </Grid>
            <Grid item lg={6} xs={12}>
              <Appfont>Fault 1</Appfont> <TextField size="small" />
            </Grid>
            <Grid item lg={6} xs={12}>
              <Appfont>Time 2</Appfont> <TextField size="small" />
            </Grid>
            <Grid item lg={6} xs={12}>
              <Appfont>Fault 2</Appfont> <TextField size="small" />
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
          <AppButton sx={{ background: "red" }}>
            <Appfont sx={{ color: "white" }}>Finish</Appfont>
          </AppButton>
        </Div>
        <AppButton sx={{ background: "#DBDE27" }}>
          <Appfont>Judge</Appfont>
        </AppButton>
      </Div>
      <Title>Current</Title>
      <Div sx={flexer}>
        <Div>
          <Appfont>Rider name</Appfont>
          <Appfont>Horse name</Appfont>
          <Appfont>Horse number</Appfont>
        </Div>
        <AppButton sx={{ background: "#DBDE27" }}>
          <Appfont>Judge</Appfont>
        </AppButton>
      </Div>
      <Title>Previous</Title>
      <Div sx={flexer}>
        <Div>
          <Appfont>Rider name</Appfont>
          <Appfont>Horse name</Appfont>
          <Appfont>Horse number</Appfont>
        </Div>
        <AppButton sx={{ background: "#DBDE27" }}>
          <Appfont>Judge</Appfont>
        </AppButton>
      </Div>
      <Title>Standings</Title>
      <Div sx={flexer}>
        <Div>
          <Appfont>Rider name</Appfont>
          <Appfont>Horse name</Appfont>
          <Appfont>Horse number</Appfont>
        </Div>
        <AppButton sx={{ background: "#DBDE27" }}>
          <Appfont>Edit</Appfont>
        </AppButton>
      </Div>
    </div>
  );
};

export default JudgeFirstEvent;
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
  alignItems: "center",
};
