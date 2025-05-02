import React, { useState } from 'react';
import NavigationBar from './navigation';
import './projects.css';
import calcu from '/src/img/calcu.png';
import pokemon from '/src/img/pokemon.png';
import portfolio from '/src/img/portfolio.png';
import magazine from '/src/img/magazine.png';

export default function Projects() {
    return (
        <div className="ultimate-div project-div">
            <NavigationBar />
            <div className="exp-title-div">
                <h1>Angelo's Projects</h1>
            </div>

                <div className="projects-wrapper">

                    <h3 className="project-h3">System Administration and Maintentance</h3>
                    <div className="div-projects">

                    <a className="project" target="blank" href="https://acaboandotubioscical.netlify.app/?fbclid=IwZXh0bgNhZW0CMTEAAR6ch4sCuNFsr27gMNTN4y_Jv0m-g_E3kddVGUFSWN-MSE5-2IEecz8LnHfb3Q_aem_pyPravKRxPR1U_lS_WhZwQ">
                        <div >
                            <h5>Scientific Calculator</h5>
                            <img src={calcu} className="project-img"/>
                            <a className="repository" target="blank" href="https://github.com/Angelo-Ando/Sci-Cal/?fbclid=IwZXh0bgNhZW0CMTEAAR7Epd_9k_lc5c8QMgLge49-JunGziWXvN8Wvou6AXBY7dSGUyL93oA6MpU_bQ_aem__KehtF1iSnvP28zxEVyQqw">
                                <p>Repository</p>
                            </a>
                        </div></a>

                        <a className="project" target="blank" href="https://pokeymoen.netlify.app/"><div>
                            <h5>Pokemon API</h5>
                            <img src={pokemon} className="project-img"/>
                            <a className="repository" target="blank" href="https://github.com/KenTubio/pokeDex">
                                <p>Repository</p>
                            </a>
                        </div></a>
                    </div>

                    <h3 className="project-h3">IT Elective 4</h3>
                    <div className="div-projects bottom-projects">

                        <a className="project" target="blank" href="https://andoangeloportfolio.my.canva.site/"><div>
                            <h5>Multimedia Portfolio</h5>
                            <img src={portfolio} className="project-img"/>
                        </div></a>

                        <a className="project" target="blank" href="https://www.canva.com/design/DAGZ_zidXKI/jh3HIQT5e5y5QmF6b3yv2g/edit?utm_content=DAGZ_zidXKI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><div>
                            <h5>Portfolio Magazine</h5>
                            <img src={magazine} className="project-img"/>
                        </div></a>
                    </div>

                </div>
        </div>
    );
}
