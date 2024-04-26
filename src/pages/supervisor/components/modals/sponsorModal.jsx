import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import Title from "../../../../components/molecules/title";
import ImageUploader from "../../../../components/molecules/ImageUploader";
import { TextField } from "@mui/material";
import { AppButton } from "../../../../components/atoms/AppButton";
import Div from "../../../../components/atoms/Div";
import { useAddSponsorMutation } from "../../../../redux/services/supervisor-apis";
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

export default function SponsorModal({ eventId }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [image, setimage] = React.useState(null);
  const [name, setName] = React.useState();
  const [getEventById, { isLoading }] = useAddSponsorMutation();

  if (isLoading) return <Loader />;

  const handleSubmit = async () => {
    if (!image) return toast.warn("Please select an image");
    if (!name) return toast.warn("Please write name in the feild");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("eventId", eventId);

    try {
      const response = await getEventById(formData);
      if (response.data.success === true) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching event:", error);
    } finally {
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
          Add Sponsor
        </span>
      </Title>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ImageUploader setImage={setimage} label={"Upload Sponsor Image"} />
          <TextField
            onChange={(e) => setName(e.target.value)}
            label="Enter Sponsor Name"
            fullWidth
          />
          <Div height={30} />
          <AppButton onClick={handleSubmit} sx={{ width: "100%" }}>
            Submit
          </AppButton>
        </Box>
      </Modal>
    </div>
  );
}
