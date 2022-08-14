import React from 'react';

const Nav = props => {

  return (
    <nav>
      <div className="nav-links">
        <a href="#" className="overview-link">Overview</a>
        <a href="#" className="resume-link">Resume</a>
        <a href="#" className="projects-link">Projects</a>
        <a href="#" className="contact-link">Contact</a>
      </div>
      <div className="nav-socials">
        <a href='https://www.linkedin.com/in/sasenarine-ramaischrand/' target="__blank"><div className="social linkedin-logo"></div></a>
        <a href='https://github.com/sase6' target="__blank"><div className="social github-logo"></div></a>
        <a ><div className="social gmail-logo" onClick={() => window.navigator.clipboard.writeText('bs.saase@gmail.com')}></div></a>
      </div>
    </nav>
  );
};

export default Nav;