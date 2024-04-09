import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { beta, secondary } from "../../utils/theme/colors";

export const AppButton = styled(Button)({
  fontFamily: "Inter",
  fontSize: "12px",
  textTransform: "capitalize",
  boxShadow: "none",
  borderRadius: "8px",
  height: 40,
  background: beta,
  color: "white",
  "&:hover": {
    background: secondary,
  },
  width: 80,
});
