import React, { useState } from 'react';
import NavigationBar from './navigation';

import './blog.css';
import sm2 from '/src/img/day1img/sm2.jpg';
import sb2 from '/src/img/day2img/sb2.jpg';
import q6 from '/src/img/day3img/q6.jpg';
import h9 from '/src/img/day4img/h9.jpg';
import mrt3 from '/src/img/day5img/mrt3.jpg';
import mv8 from '/src/img/day6img/mv8.jpg';
import jaden from '/src/img/day6img/jaden.jpg';

import Day1 from './days/day1';
import Day2 from './days/day2';
import Day3 from './days/day3';
import Day4 from './days/day4';
import Day5 from './days/day5';
import Day6 from './days/day6';
import Day7 from './days/day7';

const components = {
    1: Day1,
    2: Day2,
    3: Day3,
    4: Day4,
    5: Day5,
    6: Day6,
    7: Day7
};

export default function Blog() {
    const [activeDay, setActiveDay] = useState(1);
    const ActiveComponent = components[activeDay];

    return (
        <div className="ultimate-div">
            <NavigationBar />
            <div className="name-div">
                <h1>Welcome to Angelo's Industry Blog!</h1>
            </div>

            <div className="div-days">
                <div className="day-one" onClick={() => setActiveDay(1)}>
                    <h5>DAY ONE</h5>
                    <img src={sm2} alt="Day One" />
                    <p>April 7, 2025</p>
                    <p>Manila Wonders</p>
                </div>

                <div className="day-two" onClick={() => setActiveDay(2)}>
                    <h5>DAY TWO</h5>
                    <img src={sb2} alt="Day Two" />
                    <p>April 8, 2025</p>
                    <p>Subic Bay</p>
                </div>

                <div className="day-three" onClick={() => setActiveDay(3)}>
                    <h5>DAY THREE</h5>
                    <img src={q6} alt="Day Three" />
                    <p>April 9, 2025</p>
                    <p>Manila Museums</p>
                </div>

                <div className="day-four" onClick={() => setActiveDay(4)}>
                    <h5>DAY FOUR</h5>
                    <img src={h9} alt="Day Four" />
                    <p>April 10, 2025</p>
                    <p>Hytec Power Inc</p>
                </div>

                <div className="day-five" onClick={() => setActiveDay(5)}>
                    <h5>DAY FIVE</h5>
                    <img src={mrt3} alt="Day Five" />
                    <p>April 11, 2025</p>
                    <p>MRT and MMDA</p>
                </div>

                <div className="day-six" onClick={() => setActiveDay(6)}>
                    <h5>DAY SIX</h5>
                    <img src={mv8} alt="Day Six" />
                    <p>April 12, 2025</p>
                    <p>Baguio</p>
                </div>

                <div className="day-seven" onClick={() => setActiveDay(7)}>
                    <h5>DAY SEVEN</h5>
                    <img src={jaden} alt="Day Seven" />
                    <p>April 13, 2025</p>
                    <p>Baguio 2</p>
                </div>
            </div>

            <div className="carousel-wrapper">
                {ActiveComponent ? <ActiveComponent /> : <p>Select a day above!</p>}
            </div>
        </div>
    );
}
