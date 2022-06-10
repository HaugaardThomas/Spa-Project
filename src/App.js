import AboutView from './components/AboutView';
import HomeView from './components/HomeView';
import MaintainView from './components/MaintainView';
import TouchView from './components/TouchView';
import { Container, Row, Col } from 'react-bootstrap';
import topLogo from './assets/logo-final.png';
import nav1 from './assets/nav1.png';
import nav2 from './assets/nav2.png';
import nav3 from './assets/nav3.png';
import nav_1 from './assets/nav-1.png';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';



const App = () => {
return (
    <>
    
    <Router>
        <Container>
            <section>
                <Switch>
                    <Route path="/HomeView">
                        <HomeView/>
                    </Route>
                    <Route path="/AboutView">
                        <AboutView/>
                    </Route>
                    <Route path="/MaintainView">
                        <MaintainView/>
                    </Route>
                    <Route path="/TouchView">
                        <TouchView/>
                    </Route>
                </Switch>
            </section>
        </Container>
        <Route exact path="/">
            <Redirect to="/HomeView"/>
        </Route>
    </Router>
     
      </>
      
      )   
  }
  
  export default App;