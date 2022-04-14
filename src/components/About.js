import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardColumns, Button, Row, Container, Accordion } from 'react-bootstrap'

import DisplayList from './DisplayList';

import fauImg from "../media/fau2.png"
import reactCert from "../media/reactCert.pdf"
import frontCert from "../media/frontCert.pdf"
import javaCert from "../media/javaCert.pdf"
import javascriptCert from "../media/javascript.pdf"
import reactCert2 from "../media/LearnReactToday-certificate.pdf"

function About() {

    var reactCertPdf = reactCert
    var frontEndPdf = frontCert
    var javascriptCertPdf = javascriptCert
    var javaCertPdf = javaCert
    var reactCert2Pdf = reactCert2
    
    const certList = [
        {id: "1", name: "JavaScript Concepts", from: "SC Codes", date: "May 2, 2021", source: javascriptCertPdf},
        {id: "2", name: "Frontend Concepts", from: "SC Codes", date: "May 9, 2021", source: frontEndPdf}, 
        {id: "3", name: "React Applications", from: "SC Codes", date: "July 4, 2021", source: reactCertPdf }, 
        {id: "4", name:"Java Concepts", from: "SC Codes", date: "July 14, 2021", source: javaCertPdf},
        {id: "5", name:"Learn React Today", from: "Web Dev Simplified", date: "Dec 16 2021", source: reactCert2Pdf},
    ]

    var fauMIS = "https://business.fau.edu/undergraduate/majors/management-information-systems/"
    var fauBus = "https://business.fau.edu/"
    var scCodesMain = "https://learning.sccodes.org/library/"

    return (
        <div>
            <Container className="">
                <Row className="rounded-right projectBannerRow">
                    <h1 className="projectBanner">About</h1>
                </Row>
           </Container>
           
           <Container className="">
                    <div className="spacing"></div>
                    <Container className="accordianContainer">
                        <Accordion className="accordianAbout">                         
                            <Card className="accordianHeader">                            
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        About this Website
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body className="accordianBody">
                                            <Card.Text>
                                                This website was designed using react framework with some JSX, Bootstrap and CSS.
                                                I plan to continue to add more features and react hooks in the near future.
                                                Stay Tuned! 
                                            </Card.Text> 
                                            <Card.Text>
                                                Please see below for my Degrees and Certifications 
                                            </Card.Text>                              
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            <Card className="accordianHeader">
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    About Ryan
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="1">
                                    <Card.Body className="accordianBody">
                                        <Card.Text>
                                            After achieving my second Bachelor's degree majoring in Management Information Systems in 2013 I fell in love with software engineering. 
                                            I started coding with Java and Java FX. Next I expanded my languages to include Python, JavaScript, JSON, HTML/CSS, SQL, C++ ASP.Net and I kept going from there.
                                            
                                        </Card.Text>
                                        <Card.Text>
                                        I genuinely love breaking larger applications down into small, manageable parts and working to find the most efficient and effective solution. 
                                        </Card.Text>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Container>
                    
                    <Row className="eduRow"> 
                        <CardColumns className="eduCard mt-3 mb-5">                          
                            <Card style={{ height:'355px' }}>
                                <Card.Header className="fauCard">Florida Atlantic University</Card.Header>
                                <Card.Body className=" mb-4">
                                    <Card.Title className="degreeTitle">Bachelor’s of Business Admin Cum Laude</Card.Title>
                                    <Card.Text className="cardText"> Major: Management Information Systems, Completed 2013 </Card.Text>
                                    <Card.Title className="degreeTitle mt-3">Courses Included: </Card.Title>
                                    <Card.Text className="cardText">Java SE, Database, Social Media, Web Design, Data Communications, IT Security</Card.Text>                            
                                    <Button variant="primary" className="" href={fauMIS}>FAU MIS Program</Button>
                                    <img className="fauImg" src={fauImg} alt="FAU Logo"></img>
                                </Card.Body>
                            </Card>        
                        </CardColumns >   

                        <CardColumns className="eduCard mt-3 ">
                            <Card style={{ height:'355px' }}>
                                <Card.Header className="fauCard">Florida Atlantic University</Card.Header>
                                <Card.Body>
                                    <Card.Title className="degreeTitle">Bachelor’s of Business Admin Cum Laude</Card.Title>
                                    <Card.Text className="cardText"> Double Major: Business Admin and Marketing, Completed 2008 </Card.Text>
                                    <Card.Title className="degreeTitle mt-3">Courses Included: </Card.Title>
                                    <Card.Text className="cardText">International Marketing, Entrepreneurial, International Business, Supply Chain, Program Management</Card.Text>                        
                                
                                    <Button variant="primary" className="" href={fauBus}>FAU Business Program</Button>
                                        <img className="fauImg" src={fauImg} alt="FAU Logo"></img>                                
                                </Card.Body>
                            </Card>        
                        </CardColumns>                      
                    </Row> 

                <Card className="certCard mt-3 mb-3 ">
                    <Card.Header className="cerCard"><h2>Certificates</h2></Card.Header>
                    <Card.Body className="certBody">                    
                        <DisplayList key={"certList"} as="" items={certList}/>
                        <div className="centerdButton">
                        <Button variant="primary" className="" href={scCodesMain}>See the SC Codes Teaching Librairy</Button>
                        </div>
                    </Card.Body>
                </Card> 
        
                <div className="p-5"  style={{display: 'flex', justifyContent:'center', alignItems:'center',}} >
                    <Button as={Link} to="/">Home</Button>
                </div>  
           </Container>
        </div>
    )
}

export default About
