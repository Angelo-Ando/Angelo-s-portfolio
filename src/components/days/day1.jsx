import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './day.css';

import rizalPark0 from '/src/img/day1img/rizalPark0.jpg';
import rizalPark1 from '/src/img/day1img/rizalPark1.jpg';
import rizalPark2 from '/src/img/day1img/rizalPark2.jpg';
import fortSantiago1_1 from '/src/img/day1img/fortSantiago1_1.jpg';
import fortSantiago1 from '/src/img/day1img/fortSantiago1.jpg';
import fortSantiago2 from '/src/img/day1img/fortSantiago2.jpg';
import fortSantiago2_1 from '/src/img/day1img/fortSantiago2_1.jpg';
import fortSantiago3 from '/src/img/day1img/fortSantiago3.jpg';
import fortSantiago4 from '/src/img/day1img/fortSantiago4.jpg';
import fortSantiago5 from '/src/img/day1img/fortSantiago5.jpg';
import fortSantiago6 from '/src/img/day1img/fortSantiago6.jpg';
import fortSantiago6_1 from '/src/img/day1img/fortSantiago6_1.jpg';
import fortSantiago7 from '/src/img/day1img/fortSantiago7.jpg';
import fortSantiago8 from '/src/img/day1img/fortSantiago8.jpg';
import fortSantiago9 from '/src/img/day1img/fortSantiago9.jpg';
import fortSantiago10 from '/src/img/day1img/fortSantiago10.jpg';
import fortSantiago11 from '/src/img/day1img/fortSantiago11.jpg';
import fortSantiago12 from '/src/img/day1img/fortSantiago12.jpg';
import fortSantiago13 from '/src/img/day1img/fortSantiago13.jpg';
import fortSantiago14 from '/src/img/day1img/fortSantiago14.jpg';
import sm1 from '/src/img/day1img/sm1.jpg';
import sm2 from '/src/img/day1img/sm2.jpg';
import sm3 from '/src/img/day1img/sm3.jpg';
import sm4 from '/src/img/day1img/sm4.jpg';

export default function Day1() {
    return (
        <div>
            <h1>Day One: Metro Manila</h1>

            <div className="div-wrapper">
                <h2>Rizal Park</h2>

                <div className="div-container">
                    <Carousel className="div-carousel" showThumbs={false} infiniteLoop autoPlay>
                        <div className="img-tall">
                            <img src={rizalPark1} />
                            <img src={rizalPark0} />
                        </div>
                        <div className="img-tall">
                        <img src={rizalPark2} />
                        </div>
                    </Carousel>    
                    <div>
                        <p>At 2pm in the afternoon. I set foot on Rizal Park for the first time. The site was majestic but too hot and sunny. And because it was too hot, I was unable to take more photos. The most fascinating thing about Rizal Park for me is the stars on the shrine are made out of real gold.</p>
                    </div>
                </div>
            </div>

            <div className="div-wrapper fortSantiago-wrapper">
                <h2>Fort Santiago</h2>

                <div className="div-container">
                    <Carousel className="div-carousel fortSantiago-carousel" showThumbs={false} infiniteLoop autoPlay>
                        <div className="img-wide">
                            <img src={fortSantiago1_1}/>
                            <img src={fortSantiago3}/>
                        </div>

                        <div className="img-tall">
                            <img src={fortSantiago1}/>
                        </div>

                        <div className="img-tall">
                            <img src={fortSantiago2_1}/>
                            <img src={fortSantiago2}/>
                        </div>

                        <div className="img-wide">
                            <img src={fortSantiago6}/>
                            <img src={fortSantiago6_1}/>
                        </div>

                        <div className="img-wide">
                            <img src={fortSantiago4}/>
                            <img src={fortSantiago5}/>
                        </div>

                        <div className="img-single-small">
                            <img src={fortSantiago7}/>
                            <p>Warning, traveler! You're about to enter the Dungeons. Disturbing images ahead.</p>
                        </div>

                        <div className="img-wide">
                            <img src={fortSantiago8}/>
                            <img src={fortSantiago9}/>
                        </div>

                        <div className="img-wide">
                            <img src={fortSantiago10}/>
                            <img src={fortSantiago11}/>
                        </div>

                        <div className="img-tall">
                            <img src={fortSantiago13}/>
                        </div>

                        <div className="img-tall">
                            <img src={fortSantiago12}/>
                            <img src={fortSantiago14}/>
                        </div>
                    </Carousel>
                    <div>
                        <p>At 4pm, we visited the Fort Santiago and it was the most explorable place I have been in. It was wide, open and breathtaking. There was so much to see and learn, especially in the Dungeons. The tight undeground tunnel and statues gave me the chills.</p>
                    </div>
                </div>
            </div>

            
            <div className="div-wrapper">
                <h2>SM Mall of Asia</h2>

                <div className="div-container">
                    <Carousel className="div-carousel" showThumbs={false} infiniteLoop autoPlay>
                        <div className="img-wide">
                            <img src={sm1} />
                            <img src={sm4} />
                        </div>
                        <div className="img-tall">
                            <img src={sm3} />
                            <img src={sm2} />
                        </div>
                    </Carousel>    
                    <div>
                        <div>
                            <p>At 5pm, we went to the SM Mall of Asia. It wasn't my first time going there, I've been there before, but I was all turned around. I wasn't able to get that much photos as I was too busy getting lost. I ended up reaching the roof of the mall and getting something to eat, a grilled cheese sandwich and a Pinkberry yogurt with five different toppings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}