import React from "react";

//Image imports
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

//Header image
const headerImage = importAll(
  require.context("./images-header", false, /\.(png|jpe?g|svg)$/)
);

function Home() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "#dc6900",
          fontSize: "60px",
          fontWeight: "bold",
          textShadow: "2px 2px #a32020",
          padding: "18px",
          margin: "5px 200px",
          border: "3px dashed",
          borderRadius: "15px",
        }}
      >
        BREW PULSE
      </h1>
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "45%",
        }}
        src={headerImage["header.jpeg"]}
        alt="Graphic of a line of brews in a variety of glasses all with a nice head of foam"
      />
    </>
  );
}

export default Home;
