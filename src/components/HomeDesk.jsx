import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import topLogo from '../assets/logo-final.png';
import nav1 from '../assets/nav1.png';
import nav_1 from '../assets/nav-1.png';
import nav2 from '../assets/nav2.png';
import nav_2 from '../assets/nav-2.png';
import nav3 from '../assets/nav3.png';
import nav_3 from '../assets/nav-3.png';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";



function HomeDesk() {

  

  return (
 <Container fluid className="col-lg-10 ">
  
   <Row>
    
     <Col className="col-lg-10 offset-2">
       <img className="topLogo img-fluid" src={topLogo}/>
     </Col>
  </Row>
  <Row>
    <Col className="col-lg-3 offset-2">
      <Link to="/TouchView"> <img className="nav1 img-fluid" src={nav1}/></Link>
    </Col>
    <Col className="col-lg-3">
     <Link to="/MaintainView"><img className="nav2 img-fluid" src={nav2}/></Link> 
    </Col>
    <Col className="col-lg-3">
      <Link to="/AboutView"><img className="nav3 img-fluid" src={nav3}/></Link>
    </Col>
  </Row>
  <Row>
    <Col className="col-lg-2 offset-8">
      <div className="div_bottomtext">And yet... more to come</div>
    </Col>
  </Row>

 </Container>
  );
}

export default HomeDesk;