import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import ZoomImage from "./ZoomImage";

import imageSm from "../media/ButtonCodeSm.jpg";
import imageLg from "../media/ButtonCode.jpg";

const ButtonCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Container className="reactCenteredContainer">
        <Row className="reactCenteredContainer ">
          <Col className="counterColumn">
            <p className="counterRow">
              {`${
                count === 0
                  ? "Maybe you should click that button..."
                  : "Wow, you clicked that button"
              } `}
              {`${count === 1 ? count + " Time!!" : ""} ${
                count >= 2 ? count + " Times!!" : ""
              }`}{" "}
            </p>
            <div className="text-center">
              <Button
                variant="danger"
                className="counterButton"
                onClick={() => setCount(count + 1)}
              >
                Don't Click Me!
              </Button>
            </div>
          </Col>
          <Col
            style={{ justifyContent: "center" }}
            className="counterColumn ml-3 "
          >
            <div className="imageZoomDiv">
              <ZoomImage imageSm={imageSm} imageLg={imageLg} />
            </div>
          </Col>
          <Col
            style={{ justifyContent: "center" }}
            className="counterColumn ml-3"
          ></Col>
        </Row>
      </Container>
    </div>
  );
};
export default ButtonCounter;
