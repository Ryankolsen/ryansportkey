import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../styles/App.css";
import { Link } from "react-router-dom";

import { projectCarouselObjects } from "../helpers/project-carousel";

function NewHome() {
  const [currImg, setCurrImg] = useState(0);

  console.log(projectCarouselObjects);
  const numProjects = projectCarouselObjects.length;
  console.log(numProjects);

  return (
    <div>
      <div className="new-home__carousel-container">
        <div className="new-home__carousel-header">
          <h1 className="new-home__carousel-header__h1">
            {projectCarouselObjects[currImg].projectTitle}
          </h1>
          <p className="new-home__carousel-header__p">
            {projectCarouselObjects[currImg].projectDescriptions}
          </p>
        </div>
        <div className="new-home__carousel">
          <div
            className="new-home__carousel-inner"
            style={{
              backgroundImage: `url(${projectCarouselObjects[currImg].image})`,
            }}
          >
            <div
              className="new-home__carousel-inner-left"
              onClick={() => {
                currImg > 0 && setCurrImg(currImg - 1);
              }}
            >
              <div className="new-home__carousel-inner__h1__div">
                <h1 className="new-home__carousel-inner__h1">&#8656;</h1>
              </div>
            </div>
            <div
              className="new-home__carousel-inner-right"
              onClick={() => {
                currImg < 4 && setCurrImg(currImg + 1);
              }}
            >
              <div className="new-home__carousel-inner__h1__div">
                <h1 className="new-home__carousel-inner__h1">&#8658;</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="new-home__carousel-links">
          <div className="new-home__carousel-links-buttons ">
            <Button
              href={projectCarouselObjects[currImg].links.firstLink.toString()}
            >
              {projectCarouselObjects[currImg].links.firstLinkButtonText}
            </Button>
          </div>
          {projectCarouselObjects[currImg].links.secondLink ? (
            <div className="new-home__carousel-links-buttons ">
              <Button
                href={projectCarouselObjects[
                  currImg
                ].links.secondLink.toString()}
              >
                {projectCarouselObjects[currImg].links.secondLinkButtonText}
              </Button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="new-home__links">
        <div className="new-home__button">
          <Button href="https://main--astonishing-rolypoly-ad8c2b.netlify.app/">
            React API
          </Button>
        </div>
        <div className="new-home__button">
          <Button as={Link} to="/ReactPage">
            React Code/Apps
          </Button>
        </div>
        <div className="new-home__button">
          <Button as={Link} to="/About">
            About
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NewHome;
