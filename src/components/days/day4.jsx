import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import h0 from '/src/img/day4img/h0.jpg';
import h1 from '/src/img/day4img/h1.jpg';
import h2 from '/src/img/day4img/h2.jpg';
import h3 from '/src/img/day4img/h3.jpg';
import h4 from '/src/img/day4img/h4.jpg';
import h5 from '/src/img/day4img/h5.jpg';
import h6 from '/src/img/day4img/h6.jpg';
import h7 from '/src/img/day4img/h7.jpg';
import h8 from '/src/img/day4img/h8.jpg';
import h9 from '/src/img/day4img/h9.jpg';
import h10 from '/src/img/day4img/h10.jpg';

export default function Day4() {
    return (
        <div>
            
            <div className="hytec">
                <h1>Day Four: Hytec Power Inc.</h1>

                <div className="div-wrapper">
                <h2>Bangko Sentral ng Pilipinas</h2>
                    <div className="div-container">
                        <div className="blog-p">
                            <p>At 8am, we visited the Bangko Sentral ng Pilipinas. Unfortunately we were forbidden from ever taking photos or films inside the facility. 
                                All I can say the place was huge. We learned how our money was made and its history. The most memorable things I learned: 
                                currency is replaced if the rate of it being used is low, and if you ever find gold in your property, you're obligated to hand it over to the bank.</p>
                        </div>
                    </div>
                </div>

                <div className="div-wrapper last-wrapper">
                <h2>Hytec Power Inc.</h2>

                <div className="div-container">
                    <Carousel className="div-carousel hytec-carousel" showThumbs={false} infiniteLoop autoPlay>

                        <div className="img-wide dual-wide hytec-lowmarg">
                            <img src={h0}/>
                            <img src={h1}/>
                        </div>

                        <div className="img-wide dual-wide hytec-lowmarg">
                            <img src={h7}/>
                            <img src={h3}/>
                        </div>

                        <div className="img-wide dual-wide hytec-lowmarg">
                            <img src={h6}/>
                            <img src={h5}/>
                        </div>

                        <div className="img-wide dual-wide hytec-lowmarg">
                            <img src={h2}/>
                            <img src={h8}/>
                        </div>

                        <div className="img-single-large">
                            <img src={h4}/>
                        </div>

                        <div className="img-tall dual-too-tall">
                            <img src={h9}/>
                            <img src={h10}/>
                        </div>

                        </Carousel>    
                        <div className="blog-p">
                            <p>At 2pm, we visited the Hytec Power Inc., a company of advance technology. This is where I realize who evolved the Philippines actually is in not just engineering or computer science but in robotics. 
                                In Hytec, I commandeered a virtual construction simulator where I transfer rocks from the ground to a truck using a bulldozer. 
                                Hytec also had a VR simulator but I didn't get to try. Lastly, Hytec had actual robots. I was able to get my hands one one and it felt like controlling a toy car except it was more complicated.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}