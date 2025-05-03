import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import b0 from '/src/img/day6img/b0.jpg';
import b1 from '/src/img/day6img/b1.jpg';
import b2 from '/src/img/day6img/b2.jpg';
import b2_1 from '/src/img/day6img/b2_1.jpg';
import b2_2 from '/src/img/day6img/b2_2.jpg';
import b2_3 from '/src/img/day6img/b2_3.jpg';
import b3 from '/src/img/day6img/b3.jpg';
import b4 from '/src/img/day6img/b4.jpg';

import bc1 from '/src/img/day6img/bc1.jpg';
import bc1_1 from '/src/img/day6img/bc1_1.jpg';
import bc2_2 from '/src/img/day6img/bc2_2.jpg';
import bc2_1 from '/src/img/day6img/bc2_1.jpg';
import bc2 from '/src/img/day6img/bc2.jpg';
import bc3 from '/src/img/day6img/bc3.jpg';
import bc4 from '/src/img/day6img/bc4.jpg';
import bc5 from '/src/img/day6img/bc5.jpg';
import bc6 from '/src/img/day6img/bc6.jpg';
import bc7 from '/src/img/day6img/bc7.jpg';
import bc8 from '/src/img/day6img/bc8.jpg';
import bc9 from '/src/img/day6img/bc9.jpg';
import bc10 from '/src/img/day6img/bc10.jpg';

import man1 from '/src/img/day6img/man1.jpg';
import man2 from '/src/img/day6img/man2.jpg';

import mv2 from '/src/img/day6img/mv2.jpg';
import mv4 from '/src/img/day6img/mv4.jpg';
import mv5 from '/src/img/day6img/mv5.jpg';
import mv6 from '/src/img/day6img/mv6.jpg';
import mv7 from '/src/img/day6img/mv7.jpg';
import mv8 from '/src/img/day6img/mv8.jpg';

import pma1 from '/src/img/day6img/pma1.jpg';
import pma2 from '/src/img/day6img/pma2.jpg';
import pma3 from '/src/img/day6img/pma3.jpg';
import pma4 from '/src/img/day6img/pma4.jpg';
import pma5 from '/src/img/day6img/pma5.jpg';
import pma6 from '/src/img/day6img/pma6.jpg';

