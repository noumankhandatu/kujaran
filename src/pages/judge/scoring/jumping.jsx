import React, { useState } from 'react';
import Title from '../../../components/molecules/title';
import Div from '../../../components/atoms/Div';
import { Button, Grid, TextField } from "@mui/material";
import { Appfont, Appheading } from '../../../utils/theme/typo';
import { AppButton } from '../../../components/atoms/AppButton';
import { useJumpingScoreMutation } from '../../../redux/services/judge';
import { toast } from 'react-toastify';

const judgmentButtons = [
    { label: "E-J", value: "999" },
    { label: "RF-J", value: "998" },
    { label: "WD-J", value: "997" },
    { label: "R-J", value: "996" },
    { label: "DQ-J", value: "995" },
    { label: "--J", value: "994" }
];

const Jumping = ({ showJudge }) => {
    if (!showJudge) {
        return <div>Loading...</div>;
    }

    const [jumpingScore, { isLoading, isSuccess, isError, error }] = useJumpingScoreMutation();
    const [timeInput, setTimeInput] = useState("");
    const [faultInput, setFaultInput] = useState("");

    const handleButtonClick = (value) => {
        setFaultInput(value);
    };

    const handleSubmit = async () => {
        if (!timeInput || !faultInput) return toast.warn('Please enter all feilds')
        const payload = {
            registrationId: 1,
            time: timeInput,
            faults: faultInput
        };
        const res = await jumpingScore(payload);
        if (res.data.jumpingScore) return toast.success('Jumping Score Added')
    };

    return (
        <div>
            <Title>Selected</Title>
            <Div sx={{ m: 2 }}>
                <Grid container alignItems="center">
                    <Grid item lg={7} xs={12}>
                        <Appheading sx={{ fontSize: 30 }}>Rider Name : {showJudge?.userName} </Appheading>
                        <Appheading sx={{ fontSize: 30 }}>Horse Name :  {showJudge?.horseDetails?.name} </Appheading>
                        <Appheading sx={{ fontSize: 30 }}>Horse Number :  {showJudge?.horseDetails?.id}</Appheading>

                    </Grid>
                    <Grid item lg={4} xs={12} container spacing={5} >
                        <Grid item lg={12} xs={12}>
                            {judgmentButtons.map((button, index) => (
                                <Button
                                    key={index}
                                    variant="contained"
                                    size="small"
                                    sx={{ background: "#FEA500", mr: 1 }}
                                    onClick={() => handleButtonClick(button.value)}
                                >
                                    {button.label}
                                </Button>
                            ))}
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TextField
                                type='number'
                                label="Time"
                                variant="outlined"
                                value={timeInput}
                                onChange={(e) => setTimeInput(e.target.value)}
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TextField
                                type='number'
                                disabled
                                label="Fault"
                                variant="outlined"
                                value={faultInput}
                                onChange={(e) => setFaultInput(e.target.value)}
                            />
                        </Grid>


                        <Grid item lg={12} xs={12}>
                            <AppButton sx={{ background: "red", }} onClick={handleSubmit}>
                                <Appfont sx={{ color: "white" }}></Appfont>
                                {isLoading ? 'Loading...' : 'Finish'}
                            </AppButton>
                        </Grid>

                    </Grid>

                </Grid>
            </Div>
        </div>
    );
};

export default Jumping;
