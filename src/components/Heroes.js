import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";

export default function Heroes({
  hero,
  toggleHeroes,
  canDelete,
  setCanDelete,
}) {
  const [currHero, setCurrHero] = useState("");
  function handleHeroClick() {
    if (canDelete === false) {
      if (currHero === hero.id) {
        toggleHeroes(hero.id);
        setCurrHero("");
        setCanDelete(true);
      }
      return;
    }
    toggleHeroes(hero.id);
    setCurrHero(hero.id);
  }
  return (
    <div>
      <ul className="heroes__container list-group ">
        <div className="alignLeft">
          <input
            type="checkbox"
            checked={hero.complete}
            onChange={handleHeroClick}
          />
          Delete Hero
        </div>
        <li
          className="heroNameDisplay list-group-item d-flex justify-content-between align-items-center mb-3"
          key={hero.id}
        >
          {hero.name}
          <span className="heroStrengthDisplay badge badge-primary badge-pill">
            <FontAwesomeIcon
              icon={faMeteor}
              className={
                hero.strength > 100000
                  ? "heroes__icon heroes__icon_red"
                  : hero.strength < 100000
                  ? "heroes__icon heroes__icon_green"
                  : "heroes__icon"
              }
            />
            {hero.strength > 100000}
            {hero.strength.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </li>
      </ul>
    </div>
  );
}
