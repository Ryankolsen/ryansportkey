import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

import HeroList from "./HeroList";
import HeroesForm from "./HeroesForm";
import ZoomImage from "./ZoomImage";

import imageSm from "../media/HeroCodeOneSm.jpg";
import imageLg from "../media/HeroCodeOne.jpg";
import imageSmTwo from "../media/HeroCodeTwoSm.jpg";
import imageLgTwo from "../media/HeroCodeTwo.jpg";
import imageSmThree from "../media/HeroCodeThreeSm.jpg";
import imageLgThree from "../media/HeroCodeThree.jpg";
import imageSmFour from "../media/HeroCodeFourSm.jpg";
import imageLgFour from "../media/HeroCodeFour.jpg";
import avengersImg from "../media/avengers.jpg";
import dbzImg from "../media/dbz.jpg";

export default function Heroes() {
  const [heroes, setHeroes] = useState([]);

  function toggleHeroes(id) {
    const newHeroes = [...heroes];
    const heroTogg = newHeroes.find((hero) => hero.id === id);
    heroTogg.complete = !heroTogg.complete;
    setHeroes(newHeroes);
  }
  function handleClearHeroes() {
    const newHeroes = heroes.filter((hero) => !hero.complete);
    setHeroes(newHeroes);
  }
  return (
    <div className="react_page__header-overline">
      <Container>
        <Row className="reactCenteredContainer p-2">
          <Col style={{ justifyContent: "center" }} className="HeroColumn">
            <h1 className="heroesMainTitle">Strongest Heroes</h1>
            <HeroList heroes={heroes} toggleHeroes={toggleHeroes} />
            <h3 className="textHeader">
              {" "}
              {`${heroes && heroes.length ? "" : "Add Some Heroes"}`}
            </h3>
            <div className="d-grid gap-2">
              <Button
                className="centerdButton mb-3"
                variant="warning"
                onClick={handleClearHeroes}
              >
                Remove Selected Heroes from List
              </Button>
            </div>
          </Col>
          <Col
            style={{ justifyContent: "center" }}
            className="HeroColumn counterColumn ml-3  "
          >
            <HeroesForm heroes={heroes} setHeroes={setHeroes} />
            <div className="imageZoomDiv">
              <h3 className="heroesImageTitle"> Hero Code Snippets: </h3>
              <ZoomImage imageSm={imageSm} imageLg={imageLg} />
              <ZoomImage imageSm={imageSmTwo} imageLg={imageLgTwo} />
              <ZoomImage imageSm={imageSmThree} imageLg={imageLgThree} />
              <ZoomImage imageSm={imageSmFour} imageLg={imageLgFour} />
            </div>
          </Col>
          <Col
            style={{ justifyContent: "center" }}
            className="HeroColumn counterColumn ml-3 block-example border border-dark"
          ></Col>
        </Row>
      </Container>
    </div>
  );
}
