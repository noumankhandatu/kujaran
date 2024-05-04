/* eslint-disable react/prop-types */
import { Appfont } from "../../utils/theme/typo";
import Div from "../../components/atoms/Div";
import Title from "../../components/molecules/title";
import IntroCardRider from "./components/IntroCardRider";
import { useGetEventClassHorseQuery, useGetRiderQuery } from "../../redux/services/rider";
import EventCard from "./components/EventCard";
import AppDateFormatter from "../../components/hooks/DateFormatter";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Apploader from "../../components/atoms/Apploader";
import { useParams } from "react-router-dom";

const RegisteredEventDetails = () => {
  const { id } = useParams();
  const { data: classData, isLoading } = useGetEventClassHorseQuery(id);
  const { data: myUserData, isLoading: isLoadin } = useGetRiderQuery();

  if (isLoading || isLoadin) return <Apploader />;
  console.log(classData.event.CompetitionClass[0].className, "classData");
  return (
    <Div>
      <IntroCardRider />
      <EventCard />
      <Div>
        <Title>Registered Class</Title>
        <Div sx={{ m: 2 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Class Name</TableCell>
                  <TableCell>Class Status</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Created At</TableCell>
                  <TableCell>End At</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {classData.event.CompetitionClass.map((classItem, classIndex) => {
                  // Check if className exists in registrations array
                  const matchedRegistration = myUserData?.user?.registrations.find(
                    (item) => item.class.className === classItem.className
                  );

                  // If there is a match, render the row
                  if (matchedRegistration) {
                    return (
                      <TableRow key={classIndex}>
                        <TableCell>
                          <Appfont>{matchedRegistration.class.className}</Appfont>
                        </TableCell>
                        <TableCell>
                          <Appfont>{matchedRegistration.class.classStatus}</Appfont>
                        </TableCell>
                        <TableCell>
                          <Appfont>{matchedRegistration.class.type}</Appfont>
                        </TableCell>
                        <TableCell>
                          <AppDateFormatter>{matchedRegistration.class.createdAt}</AppDateFormatter>
                        </TableCell>
                        <TableCell>
                          <AppDateFormatter>{matchedRegistration.class.endDate}</AppDateFormatter>
                        </TableCell>
                      </TableRow>
                    );
                  } else {
                    // Render null if there is no match
                    return null;
                  }
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Div>

        {/* Horse Select */}
        <Title>Registered Horses</Title>
        {classData?.user?.horses.map((items, id) => {
          return (
            <Appfont sx={{ m: 2 }} key={id}>
              {items.name}
            </Appfont>
          );
        })}
      </Div>
    </Div>
  );
};

export default RegisteredEventDetails;
