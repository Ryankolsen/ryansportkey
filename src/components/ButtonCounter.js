import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import ZoomImage from "./ZoomImage";

import imageSm from "../media/ButtonCodeSm.jpg";
import imageLg from "../media/ButtonCode.jpg";

const ButtonCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Container className="button-counter__container">
        <div className="button-counter__counter-row ">
          <p className="button-counter__p">
            {`${
              count === 0
                ? "Maybe you should click that button..."
                : "Wow, you clicked that button"
            } `}
            {`${count === 1 ? count + " Time!!" : ""} ${
              count >= 2 ? count + " Times!!" : ""
            }`}
          </p>
          <div className="text-center">
            <Button
              variant="danger"
              className="button-counter__button button-counter__counter-button"
              onClick={() => setCount(count + 1)}
            >
              Don't Click Me!
            </Button>
          </div>
        </div>
        <div className="button-counter__counter-row  ">
          <div className="button-counter__imageZoom__container">
            <ZoomImage imageSm={imageSm} imageLg={imageLg} />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ButtonCounter;
