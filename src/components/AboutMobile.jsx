import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Banner from '../assets/weba-mobil.getintouch.png';
import Face1 from '../assets/whatwedo-small.png';
import Face2 from '../assets/maintainable-small.png';
import Face3 from '../assets/getintouch-small.png';
import Logo from '../assets/logo-b.png';
import nav_1 from '../assets/nav-1.png';
import nav_2 from '../assets/nav-2.png';
import nav_3 from '../assets/nav-3.png';
import Back from '../assets/back.png';
import navAboutM from '../assets/nav-about-mobile-ps.png';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import NavigationMobile from './NavigationMobile';



function AboutMobile() {

    return (
    <>
    <Container fluid className="col-lg-10 container">
        <Row>
            <Col className="col-lg-12 mt-5">
            <div className="div_mobileNav">
        <Link to="/HomeView"><img className="nav_back" src={Back}/></Link>
        <Link to="/AboutView"><img className="About_mnav_1" src={navAboutM}/></Link>
        <Link to="/MaintainView"><img className="About_mnav_2" src={nav_2} /></Link>
       <Link to="/TouchView"><img className="About_mnav_3" src={nav_1} /></Link> 
    </div>
            </Col>
        </Row>
        <Row>
            <Col className="col-lg-12">
                <img className="img-fluid img_bannerm" src={Banner} />
            </Col>
        </Row>
        <Row>
            <Col className="col-lg-12">
            <div>
                  <h1 className="h1_mobile">There for you and <span className="span_orangem">care for you</span>...</h1>
                  <p className="p_breadtextm">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was outlived peculiar rendered led six. <br/> <br/>
                  Two assure edward whence the was. Who worthy yet ten boy denote wonder. Weeks views her sight old tears sorry. Additions can suspected its concealed put furnished. Met the why particular devonshire decisively considered partiality. Certain it waiting no entered is. Passed her indeed uneasy shy polite appear denied. Oh less girl no walk. At he spot with five of view. </p>
              </div>
            </Col>
        </Row>
        <Row>
            <Col className="col-lg-4">
                <div className="div_facesm img-fluid">
                <img className="img_facem" src={Face1}/>
                <figcaption className="fig_textm">It@coolish.com</figcaption>
                </div>
            </Col>
            <Col className="col-lg-4">
                <div className="div_facesm">
            <img className="img_facem img-fluid" src={Face2}/>
            <figcaption className="fig_textm">Pr@coolish.com</figcaption>
            </div>
            </Col>
            <Col className="col-lg-4">
                <div className="div_facesm">
            <img className="img_facem img-fluid" src={Face3} />
            <figcaption className="fig_textm">Mn@coolish.com</figcaption>
            </div>
            </Col>
        </Row>
        <Row>
            <Col className="col-lg-12">
                <img className="img_logom" src={Logo}/>
            </Col>
        </Row>
    </Container>
    
    </>
    )
}

export default AboutMobile;