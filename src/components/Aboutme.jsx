import React from 'react';
import '../App.css';
import Slider from './Slider';
import filler from '../images/filler.png';

export default function Aboutme() {
    return (
        <div id="Aboutme" className='home justify-content-evenly'>
            <div className='ab1'><img id='filler' style={{ width: '100%' }} src={filler} alt="My Image" /></div>
            <div className='ab2 mx-2'>
                <p className='fs-1' id='aboutmecenter'><b>About Me</b></p>
                <p className='text-wrap'>I am a Computer science engineering student studying specialization in Data science and artificial intelligence offered by IBM.
                    I am an astrophile, i love reading about space and the cosmos.
                    I am an amateur Astrophotographer and Core member of UPAAC(Uttar Pradesh Amateur Astronomers Club).<br />
                    HTML | React.js | CSS | JAVA | Python | Javascript | IBM cloud | IBM cognos | Data Science | Artificial Intelligence | Machine Learning | Git | Figma | Robotics.
                </p>
                <Slider width={95} topic={'HTML'}/>
                <Slider width={80} topic={'CSS'}/>
                <Slider width={85} topic={'Bootstrap'}/>
                <Slider width={75} topic={'JAVA'}/>
                <Slider width={70} topic={'Javascript'}/>
                <Slider width={70} topic={'ReactJS'}/>
                <Slider width={76} topic={'Python'}/>
                <Slider width={73} topic={'Robotics'}/>


            </div>
        </div>
    )
}
