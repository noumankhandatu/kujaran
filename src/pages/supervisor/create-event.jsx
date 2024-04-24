/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Div from "../../components/atoms/Div";
import Title from "../../components/molecules/title";
import IntroCard from "./components/IntroCard";
import { useState } from "react";
import { AppButton } from "../../components/atoms/AppButton";
import axios from "axios";

const CreateEvent = () => {
  // State variables to hold form data
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("location", location);
      formData.append("description", description);
      formData.append("startDate", startDate);
      formData.append("endDate", endDate);
      formData.append("status", status);
      formData.append("image", image);

      const response = await axios.post(
        "http://localhost:5000/api/supervisor/event/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Event created successfully:", response.data);
      // Reset form fields after successful submission
      setTitle("");
      setLocation("");
      setDescription("");
      setStartDate("");
      setEndDate("");
      setStatus("");
      setImage("");
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <Div>
      <IntroCard />
      <Title bg={"#1B2A41"}>Registered</Title>
      <Div sx={{ m: 2 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            variant="outlined"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            label="Location"
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Div sx={{ display: "flex", width: "100%", gap: 2 }}>
            <TextField
              sx={{ width: "100%", marginBottom: 2 }}
              variant="outlined"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              type="date"
            />
            <TextField
              sx={{ width: "100%", marginBottom: 2 }}
              variant="outlined"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
              type="date"
            />
          </Div>

          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            label="Status"
            variant="outlined"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />

          <AppButton type="submit">Create</AppButton>
        </form>
      </Div>
      <Title bg="#1B2A41">Sponsors</Title>
      <Title bg={"#D9D9D9"} color="black">
        <span style={{ display: "flex", alignItems: "center" }}>
          <AddIcon sx={{ color: "green" }} />
          Add Sponsor
        </span>
      </Title>
      <Title bg="#1B2A41">Technical Handbook</Title>
      <Title bg={"#D9D9D9"} color="black">
        <span style={{ display: "flex", alignItems: "center" }}>
          <AddIcon sx={{ color: "green" }} />
          Add Pdf
        </span>
      </Title>
      <Title bg="#1B2A41">Class</Title>
      <Title bg={"#D9D9D9"} color="black">
        <span style={{ display: "flex", alignItems: "center" }}>
          <AddIcon sx={{ color: "green" }} />
          Add Class
        </span>
      </Title>
    </Div>
  );
};

export default CreateEvent;
