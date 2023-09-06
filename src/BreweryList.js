import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//Image imports
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

//Brew images
const brewImages = importAll(
  require.context("./images-brews", false, /\.(png|jpe?g|svg)$/)
);

function BreweryList() {
  const [breweries, setBreweries] = useState([]);
  const { city } = useParams();
  console.log(city);

  useEffect(() => {
    fetch("http://localhost:3000/breweries")
      .then(r => r.json())
      .then(breweries => setBreweries(breweries));
  }, []);

  const breweriesToDisplay = breweries.filter(brewery => {
    if (city === brewery.city) {
      return true;
    }
  });

  return (
    <div>
      {breweriesToDisplay.map(brewery => (
        <Card key={brewery.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{brewery.name}</Card.Title>
            <Card.Text>Brewery Type: {brewery.type}</Card.Text>
            <Card.Text>{brewery.address}</Card.Text>
            <Card.Text>
              {brewery.city}, {brewery.state} {brewery.zip}
            </Card.Text>
            <Button variant="primary">Website</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default BreweryList;
