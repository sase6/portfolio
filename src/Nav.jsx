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
        <div className="social linkedin-logo"></div>
        <div className="social github-logo"></div>
        <div className="social gmail-logo"></div>
      </div>
    </nav>
  );
};

export default Nav;