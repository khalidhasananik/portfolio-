import React from "react";
// import mock01 from '../assets/images/mock01.png';
// import mock02 from '../assets/images/mock02.png';
// import mock03 from '../assets/images/mock03.png';
// import mock04 from '../assets/images/mock04.png';
// import mock05 from '../assets/images/mock05.png';
// import mock06 from '../assets/images/mock06.png';
// import mock07 from '../assets/images/mock07.png';
// import mock08 from '../assets/images/mock08.png';
// import mock09 from '../assets/images/mock09.png';
// import mock10 from '../assets/images/mock10.png';
// import mock11 from '../assets/images/mock11.png';

import i1 from '../assets/images/1.png';
import i2 from '../assets/images/2.png';
import i3 from '../assets/images/3.png';
import i4 from '../assets/images/4.png';
import i5 from '../assets/images/5.png';
import i6 from '../assets/images/6.png';



import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://huggingface.co/spaces/khalidhasananik/CSE499" target="_blank" rel="noreferrer"><img src={i3} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://huggingface.co/spaces/khalidhasananik/CSE499" target="_blank" rel="noreferrer"><h2>Real-Time Soil Analysis and Predictive Analytics</h2></a>
                <p>Developed a real-time soil analysis system by integrating a 7-in-1 soil sensor, efficient large-scale data processing, a 90% accurate crop yield prediction ML model, and API-driven data retrieval system.</p>
            </div>
            <div className="project">
                <a href="https://github.com/khalidhasananik/CSE445-Project" target="_blank" rel="noreferrer"><img src={i2} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://github.com/khalidhasananik/CSE445-Project" target="_blank" rel="noreferrer"><h2>Dengue Cases Prediction</h2></a>
                    <p>Developed a machine learning model to predict dengue outbreaks using weather and historical data, with optimized data processing for improved efficiency.</p>
            </div>
            <div className="project">
                <a href="https://github.com/khalidhasananik/AutoDoc_VSCode_Extension" target="_blank" rel="noreferrer"><img src={i4} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/khalidhasananik/AutoDoc_VSCode_Extension" target="_blank" rel="noreferrer"><h2>AutoDoc: VS Code Extension</h2></a>
                <p>AutoDoc is an AI-powered chatbot extension for Visual Studio Code designed to enhance your coding experience with AI-based assistance.</p>
            </div>
            <div className="project">
                <a href="https://github.com/khalidhasananik/LinuxTaskmanager" target="_blank" rel="noreferrer"><img src={i5} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/khalidhasananik/LinuxTaskmanager" target="_blank" rel="noreferrer"><h2>Linux Task Manager</h2></a>
                <p>Developed a simple task manager for Linux systems that allows users to monitor system information, CPU and memory usage, system uptime, the number of background processes, and network information.</p>
            </div>
            <div className="project">
                <a href="https://github.com/khalidhasananik/crossyroad" target="_blank" rel="noreferrer"><img src={i6} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/khalidhasananik/crossyroad" target="_blank" rel="noreferrer"><h2>Crossy Road</h2></a>
                <p>A simple crossing game built using Three.js</p>
            </div>
            <div className="project">
                <a href="https://github.com/khalidhasananik/myfirstgame" target="_blank" rel="noreferrer"><img src={i1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/khalidhasananik/myfirstgame" target="_blank" rel="noreferrer"><h2>Coin Game</h2></a>
                <p>A simple game built with Unity and C#, you control a rolling ball to hit and collect coins. If you score 5 points, you win the game!</p>
            </div>
            {/* <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;