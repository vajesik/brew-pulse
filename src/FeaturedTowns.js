import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./FeaturedTowns.css";

//Image imports
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
//Town images
const townImages = importAll(
  require.context("./images-towns", false, /\.(png|jpe?g|svg)$/)
);

function FeaturedTowns() {
  const [featuredTowns, setFeaturedTowns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/featuredTowns")
      .then(r => r.json())
      .then(towns => setFeaturedTowns(towns));
  }, []);

  return (
    <>
      <div className="town-header">
        <h1>
          <img
            src={townImages["mountain.jpeg"]}
            alt="Graphic of snow-capped mountains and a cloud"
          />
          OUR STOMPING GROUNDS!
          <img
            src={townImages["ocean.jpeg"]}
            alt="Graphic of a sailboat on the ocean"
          />
        </h1>
      </div>
      <div className="town-div">
        {featuredTowns.map(town => (
          <Card
            key={town.id}
            style={{
              width: "30rem",
              marginTop: "2em",
              padding: "2em 1em 1em",
              borderRadius: "2em",
              textAlign: "center",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Card.Img
              variant="top"
              src={townImages[town.image]}
              alt={(town.city, town.state)}
              className="featured-town-image"
            />
            <Card.Body>
              <Card.Title>
                {town.city}, {town.state}
              </Card.Title>
              <Card.Text>{town.description}</Card.Text>
              <Button
                onClick={() => navigate(`/featured_towns/${town.city}`)}
                variant="primary"
              >
                Explore the local breweries
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default FeaturedTowns;
