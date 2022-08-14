import React from 'react';

const Overview = props => {
  //
  return (
    <div className="overview">
      <div className="overview-text-container">
        <div className="full-name">Sasenarine Ramaischrand</div>
        <div className="sub-about-me">Sofware Engineer @National Compressor</div>
        <div className="shortened-about-me">
            I enjoy building Fullstack applications MERN, but Have recently been looking into other tech stacks.
            I am currently trying to expand my knowledge through learning Next.js, Typescript and Redux.
        </div>
      </div>
      <div className="overview-image-container">
        <div className="profile-img"></div>
      </div>
    </div>
  );
};

export default Overview;