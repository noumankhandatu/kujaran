/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import Div from "../atoms/Div";
import { Avatar } from "@mui/material";
import { Appfont } from "../../utils/theme/typo";

const ImageUploader = ({ defaultImage, label, setImage }) => {
  const [imageURL, setImageURL] = useState("");
  // upload image
  const hiddenFileInput = useRef(null);

  const handleImage = (e) => {
    if (e.target.files.length !== 0) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setImage(file);
      setImageURL(url);
    }
  };

  const handleImageClick = () => {
    hiddenFileInput.current.click();
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <input
        ref={hiddenFileInput}
        onChange={handleImage}
        type="file"
        id="getFile"
        style={{ display: "none" }}
      />

      <hr />
      <Div>
        <Div className="button-upload" onClick={handleImageClick} sx={imageBoxStyle}>
          {imageURL ? (
            <img
              src={imageURL}
              alt="ímg"
              style={{ width: "90%", height: "90%", borderRadius: 100 }}
            />
          ) : (
            <Avatar src={defaultImage} alt="Avatar" sx={{ width: "90%", height: "90%" }} />
          )}
        </Div>
        <Appfont>{label}</Appfont>
        <Div height={30} />
      </Div>
    </div>
  );
};

export default ImageUploader;
const imageBoxStyle = {
  borderRadius: "20%",
  boxShadow: "0 10px 40px 0 rgba(0, 64, 128, 0.1)",
  width: "150px",
  height: "150px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  mt: 4,
  mb: 4,
};
