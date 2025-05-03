import './exp.css';
import webd0 from './expimg/webd0.png';
import webd1 from './expimg/webd1.png';
import webd2 from './expimg/webd2.png';
import aqua1 from './expimg/aqua1.png';
import aqua2 from './expimg/aqua2.mp4';

export default function WEBD() {
    return (
        <div className="entire-exp">

            <div className="exp-h2"> <h2>WEB DESIGN</h2> </div>

            <div className="exp-wrapper webd-wrapper">

                <div className="webd-div-wrapper">
                    <div className="exp-h3 exp-dl"> <h3>Frontend Designer of Dungeon Loots</h3> </div>

                    <div className="img-wrap">
                        <img src={webd0} className="aero-logo"/>
                    </div>

                    <div className="img-wrap">
                        <p>
                            Dungeon Loots was the name of the e-commerce website my team developed for our Social and 
                            Professional Practices major. The site specialized in selling tabletop products, merchandise, 
                            and games such as Dungeons & Dragons and Pokémon.
                        </p>
                    </div>

                    <div className="img-wrap">
                        <p>
                            As the designer, I focused on creating a user interface that would appeal to gamers and fantasy 
                            lovers, blending bright and dark elements to evoke a magical atmosphere. I aimed for a design that 
                            balanced both aesthetics and functionality, capturing the spirit of fantasy while ensuring usability.
                             Perfection of the design took place between <u>January 3, 2024, and April 26, 2024</u>.
                        </p>
                    </div>
                    <div className="img-wrap dl-wrap no-margin-bottom">
                        <img src={webd1}/>
                        <img src={webd2}/>
                    </div>
                </div>

                <div className="webd-div-wrapper">
                    <div className="exp-h3 exp-aqua"> <h3>Frontend Designer of Aquafy</h3> </div>

                    <div className="img-wrap"><img src={aqua1} className="aero-logo"/></div>

                    <div className="img-wrap">
                        <p className="no-margin-bottom">
                            Aquafy was the system my team developed in IT Elective 3. It was designed to calculate and estimate 
                            water bills based on a user’s water consumption measured in cubic meters.
                        </p>

                    </div>

                    <div className="img-wrap">
                        <p className="no-margin-bottom">
                            As the designer, I created the logo of Aquafy and enhanced its user interface by incorporating animations to make it more 
                            engaging and user-friendly. I dedicated four days to designing and refining the interface, from <u>
                            February 3, 2024, to February 7, 2024</u>.
                        </p>
                    </div>

                    <div className="img-wrap no-padding-bottom">
                        <video controls className="exp-video no-margin-bottom">
                            <source src={aqua2} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                
            </div>  
        </div>
    ); 2
}