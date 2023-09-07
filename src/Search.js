import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";

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
      <h1>Search for breweries near you</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          name="city"
          value={city}
          onChange={handleChange}
          placeholder="Enter City"
        />
        <Form.Label>State</Form.Label>
        <Form.Control
          type="text"
          name="state"
          value={state}
          onChange={handleChange}
          placeholder="Enter State"
        />
        <Form.Label>ZIP Code</Form.Label>
        <Form.Control
          type="number"
          name="zip"
          value={zip}
          onChange={handleChange}
          placeholder="Enter 5 digit ZIP Code"
        />
        <Button type="submit">Search</Button>
      </Form>
      <div>
        {breweries
          ? breweries.map((brewery, index) => (
              <Accordion key={brewery.id}>
                <Accordion.Item eventKey={index.toString()}>
                  <Accordion.Header>
                    {brewery.name} <br />
                    Type: {brewery.brewery_type}
                  </Accordion.Header>
                  <Accordion.Body>
                    {brewery.address_1}, {brewery.city}, {brewery.state}{" "}
                    {brewery.postal_code}
                    <br />
                    {brewery.website_url ? (
                      <Button href={brewery.url}>Website</Button>
                    ) : null}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))
          : null}
      </div>
    </div>
  );
}

export default Search;
