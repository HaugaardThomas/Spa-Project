
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import nav_1 from '../assets/nav-1.png';
import nav_2 from '../assets/nav-2.png';
import nav_3 from '../assets/nav-3.png';
import Back from '../assets/back.png';
import Banner from '../assets/front-maintainable-link.png';
import Navigation from '../components/Navigation';
import navMaintain from '../assets/nav-maintain-ps.png';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

function Maintain() {
    return (
    <>
        <Container fluid className="col-lg-10">
        <div className="div_nav">
  <Link to="/HomeView"> <img className="img_1" src={Back}  /></Link> 
    <Link to="/TouchView"><img className="img_1" src={nav_1}/></Link>
    <Link to="/MaintainView"><img className="img_1" src={navMaintain}/></Link>
   <Link to="/AboutView"> <img className="img_1" src={nav_3}/></Link>
    </div>
      <Row>
      <Col className="col-lg-3 col-md-3  offset-1">
              <div className="banner_img">
                  <img className="img-fluid" src={Banner} />
              </div>
          </Col>
          <Col className="col-lg-8 col-sm-8">
              <div className="div_content">
              <h1 fluid className="h1_top ">Keeping your all <span className="span_blue2">upto date</span>...</h1>
              <p fluid className="p_breadtext ">She literature discovered increasing how diminution understood. Though and highly the enough county for man. Of it up he still court alone widow seems. Suspected he remainder rapturous my sweetness. All vanity regard sudden nor simple can. World mrs and vexed china since after often. <br/> <br/>
               Improve him believe opinion offered met and end cheered forbade. Friendly as stronger speedily by recurred. Son interest wandered sir addition end say. Manners beloved affixed picture men ask. Explain few led parties attacks picture company. On sure fine kept walk am in it. Resolved to in believed desirous unpacked weddings together. Nor off for enjoyed cousins herself. Little our played lively she adieus far sussex. Do theirs others merely at temper it nearer.<br/> <br/>
               </p>
            </div>
            <div className="div_maintainable">MaintainAble</div>
          </Col>
      </Row>
        </Container>
    </>
    );
    
    }
    
    export default Maintain;