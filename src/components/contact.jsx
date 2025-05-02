import React, { useState } from 'react';
import NavigationBar from './navigation';
import contact1 from '/src/img/contacts/contact1.png';
import contact2 from '/src/img/contacts/contact2.png';
import contact3 from '/src/img/contacts/contact3.png';
import contact4 from '/src/img/contacts/contact4.png';
import './contact.css';

export default function Contact() {
    return (
        <div className="ultimate-div ultimate-contact-div">
            <NavigationBar />
            <div className="contact-title-div">
                <h1>Angelo's Contacts</h1>
            </div>

            <div className="contacts-wrapper">
                
                <div className="contact-div">
                    <div className="favicon-div">
                        <img src={contact1}/>
                    </div>
                    <div className="contact-txt">
                        <h3>0992-576-1377</h3>
                    </div>
                </div>

                <a className="contact-div href" target="blank" href="https://www.messenger.com/e2ee/t/9419921338117186">
                    <div className="favicon-div">
                        <img src={contact2}/>
                    </div>
                    <div className="contact-txt">
                        <h3>Messenger</h3>
                    </div>
                </a>

                <a className="contact-div href" target="blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=ando.angelommanuel@gmail.com">
                    <div className="favicon-div">
                        <img src={contact3}/>
                    </div>
                    <div className="contact-txt">
                        <h3>Gmail</h3>
                    </div>
                </a>

                <a className="contact-div href" target="blank" href="https://www.linkedin.com/in/angelo-ando-118400306/">
                    <div className="favicon-div">
                        <img src={contact4}/>
                    </div>
                    <div className="contact-txt">
                        <h3>LinkedIn</h3>
                    </div>
                </a>

            </div>
            
        </div>
    );
}
