import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import "./Search.css";

//Icon image import
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
//Town images
const iconImage = importAll(
  require.context("./icons-brews", false, /\.(png|jpe?g|svg)$/)
);

function Search() {
  const [formData, setFormData] = useState({
    city: "",
    state: "",
    zip: "",
  });
  const { city, state, zip } = formData;
  const [breweries, setBreweries] = useState();

  function handleChange(event) {
    setFormData(formData => {
      return { ...formData, [event.target.name]: event.target.value };
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    fetch(
      `https://api.openbrewerydb.org/v1/breweries?by_city=${city}&by_state=${state}&by_postal=${zip}`
    )
      .then(response => response.json())
      .then(data => {
        setBreweries(data);
        setFormData({ city: "", state: "", zip: "" });
      });
  }

  return (
    <div>
      <div id="form-div">
        <div className="search-header">
          <h2>
            <img
              src={iconImage["cheers_icon.jpeg"]}
              alt="Graphic of two beer mugs clinking together"
            />
            SEARCH FOR BREWERIES:
            <img
              src={iconImage["cheers_icon.jpeg"]}
              alt="Graphic of two beer mugs clinking together"
            />
          </h2>
        </div>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={city}
              onChange={handleChange}
              placeholder="Enter City"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="state"
              value={state}
              onChange={handleChange}
              placeholder="Enter State"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>ZIP Code</Form.Label>
            <Form.Control
              type="number"
              name="zip"
              value={zip}
              onChange={handleChange}
              placeholder="Enter 5 digit ZIP Code"
            />
          </Form.Group>
          <div style={{ textAlign: "center" }}>
            <Button type="submit">Search</Button>
          </div>
        </Form>
      </div>
      <div id="accordion-div">
        <Accordion>
          {breweries
            ? breweries.map((brewery, index) => (
                <Accordion.Item key={brewery.id} eventKey={index.toString()}>
                  <Accordion.Header>
                    <p>
                      <br />
                      <strong>{brewery.name}</strong> <br />
                      Type: {brewery.brewery_type}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    {brewery.address_1}, {brewery.city}, {brewery.state}{" "}
                    {brewery.postal_code}
                    <br />
                    {brewery.website_url ? (
                      <Button href={brewery.website_url}>Website</Button>
                    ) : null}
                  </Accordion.Body>
                </Accordion.Item>
              ))
            : null}
        </Accordion>
      </div>
    </div>
  );
}

export default Search;
