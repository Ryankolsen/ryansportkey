import { Container, Row, Card, Button, Carousel } from 'react-bootstrap';
import '../styles/App.css';
import { Link } from 'react-router-dom'

import flaskBlogImg from '../media/proj1-flaskblog.jpg';
import sqldbvs from '../media/proj2-SQL-DB-VS.jpg';
import data from "../media/proj3-datacomp.png";
import datapdf from "../media/Proj3-datapdf.pdf";
import unity from "../media/proj4-unity.png"

function Home() {

    const projImg1 = flaskBlogImg;
    const projImg2 = sqldbvs;
    const projImg3 = data;
    const proj3pdf = datapdf;
    const proj4pdf = unity;

    return (
        <div>
            <Container className="">
            <Row className="rounded-right projectBannerRow">
                <h1 className="projectBanner">Projects:</h1>
           </Row>
           </Container>

            <Container className="projectDisplay" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Carousel style={{ justifyContent:'center' }}>
                    <Carousel.Item interval={3500} style={{ justifyContent:'center' }}>                       
                        <Card bg={"dark"} style={{ maxWidth: '50rem', justifyContent:'center' }}>
                            <Card.Img  variant="top" src={projImg1} className="mt-3"/>
                            <Card.Body>
                            <Card.Title className="projectCard">Flask Blog Website</Card.Title>
                            <Card.Text className="projectCardText" >
                            This full-featured Django application was built from scratch using function and class based views, Linode Ubuntu server with WSGI, and a good portion of Bootstrap CSS/HTML. 
                            </Card.Text>
                            </Card.Body>                            
                            <Card.Footer>
                                <Button variant="primary" className="twoButtons" href="https://www.ryanswebsite0909.com/">See the Site</Button>
                                <Button variant="primary" href="https://github.com/Ryankolsen/DjangoWebsite">See the code</Button>
                            </Card.Footer>
                        </Card>                        
                    </Carousel.Item>

                    <Carousel.Item interval={3500} style={{ justifyContent:'center' }}>                       
                        <Card bg={"dark"} style={{ maxWidth: '50rem', justifyContent:'center' }}>
                            <Card.Img  variant="top" src={projImg2} className="mt-3"/>
                            <Card.Body>
                            <Card.Title className="projectCard">SQL Server API</Card.Title>
                            <Card.Text className="projectCardText">
                            Windows Forms Application using C# and SQL Server. Created on Visual Studio using .NET Framework 4.7.2. This API uses Data Binding and Binding Navigator to handle user actions/events.
                            </Card.Text>
                            </Card.Body>                            
                            <Card.Footer>
                                <Button className="twoButtons" variant="primary" href="https://github.com/Ryankolsen/SQL_DB_VS_/blob/main/DB_VS_EX.mp4">Video</Button>
                                <Button variant="primary" href="https://github.com/Ryankolsen/SQL_DB_VS_">See the code</Button>
                            </Card.Footer>
                        </Card>                        
                    </Carousel.Item>
                    
                    <Carousel.Item interval={3500}>                       
                        <Card bg={"dark"} style={{ maxWidth: '50rem' }} >
                            <Card.Img  variant="top" src={projImg3} className="mt-3"/>
                            <Card.Body>
                            <Card.Title className="projectCard">Jupyter Notebook DataFrame </Card.Title>
                            <Card.Text className="projectCardText">
                            Evaluation of Stack Overflow Survey with 65,000 respondents.                            
                            </Card.Text>
                            </Card.Body>                            
                            <Card.Footer>
                                <Button className="twoButtons" variant="primary" href={proj3pdf} >.pdf</Button>
                                <Button variant="primary" href="https://github.com/Ryankolsen/Jupyter_Notebook_Stack_Survey_2020">See the code</Button>
                            </Card.Footer>
                        </Card>                        
                    </Carousel.Item>

                    <Carousel.Item interval={3500}>                       
                        <Card bg={"dark"} style={{ maxWidth: '50rem' }}>
                            <Card.Img  variant="top" src={proj4pdf} className="mt-3"/>
                            <Card.Body>
                            <Card.Title className="projectCard">2D Unity Game </Card.Title>
                            <Card.Text className="projectCardText">
                            2D dungeon game created on Unity using C# Scripts on Visual Studio<br></br>    <br></br>       
                            To play: Download the link, extract and run the DungeonFighter.exe file. This file must be in the same folders as everything else you unzipped                
                            </Card.Text>
                            </Card.Body>                            
                            <Card.Footer>
                                <Button className="twoButtons" variant="primary" href="https://github.com/Ryankolsen/UnityDungeonFighter/blob/main/DungeonFighter_Data.zip" >Download Game</Button>
                                <Button variant="primary" href="https://github.com/Ryankolsen/UnityDungeonFighter">See the code</Button>
                            </Card.Footer>
                        </Card>                        
                    </Carousel.Item>
                </Carousel>
                <div>
                    
                </div>
           </Container>

           <Container className="p-5"  style={{display: 'flex', justifyContent:'center', alignItems:'center'}} >
                <Button size="lg" as={Link} to="/ReactPage">Click here to see React stuff</Button>
           </Container>
           <Container className="pb-5"  style={{display: 'flex', justifyContent:'center', alignItems:'center'}} >
                <Button size="lg" as={Link} to="/About">About</Button>
           </Container>
        </div>
    )
}

export default Home
