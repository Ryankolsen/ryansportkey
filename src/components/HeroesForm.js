import React, { useRef, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid"; //npm i uuid

export default function HeroesForm({ heroes, setHeroes }) {
  // const [fetchState, setFetchState] = useState();
  const heroNameRef = useRef();
  const heroStrengthRef = useRef();

  useEffect(() => {
    fetchHeroesMongoDb().then((hero) => {
      hero.sort(function (a, b) {
        return b.strength - a.strength;
      });
      setHeroes(hero);
    });
    // eslint-disable-next-line
  }, []);

  async function fetchHeroesMongoDb() {
    const response = await fetch(".netlify/functions/fetch-all-heroes", heroes);
    const result = await response.json();

    heroes = result.msg.documents;
    console.log(heroes);

    return heroes;
  }
  async function handleAddHeroMongo() {
    const name = heroNameRef.current.value;
    if (name === "") return;
    const strength = heroStrengthRef.current.value.toString();
    if (strength === "") return;
    const newHero = {
      id: uuidv4(),
      name: name,
      strength: strength,
      complete: false,
    };

    await fetch(
      `.netlify/functions/add-hero?
      &id=${newHero.id}
      &name=${name}
      &strength=${strength}
      &complete=${true}
    `
    );

    setHeroes((prevHeroes) => {
      return [
        ...prevHeroes,
        { id: uuidv4(), name: name, strength: strength, complete: false },
      ].sort(function (a, b) {
        return a.strength - b.strength;
      });
    });
    heroNameRef.current.value = null;
    heroStrengthRef.current.value = null;
  }

  return (
    <div>
      <Row className="">
        <Col className="">
          <h1 className="heroes-display__h1">Add Your Hero</h1>
          <div className="">
            <label htmlFor="floatingInput">Hero Name</label>
            <input
              type="text"
              className="heroes-form__input form-floating mb-3"
              id="floatingInput"
              placeholder="Enter Hero Name"
              ref={heroNameRef}
            />
          </div>

          <div>
            <label htmlFor="floatingInput">
              Hero Power Level (enter a number)
            </label>
            <input
              type="number"
              className=" form-floating mb-3 heroes-form__input"
              id="floatingInput"
              placeholder="Enter Hero Power Level"
              defaultValue="500"
              ref={heroStrengthRef}
            />
          </div>
          <div className="centeredButton">
            <Button type="submit" className="mb-3" onClick={handleAddHeroMongo}>
              Add Hero
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
