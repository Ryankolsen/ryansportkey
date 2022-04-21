import React, { useEffect, useState } from "react";
import { projectCarouselObjects } from "../helpers/react-project-carousel";

export const ReactCarousel = () => {
  const [currImg, setCurrImg] = useState(2);
  return (
    <div>
      <div className="react-page__projects-container">
        {projectCarouselObjects.map((carouselObj) => {
          return (
            <div
              className={carouselObj.key === currImg ? "slide" : "slide active"}
              key={carouselObj.key}
            >
              {console.log(carouselObj.key)}
              {console.log(currImg)}
              {carouselObj.key === currImg ? (
                <>
                  <div className="carousel__carousel-header">
                    <h3 className="">{carouselObj.projectTitle}</h3>
                    <p>{carouselObj.projectDescriptions}</p>
                  </div>
                </>
              ) : (
                <div> ERROR</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
