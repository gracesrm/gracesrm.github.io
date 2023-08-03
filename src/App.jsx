import React from 'react';
import NavBar from './Header';
import Body from './Body';
import Home from './Home';
import Research from './Research';
import Teaching from './Teaching';
import Service from './Service';
import Students from './Students';
import Courses from './Courses';
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
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/research" component={Research}></Route>
            <Route exact path="/teaching" component={Teaching}></Route>
            <Route exact path="/service" component={Service}></Route>
            <Route exact path="/students" component={Students}></Route>
            <Route exact path="/courses" component={Courses}></Route>
          </Switch>
        </Body>
      </Router>
    </div>
  );
}

export default App;
