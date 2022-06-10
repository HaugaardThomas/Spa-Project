import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import nav_1 from '../assets/nav-1.png';
import nav_2 from '../assets/nav-2.png';
import nav_3 from '../assets/nav-3.png';
import Back from '../assets/back.png';
import Banner from '../assets/weba-3-mobil-maintainable.png';
import Logo from '../assets/logo-a.png';
import navMaintainM from '../assets/nav-maintain-mobile-ps.png';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import NavigationMobile from './NavigationMobile';


function MaintainMobile () {

    return (
        <>
         <Container fluid className="col-lg-10 container">
         <Row>
            <Col className="col-lg-12 mt-5">
            <div className="div_mobileNav">
        <Link to="/HomeView"><img className="nav_back" src={Back}/></Link>
        <Link to="/AboutView"><img className="Maintain_mnav_1" src={nav_3}/></Link>
        <Link to="/MaintainView"><img className="Maintain_mnav_2" src={navMaintainM} /></Link>
       <Link to="/TouchView"><img className="Maintain_mnav_3" src={nav_1} /></Link> 
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
                  <h1 className="h1_mobile">There for you and <span className="span_bluem">care for you</span>...</h1>
                  <p className="p_breadtextm">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was outlived peculiar rendered led six. <br/> <br/>
                  Two assure edward whence the was. Who worthy yet ten boy denote wonder. Weeks views her sight old tears sorry. Additions can suspected its concealed put furnished. Met the why particular devonshire decisively considered partiality. Certain it waiting no entered is. Passed her indeed uneasy shy polite appear denied. Oh less girl no walk. At he spot with five of view. </p>
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

export default MaintainMobile;