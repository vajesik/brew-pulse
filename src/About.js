import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const cardDetails = [
    {
      name: "Vanessa Jesik",
      imageUrl: "vajesik.jpg",
      description:
        "Please enjoy one of my early projects created during my new adventure of becoming a software engineer - Brew Pulse! - just as I, after many a long, fatiguing day climbing or skiing in the mountains, have enjoyed an ice-cold beer brewed and poured to perfection by the breweries featured here.\n\nI am privileged to intimately know the mountains surrounding my home in Estes Park, Colorado. I have challenged my fortitude, expanded my comfort zone, and forged unbreakable bonds in the craggy landscape of Rocky Mountain National Park. My husband and I also have the honor of spending a portion of every winter in the town of Ouray, Colorado.  He has been ice climbing with their frozen waterfalls since he was 11 years old.  Early in our courtship, we lived a full winter in nearby Ridgway and spent the short days ice climbing and backcountry skiing off Red Mountain Pass.  We are fortunate the community welcomes us back each year. The growth I experienced exploring the mountains these last dozen-plus years has solidified in me the certainty that I am capable of seemingly impossible things if I simply determine myself to be.",
      buttonText: "Check out my local\nwatering holes!",
      buttonLink: "/featured_towns/Estes Park",
      githubLink: "https://github.com/vanessa-jesik",
      linkedinLink: "https://linkedin.com/in/vanessa-jesik",
    },
    {
      name: "Rae Stanton",
      imageUrl: "headshotrrae.png",
      description:
        "I started off living in Tampa, Florida, and spent the vast majority of my life there. In late 2022, though, we packed up and moved to the beautiful PNW. Portland and Vancouver are both wonderful cities, and I love exploring the local restaurants(food carts included!), some excellent local beer (Cascade's sours are so good) and cider (huge shoutout to Schilling, their mule cider is 10/10) and nature. I also switched into learning software development at the same time we moved, starting in Ruby on Rails and now learning other languages and enjoying the process. I joke that I'm a human trill, having been a music teacher, baker, hairstylist, and now this! When I'm not hacking away, I absolutely love playing video games, throwing down in the kitchen with my husband, cuddling with my two cats, and watching a ton of sci-fi shows. Anyway, I hope you enjoy our project, Brew Pulse, created in our second phase of Flatiron School. Also, check out some of my local brews below! You may find one to travel to if you find yourself in the PNW one day.",

      buttonText: "Check my Local Brews",
      buttonLink: "/featured_towns/Vancouver",
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
            className="about-card-image"
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
                whiteSpace: "pre-line",
              }}
              onClick={() => navigate(`${card.buttonLink}`)}
            >
              {card.buttonText}

            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default About;
