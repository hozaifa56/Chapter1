// Project.js
import React from 'react';
import '../App.css';

function Project({ title, category }) {
  return (
    <div className={`project ${category}`}>
      <h3>{title}</h3>
    </div>
  );
}

export default Project;
