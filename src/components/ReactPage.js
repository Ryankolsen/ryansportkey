import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'


import ButtonCounter from './ButtonCounter';
import HeroesDisplay from './HeroesDisplay';

const ReactPage = () => {
   

    return (
        
        <div>
            <h3 className="reactBanner">React Hooks</h3>
            <Container className=""  style={{ justifyContent:'center', alignItems:'center'}} >
            <ButtonCounter />
            <HeroesDisplay />
            </Container>
            <Container className="p-5"  style={{display: 'flex', justifyContent:'center', alignItems:'center'}} >
                <Button as={Link} to="/">Home</Button>
           </Container>
        </div>
    )
}



export default ReactPage
