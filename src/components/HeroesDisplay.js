import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

import HeroList from "./HeroList";
import HeroesForm from "./HeroesForm";

//import ZoomImage from "./ZoomImage"; disabled see noted below

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
      //call fetch
      deleteHeroesMongo(hero.id);
      return null;
    });
  }

  async function deleteHeroesMongo(id) {
    const response = await fetch(`.netlify/functions/delete-hero?&id=${id}`);
    console.log(response);
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
            <p>
              These superheroes are stored on a MongoDb database. CRUD
              operations are performed using Netlify serverless functions to
              connect directly to the MongoDb data API
            </p>
            <h3 className="heroesImageTitle">
              <a href="https://github.com/Ryankolsen/ryansportkey">
                See the code
              </a>
            </h3>
            <p>
              {" "}
              <a href="https://www.netlify.com/products/functions/">
                Learn about Netlify Serverless Functions
              </a>
            </p>
            <p>
              {" "}
              <a href="https://www.mongodb.com/docs/atlas/api/data-api/">
                Learn about MongoDb Data API
              </a>
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
