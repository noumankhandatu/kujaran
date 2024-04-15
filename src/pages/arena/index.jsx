/* eslint-disable react/prop-types */
import { alpha, primary, secondary } from "../../utils/theme/colors";
import { Appfont, Appheading } from "../../utils/theme/typo";
import Div from "../../components/atoms/Div";
import { Link } from "react-router-dom";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { AppButton } from "../../components/atoms/AppButton";
import ham from "../../assets/svgs/hamburger.svg";
import { useState } from "react";
import { ROUTE_PATH } from "../../utils/route-paths";

const ArenaPage = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  return (
    <div>
      <EventCard />
      {/* Tabs */}
      <Div sx={{ display: "flex", justifyContent: "space-between", height: 60 }}>
        <Appfont sx={{ ...textStyle }}>Riders</Appfont>
        <Appfont sx={{ ...textStyle }}> Horses</Appfont>
        <Appfont sx={{ ...textStyle }}> Organisers</Appfont>
        <Appfont sx={{ ...textStyle }}>
          <LaptopMacIcon />
        </Appfont>
      </Div>
      {/* Text Description */}
      <Div>
        <Div sx={{ background: alpha }}>
          <Appfont sx={{ pt: 2, pb: 2, ml: 1 }}>Text Description Heading</Appfont>
        </Div>
        <Div>
          <Appfont sx={{ ml: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis
            incidunt, nobis eum iure totam non iusto aperiam. Quasi autem natus minus, veritatis
            iure odit magnam explicabo quaerat atque, nostrum reiciendis minima sunt voluptatum,
            ullam dolorem expedita labore a voluptatibus? Velit, non! Natus sequi tempore quidem
            excepturi id ipsa, repellendus laboriosam. Ullam quos quibusdam architecto distinctio ut
            magni aliquid dicta quia aspernatur! Omnis, alias placeat error voluptate officiis illum
            ad ducimus aliquid corrupti expedita accusamus ex commodi ipsam rerum dolores a quam
            incidunt mollitia deserunt unde sed cumque nisi? Reprehenderit id minus error porro
            facilis nisi quisquam praesentium fugit sequi!
          </Appfont>
        </Div>
      </Div>
      {/* Text Description Heading */}
      <Div>
        <Div sx={{ background: alpha }}>
          <Appfont sx={{ pt: 2, pb: 2, ml: 1 }}>Text Description Heading</Appfont>
        </Div>
        <Div>
          <Appfont sx={{ ml: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis
            incidunt, nobis eum iure totam non iusto aperiam. Quasi autem natus minus, veritatis
            iure odit magnam explicabo quaerat atque, nostrum reiciendis minima sunt voluptatum,
            ullam dolorem expedita labore a voluptatibus? Velit, non! Natus sequi tempore quidem
            excepturi id ipsa, repellendus laboriosam. Ullam quos quibusdam architecto distinctio ut
            magni aliquid dicta quia aspernatur! Omnis, alias placeat error voluptate officiis illum
            ad ducimus aliquid corrupti expedita accusamus ex commodi ipsam rerum dolores a quam
            incidunt mollitia deserunt unde sed cumque nisi? Reprehenderit id minus error porro
            facilis nisi quisquam praesentium fugit sequi!
          </Appfont>
        </Div>
      </Div>
      {/* pdf view */}
      <Div sx={{ background: alpha, display: "flex", justifyContent: "space-between" }}>
        <Appfont sx={{ pt: 2, pb: 2, ml: 1 }}>Technical Handbook</Appfont>
        <Div sx={{ pt: 2, pb: 2, mr: 1 }}>
          <AppButton>Pdf View</AppButton>{" "}
        </Div>
      </Div>
      {[1, 2, 3, 4].map((items) => {
        return (
          <Div key={items}>
            <Div
              onClick={() => setExpandedItem(expandedItem === items ? null : items)}
              sx={{
                background: primary,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: `3px solid ${alpha}`,
                cursor: "pointer",
              }}
            >
              <Appfont sx={{ ml: 1, color: "white" }}>Day {items}</Appfont>
              <Div sx={{ pt: 1, pb: 1, mr: 1 }}>
                <img src={ham} alt="" />
              </Div>
            </Div>
            {expandedItem === items && (
              <Div sx={{ background: alpha, borderBottom: `3px solid #37CF1E` }}>
                <Div
                  sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                >
                  <Appfont sx={{ ml: 1 }}>Arena {items}</Appfont>
                  <Div sx={{ pt: 2, mr: 1 }}>
                    <Link to={ROUTE_PATH.ARENA_DETAILS}>
                      <AppButton sx={{ background: "#CF0E0E" }}>Live</AppButton>
                    </Link>
                  </Div>{" "}
                </Div>
                <Appfont sx={{ ml: 1 }}>Class Name </Appfont>
                <Appfont sx={{ ml: 1 }}>Class Status </Appfont>
                <Appfont sx={{ pb: 2, ml: 1 }}>Class Starttime </Appfont>
              </Div>
            )}
          </Div>
        );
      })}
    </div>
  );
};

export default ArenaPage;

const EventCard = () => {
  return (
    <Div
      sx={{ display: "flex", alignItems: "center", gap: 2, background: alpha, cursor: "pointer" }}
    >
      <img src="/eventlogo.png" alt="" />
      <Div>
        <Appheading>Event Name</Appheading>
        <Appfont>Event Location</Appfont>
        <Appfont>Event Startdate - Event Enddate </Appfont>
      </Div>
    </Div>
  );
};

const textStyle = {
  width: "100%",
  pt: 2,
  textAlign: "center",
  "&:hover": {
    background: secondary,
    color: "white",
  },
  transition: "background-color 0.5s, color 0.5s",
};
