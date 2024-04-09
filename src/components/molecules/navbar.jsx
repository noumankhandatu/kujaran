import { primary } from "../../utils/theme/colors";
import Div from "./../atoms/Div";
import ham from "../../assets/svgs/hamburger.svg";

const Navbar = () => {
  return (
    <Div sx={{ position: "relative" }}>
      <Div sx={{ background: primary, textAlign: "center", width: "100%" }}>
        <img src="/logo.svg" alt="" style={{ width: 120 }} />
      </Div>
      <Div sx={sty}>
        <img src={ham} alt="" />
      </Div>
    </Div>
  );
};

export default Navbar;

const sty = {
  position: "absolute",
  right: {
    lg: 50,
    xs: 20,
  },
  top: 35,
};
