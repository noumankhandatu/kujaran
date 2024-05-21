import { Grid } from "@mui/material";
import { AppButton } from "../../../components/atoms/AppButton";
import Div from "../../../components/atoms/Div";
import Title from "../../../components/molecules/title";
import { Appfont, Appheading } from "../../../utils/theme/typo";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from ".././../../utils/route-paths/index";
import AppStepper from "../../../components/molecules/stepper";
import EventCard from "../components/EventCard";

const Endurance = () => {
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
                <Link to={ROUTE_PATH.ALL_EVENTS_SUPERVISOR}>
                    <AppButton sx={{ background: "#CF0E0E" }}>Live</AppButton>
                </Link>
            </Div>
            <AppButton>Result List</AppButton>
            <AppButton>Start Order</AppButton>
            <Title>On Going</Title>
            <Div sx={{ m: 2 }}>
                <Grid container alignItems={"center"}>
                    <Grid item lg={12}>
                        <Appheading>Rider Name </Appheading>
                        <Appheading>Horse Name </Appheading>
                        <Appheading>Horse Number </Appheading>
                    </Grid>
                    <AppStepper />
                </Grid>
            </Div>
        </div>
    );
};

export default Endurance;
