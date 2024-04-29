import React from "react";

const Apploader = () => {
  return (
    <div
      style={{
        position: "relative", // Set position to relative
        height: "100vh", // Use "vh" for viewport height
        backgroundColor: "white", // Set background color to white
      }}
    >
      <img
        src="/logo.svg"
        alt=""
        style={{
          position: "absolute", // Set position to absolute
          top: "50%", // Center vertically
          left: "50%", // Center horizontally
          transform: "translate(-50%, -50%)", // Center the image exactly
        }}
      />
    </div>
  );
};

export default Apploader;
