import { primary } from "../../utils/theme/colors";
import Div from "./../atoms/Div";

const Footer = () => {
  return (
    <Div>
      <Div sx={{ background: primary, textAlign: "center", width: "100%" }}>
        <img src="/logo.svg" alt="" style={{ width: 120 }} />
      </Div>
    </Div>
  );
};

export default Footer;
