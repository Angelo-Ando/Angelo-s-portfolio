import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './day.css';

import jason from '/src/img/day6img/jason.jpg';
import jaden from '/src/img/day6img/jaden.jpg';

export default function Day7() {
    return (
        <div>
            
            <div className="hytec">
                <h1>Day Seven: Another Day in Baguio</h1>

                <div className="div-wrapper">
                    <h2>Burnham Park & Good Taste</h2>

                    <div className="div-container">
                        <Carousel className="div-carousel day7-carousel" showThumbs={false} infiniteLoop autoPlay>
                            <div className="img-single-small">
                                <img src={jason}/>
                                <p><i>This image belongs to Sir Jason</i>.</p>
                            </div>

                            <div className="img-tall with-p">
                            <img src={jaden} />
                            <p><i>This image belongs to J.L Mosot</i>.</p>
                            </div>
                        </Carousel>
                        <div className="blog-p">
                            <p>
                                It was our last day in Baguio and I spent the morning with a couple of friends. I was convinced to try out
                                 Good Taste Restuarant's food. We ventured out in the sunny but cold morning through Burnham 
                                 Park where there were a lot of people riding boats. Unfortunately I didn't take any photos so 
                                 here are some that belongs to Sir Jason and J.L Mosot to see how may day went. Good Taste's food
                                 was indeed delightful, especially their desserts. After our adventure, I went back to the hotel 
                                 to have some rest as I was feeling unwell.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="div-wrapper feeling-ill last-wrapper">
                    <h2>Feeling Ill</h2>
                    <div className="div-container">
                        <div className="blog-p">
                            <p>
                                Returning back from Good Taste and BUrnham Park, I was ill. Actually I had been feeling woozy the past six days of the tour.
                                I neglected my health to enjoy the moment. My throat was sore and head was aching a little. I finally decided to stay in the hotel and rest. 
                                I wanted to have fun as everyone else but unfortunately I wasn't in the mood. But I don't regret 
                                that decision as my health slowly improved. I spent half of the day chilling in my hotel room, 
                                laying in bed, watching TV and taking medicines until it was time to pack up and return to Manila.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
                
        </div>
    );
}