export default function Day6() {
    return (
        <div>
            <h1>Day Six: Baguio</h1>

            <div className="div-wrapper">
                <h2>Strawberry Farm</h2>
                    <div className="div-container">
                        <Carousel className="div-carousel" showThumbs={false} infiniteLoop autoPlay>

                            <div className="img-single-wide">
                                <img src={b0}/>
                            </div>

                            <div className="img-single-wide">
                                <img src={b1}/>
                            </div>

                            <div className="img-single-wide">
                                <img src={b2_2}/>
                            </div>
                            
                            <div className="img-single-wide">    
                                <img src={b2_3}/>
                            </div>

                            <div className="img-single-wide">
                                <img src={b2}/>
                            </div>
                            
                            <div className="img-single-wide">    
                                <img src={b2_1}/>
                            </div>

                            <div className="img-single-wide">
                                <img src={b4}/>
                            </div>

                            <div className="img-tall">
                                <img src={b3}/>
                            </div>

                        </Carousel>    
                    <div className="blog-p">
                        <p>
                            At 5am in the morning, our tour bus arrived to the Strawberry Farms of Baguio. I was suprised at how 
                            cold Baguio was that I had to wear my hoodie to explore the place. Unfortunately we didn't go 
                            strawberry picking as expected but we did buy a lot of pasalubongs at the shops. Like any tourist, 
                            I bought souvenirs and jars of strawberry jam for when I go back home. I bought shirts, a fur hat, 
                            wallets and my favorite, a small knife with a wooden sheath shaped like a guitar.
                        </p>
                    </div>
                </div>
            </div>

            <div className="div-wrapper">
                <h2>Bell Church</h2>
                    <div className="div-container">
                        <Carousel className="div-carousel" showThumbs={false} infiniteLoop autoPlay>

                        <div className="img-single-wide">
                                <img src={bc1}/>
                            </div>

                            <div className="img-single-wide">
                                <img src={bc1_1}/>
                            </div>

                            <div className="img-single-wide">
                                <img src={bc2}/>
                            </div>
                            
                            <div className="img-single-wide">    
                                <img src={bc2_1}/>
                            </div>

                            <div className="img-single-wide">    
                                <img src={bc2_2}/>
                            </div>

                            <div className="img-single-wide">    
                                <img src={bc6}/>
                            </div>

                            <div className="img-tall">
                                <img src={bc3}/>
                                <img src={bc4}/>
                            </div>
                            
                            <div className="img-single-wide">    
                                <img src={bc5}/>
                            </div>

                            <div className="img-single-wide">
                                <img src={bc7}/>
                            </div>

                            <div className="img-single-wide">
                                <img src={bc9}/>
                            </div>

                            <div className="img-tall">
                                <img src={bc8}/>
                            </div>

                            <div className="img-tall">
                                <img src={bc10}/>
                            </div>

                        </Carousel>    
                    <div className="blog-p">
                        <p>
                            At 7am, we arrived at the Bell Church. I believe it was the place with the most stairs. 
                            Trekking it was the most tiring, my knees and feet hurt every step I took, but it was worth it as it
                             had the most beautiful view and glamorous sites. The statues were magnificent and the plants were 
                             elegant. Climbing the heights felt like I was reaching Heaven.
                        </p>
                    </div>
                </div>
            </div>

            <div className="div-wrapper">
                <h2>The Mansion</h2>
                    <div className="div-container">
                        <Carousel className="div-carousel" showThumbs={false} infiniteLoop autoPlay>

                            <div className="img-tall">
                                <img src={man2}/>
                            </div>

                            <div className="img-single-wide">
                                <img src={man1}/>
                            </div>

                        </Carousel>    
                    <div className="blog-p">
                        <p>
                            The Mansion was the shortest tour we took. A lot of us anticipated to enter the interior of the 
                            Mansion. Sadly we could only reach the entrance. It only took us within an hour to check out the 
                            place and that was it.
                        </p>
                    </div>
                </div>
            </div>

            <div className="div-wrapper">
                <h2>Philippine Military Academy</h2>
                    <div className="div-container">
                        <Carousel className="div-carousel" showThumbs={false} infiniteLoop autoPlay>

                            <div className="img-single-wide">
                                <img src={pma1}/>
                            </div>

                            <div className="img-tall">
                                <img src={pma2}/>
                            </div>

                            <div className="img-tall">
                                <img src={pma3}/>
                            </div>

                            <div className="img-single-wide">
                                <img src={pma4}/>
                            </div>

                            <div className="img-single-wide">
                                <img src={pma5}/>
                            </div>

                            <div className="img-tall">
                                <img src={pma6}/>
                            </div>

                        </Carousel>    
                    <div className="blog-p">
                        <p>
                            At 1pm, we visited the Philippine Military Academy or PMA. It was the hottest place I visited in 
                            Baguio. Being there, I appreciated the servitude of our Philippine soldiers more. I saluted to 
                            the sights of PMA and climbed a treehouse before indulging in the goods of the souvenir shops.
                        </p>
                    </div>
                </div>
            </div>

            <div className="div-wrapper last-wrapper">
                <h2>Mines View</h2>
                    <div className="div-container">
                        <Carousel className="div-carousel" showThumbs={false} infiniteLoop autoPlay>

                            <div className="img-tall">
                                <img src={mv6}/>
                            </div>

                            <div className="img-tall">
                                <img src={mv7}/>
                            </div>

                            <div className="img-tall">
                                <img src={mv4}/>
                                <img src={mv5}/>
                            </div>

                            <div className="img-tall">
                                <img src={mv8}/>
                            </div>

                            <div className="img-single-large">
                                <img src={mv2}/>
                            </div>

                        </Carousel>    
                    <div className="blog-p">
                        <p>
                            At 3pm, we visited the glorious Mines View, a park where I enjoyed the culture of Baguio by wearing an 
                            outfit of the Igorots. It had a nice view and aesthetic but what stood out for was that Mines View was 
                            where I had a lot of 'first times.' It was my first time to ever mount a horse and interact with a 
                            Saint Bernard dog. Those two first times were my most fondest and unforgettable memories of Baguio.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}