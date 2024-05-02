/* eslint-disable react/prop-types */
import { Appfont } from "../../utils/theme/typo";
import Div from "../../components/atoms/Div";
import Title from "../../components/molecules/title";
import IntroCardRider from "./components/IntroCardRider";
import { useGetRiderQuery } from "../../redux/services/rider";
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

const RegisteredEventDetails = () => {
  const { data: myData } = useGetRiderQuery();
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
                {myData?.user?.registrations.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Appfont>{item.class.className}</Appfont>
                    </TableCell>
                    <TableCell>
                      <Appfont>{item.class.classStatus}</Appfont>
                    </TableCell>
                    <TableCell>
                      <Appfont>{item.class.type}</Appfont>
                    </TableCell>
                    <TableCell>
                      <AppDateFormatter>{item.class.createdAt}</AppDateFormatter>
                    </TableCell>
                    <TableCell>
                      <AppDateFormatter>{item.class.endDate}</AppDateFormatter>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Div>

        {/* Horse Select */}
        <Title>Registered Horses</Title>
        {myData?.user?.horses.map((items, id) => {
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
