import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import "./bootstrap-5.3.3-dist/js/bootstrap.bundle.min";
import './bootstrap-5.3.3-dist/css/bootstrap.min.css';

import geloImage from '/src/img/gelo.jpg';
import gelo2Image from '/src/img/gelo2.jpg';
import hellImage from '/src/img/hell.jpg';
import turtleImage from '/src/img/turtle.jpg';
import loveImage from '/src/img/love.jpg';
import kidsImage from '/src/img/kids.jpg';
import tigerImage from '/src/img/biscuit.png';
import rustImage from '/src/img/rust.jpg';
import darkImage from '/src/img/dark.jpg';
import dungeonImage from '/src/img/dungeon.jpg';
import blackGif from '/src/img/black.gif';
import fnfGif from '/src/img/fnf.gif';
import danceGif from '/src/img/dance.gif';
import tumbleweedGif from '/src/img/tumbleweed.gif';
import aquafyVid from '/src/img/aquafy.mp4';

import NavigationBar from "./components/navigation";
import Blog from './components/blog';
import Exp from './components/exp';
import Projects from './components/projects';
import Cert from './components/cert';
import Contact from './components/contact';

function Home() {
  useEffect(() => {
    const metaTag = document.createElement("meta");
    metaTag.name = "viewport";
    metaTag.content = "width=device-width, initial-scale=1";
    document.head.appendChild(metaTag);

    return () => {
      document.head.removeChild(metaTag); 
    };
  }, []);

  return (
    <div className="ultimate-div">
      <NavigationBar />

      <h1>Hi, I'm Angelo M. Ando!</h1>
      <div className="first-container">
        <img src={geloImage} className="img-angelo" />
      </div> 
      <hr />

      {/* ABOUT ME */}
      <div className="div-aboutme">
        <h1 className="about-me">About Me</h1>
        <p>Born in the Philippines on May 29th of 2003, and studied under the Bachelors of Science in Information Technology.</p>

        <div className="table-wrapper">
          <table className="first-table table-bordered">
            <thead>
              <tr>
                <th className="table1"><h5>Entered Contests</h5></th>
                <th className="table2"><h5>My Skills & Expertise</h5></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><li>None</li></td>
                <td className="td-skills">
                  <li><a href="#" data-bs-toggle="modal" data-bs-target="#digart-modal">Digital Art</a></li>
                  <li><a href="#" data-bs-toggle="modal" data-bs-target="#ani-modal">Animation</a></li>
                  <li><a href="#" data-bs-toggle="modal" data-bs-target="#fed-modal">Front-End Design (Beginner)</a></li>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* MODALS */}
        <div className="modal fade modal-xl modal-digart" id="digart-modal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header"><h5 className="modal-title">Digital Art Examples</h5></div>
              <div className="modal-body">
                <img src={hellImage} />
                <img src={loveImage} />
                <img src={tigerImage} />
                <img src={kidsImage} />
                <img src={turtleImage} />
                <img src={rustImage} />
                <img src={darkImage} />
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade modal-lg modal-ani" id="ani-modal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header"><h5 className="modal-title">Animations</h5></div>
              <div className="modal-body">
                <img src={blackGif} />
                <img src={danceGif} />
                <img src={fnfGif} />
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade modal-lg modal-fed" id="fed-modal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header"><h5 className="modal-title">Front-End Designs</h5></div>
              <div className="modal-body">
                <img src={dungeonImage} />
                <video controls>
                  <source src={aquafyVid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="table-wrapper">
          <table className="second-table table-bordered">
            <thead>
              <tr>
                <th className="table3"><h5>Career Goals</h5></th>
                <th className="table4"><h5>Fun Facts!</h5></th>
                <th className="table5"><h5>My Hobbies</h5></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <li>-To become a very talented and creative web designer.</li>
                  <li>-To work as either a web designer or graphic designer for a company.</li>
                </td>
                <td>
                  <li>-Left 4 Dead 2 is my favorite video game.</li>
                  <li>-Horror, comedy and fantasy are my favorite film genres.</li>
                  <li>-I love dogs! They are the best!</li>
                </td>
                <td>
                  <li>-I draw and post my drawings on Tumblr.</li>
                  <li>-I make a comic strip and post it on Webtoon.</li>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="div-calltoact">
        <h3>Check out my portfolio and social platforms!</h3>
        <div className="div-action">
          <a href="https://andoangeloportfolio.my.canva.site/" target="_blank" rel="noopener noreferrer">
            <button className="bt1"><b>PORTFOLIO</b></button>
          </a>
          <a href="https://www.tumblr.com/skyskyskyart" target="_blank" rel="noopener noreferrer">
            <button className="bt2"><b>TUMBLR</b></button>
          </a>
          <a href="https://www.webtoons.com/en/canvas/power-vs-power/list?title_no=964744&page=2" target="_blank" rel="noopener noreferrer">
            <button className="bt3"><b>WEBTOON</b></button>
          </a>
          <p><i>Warning! Tumblr contains NSFW content.</i></p>
        </div>
      </div>
      <hr />

      <div className="div-thnx">
        <h2>Thanks for reading!</h2>
        <h3>Here's a Sonic video!</h3>
        <iframe
          width="560"
          height="315"
          src="https://youtube.com/embed/lKH9DvNawF0?si=29RKe2vutUT7nWPf"
          title="Sonic said what?"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/exp" element={<Exp />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cert" element={<Cert />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
