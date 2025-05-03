import './exp.css';
import se1 from './expimg/se1.png';
import se2 from './expimg/se2.png';
import se3 from './expimg/se3.png';
import se4 from './expimg/se4.png';

export default function SE() {
    return (
        <div className="entire-exp">

            <div className="exp-h2"> <h2>SOFTWARE ENGINEERING</h2> </div>

            <div className="exp-wrapper">

                <div className="exp-h3"> <h3>Project Manager of Kalpana Articode Solutions</h3> </div>

                <div>
                    <div className="img-wrap">
                        <p>
                            Kalpana Articode Solutions (KAC) was the name of the team I collaborated in our Software Engineering major. It symbolized uniqueness and creativity in 
                            the IT industry. I was appointed as the project manager, responsible for keeping the group organized, reporting 
                            new information to my teammates, and ensuring that requirements were met in a timely manner. One of my key 
                            responsibilities was also to find a client to serve.
                        </p>
                        <img src={se3}/>
                    </div>

                    <p className="no-margin-bottom">
                        Our first client was the director of MISTO, who tasked us with developing the WMSU Digital Complaint Desk, 
                        a virtual platform where members of WMSU could raise concerns and inquiries privately. I served as project 
                        manager throughout the system’s development and improvements, from February 2, 2024, to March 28, 2025 
                        <u>(a duration of 1 year, 1 month, and 26 days)</u>. During this time, I conducted interviews with our client to 
                        gather insights, values, and ideas, which I relayed to our head programmer to help perfect the 
                        implementation of the platform. And slowly, the digital complaint desk matched our vision.
                    </p>
                    <div className="img-wrap">
                        <img src={se1}/>
                        <img src={se2}/>
                    </div>

                    <p>
                        Throughout the project, I encountered various challenges and milestones that impacted Kalpana Articode 
                        Solutions. Many parts of the complaint desk initially failed to meet our panelists’ expectations, and our 
                        client representatives changed several times. To address this, I sought guidance from one of the 
                        panelists, asking for suggestions to improve the project. I maintained communication between outgoing and 
                        incoming clients, ensuring continuity despite transitions. Over the course of the project, I conducted 
                        meetings with at least four different clients: the director of MISTO, the IT Head of MISTO, and two 
                        staff members from the Quality Assurance Office.
                    </p>

                    <div>
                        <p>
                            At the end of the project, I successfully led the team through its final stretch of development and 
                            improvement. We demonstrated to the panelists that our system met their criteria, and I formally 
                            submitted the project to our advisor, marking the completion of our work.
                        </p>
                        <div className="img-wrap">
                            <img src={se4}/>
                    </div>
                    </div>
                    
                </div>
            </div>  

        </div>
    );
}