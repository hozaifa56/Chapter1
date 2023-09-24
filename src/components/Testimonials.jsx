import React from 'react';
import sumit from '../images/sumit.png';
import tom from '../images/tom.png';
import '../App.css';

export default function Testimonials() {
    return (
        <div className='container'>
            <div className='d-flex justify-content-center my-4 fs-1' id='testimonials'><b>Testimonials</b></div>
            <div className='text-wrap d-flex justify-content-center' style={{ textAlign: 'center' }}>I'm grateful for the
                opportunity to work with such talented individuals and organizations. <br />Here are a few
                testimonials that highlight our commitment to excellence.</div>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>

                </div>
                <div className="carousel-inner my-4">
                    <div className="carousel-item active">
                        <img src={sumit} id="review" className="d-block container w-80" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={tom} id="review" className="d-block container w-80" alt="..."/>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
