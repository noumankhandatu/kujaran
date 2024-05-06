/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AppButton } from "../../../../components/atoms/AppButton";
import { AppMessage, Appfont, Appheading } from "../../../../utils/theme/typo";
import {
  useAssignJudgeMutation,
  useGetAllJudgesQuery,
} from "../../../../redux/services/supervisor-apis";
import Apploader from "../../../../components/atoms/Apploader";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SelectJudge({ id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data: getAllJudges, isLoading, isError } = useGetAllJudgesQuery();
  const [assignJudge, { isLoading: loadin }] = useAssignJudgeMutation();
  const [selectedJudge, setSelectedJudge] = React.useState("");
  if (isLoading) return <Apploader />;
  if (isError) return "Something went wrong";

  const handleSubmit = async () => {
    if (!selectedJudge) return toast.warn("Please select a judge");
    const payload = {
      eventId: id,
      userId: selectedJudge,
    };
    const res = await assignJudge(payload);
    if (res?.data?.success === true) toast.success(res?.data?.message);
    if (res?.error?.status === 400) toast.error(res?.error?.data?.message);
  };

  return (
    <div>
      <AppButton onClick={handleOpen} sx={{ mr: 2, background: "#DBDE27" }}>
        Judge
      </AppButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Appheading sx={{ mt: 2, textAlign: "center" }}>Assign Events</Appheading>
          <Appfont sx={{ mt: 2, textAlign: "center" }}>Assigns events to judges</Appfont>
          {getAllJudges.length === 0 && <AppMessage>No Judge Found</AppMessage>}
          {getAllJudges.length !== 0 && (
            <Select fullWidth value={selectedJudge} sx={{ mt: 6, textAlign: "left" }}>
              {/* Render menu items dynamically based on your getAllJudges data */}
              {getAllJudges.map((judge) => (
                <MenuItem
                  onClick={() => setSelectedJudge(judge.id)}
                  key={judge.id}
                  value={judge.id}
                >
                  {judge.name}
                </MenuItem>
              ))}
            </Select>
          )}
          <AppButton
            disabled={loadin}
            onClick={handleSubmit}
            sx={{ background: "#a153c2", mt: 3, width: "100%" }}
          >
            Submit
          </AppButton>
        </Box>
      </Modal>
    </div>
  );
}
