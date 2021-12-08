import {  Container, Row } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.min.css';


const FooterPage = () => {
  return (
    <div className="footer">      
        <Container color="blue" className="font-small text-center"> 
            <Row className="footer-copyright text-center" >           
                &copy; {new Date().getFullYear()} 
            </Row>
            <Row className="footer-copyright text-center">           
                Contact: ryankolsen@gmail.com
            </Row>
        </Container>
    </div>
  );
}

export default FooterPage;