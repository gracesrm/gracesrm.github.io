import React from 'react';
import NavBar from './Header';
import Body from './Body';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Body>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/research"><p>research</p></Route>
            <Route exact path="/teaching"><p>teaching</p></Route>
            <Route exact path="/vita"><p>vita</p></Route>
          </Switch>
        </Body>
      </Router>
    </div>
  );
}

export default App;
