/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Appfont } from "../../utils/theme/typo";
import Div from "../../components/atoms/Div";
import { AppButton } from "../../components/atoms/AppButton";

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

export default function RiderModel({ setOpen, open }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Appfont sx={{ mt: 2, textAlign: "center" }}>
            Are you sure you want to cancel <br />
            the event ? only 60% will be refunded
          </Appfont>

          <Div
            onClick={handleClose}
            sx={{ display: "flex", justifyContent: "space-between", mt: 6 }}
          >
            <AppButton sx={{ background: "green" }}>Yes</AppButton>
            <AppButton sx={{ background: "red" }}>No</AppButton>
          </Div>
        </Box>
      </Modal>
    </div>
  );
}
