import { Appfont } from "../../utils/theme/typo";
import Div from "../atoms/Div";

// eslint-disable-next-line react/prop-types
const Title = ({ children }) => {
  return (
    <Div sx={{ p: 2, background: "#264F8D" }}>
      <Appfont sx={{ color: "white" }}>{children}</Appfont>
    </Div>
  );
};

export default Title;
