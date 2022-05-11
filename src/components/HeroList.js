import React from "react";

import Heroes from "./Heroes";

export default function HeroList({ heroes, toggleHeroes }) {
  return heroes.length !== 0 && heroes[0]
    ? heroes.map((hero) => {
        return <Heroes key={hero.id} toggleHeroes={toggleHeroes} hero={hero} />;
      })
    : null;
}
