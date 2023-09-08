import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./About.css";

//Image imports
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

//About images
const aboutImages = importAll(
  require.context("./images-about", false, /\.(png|jpe?g|svg)$/)
);

function About() {
  const cardDetails = [
    {
      name: "Vanessa Jesik",
      imageUrl: "vajesik.jpg",
      description:
        "I am privileged to intimately know the mountains surrounding my home in Estes Park, Colorado. I have challenged my fortitude, expanded my comfort zone, and forged unbreakable bonds in the craggy landscape of Rocky Mountain National Park. My husband and I also have the honor of spending a portion of every winter in the town of Ouray, Colorado.  He has been ice climbing with their frozen waterfalls since he was 11 years old.  Early in our courtship, we lived a full winter in nearby Ridgway and spent the short days ice climbing and backcountry skiing off Red Mountain Pass.  We are fortunate the community welcomes us back each year. The growth I experienced exploring the mountains these last dozen-plus years has solidified in me the certainty that I am capable of seemingly impossible things if I simply determine myself to be.\n\nPlease enjoy one of my early projects in my new adventure becoming a software engineer - Brew Pulse! - just as I, after many a long, fatiguing day climbing or skiing in the mountains, have enjoyed an ice-cold beer brewed and poured to perfection by the breweries featured here.",
      buttonLink: "#",
      githubLink: "https://github.com/vanessa-jesik",
      linkedinLink: "https://linkedin.com/in/vanessa-jesik",
    },
    {
      name: "Rae Stanton",
      imageUrl:
        "https://www.usnews.com/dims4/USNEWS/af66e3c/2147483647/crop/2000x1313+0+0/resize/640x420/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Ff9%2Ff1%2Fa6174c87479b8222c09903d7651c%2F190219-softwaredevelopers-stock.jpg",
      description:
        "Some quick example text for the second card. This is more about me!",
      buttonLink: "#",
      githubLink: "https://github.com/rae-stanton",
      linkedinLink: "https://linkedin.com/in/rae-stanton",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "2em",
      }}
    >
      {cardDetails.map((card, index) => (
        <Card
          key={index}
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
            src={aboutImages[card.imageUrl]}
            style={{
              width: "65%",
              borderRadius: "50%",
              margin: "0 auto",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
            alt={card.name}
          />
          <Card.Body>
            <Button href={card.githubLink} target="_blank" className="github">
              <FontAwesomeIcon icon={faGithub} />
            </Button>
            <Button
              href={card.linkedinLink}
              target="_blank"
              className="linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Button>

            <Card.Title style={{ fontWeight: 700, fontSize: "1.5em" }}>
              {card.name}
            </Card.Title>
            <Card.Text style={{ whiteSpace: "pre-line" }}>
              {card.description}
            </Card.Text>

            <Button
              style={{
                borderRadius: "2em",
                color: "#ffffff",
                padding: "0.5em 1.5em",
              }}
              href={card.buttonLink}
            >
              Learn More
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default About;
