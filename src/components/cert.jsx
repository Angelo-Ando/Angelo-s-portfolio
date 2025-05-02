import React, { useState } from 'react';
import NavigationBar from './navigation';
import './cert.css';
import cert1 from '/src/img/cert1.png';
import cert2 from '/src/img/cert2.jpg';

export default function Cert() {
    return (
        <div className="ultimate-div">
            <NavigationBar />
            <div className="exp-title-div">
                <h1>Angelo's Certificates</h1>
            </div>

            <div className="ultimate-cert-wrapper">
                <div className="cert-wrapper">
                    <h3 className="cert-h3">Responsive Web Design</h3>
                    <div className="div-certs">
                        <div className="cert-img-wrapper">
                            <img src={cert1}/>
                        </div>
                        <div className="cert-details">
                            <h5>Platform:</h5>
                            <p><u>freeCodeCamp</u></p>
                            <h5>Duration</h5>
                            <p><u>300 Hours</u></p>
                            <a target="blank" href="https://www.freecodecamp.org/certification/fcc0c35e51f-3f64-40a1-9103-049406fa2b24/responsive-web-design">
                                Click to check authenticity</a>
                        </div>
                    </div>
                </div>

                <div className="cert-wrapper last-cert">
                <h3 className="cert-h3 fullstack">Full Stack Web Development</h3>
                    <div className="div-certs">
                        <div className="cert-img-wrapper">
                            <img src={cert2}/>
                        </div>
                        <div className="cert-details">
                            <h5>Platform:</h5>
                            <p><u>Cursa</u></p>
                            <h5>Duration</h5>
                            <p><u>26 Hours and 14 Minutes</u></p>
                            <a target="blank" href="https://cursa.app/en/my-certificate/cert8fa79bbae69e2fd4e815625bc4fa21ff?fbclid=IwZXh0bgNhZW0CMTEAAR5FUA3noZKKkaV8FhJMSu806OfVJRoyegmb6CaUv78l51nDxmHtnKJ_am9XUw_aem_KSi7E37b9LzVyoj2AukVAw">
                                Click to check authenticity</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
