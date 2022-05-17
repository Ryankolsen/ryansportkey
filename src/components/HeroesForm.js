import React, { useRef } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid"; //npm i uuid
import { useMutation } from "react-query";

export default function HeroesForm({ heroes, setHeroes }) {
  const heroNameRef = useRef();
  const heroStrengthRef = useRef();

  const mutation = useMutation(() => {
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
    setHeroes((prevHeroes) => {
      return [...prevHeroes, newHero].sort(function (a, b) {
        return b.strength - a.strength;
      });
    });
    heroNameRef.current.value = null;
    heroStrengthRef.current.value = null;

    return fetch(
      `.netlify/functions/add-hero?
    &id=${newHero.id}
    &name=${newHero.name}
    &strength=${newHero.strength}
    &complete=${true}
  `
    );
  });

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
          <div>
            {mutation.isLoading ? (
              "Saving Hero..."
            ) : (
              <>
                {mutation.isError ? (
                  <div>An error occurred: {mutation.error.message}</div>
                ) : null}
              </>
            )}
            {mutation.isSuccess ? <div>Woot! Hero Added!</div> : null}
          </div>
          <div className="centeredButton">
            <Button
              type="submit"
              className="mb-3"
              onClick={() => {
                mutation.mutate();
              }}
            >
              Add Hero
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
