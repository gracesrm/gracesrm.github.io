import React from 'react';
import NavBar from './Header';
import Intro from './Intro';
import Body from './Body';
import Container from 'react-bootstrap/Container';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Body>
        <Intro/>
        <Container>asdfhakljhfk</Container>
      </Body>
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
