/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import Title from "../../../../components/molecules/title";
import { TextField, Select, MenuItem } from "@mui/material";
import { AppButton } from "../../../../components/atoms/AppButton";
import Div from "../../../../components/atoms/Div";
import { useAddClassMutation } from "../../../../redux/services/supervisor-apis";
import Loader from "../../../../components/atoms/Loader";
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

export default function ClassModal({ eventId }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [className, setClassName] = React.useState("");
  const [classStatus, setClassStatus] = React.useState("Pending");
  const [classStartTime, setClassStartTime] = React.useState("");
  const [type, setType] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [addClass] = useAddClassMutation();

  const handleSubmit = async () => {
    if (!className) return toast.warn("Please enter a class name");
    if (!classStartTime) return toast.warn("Please enter a class start time");
    if (!type) return toast.warn("Please select a class type");

    setIsLoading(true);

    const payload = {
      className,
      classStatus,
      eventId: parseInt(eventId),
      classStartTime: new Date(classStartTime).toISOString(),
      type,
    };

    try {
      const response = await addClass(payload);
      if (response.data.success === true) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Error creating class:", error);
      toast.error("Failed to create class. Please try again later.");
    } finally {
      setIsLoading(false);
      handleClose();
    }
  };

  return (
    <div>
      <Title bg={"#D9D9D9"} color="black">
        <span
          onClick={handleOpen}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <AddIcon sx={{ color: "green" }} />
          Add Class
        </span>
      </Title>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            label="Class Name"
            fullWidth
          />
          <Div height={15} />
          <TextField
            value={classStartTime}
            onChange={(e) => setClassStartTime(e.target.value)}
            type="datetime-local"
            fullWidth
          />
          <Div height={15} />
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            label="Class Type"
            fullWidth
          >
            <MenuItem value="DRESSAGE">DRESSAGE</MenuItem>
            <MenuItem value="SHOW_JUMPING">SHOW_JUMPING</MenuItem>
            <MenuItem value="ENDURANCE">ENDURANCE</MenuItem>
            <MenuItem value="EVENTING">EVENTING</MenuItem>
          </Select>
          <Div height={30} />
          <AppButton onClick={handleSubmit} sx={{ width: "100%" }}>
            {isLoading ? <Loader /> : "Submit"}
          </AppButton>
        </Box>
      </Modal>
    </div>
  );
}
