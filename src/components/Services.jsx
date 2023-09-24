import React from 'react';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';

export default function Services() {
  return (
    <div className='container'>
      <div className='d-flex justify-content-center my-4 fs-1' id='services'><b>Services</b></div>
      <div className='text-wrap d-flex justify-content-center' style={{textAlign:'center'}}>Being a jack of all trades i am capable of 
      wokring in different areas. Craft modern, responsive websites tailored to your brand's unique identity. 
      Uncover valuable insights from your data to drive informed decision-making.</div>
      <div className='servicecarousel my-5'>
        <div className='serv mx-4 d-flex flex-column'><i id="social" style={{fontSize:'48px'}} className="fa fa-globe my-4 mx-3 "></i><b className='mx-3'  style={{fontSize:'larger'}}>Frontend Development</b><p className='text-wrap mx-3'>I specialize in crafting captivating user experiences through Frontend Development.</p></div>
        <div className='serv mx-4 d-flex flex-column'><i id="social" style={{fontSize:'48px'}} className="fa fa-database my-4 mx-3 "></i><b className='mx-3'  style={{fontSize:'larger'}}>Data Science</b><p className='text-wrap mx-3'>I bring data to life through the art of Data Science.</p></div>
        <div className='serv mx-4 d-flex flex-column'><i id="social" style={{fontSize:'48px'}} className="fa fa-code my-4 mx-3"></i><b className='mx-3'  style={{fontSize:'larger'}}>Java S/W Development</b><p className='text-wrap mx-3'>Proficient in crafting software solutions with the power of Java development.</p></div>
        <div className='serv mx-4 d-flex flex-column'><i id="social" style={{fontSize:'48px'}} className="fa fa-cogs my-4 mx-3 "></i><b  className='mx-3' style={{fontSize:'larger'}}>Robotics</b><p className='text-wrap mx-3'>With hands-on experience in robotics, I've explored the realm of automation and human-machine interaction, creating innovative solutions that merge imagination with reality.</p></div>
      </div>
    </div>
  )
}
