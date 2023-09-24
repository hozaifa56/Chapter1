import React from 'react';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';
import favicon from '../images/favicon.ico'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footlogodiv'>
                <img src={favicon} className='my-5' id='footerlogo' alt="My Image" />
            </div>
            <div>
                <ul className="navbar-nav d-flex flex-row justify-content-evenly flex-wrap fs-5">
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
                        <a className="nav-link" href="#testimonials">Testimonials</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className='d-flex flex-row justify-content-center'>
                <a href='https://www.instagram.com/hozaifa._/'><i id='social' className="fa fa-instagram my-5 mx-3"></i></a>
                <a href='https://www.linkedin.com/in/hozaifa-shakeel56/'><i id='social' className="fa fa-linkedin my-5 mx-3"></i></a>
                <a href='https://github.com/hozaifa56'><i id='social' className="fa fa-github my-5 mx-3"></i></a>
            </div>
            <div className='greyarea'>
            <p className='my-3'>&copy; 2023 <span style={{color:'#fd6f00'}}>Hozaifa Shakeel</span> All Rights Reserved , Inc.</p>
            </div>
        </div>
    )
}
