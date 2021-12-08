import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import ZoomImage from "./ZoomImage"

import imageSm from '../media/ButtonCodeSm.jpg'
import imageLg from '../media/ButtonCode.jpg'

const ButtonCounter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <Container className="reactCenteredContainer">
                <Row className="reactCenteredContainer block-example border-bottom border-dark" > 
                    <Col className="counterColumn block-example border border-dark">
                        <p className="counterRow">{`${count===0 ? 'Maybe you should click that button...' : 'Woah, you clicked that button'} `}   
                        {`${count===1 ? count + ' Time!!': ''} ${count>=2 ? count + ' Times!!': ''}`}  </p>                          
                     <div className="text-center"> 
                    <Button variant="danger" className="counterButton"  onClick={() => setCount(count + 1)}>                    
                        Don't Click Me!
                    </Button>
                    </div>
                    </Col>                     
                    <Col style={{ justifyContent:'center' }} className="counterColumn ml-3 block-example border border-dark">
                        <div className="imageZoomDiv">
                            <ZoomImage imageSm={imageSm} imageLg={imageLg} />
                        </div>
                    </Col>
                    <Col style={{ justifyContent:'center' }} className="counterColumn ml-3 block-example border border-dark">
                        <div className="">  
                        <h3 className="textHeader">Use State Hook</h3>                         
                            <p className="textBox">
                                This Button uses the React useState() hook to change text and 
                                keep track of the number of times the button is pressed. 
                            </p>
                        </div>
                    </Col> 
                </Row>
            </Container>
        </div>
    )
}
export default ButtonCounter
