import React from 'react';
import NavBar from './Header';
import Body from './Body';
import Home from './Home';
import Lab from './Lab';
import Awards from './Lab/Awards';
import Publication from './Lab/Publication';
import Resources from './Lab/Resources';
import Sponsor from './Lab/Sponsor';
import Team from './Lab/Team';
import { site } from './content/site';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import './styles/tokens.css';
import './styles/brands.css';
import './styles/themes/fiu.css';

function App() {
  return (
    <div className="App" data-institution={site.theme}>
      <Router>
      <NavBar/>
        <Body>
          <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/lab" component={Lab}></Route>
            <Route exact path="/team" component={Team}></Route>
            <Route exact path="/publication" component={Publication}></Route>
            <Route exact path="/sponsor" component={Sponsor}></Route>
            <Route exact path="/awards" component={Awards}></Route>
            <Route exact path="/resources" component={Resources}></Route>
            <Redirect exact from="/" to="/home" />
            <Redirect exact from="/research" to="/home#research" />
            <Redirect exact from="/teaching" to="/home#teaching" />
            <Redirect exact from="/service" to="/home#service" />
            <Redirect exact from="/students" to="/team" />
            <Redirect exact from="/publications" to="/publication" />
            <Redirect exact from="/talks" to="/resources" />
            <Redirect to="/home" />
          </Switch>
        </Body>
      </Router>
    </div>
  );
}

export default App;
