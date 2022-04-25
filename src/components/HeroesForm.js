import React, { useRef, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid"; //npm i uuid

export default function HeroesForm({ heroes, setHeroes }) {
  const LOCAL_STORAGE_KEY = "myApp.Heroes";
  const heroNameRef = useRef();
  const heroStrengthRef = useRef();

  //load Heroes List
  useEffect(() => {
    const storedHeroes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedHeroes) setHeroes(storedHeroes);
  }, [setHeroes]);

  //Save Heroes List
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(heroes));
  }, [heroes]);

  function handleAddHero(e) {
    const name = heroNameRef.current.value;
    if (name === "") return;
    const strength = heroStrengthRef.current.value.toString();
    if (strength === "") return;

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
      <Row className=" ">
        <Col className="HeroColumn counterColumn block-example ">
          <h1 className="heroes-display__h1">Add Your Hero</h1>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter Hero Name"
              ref={heroNameRef}
            />
            <label htmlFor="floatingInput">Hero Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              placeholder="Enter Hero Power Level"
              defaultValue="500"
              ref={heroStrengthRef}
            />
            <label htmlFor="floatingInput">
              Hero Power Level (enter a number)
            </label>
          </div>
          <div className="centeredButton">
            <Button type="submit" className="mb-3" onClick={handleAddHero}>
              Add Hero
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
