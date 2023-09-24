import React from 'react';
import favicon from '../images/favicon.ico'
export default function Lander() {
    return (
        <div>
            <div className='heads'>
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={favicon} alt="My Image" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Aboutme">About Me</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#myprojects">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Testimonials</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="butt btn btn-warning" href="#">DOWNLOAD CV</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
