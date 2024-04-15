import { Appfont } from "../../utils/theme/typo";
import Div from "../atoms/Div";

// eslint-disable-next-line react/prop-types
const Title = ({ children, bg = "#264F8D", color = "white" }) => {
  return (
    <Div sx={{ p: 2, background: bg }}>
      <Appfont sx={{ color: color }}>
        <b>{children}</b>{" "}
      </Appfont>
    </Div>
  );
};

export default Title;
