import React, { useState } from 'react';
import Project from '../components/Project';
import '../App.css';

function ProjectsContainer({ projects }) {
  const [filter, setFilter] = useState('all');

  const handleButtonClick = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <div className="d-flex justify-content-center my-4 fs-1" id="services">
        <b>My Projects</b>
      </div>
      <p className='container'>Explore my portfolio of diverse projects, showcasing my skills in web development,
        design, and more. Each project is a testament to my passion for creating innovative 
        solutions and delivering exceptional user experiences.</p>
      <div id="project-buttons" className="d-flex justify-content-center">
        <div
          className={`btn mx-2 butts ${filter === 'all' ? 'active' : ''}`}
          onClick={() => handleButtonClick('all')}
        >
          All
        </div>
        <div
          className={`btn mx-2 butts ${filter === 'frontend' ? 'active' : ''}`}
          onClick={() => handleButtonClick('frontend')}
        >
          Frontend
        </div>
        <div
          className={`btn mx-2 butts ${filter === 'backend' ? 'active' : ''}`}
          onClick={() => handleButtonClick('backend')}
        >
          Backend
        </div>
      </div>

      <div id="projects-container">
        {projects
          .filter((project) => (filter === 'all' ? true : project.category === filter))
          .map((project, index) => (
            <Project key={index} {...project} />
          ))}
      </div>
    </div>
  );
}

export default ProjectsContainer;
