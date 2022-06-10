
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import nav_1 from '../assets/nav-1.png';
import nav_2 from '../assets/nav-2.png';
import nav_3 from '../assets/nav-3.png';
import Back from '../assets/back.png';
import Banner from '../assets/front-getintouch-link.png';
import Face1 from '../assets/whatwedo-small.png';
import Face2 from '../assets/maintainable-small.png';
import Face3 from '../assets/getintouch-small.png';
import FigureCaption from 'react-bootstrap/esm/FigureCaption';
import Navigation from '../components/Navigation';
import SiteShow from '../assets/nav-3-where.png';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import navAbout from '../assets/nav-about-ps.png';



function AboutDesk() {
return (

  <Container fluid className="col-lg-10">
    
    <div className="div_nav">
  <Link to="/HomeView"> <img className="img_1" src={Back}  /></Link> 
    <Link to="/TouchView"><img className="img_1" src={nav_1}/></Link>
    <Link to="/MaintainView"><img className="img_1" src={nav_2}/></Link>
   <Link to="/AboutView"> <img className="img_1" src={navAbout}/></Link>
    </div>
    
      <Row>
          <Col className="col-lg-4 offset-1">
              <div className="banner_img">
                  <img src={Banner} />
              </div>
          </Col>
          <Col className="col-lg-7 col-md-3 ">
              <div>
                  <h1 className="h1_black">There for you and <span className="span_orange">care for you</span>...</h1>
                  <p className="p_breadtext">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was outlived peculiar rendered led six. <br/> <br/>
                  Two assure edward whence the was. Who worthy yet ten boy denote wonder. Weeks views her sight old tears sorry. Additions can suspected its concealed put furnished. Met the why particular devonshire decisively considered partiality. Certain it waiting no entered is. Passed her indeed uneasy shy polite appear denied. Oh less girl no walk. At he spot with five of view. </p>
              </div>
              <Row className="whatwedo_row">
              <Col className="col-lg-4 col-md-4">
                <img src={Face1}/>
                <figcaption className="fig_text">it@coolish.com</figcaption>
                </Col>
                <Col className="col-lg-4 col-md-4">
              <img src={Face2}/>
              <figcaption className="fig_text">pr@coolish.com</figcaption>
              </Col>
              <Col className="col-lg-4 col-md-4">
              <img src={Face3}/>
              <figcaption className="fig_text">mn@coolish.com</figcaption>
              </Col>
            </Row>
             
          </Col>
       
      </Row>

  </Container>

);

}

export default AboutDesk;