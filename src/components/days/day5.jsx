import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import mmda1 from '/src/img/day5img/mmda1.jpg';
import mmda2 from '/src/img/day5img/mmda2.jpg';
import mmda3 from '/src/img/day5img/mmda3.jpg';
import mmda4 from '/src/img/day5img/mmda4.jpg';
import mrt1 from '/src/img/day5img/mrt1.jpg';
import mrt3 from '/src/img/day5img/mrt3.jpg';
import mrt4 from '/src/img/day5img/mrt4.jpg';
import mrt5 from '/src/img/day5img/mrt5.jpg';
import mrt6 from '/src/img/day5img/mrt6.jpg';
import mrt7 from '/src/img/day5img/mrt7.jpg';
import mrt8 from '/src/img/day5img/mrt8.jpg';
import mrt9 from '/src/img/day5img/mrt9.jpg';
import mrt10 from '/src/img/day5img/mrt10.jpg';
import mrt11 from '/src/img/day5img/mrt11.jpg';
import mrt12 from '/src/img/day5img/mrt12.jpg';
import mrt13 from '/src/img/day5img/mrt13.jpg';

export default function Day5() {
    return (
        <div>
            <h1>Day Five: MRT and MMDA</h1>

            <div className="div-wrapper">
                <h2>Manila Metro Rail Transit System</h2>
                    <div className="div-container">
                        <Carousel className="div-carousel mrt-carousel" showThumbs={false} infiniteLoop autoPlay>

                            <div className="img-single-large">
                                <img src={mrt1}/>
                            </div>

                            <div className="img-tall">
                                <img src={mrt3}/>
                            </div>

                            <div className="img-single-large">
                                <img src={mrt5}/>
                            </div>

                            <div className="img-single-large">
                                <img src={mrt4}/>
                            </div>

                            <div className="img-single-large">
                                <img src={mrt7}/>
                            </div>

                            <div className="img-tall dual-too-tall mrt-lowmarg">
                                <img src={mrt8}/>
                                <img src={mrt9}/>
                            </div>

                            <div className="img-single-wide">
                                <img src={mrt10}/>
                            </div>

                            <div className="img-single-wide">
                                <img src={mrt11}/>
                            </div>

                            <div className="img-tall">
                                <img src={mrt6}/>
                            </div>

                            <div className="img-tall">
                                <img src={mrt12}/>
                            </div>

                            <div className="img-single-wide">
                                <img src={mrt13}/>
                            </div>

                        </Carousel>    
                    <div className="blog-p">
                        <p>
                            Between 9am and 12nn, we were at the Metro Rail Transit or MRT where we took a tour in the depot.  
                            It was large and had a lot of precautions as the place had a lot of things that could cause fatalities. 
                            The rails outside were said to be electric and there were heavy equipment. 
                            At the end of the day, I felt what it was like to be inside a train and to ride a train for the very first time.
                        </p>
                    </div>
                </div>
            </div>

            <div className="div-wrapper last-wrapper">
                <h2>Metropolitan Manila Development Authority</h2>
                    <div className="div-container">
                        <Carousel className="div-carousel mmda-carousel" showThumbs={false} infiniteLoop autoPlay>

                            <div className="img-tall">
                                <img src={mmda1}/>
                            </div>

                            <div className="img-single-wide">
                                <img src={mmda2}/>
                            </div>

                            <div className="img-single-wide">
                                <img src={mmda3}/>
                            </div>

                            <div className="img-single-wide">
                                <img src={mmda4}/>
                            </div>

                        </Carousel>    
                    <div className="blog-p">
                        <p>
                            Then in the afternoon, we visited the Metropolitan Manila Development Authority where we as a class 
                            were amazed by the capabilities of the company's security cameras. Every corner of Manila had cameras 
                            watching them and it was said those cameras arenever deactivated. Workers must monitor them day and 
                            night without even having to attend events or celebrations. We watched footages of accidents that 
                            occured in different dates. We also watched a police officer citing a motorcycle rider and SUV driver. 
                            But what truly got our attention was how far a camera can zoom in and how that part appears detailed. 
                            Like we actually expected it to be made up of pixels but no, it was high quality.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}