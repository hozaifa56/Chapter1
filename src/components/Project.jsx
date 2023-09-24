import React from 'react';
import '../App.css';


function Project({ title, category, description,img,links }) {
  return (
    <div className={`card my-5 project ${category}`} style={{ width: '18rem' }}>
        <img src={img} style={{height:'50%'}} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}
        </p>
        <p style={{fontSize:'larger'}}><b>{category}</b></p>
        <a href={links} className="btn btn-warning butt">
          OPEN
        </a>
        {/* Add other card content here if needed */}
      </div>
    </div>
  );
}

export default Project;
