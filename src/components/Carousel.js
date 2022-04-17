import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../styles/App.css";
import { Link } from "react-router-dom";

import { projectCarouselObjects } from "../helpers/project-carousel";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  const numProjects = projectCarouselObjects.length - 1;

  return (
    <div>
      <div className="carousel__carousel-container">
        <div className="carousel__carousel-header">
          <h1 className="carousel__carousel-header__h1">
            {projectCarouselObjects[currImg].projectTitle}
          </h1>
          <p className="carousel__carousel-header__p">
            {projectCarouselObjects[currImg].projectDescriptions}
          </p>
        </div>
        <div className="carousel__carousel">
          <div
            className="carousel__carousel-inner"
            style={{
              backgroundImage: `url(${projectCarouselObjects[currImg].image})`,
            }}
          >
            <div
              className="carousel__carousel-inner-left"
              onClick={() => {
                if (currImg === 0) {
                  setCurrImg(numProjects);
                }
                if (currImg > 0) {
                  setCurrImg(currImg - 1);
                }
              }}
            >
              <div className="carousel__carousel-inner__h1__div">
                <h1 className="carousel__carousel-inner__h1">&#8656;</h1>
              </div>
            </div>
            <div
              className="carousel__carousel-inner-right"
              onClick={() => {
                if (currImg === 4) {
                  setCurrImg(0);
                }
                if (currImg < 4) {
                  setCurrImg(currImg + 1);
                }
              }}
            >
              <div className="carousel__carousel-inner__h1__div">
                <h1 className="carousel__carousel-inner__h1">&#8658;</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel__carousel-links">
          <div className="carousel__carousel-links-buttons ">
            <Button
              href={projectCarouselObjects[currImg].links.firstLink.toString()}
            >
              {projectCarouselObjects[currImg].links.firstLinkButtonText}
            </Button>
          </div>
          {projectCarouselObjects[currImg].links.secondLink ? (
            <div className="carousel__carousel-links-buttons ">
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
    </div>
  );
}

export default Carousel;
