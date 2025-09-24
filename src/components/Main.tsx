import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

import monAvatar from '../assets/images/profile_picture.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={monAvatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/GuillaumeBernede" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/guillaumebernede/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:guillaume.bernede28@gmail.com"><EmailIcon/></a>
          </div>
          <h1>Guillaume Bernède</h1>
          <p>Master’s Student in Computer Science and Engineering| AI Engineering </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/GuillaumeBernede" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/guillaumebernede/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;