import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <h3>Here is an overview of some of my projects</h3>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/GuillaumeBernede/Indoor-Human-Tracking.git" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/GuillaumeBernede/Indoor-Human-Tracking.git" target="_blank" rel="noreferrer"><h2>Indoor Human localisation</h2></a>
                <p>This project presents a lightweight Tiny ML pipeline for indoor human‐position tracking using a four‐antenna UWB radar operating at 25 Hz over a 4–5 m range.Raw radar returns are preprocessed to generate Range–Angle maps, which are then fed into a compact FOMO object‐detection model. Trained on a dataset of spatial scenarios, the system achieves accurate centroid estimation and real‐time inference, demonstrating that UWB radar combined with Tiny ML enables privacy‐preserving, low‐power localization suitable for resource‐constrained environments.</p>
            </div>
            <div className="project">
                <a href="https://github.com/GuillaumeBernede/ScienceQA_NLP.git" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/GuillaumeBernede/ScienceQA_NLP.git" target="_blank" rel="noreferrer"><h2>Text classification using NLP techniques</h2></a>
                <p>This project aims to apply various Natural Language Processing (NLP) techniques on the ScienceQA dataset.</p>
            </div>
            <div className="project">
                <a href="https://github.com/GuillaumeBernede/Retrieval-Augmented-Generation-RAG-.git" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/GuillaumeBernede/Retrieval-Augmented-Generation-RAG-.git" target="_blank" rel="noreferrer"><h2>PDF Retrieval Augmented Generation</h2></a>
                <p>Retrieval-Augmented Generation pipeline combining LangChain-based document retrieval with LLMs (Mistral 7B, Llama). Processes PDFs into embeddings (HuggingFace sentence transformers), stores them in FAISS, and answers queries via Gradio UI or console mode. Designed for intelligent, context-aware question answering.</p>
            </div>
            <div className="project">
                <a href="https://github.com/arkhyion/SilvaBernede.git" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/arkhyion/SilvaBernede.git" target="_blank" rel="noreferrer"><h2>Software Specification and Design Documents</h2></a>
                <p>Production of two specification documents, RASD and DD, as part of a Software Engineering course. Work included requirements analysis, use case modeling, UML diagrams, design specification, and planning for implementation and testing.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;