import React from 'react';

const Featured = prop => {
  //

  return (
    <section className="featured">
      <div className="section-header">Featured Projects</div>
      <div className="featured-projects-list">
        <div className="featured-project nce1-featured">
          <div className="featured-project-name">Employee User Interface</div>
        </div>
  
        <div className="featured-project fec-featured">
          <div className="featured-project-name">Reviews Widget</div>
        </div>
  
        <div className="featured-project">
          <div className="featured-project-name">E-Commerce Overview Service</div>
        </div>
      </div>
      <a href='#' alt="Link to More Projects" className="more-projects-link">MORE PROJECTS</a>
    </section>
  );
};

export default Featured;