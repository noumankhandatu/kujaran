/* eslint-disable react/prop-types */
import { useState } from "react";
import { alpha, beta, secondary } from "../../utils/theme/colors";
import Div from "./../../components/atoms/Div";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Appfont } from "../../utils/theme/typo";
import { AppButton } from "../../components/atoms/AppButton";
import { Link } from "react-router-dom";

const AllEventsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("live");
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    // Implement filtering logic here
    console.log("Filter clicked");
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Div sx={mainDiv}>
        <TextField
          placeholder="Search..."
          variant="outlined"
          size="small"
          sx={{ width: "90%" }}
          value={searchQuery}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleFilterClick}>
                <SearchIcon />
              </IconButton>
            ),
            style: { backgroundColor: "#fff" },
          }}
        />
      </Div>
      {/* cards */}
      <Div height={30} />
      <Div style={{ position: "relative", top: 7 }}>
        <AppButton
          sx={activeTab === "live" ? { backgroundColor: secondary } : {}}
          onClick={() => handleTabClick("live")}
        >
          Live
        </AppButton>
        <AppButton
          sx={{
            ...(activeTab === "upcoming" ? { backgroundColor: secondary } : {}),
            ml: 0.1,
            mr: 0.1,
          }}
          variant={activeTab === "upcoming" ? "contained" : "outlined"}
          onClick={() => handleTabClick("upcoming")}
        >
          Upcoming
        </AppButton>
        <AppButton
          sx={activeTab === "ended" ? { backgroundColor: secondary } : {}}
          onClick={() => handleTabClick("ended")}
        >
          Ended
        </AppButton>
      </Div>
      <Div height={40} sx={{ background: beta, zIndex: 1, position: "relative" }} />
      {/* Content based on active tab */}
      {/* {activeTab === "live" && <EventCard />}
      {activeTab === "upcoming" && <EventCard />}
      {activeTab === "ended" && <EventCard />} */}

      <EventCard id={1} />
      <Div height={30} sx={{ background: beta }} />
      <EventCard id={2} />
      <Div height={30} sx={{ background: beta }} />
      <Div height={210} />
    </div>
  );
};

export default AllEventsPage;

const EventCard = ({ id }) => {
  return (
    <Link to={"/event/" + id}>
      <Div
        sx={{ display: "flex", alignItems: "center", gap: 2, background: alpha, cursor: "pointer" }}
      >
        <img src="/eventlogo.png" alt="" />
        <Div>
          <Appfont>Event Name</Appfont>
          <Appfont>Event Location</Appfont>
          <Appfont>Event Startdate - Event Enddate </Appfont>
        </Div>
      </Div>
    </Link>
  );
};

// styles
const mainDiv = {
  height: 100,
  background: secondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
