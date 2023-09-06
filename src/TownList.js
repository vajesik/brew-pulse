import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./TownList.css";

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
//Brew images
const brewImages = importAll(
  require.context("./images-brews", false, /\.(png|jpe?g|svg)$/)
);

function TownList() {
  const [featuredTowns, setFeaturedTowns] = useState([]);
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/featuredTowns")
      .then(r => r.json())
      .then(towns => setFeaturedTowns(towns));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/breweries")
      .then(r => r.json())
      .then(breweries => setBreweries(breweries));
  }, []);

  return (
    <div>
      <h1>Our featured stomping grounds!</h1>
      {/* {featuredTowns.map(town => {
        return (
          <Card
          key={town.id}
          style={{
            width: "30rem",
            marginTop: "2em",
            padding: "2em 1em 1em",
            borderRadius: "2em",
            textAlign: "center",
            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
          }}>
            <Card.Img variant="top" src={town.image} />
            <Card.Body>
              <Card.Title>
                {town.city}, {town.state}
              </Card.Title>
              <Card.Text>{town.description}</Card.Text>
              <Button variant="primary">Explore local breweries</Button>
            </Card.Body>
          </Card>
        );
      })} */}
      <Card
        style={{
          width: "30rem",
          marginTop: "2em",
          padding: "2em 1em 1em",
          borderRadius: "2em",
          textAlign: "center",
          boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Card.Img variant="top" src={townImages["portland.jpeg"]} />
        <Card.Body>
          <Card.Title>Portland, Oregon</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Explore local breweries</Button>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "30rem",
          marginTop: "2em",
          padding: "2em 1em 1em",
          borderRadius: "2em",
          textAlign: "center",
          boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Card.Img variant="top" src={townImages["vancouver.jpeg"]} />
        <Card.Body>
          <Card.Title>Vancouver, Washington</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Explore local breweries</Button>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "30rem",
          marginTop: "2em",
          padding: "2em 1em 1em",
          borderRadius: "2em",
          textAlign: "center",
          boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Card.Img variant="top" src={townImages["estes.jpeg"]} />
        <Card.Body>
          <Card.Title>Estes Park, Colorado</Card.Title>
          <Card.Text>
            Gateway town to Rocky Mountain National Park, sitting at about 7,500
            feet above sea level, offers stunning views of the Continental
            Divide.
          </Card.Text>
          <Button variant="primary">Explore local breweries</Button>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "30rem",
          marginTop: "2em",
          padding: "2em 1em 1em",
          borderRadius: "2em",
          textAlign: "center",
          boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Card.Img variant="top" src={townImages["ouray.jpeg"]} />
        <Card.Body>
          <Card.Title>Ouray/Ridgway, Colorado</Card.Title>
          <Card.Text>
            Ouray is an old mining town nestled in a tight amphitheater of steep
            cliff walls. It's neighbor, Ridgway, allows wide open views of the
            surrounding San Juan Mountains.
          </Card.Text>
          <Button variant="primary">Explore local breweries</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TownList;
