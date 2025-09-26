import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experiences</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="April 2024 - August 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a href="https://reactionalmusic.com/" target="_blank" rel="noopener noreferrer"style={{ color: '#5000ca' }}>
              Reactional Music, Sweden
              </a>
            </h4>
            <p>
              Development of an AI music generation system based on a Transformer model for video game composers.
            </p>
            <p>Built a data pipeline from Reaper DAW processing melodies, chords, and percussion arrangements</p>
            <p>Skills: Python, PyTorch, Transformers, Music Information Retrieval, DAW Integration</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2023 - Jully 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT outsourcing intern</h3>
            <h4 className="vertical-timeline-element-subtitle"style={{ color: '#5000ca' }}>NJEE info service, France</h4>
            <p>
              Deployment of a database management solution for the company, implementation of a dedicated virtual machine under the hypervisor Proxmox. 
            </p>
            <p>
              Implementation of a badge-based authentication system for a Windows Active Directory (AD), working with Windows Server 2016 and 2019 on virtual machines.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;