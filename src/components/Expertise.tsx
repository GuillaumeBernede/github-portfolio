import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

import polimiBlack from '../assets/images/polilogo.png';
import polimiWhite from '../assets/images/poliwhite.png';
import enseaLogo from '../assets/images/ensealogo.png';
import corneilLogo from '../assets/images/corneil_logo.png';


interface ExpertiseProps {
  mode: 'light' | 'dark';
}

const Expertise: React.FC<ExpertiseProps> = ({ mode }) => {
  const polimiLogo = mode === 'dark' ? polimiWhite : polimiBlack;
  const skillBg = mode === 'dark' ? '#333' : '#fff7f5';
    return(
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Education</h1>
            <div className="skills-grid">
                <div className="skill">
                    <img className="school-logo polimi" src={polimiLogo} alt="Polimi Logo" />
                    <h2>Master’s degree in Computer Science and Engineering</h2>
                    <h3>
                        <a href="https://www.polimi.it/" target="_blank" rel="noopener noreferrer">
                            Politecnico di Milano (Italie)
                        </a>
                    </h3>
                    <p>
                        Master’s degree in Computer Science and Engineering, with a focus on Artificial Intelligence courses
                    </p>
                    <p>
                        Key subjects
                        <ul>
                            <li>Artifical Neural Network and Deep Learning</li>
                            <li>Hardware Architecture for Embedded and Edge AI</li>
                            <li>Internet of Things</li>
                            <li>Natural Language and Processing</li>
                            <li>Uncertainty in AI</li>
                            <li>Foundations of AI</li>
                            <li>Image Analysis and Computer Vision</li>
                            <li>Software Engineering</li>
                            <li>Data Bases</li>

                        </ul>
                    </p>
                    
                </div>
                <div className="skill">
                    <img className="school-logo" src={enseaLogo} alt="ENSEA Logo" />
                    <h2>Engineering Degree in Electronics & Computer Science</h2>
                    <h3>
                        <a href="https://www.ensea.fr/en/" target="_blank" rel="noopener noreferrer">
                                ENSEA (France)
                        </a>
                    </h3>
                    <p>Major in computing and signal processing. Hundred percent english courses. <b>Artificial Intelligence and Big Data </b> Option.</p>
                    <p> Key subjects
                        <ul>
                            <li>Digital Signal Processing & Fourier Analysis</li>
                            <li>Embedded Programming (C/C++)</li>
                            <li>Electronic Systems & Control Theory</li>
                            <li>Communications Systems</li>
                            <li>Computer Vision & Machine Learning</li>
                        </ul>
                    </p>
                </div>
                <div className="skill">
                    <img className="school-logo" src={corneilLogo} alt="Corneil Logo" />
                    <h2>Two year intensive pre-engineering undergraduate studies</h2>
                    <h3>Lycée Pierre Corneille (France)</h3>
                    <p>Majors in mathematics, physics and engineering sciences</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;