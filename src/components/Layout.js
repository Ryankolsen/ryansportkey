import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavDropdown, Navbar, Nav, } from 'react-bootstrap';


import '../styles/App.css';

export class Layout extends Component {

    render() {
        return (
            <div>
                <header className='myHeader'>
                    
                    <div className='myRow'>                                            
                        <h2 className="myTitle"> Ryan's Portfolio</h2>
                    </div>

                    <Navbar className="myNavBar" bg="dark" expand="lg" variant="dark">
                        <Navbar.Brand className="myNavLink" as={Link} to="/">Home</Navbar.Brand>                        
                        
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="mr-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                    >
                                    <Nav.Link as={Link} to='/ReactPage' className="mr-4" >React </Nav.Link>     
                                    <NavDropdown title="Links" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="https://github.com/Ryankolsen">GitHub</NavDropdown.Item>
                                    <NavDropdown.Item href="https://www.linkedin.com/in/ryan-olsen-a5463a18/">LinkedIn</NavDropdown.Item>
                                    <NavDropdown.Item href="https://www.facebook.com/ryan.olsen.524">Facebook</NavDropdown.Item>

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="https://www.ryanswebsite0909.com/">Blog Website Example</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} to='/About' className="mr-4" >About </Nav.Link>
                                    
                                </Nav>
                                {/* <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="mr-2"
                                        aria-label="Search"
                                    />
                                <Button variant="outline-success">Search</Button>
                                </Form> */}
                            </Navbar.Collapse>                            
                        </Navbar>                            
                </header>
                
                <div className='myBody'>
                    {this.props.children}
                </div>
           
            </div>
        )
    }
}

export default Layout
