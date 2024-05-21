import { Button, Grid } from "@mui/material";
import { AppButton } from "../../../components/atoms/AppButton";
import Div from "../../../components/atoms/Div";
import Title from "../../../components/molecules/title";
import { Appfont, Appheading } from "../../../utils/theme/typo";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EventCard from '../components/EventCard'
const rows = [
    {
        no: 1,
        move: "Move 1",
        judge1: "x2",
        judge2: "xx",
        judge3: "",
        diff: "",
    },
    {
        no: 2,
        move: "Move 2",
        judge1: "x2",
        judge2: "xx",
        judge3: "",
        diff: "",
    },
    {
        no: 3,
        move: "Move 3",
        judge1: "x2",
        judge2: "xx",
        judge3: "",
        diff: "",
    },
];

const Dressage = () => {
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
                    <Grid item lg={6} xs={12}>
                        <Button variant="contained" size="small" sx={{ background: "red" }}>
                            E-J
                        </Button>{" "}
                        <Button variant="contained" size="small" sx={{ background: "red" }}>
                            RF-J
                        </Button>{" "}
                        <Button variant="contained" size="small" sx={{ background: "red" }}>
                            WD-J
                        </Button>{" "}
                        <Button variant="contained" size="small" sx={{ background: "red" }}>
                            R-J
                        </Button>{" "}
                        <Button variant="contained" size="small" sx={{ background: "red" }}>
                            DQ-J
                        </Button>{" "}
                        <Button variant="contained" size="small" sx={{ background: "red" }}>
                            --J
                        </Button>
                    </Grid>
                </Grid>
            </Div>
            <TableContainer>
                <Table >
                    <TableHead >
                        <TableRow >
                            <TableCell >No</TableCell>
                            <TableCell >Move</TableCell>
                            <TableCell >Multipler</TableCell>
                            <TableCell >Score</TableCell>
                            <TableCell >Total</TableCell>
                            <TableCell >Comment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell >{row.no}</TableCell>
                                <TableCell >{row.move}</TableCell>
                                <TableCell>{row.judge1}</TableCell>
                                <TableCell >{row.judge2}</TableCell>
                                <TableCell >{row.judge3}</TableCell>
                                <TableCell>{row.diff}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Dressage;
