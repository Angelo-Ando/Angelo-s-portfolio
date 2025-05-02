import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function NavigationBar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><a><Link to="/" style={{ cursor: 'pointer' }}>HOME</Link></a></li>
                    <li><a><Link to="/blog" style={{ cursor: 'pointer' }}>BLOG</Link></a></li>
                    <li><a><Link to="/exp" style={{ cursor: 'pointer' }}>EXPERIENCE</Link></a></li>
                    <li><a><Link to="/projects" style={{ cursor: 'pointer' }}>PROJECTS</Link></a></li>
                    <li><a><Link to="/cert" style={{ cursor: 'pointer' }}>CERTIFICATES</Link></a></li>
                    <li><a><Link to="/contact" style={{ cursor: 'pointer' }}>CONTACT ME</Link></a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavigationBar;
