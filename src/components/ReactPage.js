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
      {/* <div className="react_page__header-container">
        <h3 className="react_page__reactBanner">React Projects</h3>
      </div> */}

      <Carousel
        projectCarouselObjects={projectCarouselObjects}
        numberSlides={4}
      />
      <div className="react_page__header-overline"></div>

      <div className="react_page__container">
        <ButtonCounter />
        <HeroesDisplay />
      </div>
      <Container className="p-5">
        <Button as={Link} to="/">
          Home
        </Button>
      </Container>
    </div>
  );
};

export default ReactPage;
