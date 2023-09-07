import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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
      {/* <h1
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
      </h1> */}
      <div
        className="logo"
        style={{
          border: "solid 1px",
          borderRadius: "15px",
          boxShadow: "4px 8px 10px rgba(0, 0, 0, 0.1)",
          color: "#dc6900",
          margin: "auto",
          width: "800px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "5%",
        }}
      >
        <img
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            // width: "45%",
          }}
          src={headerImage["brewpulselog.png"]}
          alt="Graphic of a line of brews in a variety of glasses all with a nice head of foam"
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/featured_towns">
            <Button>Check it Out</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
