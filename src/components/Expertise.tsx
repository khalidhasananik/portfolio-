import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';


const labelsFirst = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "SQL",
    "Vue.js",
    "Laravel",
    "Git",

];

const labelsSecond = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Streamlit",
    "Hugging Face",

];

const labelsThird = [
    "C",
    "C++",
    "Python",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">



                <div className="skill">
                    <FontAwesomeIcon icon={faCogs} size="3x" />
                    <h3>Automation Engineering</h3>
                    <p>
                        As an AI Ops & Automation Engineer, I specialize in solving complex integration challenges with clean, maintainable solutions. I design, build, and deploy end-to-end automation pipelines.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        <Chip className='chip' label="n8n" />
                        <Chip className='chip' label="API Integration" />
                        <Chip className='chip' label="Docker" />
                        <Chip className='chip' label="JavaScript" />
                        <Chip className='chip' label="REST" />
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have hands-on experience building web applications using technologies like React and Flask. I am familiar with both frontend and backend development processes.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>Machine Learning</h3>
                    <p>I have experience designing and deploying machine learning models for various business use cases, including data preprocessing, model training, and production deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLightbulb} size="3x"/>
                    <h3>Problem Solving</h3>
                    <p>I excel at analyzing complex problems and designing effective solutions using a variety of tools and technologies. My approach emphasizes logical thinking, adaptability, and continuous learning.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;