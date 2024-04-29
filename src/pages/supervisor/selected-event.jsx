/* eslint-disable react/prop-types */
import AddIcon from "@mui/icons-material/Add";
import Div from "../../components/atoms/Div";
import Title from "../../components/molecules/title";
import IntroCard from "./components/IntroCard";
import { useGetEventClassAndSponsorsQuery } from "../../redux/services/supervisor-apis";
import { Appfont } from "../../utils/theme/typo";
import { useNavigate } from "react-router-dom";
import AppDateFormatter from "../../components/hooks/DateFormatter";
import SponsorModal from "./components/modals/sponsorModal";
import ClassModal from "./components/modals/classModal";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ROUTE_PATH } from "../../utils/route-paths";
import EventCard from "./components/EventCard";
import { useParams } from "react-router-dom";

const SelectedEvent = () => {
  const { id } = useParams();

  const { data: eventData } = useGetEventClassAndSponsorsQuery(id);
  return (
    <Div>
      <IntroCard />
      <Div height={20} />
      <EventCard />

      <Title bg="#1B2A41">Event Sponsors</Title>
      {eventData?.event?.sponsors.length === 0 && (
        <Appfont sx={{ textAlign: "center", mt: 3, mb: 3 }}>No Sponsors Found</Appfont>
      )}
      {eventData?.event?.sponsors.length !== 0 && (
        <Div
          sx={{ display: "flex", gap: 2, m: 2, justifyContent: "space-between", flexWrap: "wrap" }}
        >
          {eventData &&
            eventData?.event?.sponsors.map((items, id) => {
              return (
                <Paper sx={{ p: 2 }} key={id} elevation={3}>
                  <img style={{ width: 150, height: 120 }} src={items.image} alt="" />
                  <Appfont>{items.name}</Appfont>
                </Paper>
              );
            })}
        </Div>
      )}

      <SponsorModal eventId={id} />
      <Title bg="#1B2A41">Technical Handbook</Title>
      <Title bg={"#D9D9D9"} color="black">
        <span style={{ display: "flex", alignItems: "center" }}>
          <AddIcon sx={{ color: "green" }} />
          Add Pdf
        </span>
      </Title>
      <Title bg="#1B2A41">Event Classes</Title>
      <ClassSchedule getClassses={eventData?.event} id={id} />
      <ClassModal eventId={id} />
    </Div>
  );
};

export default SelectedEvent;
const ClassSchedule = ({ getClassses, id }) => {
  const navigate = useNavigate();
  const handleClass = () => {
    navigate(ROUTE_PATH.SUPERVISOR.SELECT_CLASS + "/" + id);
  };

  return (
    <>
      {getClassses?.CompetitionClass.length === 0 && (
        <Appfont sx={{ textAlign: "center", mt: 3, mb: 3 }}>No Classes Found</Appfont>
      )}
      {getClassses?.CompetitionClass.length !== 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Class Name</TableCell>
                <TableCell>Class Status</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Class Start Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getClassses?.CompetitionClass.map((items, id) => (
                <TableRow sx={{ cursor: "pointer" }} onClick={handleClass} key={id}>
                  <TableCell>
                    <Appfont>{items.className}</Appfont>
                  </TableCell>
                  <TableCell>
                    <Appfont>{items.classStatus}</Appfont>
                  </TableCell>
                  <TableCell>
                    <Appfont>{items.type}</Appfont>
                  </TableCell>
                  <TableCell>
                    <Appfont>
                      <AppDateFormatter date={items.classStartTime} />
                    </Appfont>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
