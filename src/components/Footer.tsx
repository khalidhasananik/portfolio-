import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/khalidhasananik" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/khalidhasananik/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      {/* <p>A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> with 💜</p> */}
      <p>© 2025 Khalid Hasan Anik. All rights reserved.</p>

    </footer>
  );
}

export default Footer;