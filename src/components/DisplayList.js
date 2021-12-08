import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function DisplayList ({ items }) {
    return (
        
        items.map(item => {
            return(                                    
                <ul className="certList list-group mb-3" key={item.id.toString()}  >
                    
                    <li className= "certBody list-group-item d-flex justify-content-between align-items-center" key={item.id.toString()}>
                        <Row>
                                <Col>
                                    <h5 className="certName">{item.name}</h5> 
                                </Col>
                            <Col>
                                <Row className= "certText  ">
                                    Certificate Achieved From {item.from} <div className="certText"> Complete on {item.date}
                                    </div>
                                    <Link className="certText" to={item.source} target="blank">Download</Link>     
                                </Row>
                            </Col>
                            <Col className="">
                                <iframe title="MyFrame" src={item.source}    >
                                    <a href={item.source} >Certificate .pdf</a>
                                </iframe>
                            </Col>
                        </Row>
                    </li>
                </ul>
                
            )
        })
        
        
    )
}
