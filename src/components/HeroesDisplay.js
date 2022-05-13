import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useQuery, useQueryClient } from "react-query";

import HeroList from "./HeroList";
import HeroesForm from "./HeroesForm";

export default function Heroes() {
  const [heroes, setHeroes] = useState([]);

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(".netlify/functions/fetch-all-heroes").then((res) => res.json())
  );

  useEffect(() => {
    const retrievedHeroes = data?.msg.documents;
    if (retrievedHeroes && retrievedHeroes !== "undefined") {
      var sortedHeroes = retrievedHeroes.sort(function (a, b) {
        return b.strength - a.strength;
      });
      setHeroes(sortedHeroes);
    }
  }, [data]);

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
    deleteHeroesMongo(deletedHeroes);
  }

  async function deleteHeroesMongo(deletedHeroes) {
    await deletedHeroes.forEach((hero) => {
      console.log(hero.id);
      fetch(`.netlify/functions/delete-hero?&id=${hero.id}`);
    });
  }

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className="react_page__header-overline">
      <Container className="heroes-display__container">
        <div className="heroes-display__hero-column">
          <h1 className="heroes-display__h1"> Heroes</h1>
          <HeroList heroes={heroes} toggleHeroes={toggleHeroes} />
          <h3 className="textHeader">
            {`${heroes && heroes.length ? "" : "Add Some Heroes"}`}
          </h3>
          <div className="heroes-display__remove-button">
            <Button
              className="centeredButton mb-3"
              variant="danger"
              onClick={handleClearHeroesMongo}
            >
              Remove Selected Heroes
            </Button>
          </div>
        </div>
        <div className="heroes-display__hero-column counterColumn  ">
          <HeroesForm heroes={heroes} setHeroes={setHeroes} />
          <div className="">
            <div className="">
              <p className="heroes-display__hero-column-description">
                These superheroes are stored on a MongoDb database. CRUD
                operations are performed using Netlify serverless functions to
                connect directly to the MongoDb data API
              </p>
            </div>
            <div className="heroes-display__hero-column-code">
              <h3 className="heroesImageTitle">
                <a href="https://github.com/Ryankolsen/ryansportkey">
                  See the code
                </a>
              </h3>
            </div>
            <div className="heroes-display__hero-column-link-container"></div>
            <p>
              <a href="https://www.netlify.com/products/functions/">
                Learn about Netlify Serverless Functions
              </a>
            </p>
            <p>
              <a href="https://www.mongodb.com/docs/atlas/api/data-api/">
                Learn about MongoDb Data API
              </a>
            </p>
            <p>
              <a href="https://www.learnwithjason.dev/blog/serverless-functions/query-strings-serverless-functions">
                Access Params in Serverless Functions
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
