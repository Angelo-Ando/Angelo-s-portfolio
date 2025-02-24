import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import AboutMe from './AboutMe';
import geloImage from '/src/img/gelo.jpg';
import gelo2Image from '/src/img/gelo2.jpg';
import hellImage from '/src/img/hell.jpg';
import turtleImage from '/src/img/turtle.jpg';
import rustImage from '/src/img/rust.jpg';
import catImage from '/src/img/cat.jpg';
import loveImage from '/src/img/love.jpg';
import kidsImage from '/src/img/kids.jpg';

function Home() {
  const [image1] = useState(hellImage);
  const [image2] = useState(turtleImage);
  const [image3] = useState(rustImage);
  const [image4] = useState(catImage);
  const [image5] = useState(loveImage);
  const [image6] = useState(kidsImage);

  return (
    <>
      <p className="p1">
        <i>If you see a box in the background, just reload the page.</i>
      </p>
      <h1 className="Apph1">Hi, I'm Angelo!</h1>
      <h2>Fanartist and beginner at front-end designing!</h2>

      <div className="ParentContainer">
        <div className="Image1" style={{ position: 'relative' }}>
          <a href="https://andoangeloportfolio.my.canva.site/" target="_blank">
            <img src={geloImage} className="gelo1" />
            <img src={gelo2Image} className="gelo2" />
          </a>
        </div>

        <div className="Images">
          <div className="div1img" style={{ position: 'absolute' }}>
            <img src={image2} />
            <img src={image1} />
            <img src={image3} />
          </div>
          <div className="div2img" style={{ position: 'absolute' }}>
            <img src={image4} />
            <img src={image5} />
            <img src={image6} />
          </div>
        </div>

        <div className="Navigation">
          <Link to="/about">
            <button className="AboutMeButton">
              <b>ABOUT ME</b>
            </button>
          </Link>
          <button className="navButtons">Extra button</button>
          <button className="navButtons">Extra button</button>
        </div>
      </div>
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

