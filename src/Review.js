import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Review.css";

function Review() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    review: "",
    brewery: "",
  });

  const [breweries, setBreweries] = useState([]);
  const [city, setCity] = useState([]);
  const [breweryReviews, setBreweryReviews] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/breweries")
      .then(response => response.json())
      .then(data => {
        setBreweries(data);
        const uniqueCities = Array.from(new Set(data.map(b => b.city)));
        setCity(uniqueCities);
      })
      .catch(error => console.error("Error fetching breweries:", error));
  }, []);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === "brewery") {
      fetchReviewsForBrewery(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
    const reviewData = {
      name: formData.name,
      breweryId: formData.brewery,
      review: formData.review,
    };

    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Review saved:", data);
        setFormData({
          name: "",
          city: "",
          review: "",
          brewery: "",
        });
        fetchReviewsForBrewery(formData.brewery);
      })
      .catch(error => {
        console.error("Error saving review:", error);
      });
  };

  const fetchReviewsForBrewery = breweryId => {
    fetch(`http://localhost:3000/reviews?breweryId=${breweryId}`)
      .then(response => response.json())
      .then(data => {
        setBreweryReviews(data);
      })
      .catch(error => {
        console.error("Error fetching reviews:", error);
      });
  };

  const filteredBreweries = formData.city
    ? breweries.filter(b => b.city === formData.city)
    : [];

  return (
    <Container>
      <Row className="justify-content-md-center" style={{ paddingTop: "10px" }}>
        <Col md={6}>
          <Card className="review-card">
            <Card.Header className="review-card-header">
              Submit a Review
            </Card.Header>
            <Card.Body>
              {showAlert && (
                <Alert variant="success">Review saved successfully!</Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                  />
                </Form.Group>

                <Form.Group controlId="formCitySelect">
                  <Form.Label>Select City</Form.Label>
                  {city.map(city => (
                    <Form.Check
                      type="radio"
                      key={city}
                      label={city}
                      name="city"
                      value={city}
                      checked={formData.city === city}
                      onChange={handleInputChange}
                    />
                  ))}
                </Form.Group>

                <Form.Group controlId="formBrewery">
                  <Form.Label>Select Brewery</Form.Label>
                  <Form.Control
                    as="select"
                    name="brewery"
                    value={formData.brewery}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a brewery...</option>
                    {filteredBreweries.map(brewery => (
                      <option key={brewery.id} value={brewery.id}>
                        {brewery.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formReview">
                  <Form.Label>Review</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="review"
                    value={formData.review}
                    onChange={handleInputChange}
                    placeholder="Enter your review"
                  />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Review;
