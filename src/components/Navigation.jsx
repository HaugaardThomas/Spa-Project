import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import nav_1 from '../assets/nav-1.png';
import nav_2 from '../assets/nav-2.png';
import nav_3 from '../assets/nav-3.png';
import Back from '../assets/back.png';
import navAbout from '../assets/nav-about-ps.png';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

function Navigation () {

    return (
        <>
     
         
        <div className="div_nav">
  <Link to="/HomeView"> <img className="img_1" src={Back}  /></Link> 
    <Link to="/TouchView"><img className="img_1" src={nav_1}/></Link>
    <Link to="/MaintainView"><img className="img_1" src={nav_2}/></Link>
   <Link to="/AboutView"> <img className="img_1" src={nav_3}/></Link>
    </div>
  
        </>
    );
};

export default Navigation;

/*Den er ikke i brug*/