import React from 'react';
import NavBar from './Header';
import Body from './Body';
import Home from './Home';
import Research from './Research';
import Teaching from './Teaching';
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
            <Route exact path="/research"><Research/></Route>
            <Route exact path="/teaching"><Teaching/></Route>
          </Switch>
        </Body>
      </Router>
    </div>
  );
}

export default App;
