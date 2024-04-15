import Grid from "@mui/material/Grid";
import { Appfont, Appheading } from "./../../utils/theme/typo";
import Div from "../../components/atoms/Div";
import Title from "../../components/molecules/title";

const grey = "#ECECEC";
const EventDetails = () => {
  return (
    <Div>
      <Div sx={{ border: "1px solid black", background: grey }}>
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
      </Div>
      <Div height={30} />
      {[1, 2, 3, 4, 5, 6].map((items) => {
        return (
          <Grid
            key={items}
            container
            spacing={1}
            sx={{ border: "1px solid black", mb: 1, position: "relative", background: grey }}
          >
            <Grid sx={{ border: "1px solid black" }} item xs={12} lg={6}>
              <Div sx={{ ...flexer }}>
                <Div>
                  <Appfont>
                    {" "}
                    <span style={{ position: "absolute", left: 40 }}>1</span> Rider name
                  </Appfont>
                  <Appfont>Horse name</Appfont>
                  <Appfont>Horse number</Appfont>
                </Div>
                <Div>
                  <Appfont>xx/xx/xx</Appfont>
                </Div>
              </Div>
            </Grid>
            <Grid sx={{ border: "1px solid black" }} item xs={12} lg={6}>
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
            </Grid>
          </Grid>
        );
      })}
    </Div>
  );
};

export default EventDetails;

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
