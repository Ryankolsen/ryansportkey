import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";

import "../styles/App.css";

export const Layout = (props) => {
  return (
    <div>
      <header className="myHeader">
        <div className="myRow">
          <h2 className="myTitle"> Ryan's Portfolio</h2>
        </div>

        <Navbar className="myNavBar" bg="dark" expand="lg" variant="dark">
          <Navbar.Brand className="myNavLink" as={Link} to="/">
            Home
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/ReactPage" className="mr-4">
                React
              </Nav.Link>
              <NavDropdown title="Links" id="navbarScrollingDropdown">
                <NavDropdown.Item href="https://github.com/Ryankolsen">
                  GitHub
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/in/ryan-olsen-a5463a18/">
                  LinkedIn
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.facebook.com/ryan.olsen.524">
                  Facebook
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="https://main--astonishing-rolypoly-ad8c2b.netlify.app/">
                  Google Book API
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.ryanswebsite0909.com/">
                  Blog Website Example
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/About" className="mr-4">
                About{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>

      <div className="layout__background">
        <div className="layout__body">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
