import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './day.css';

import sb1 from '/src/img/day2img/sb1.jpg';
import sb2 from '/src/img/day2img/sb2.jpg';
import sb3 from '/src/img/day2img/sb3.jpg';
import sb4 from '/src/img/day2img/sb4.jpg';
import sb4_1 from '/src/img/day2img/sb4_1.jpg';
import sb5 from '/src/img/day2img/sb5.jpg';
import sb7 from '/src/img/day2img/sb7.jpg';
import sb8 from '/src/img/day2img/sb8.jpg';
import sb9 from '/src/img/day2img/sb9.jpg';
import sb10 from '/src/img/day2img/sb10.jpg';
import sb11 from '/src/img/day2img/sb11.jpg';
import sb12 from '/src/img/day2img/sb12.jpg';
import sb13 from '/src/img/day2img/sb13.jpg';
import sb13_1 from '/src/img/day2img/sb13_1.jpg';
import sb14 from '/src/img/day2img/sb14.jpg';
import sb15 from '/src/img/day2img/sb15.jpg';
import sb16 from '/src/img/day2img/sb16.jpg';
import sb17 from '/src/img/day2img/sb17.jpg';

export default function Day2() {
    return (
        <div>
            <h1>Day Two: Subic Bay</h1>

            <div className="div-wrapper">
                <h2>Subic Bay Exhibition and Convention Center</h2>

                <div className="div-container">
                    <Carousel className="div-carousel" showThumbs={false} infiniteLoop autoPlay>

                        <div className="img-single-large">
                            <img src={sb1}/>
                        </div>

                        <div className="img-tall">
                            <img src={sb2}/>
                            <img src={sb3}/>
                        </div>

                        <div className="img-tall">
                            <img src={sb4}/>
                            <img src={sb4_1}/>
                        </div>

                        <div className="img-single-large">
                            <img src={sb5}/>
                        </div>

                    </Carousel>    
                    <div>
                        <p>Early in the morning, we visited the 'Subic Bay Exhibition and Convention Center' or SBECC where we witnessed the beautiful oil paiting murals of the Philippines' rich history from the pre-colonial period to the modern times.</p>
                    </div>
                </div>
            </div>

            <div className="div-wrapper">
                <h2>Subic Bay Port</h2>

                <div className="div-container">
                    <Carousel className="div-carousel" showThumbs={false} infiniteLoop autoPlay>

                        <div className="sbp-1">
                            <img src={sb8}/>
                            <img src={sb7}/>
                        </div>

                        <div className="sbp-1">
                            <img src={sb9}/>
                            <img src={sb10}/>
                        </div>

                        <div className="img-tall">
                            <img src={sb11}/>
                        </div>

                    </Carousel>    
                    <div>
                        <p>From 9am to 10am, we visited the control towerenter of Subic Bay Port where were taught how ships are aided from control towers through radios, radars and etc. It was all complicated stuff that I was honestly astonished with the advancements. And because we were by the beach, it was a great view on the rooftop.</p>
                    </div>
                </div>
                
            </div>

            <div className="div-wrapper">
                <h2>Subic Police Station</h2>

                <div className="div-container">
                    <Carousel className="div-carousel" showThumbs={false} infiniteLoop autoPlay>

                        <div className="img-wide">
                            <img src={sb12}/>
                            <img src={sb13}/>
                        </div>

                        <div className="img-tall">
                            <img src={sb13_1} />
                        </div>

                    </Carousel>    
                    <div>
                        <p>At 11am, we visited the police station of Subic Bay where we met the very amusing chief director. There I realized Subic was a gated community with barely any pedestrians. It was a suprise to me how there were no jeepneys or tricycles, and the workers of actually lived outside of Subic. More suprisingly was the fact that people there were kind of rare yet crime still occurs which is why the police station exists.</p>
                    </div>
                </div>
                
            </div>

            <div className="div-wrapper">
                <h2>Break Time in Subic</h2>

                <div className="div-container">
                    <Carousel className="div-carousel" showThumbs={false} infiniteLoop autoPlay>

                        <div className="img-wide">
                            <img src={sb14}/>
                            <img src={sb15}/>
                        </div>

                        <div className="img-tall">
                            <img src={sb16} />
                            <img src={sb17}/>
                        </div>

                    </Carousel>    
                    <div>
                        <p>After visiting various companies and a long ride, we settled by a beach to have lunch, watch the shore and purchase some souvenirs. It was really hot at that time. Then we visited the Puregold Duty Free where I bought goods that were priced with dollars instead of pesos. I spent minutes looking for products that I could purchase because some were just hurt my wallet. Luckily I found a straberry soda and pop sticks.</p>
                    </div>
                </div>
                
            </div>

        </div>
    );
}