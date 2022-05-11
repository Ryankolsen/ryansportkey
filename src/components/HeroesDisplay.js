import React, { useState, useEffect } from "react";
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
  function handleClearHeroesMongo() {
    const deletedHeroes = heroes.filter((hero) => {
      return hero.complete;
    });
    const newHeroes = heroes.filter((hero) => !hero.complete);
    setHeroes(newHeroes);
    deletedHeroes.map((hero) => {
      console.log(hero.id);
      //call fetch
      deleteHeroesMongo(hero.id);
    });
  }

  async function deleteHeroesMongo(id) {
    const response = await fetch(`.netlify/functions/delete-hero?&id=${id}`);
  }

  function handleClearHeroes() {
    const newHeroes = heroes.filter((hero) => !hero.complete);
    setHeroes(newHeroes);
  }

  return (
    <div className="react_page__header-overline">
      <Container className="heroes-display__container">
        <div className="heroes-display__hero-column">
          <h1 className="heroes-display__h1"> Heroes</h1>
          <HeroList heroes={heroes} toggleHeroes={toggleHeroes} />
          <h3 className="textHeader">
            {`${heroes && heroes.length ? "" : "Add Some Heroes"}`}
          </h3>
          <div className="d-grid gap-2">
            <Button
              className="centeredButton mb-3"
              variant="warning"
              onClick={handleClearHeroesMongo}
            >
              Remove Selected Heroes
            </Button>
          </div>
        </div>
        <div className="heroes-display__hero-column counterColumn ml-3  ">
          <HeroesForm heroes={heroes} setHeroes={setHeroes} />
          <div className="imageZoomDiv">
            <h3 className="heroesImageTitle"> See the code: </h3>
            <p>
              <a href="https://github.com/Ryankolsen/ryansportkey">Here</a>
            </p>
            {/* old images to be replaced */}
            {/* <ZoomImage imageSm={imageSm} imageLg={imageLg} />
            <ZoomImage imageSm={imageSmTwo} imageLg={imageLgTwo} />
            <ZoomImage imageSm={imageSmThree} imageLg={imageLgThree} />
            <ZoomImage imageSm={imageSmFour} imageLg={imageLgFour} /> */}
          </div>
        </div>
      </Container>
    </div>
  );
}
