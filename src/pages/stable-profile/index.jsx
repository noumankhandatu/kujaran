/* eslint-disable react/prop-types */
import { Appfont, Appheading } from "../../utils/theme/typo";
import Div from "../../components/atoms/Div";
import Title from "../../components/molecules/title";
import { alpha } from "../../utils/theme/colors";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../../utils/route-paths";

const StableProfile = () => {
  return (
    <Div>
      <Div sx={{ p: 2, background: "#BEC9D9" }}>
        <Appheading>Stable Name</Appheading>
        <Div height={30} />
        <Div sx={{ display: "flex" }}>
          <img src="/avatar.svg" alt="" />
          <Div sx={{ ml: 2 }}>
            <Appfont>Address</Appfont>
            <Appfont>Phone Number</Appfont>
            <Appfont>Email</Appfont>
          </Div>
        </Div>
      </Div>
      <Title bg={"#1B2A41"}>Rider</Title>
      <AvtarCard />
      <hr />
      <AvtarCard />
      <Title bg={"#1B2A41"}>Horses</Title>
      <AvtarCard title={"Horse Name"} />
      <hr />
      <AvtarCard title={"Horse Name"} />
      <hr />
      <AvtarCard title={"Horse Name"} />
      <hr />
      <AvtarCard title={"Horse Name"} />
    </Div>
  );
};

export default StableProfile;

const AvtarCard = ({ title = "Rider Name" }) => {
  return (
    <Link to={ROUTE_PATH.SIGNUP_PAGES}>
      <Div
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          background: alpha,
          cursor: "pointer",
          justifyContent: "space-between",
        }}
      >
        <Div sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <img width={100} src="/avatar.svg" alt="" />
          <Appfont>
            <b>{title}</b>
          </Appfont>
        </Div>
      </Div>
    </Link>
  );
};
