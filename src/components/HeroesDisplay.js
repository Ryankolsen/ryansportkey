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
      <Container className="heroes-display__container">
        <div
          style={{ justifyContent: "center" }}
          className="heroes-display__hero-column"
        >
          <h1 className="heroes-display__h1">Strongest Heroes</h1>
          <HeroList heroes={heroes} toggleHeroes={toggleHeroes} />
          <h3 className="textHeader">
            {`${heroes && heroes.length ? "" : "Add Some Heroes"}`}
          </h3>
          <div className="d-grid gap-2">
            <Button
              className="centeredButton mb-3"
              variant="warning"
              onClick={handleClearHeroes}
            >
              Remove Selected Heroes from List
            </Button>
          </div>
        </div>
        <div
          style={{ justifyContent: "center" }}
          className="heroes-display__hero-column counterColumn ml-3  "
        >
          <HeroesForm heroes={heroes} setHeroes={setHeroes} />
          <div className="imageZoomDiv">
            <h3 className="heroesImageTitle"> Hero Code Snippets: </h3>
            <ZoomImage imageSm={imageSm} imageLg={imageLg} />
            <ZoomImage imageSm={imageSmTwo} imageLg={imageLgTwo} />
            <ZoomImage imageSm={imageSmThree} imageLg={imageLgThree} />
            <ZoomImage imageSm={imageSmFour} imageLg={imageLgFour} />
          </div>
        </div>
      </Container>
    </div>
  );
}
