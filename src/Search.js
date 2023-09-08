import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
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
  const [sortType, setSortType] = useState("name");
  const [breweries, setBreweries] = useState();
  const [showModal, setShowModal] = useState(false);

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
        if (data.length < 1) {
          setBreweries();
          setShowModal(true);
        } else {
          setBreweries(data);
          setFormData({ city: "", state: "", zip: "" });
        }
      })
      .catch(error => alert("Error fetching breweries"));
  }

  const sortedBreweries =
    sortType === "name"
      ? breweries
      : [...breweries].sort((a, b) =>
          a.brewery_type.localeCompare(b.brewery_type)
        );

  return (
    <>
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
      <div className="form-div">
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
          <div id="button-div">
            <Button type="submit">Search</Button>
            {breweries ? (
              <DropdownButton
                id="dropdown-basic-button"
                title="Sort By"
                onSelect={event => setSortType(event)}
              >
                {sortType === "type" ? (
                  <Dropdown.Item eventKey="name">Brewery Name</Dropdown.Item>
                ) : (
                  <Dropdown.Item eventKey="type">Brewery Type</Dropdown.Item>
                )}
              </DropdownButton>
            ) : null}
          </div>
        </Form>
      </div>
      <Modal show={showModal}>
        <Modal.Body>
          <p>
            <strong>No breweries returned for:</strong>
            <br />
            City: {city}
            <br />
            State: {state}
            <br />
            ZIP Code: {zip}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={event => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
      <div className="accordion-div">
        <Accordion>
          {breweries
            ? sortedBreweries.map((brewery, index) => (
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
                    <FontAwesomeIcon icon={faPhone} />
                    {" " +
                      brewery.phone.substring(0, 3) +
                      "-" +
                      brewery.phone.substring(3, 6) +
                      "-" +
                      brewery.phone.substring(6, 10)}{" "}
                    <br />
                    {brewery.website_url ? (
                      <Button href={brewery.website_url} target="_blank">
                        Website
                      </Button>
                    ) : null}
                  </Accordion.Body>
                </Accordion.Item>
              ))
            : null}
        </Accordion>
      </div>
    </>
  );
}

export default Search;
