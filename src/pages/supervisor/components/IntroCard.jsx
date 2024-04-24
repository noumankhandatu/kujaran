import Div from "../../../components/atoms/Div";
import { Appfont, Appheading } from "../../../utils/theme/typo";

const IntroCard = () => {
  return (
    <Div sx={{ p: 2, background: "#BEC9D9" }}>
      <Appheading>Supervisor</Appheading>
      <Div height={30} />
      <Div sx={{ display: "flex" }}>
        <img src="/avatar.svg" alt="" />
        <Div sx={{ ml: 2 }}>
          <Appfont>Supervisor Name</Appfont>
          <Appfont>DOB</Appfont>
          <Appfont>Nationality</Appfont>
        </Div>
      </Div>
    </Div>
  );
};

export default IntroCard;
