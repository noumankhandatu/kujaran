/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import Div from "../../components/atoms/Div";
import Title from "../../components/molecules/title";
import IntroCard from "./components/IntroCard";
import { useState } from "react";
import { AppButton } from "../../components/atoms/AppButton";
import ImageUploader from "../../components/molecules/ImageUploader";
import { useCreateEventMutation } from "../../redux/services/supervisor-apis";
import Loader from "./../../components/atoms/Loader";
import { Select, MenuItem } from "@mui/material";
import { toast } from "react-toastify";

const statusOptions = [
  { value: "LIVE", label: "LIVE" },
  //   { value: "UPCOMING", label: "UPCOMING" },
  //   { value: "ENDED", label: "ENDED" },
];

const CreateEvent = () => {
  // State variables to hold form data
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");

  // Mutation hook for creating an event
  const [createEvent, { isLoading, isError }] = useCreateEventMutation();

  if (isError) {
    return <>Something went wrong please try again later</>;
  }
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) return toast.warn("Please select event image");
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("location", location);
      formData.append("description", description);
      formData.append("startDate", new Date(startDate).toISOString());
      formData.append("endDate", new Date(endDate).toISOString());
      formData.append("status", status);
      formData.append("image", image);

      const response = await createEvent(formData);
      if (response.data.success === true) {
        toast.success(response.data.message);
      }
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
          <ImageUploader
            defaultImage="/eventlogo.png"
            label="Upload Event Image"
            setImage={setImage}
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

          <Select
            sx={{ width: "100%" }}
            value={status}
            onChange={handleStatusChange}
            required
            label={"Status"}
          >
            {statusOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <Div height={30} />
          {isLoading && <Loader />}
          {!isLoading && <AppButton type="submit">Create</AppButton>}
        </form>
      </Div>
      <Div height={100} />
    </Div>
  );
};

export default CreateEvent;
