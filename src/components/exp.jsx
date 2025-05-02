import React, { useState } from 'react';
import NavigationBar from './navigation';
import './expfolder/exp.css';

import SE from './expfolder/se';
import CAP from './expfolder/cap';
import WEBD from './expfolder/webd';

const components = {
    1: SE,
    2: CAP,
    3: WEBD,
};

export default function Exp() {
    const [activeExp, setActiveExp] = useState(1);
    const ActiveComponent = components[activeExp];

    return (
        <div className="ultimate-div">
            <NavigationBar />
            <div className="exp-title-div">
                <h1>Angelo's Experience as an IT</h1>
            </div>

            <div className="exp-div">
                <ul>
                    <h5 onClick={() => setActiveExp(1)}><u>SOFTWARE ENGINEERING</u></h5>
                    <h5 onClick={() => setActiveExp(2)}><u>CAPSTONE</u></h5>
                    <h5 onClick={() => setActiveExp(3)}><u>WEB DESIGN</u></h5>
                </ul>
            </div>

            <div className="carousel-wrapper">
                {ActiveComponent ? <ActiveComponent /> : <p>Select an experience above!</p>}
            </div>
        </div>
    );
}
