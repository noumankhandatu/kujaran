import { primary } from "../../utils/theme/colors";
import Div from "./../atoms/Div";
import AppMenu from "../atoms/AppMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Div sx={{ position: "relative" }}>
      <Div sx={{ background: primary, textAlign: "center", width: "100%" }}>
        <Link to="/">
          <img src="/logo.svg" alt="" style={{ width: 120 }} />
        </Link>
      </Div>
      <Div sx={sty}>
        <AppMenu />
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
