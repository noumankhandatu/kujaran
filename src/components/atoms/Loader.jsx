import CircularProgress from "@mui/material/CircularProgress";
import Div from "./Div";

const Loader = () => {
  return (
    <Div sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Div>
  );
};

export default Loader;
