import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../assets/logo-final.png';
import Banner1 from '../assets/weba-2-mobil-whatwedo.png';
import Banner2 from '../assets/weba-3-mobil-maintainable.png';
import Banner3 from '../assets/weba-mobil.getintouch.png';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

function HomeMobile () {

    return (
    <>
    <Container fluid className="col-lg-12 container">
        <Row>
            <Col className="col-lg-12">
                <img className="logo_homem img-fluid" src={Logo}/>
            </Col>
        </Row>
        <Row>
            <Col className="col-lg-12">
            <Link to="/TouchView"> <img className="img_bannerhomem img-fluid" src={Banner1}/></Link>
            </Col>
        </Row>
        <Row>
            <Col className="col-lg-12 mt-3">
            <Link to="MaintainView">  <img className="img_bannerhomem img-fluid" src={Banner2}/></Link>
            </Col>
        </Row>
        <Row>
            <Col className="col-lg-12 mt-3">
            <Link to="AboutView">   <img className="img_bannerhomem img-fluid" src={Banner3}/></Link> 
            </Col>
        </Row>
        <Row>
            <Col className="col-lg-12">
                <div className="div_homeBottom">And yet... more to come</div>
            </Col>
        </Row>
    </Container>
    </>
    )
}
export default HomeMobile;