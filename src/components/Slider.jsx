import React from 'react';
import '../App.css';

export default function Slider({width, topic}) {
    const orangeLine={
        width:`${width}%`,
        height:'100%',
        backgroundColor:'#FD6F00',
        borderRadius:'10px'

    }
    return (
        <div className='my-2'>
            <div className='my-2'><b>{topic}</b></div>
            <div style={{ backgroundColor: 'lightgrey', width: '100%', height: '10px',borderRadius:'10px' }}>
                <div className="d-flex justify-content-end align-items-center" style={orangeLine}>
                    <div style={{ width: '20px', height: '20px', backgroundColor: 'lightgrey', borderRadius: '50%', border: '2px solid #FD6F00' }}></div>
                </div>
            </div>

        </div>
    )
}
