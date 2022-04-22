import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import ButtonCounter from "./ButtonCounter";
import HeroesDisplay from "./HeroesDisplay";
import Carousel from "./Carousel";
import { projectCarouselObjects } from "../helpers/react-project-carousel";

const ReactPage = () => {
  return (
    <div>
      <div className="react_page__header-container">
        <h3 className="react_page__reactBanner">React Projects</h3>
      </div>

      <Carousel
        projectCarouselObjects={projectCarouselObjects}
        numberSlides={3}
      />
      <div className="react_page__header-container hooks">
        <h3 className="react_page__reactBanner">React Hooks</h3>
      </div>
      <Container
        className=""
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <ButtonCounter />
        <HeroesDisplay />
      </Container>
      <Container
        className="p-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button as={Link} to="/">
          Home
        </Button>
      </Container>
    </div>
  );
};

export default ReactPage;
