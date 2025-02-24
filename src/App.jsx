import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import geloImage from '/src/img/gelo.jpg';
import gelo2Image from '/src/img/gelo2.jpg';
import hellImage from '/src/img/hell.jpg';
import turtleImage from '/src/img/turtle.jpg';
import loveImage from '/src/img/love.jpg';
import kidsImage from '/src/img/kids.jpg';
import AboutMe from './AboutMe';
import tigerImage from '/src/img/biscuit.png';
import dungeonImage from '/src/img/dungeon.jpg';
import blackGif from '/src/img/black.gif';
import fnfGif from '/src/img/fnf.gif';
import danceGif from '/src/img/dance.gif';
import tumbleweedGif from '/src/img/tumbleweed.gif';
import aquafyVid from '/src/img/aquafy.mp4';

function Home() {
  return (
    <>
      <body style={{ display: 'block' }}>
        <h1 className="Angelo">Hi, I'm Angelo M. Ando!</h1>
        <div className="first-container">
          <div>
            <a href="https://andoangeloportfolio.my.canva.site/" target="_blank">
              <img src={geloImage} className="gelo1" />
              <img src={geloImage} style={{ opacity: 0 }} />
              <img src={gelo2Image} className="gelo2" />
            </a>
          </div>
        </div>
        <hr />
        <h1 className="AboutMe">Read My About Me!</h1>
      </body>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;

