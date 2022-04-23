import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function DisplayList({ items }) {
  return items.map((item) => {
    return (
      <ul className="certList list-group mb-3" key={item.id.toString()}>
        <li
          className="__about-cert-body list-group-item d-flex justify-content-between align-items-center"
          key={item.id.toString()}
        >
          <Row>
            <Col>
              <h5 className="__about-cert-name">{item.name}</h5>
            </Col>
            <Col>
              <Row className="__about-cert-text  ">
                Certificate Achieved From {item.from}{" "}
                <div className="__about-cert-text">
                  {" "}
                  Complete on {item.date}
                </div>
                <Link
                  className="__about-cert-text"
                  to={item.source}
                  target="blank"
                >
                  Download
                </Link>
              </Row>
            </Col>
            <Col className="">
              <iframe title="MyFrame" src={item.source}>
                <a href={item.source}>Certificate .pdf</a>
              </iframe>
            </Col>
          </Row>
        </li>
      </ul>
    );
  });
}
