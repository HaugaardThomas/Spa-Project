import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import nav_1 from '../assets/nav-1.png';
import nav_2 from '../assets/nav-2.png';
import nav_3 from '../assets/nav-3.png';
import Back from '../assets/back.png';

function NavigationMobile () {

    return(
        <>
    <div>
        <Link to="/HomeView"><img className="nav_back" src={Back}/></Link>
        <Link to="/AboutView"><img className="mnav_1" src={nav_3}/></Link>
        <Link to="/MaintainView"><img className="mnav_2" src={nav_2} /></Link>
       <Link to="/TouchView"><img className="mnav_3" src={nav_1} /></Link> 
    </div>
        </>
    );
};

export default NavigationMobile;

/*Den er ikke i brug*/