import React, { useState } from 'react';
import './App.css'

import geloImage from '/src/img/gelo.jpg'
import hellImage from '/src/img/hell.jpg'
import turtleImage from '/src/img/turtle.jpg'
import rustImage from '/src/img/rust.jpg'
import catImage from '/src/img/cat.jpg'
import loveImage from '/src/img/love.jpg'
import kidsImage from '/src/img/kids.jpg'
import gelo2Image from '/src/img/gelo2.jpg'

function App() {
  const [image1] = useState(hellImage)
  const [image2] = useState(turtleImage)
  const [image3] = useState(rustImage)
  const [image4] = useState(catImage)
  const [image5] = useState(loveImage)
  const [image6] = useState(kidsImage)
  const [image9] = useState(gelo2Image)

  return (
    <>
      <div classname="ParentContainer">

        <div className="Image1" style={{ position: "relative" }}>
        <a href="https://andoangeloportfolio.my.canva.site/" target="_blank">
           <img src={geloImage} className="gelo"/>
           <img src={gelo2Image} className="gelo2"/>
        </a>
        </div>
        <h1>Angelo M. Ando</h1>
        <h2> Fanartist and beginner at front-end designing!</h2>

        <div classname="Image2">
          <img src={image1} className="hoverimage1"/>
          <img src={image2} className="hoverimage2"/>
          <img src={image3} className="hoverimage3"/>
          <img src={image4}/>
          <img src={image5}/>
          <img src={image6}/>
        </div>

       {/* <button onClick ={handleClick}>Click me to see more!</button>
        <p>reload to see the previous ones.</p> */}

      </div>
    </>
  )
}

export default App