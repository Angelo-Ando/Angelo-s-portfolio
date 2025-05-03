import './exp.css';
import cap0 from './expimg/cap0.png';
import cap1 from './expimg/cap1.jpg';
import cap2 from './expimg/cap2.png';
import cap3 from './expimg/cap3.jpg';
import cap4 from './expimg/cap4.jpg';
import cap5 from './expimg/cap5.jpg';

export default function CAP() {
    return (
        <div className="entire-exp">

            <div className="exp-h2"> <h2>CAPSTONE</h2> </div>

            <div className="exp-wrapper">

                <div className="exp-h3"> <h3>Hardware Manager of AeroSense</h3> </div>

                <div>
                    <div className="img-wrap">
                    <img src={cap0} className="aero-logo"/>
                    </div>

                    <div className="img-wrap">
                        <p>
                            AeroSense was the name of the system chosen for my team in Capstone 1 and 2. 
                            It was an air monitoring system equipped with a sensor that transmitted data to a mobile application. 
                            The development took place from July 4, 2024, to February 28, 2025 <u>(7 months and 24 days)</u>. In this collaboration, 
                            I once again served as the project manager, but this time I also handled the hardware and equipment.
                        </p>
                    </div>

                    <div className="img-wrap">
                        <p>
                            I was tasked with preparing the necessary components to bring our air monitoring system to life. 
                            I began by researching and selecting the right parts, eventually identifying the MQ135 gas sensor and 
                            the NodeMCU microcontroller as key components. The MQ135 could detect gases such as ammonia, 
                            carbon dioxide, and methane, while the NodeMCU was a compact board capable of transmitting data 
                            wirelessly and via wired connections. Along with a DHT11 humidity and temperature sensor, jumper wires, 
                            and connecting cables, these components were ideal for AeroSense—advanced, accessible, and affordable.
                        </p>
                        <img src={cap1}/>
                    </div>
            
                    <p className="no-margin-bottom">
                        After purchasing the components, As hardware manager, I ensured each part was functional 
                        and compatible. I conducted multiple days of testing, from morning until afternoon, verifying their 
                        performance and integration. In the end, the components proved reliable enough to support our system. 
                    </p>

                    <div className="img-wrap">
                        <img src={cap3} className="aero-logo"/>
                        <img src={cap2}/>
                    </div>

                    <p className="no-margin-bottom">
                        Thanks to this effort, our head programmer developed AeroSense into a 
                        complex, innovative system built from simple yet effective components, complete with a user-friendly mobile application, 
                        aesthetically pleasing UI, and a durable and fashionable casing for the sensor.
                         Through thoughtful decision-making and unwavering determination, I helped my team earn recognition 
                         and praise from our professors and successfully passed our Capstone major project.
                    </p>
                    <div className="img-wrap">
                        <img src={cap4} className="aero-logo"/>
                        <img src={cap5} className="aero-logo"/>
                    </div>
                    
                </div>
            </div>  
        </div>
    );
}