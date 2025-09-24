import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss';

function Footer() {
  const lastUpdate = "2025-09-22"; 

  return (
    <footer>
      <div className="footer-left">
        <h2>Guillaume Bernède</h2>
        <p>Master’s Student in Computer Science and Engineering</p>
        <div className="social-icons">
          <a href="https://github.com/GuillaumeBernede" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/guillaumebernede/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:guillaume.bernede28@gmail.com"><EmailIcon/></a>
        </div>
      </div>

      <div className="footer-right">
        <p>Last update: {lastUpdate}</p>
        <p><a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Template credits</a></p>
      </div>
    </footer>
  );
}

export default Footer;
