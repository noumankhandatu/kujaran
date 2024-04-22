import { Grid } from "@mui/material";
import { AppButton } from "../../components/atoms/AppButton";
import Div from "../../components/atoms/Div";
import Title from "../../components/molecules/title";
import { alpha } from "../../utils/theme/colors";
import { Appfont, Appheading } from "../../utils/theme/typo";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "./../../utils/route-paths/index";
const rows = [
  {
    no: 1,
    move: "Move 1",
    judge1: "Judge 1",
    judge2: "Judge 2",
    judge3: "Judge 3",
    diff: "Diff 1",
  },
  {
    no: 2,
    move: "Move 2",
    judge1: "Judge 1",
    judge2: "Judge 2",
    judge3: "Judge 3",
    diff: "Diff 2",
  },
  {
    no: 3,
    move: "Move 3",
    judge1: "Judge 1",
    judge2: "Judge 2",
    judge3: "Judge 3",
    diff: "Diff 3",
  },
];

const SecondEvent = () => {
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
        <Link to={ROUTE_PATH.THIRD_EVENT}>
          <AppButton sx={{ background: "#CF0E0E" }}>Live</AppButton>
        </Link>
      </Div>
      <AppButton>Result List</AppButton>
      <AppButton>Start Order</AppButton>
      <Title>On Going</Title>
      <Div sx={{ m: 2 }}>
        <Grid container alignItems={"center"}>
          <Grid item xs={12}>
            <Appheading>Rider Name </Appheading>
            <Appheading>Horse Name </Appheading>
            <Appheading>Horse Number </Appheading>
            <Appheading>Total : xx.xx% </Appheading>
          </Grid>
        </Grid>
      </Div>
      <TableContainer>
        <Table sx={{ border: "1px solid black" }}>
          <TableHead sx={{ border: "1px solid black" }}>
            <TableRow sx={{ border: "1px solid black" }}>
              <TableCell sx={{ border: "1px solid black" }}>No</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>Move</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>Judge1</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>Judge2</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>Judge3</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>Diff</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ border: "1px solid black" }}>
            {rows.map((row, index) => (
              <TableRow sx={{ border: "1px solid black" }} key={index}>
                <TableCell sx={{ border: "1px solid black" }}>{row.no}</TableCell>
                <TableCell sx={{ border: "1px solid black" }}>{row.move}</TableCell>
                <TableCell sx={{ border: "1px solid black" }}>{row.judge1}</TableCell>
                <TableCell sx={{ border: "1px solid black" }}>{row.judge2}</TableCell>
                <TableCell sx={{ border: "1px solid black" }}>{row.judge3}</TableCell>
                <TableCell sx={{ border: "1px solid black" }}>{row.diff}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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

export default SecondEvent;
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
