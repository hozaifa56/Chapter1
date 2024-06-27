import React from 'react'
import '../App.css';
import bgme from '../images/bgme.png';
import 'font-awesome/css/font-awesome.min.css';

export default function Home() {
    return (
        <div className='home container my-5'>
            <div className='hp1 text-wrap'>
                <b>Hi I am</b> <h1 style={{ color: '#FD6F00' }}>Hozaifa Shakeel </h1>
                <p style={{ fontSize: '58px' }}><b>Data Scientist & Machine Learning Engineer</b></p>
                <p>I am a passionate engineer with skills in Data Science and Machine Learning. I have completed my specialisation
                    in Data Science and Artificial Intelligence. With expertise in Emebdded C,
                    JavaScript,React.js, Java, Arduino programming, python, IBM Cloud and Git, data science, machine learning, data visaulisation and ai. Take a look at my projects
                    and get in touch to learn more about how we can work towards a bright future.
                </p>
                <div style={{ fontSize: 'larger' }} className='btn btn-warning butt'><a href='#contact'>Hire Me</a></div>
            </div>
            <div className='hp2 container'>
                <img  className='bgme' style={{ transform: `rotate(-10deg)` }} src={bgme}/>
            </div>
            <div className='socials flex-row contaniner align-item-start'>
                <a href='https://www.instagram.com/hozaifa._/'><i id='social' className="fa fa-instagram my-3 mx-3"></i></a>
                <a href='https://www.linkedin.com/in/hozaifa-shakeel56/'><i id='social' className="fa fa-linkedin my-3 mx-3"></i></a>
                <a href='https://github.com/hozaifa56'><i id='social' className="fa fa-github my-3 mx-3"></i></a>
            </div>
        </div>
    )
}
