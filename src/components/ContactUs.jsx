import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_feahvfj', 'template_clrzmfm', form.current, 'VDxfUMbg_9oZf62u_')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='container'>
            <div className='d-flex justify-content-center my-4 fs-1' id='contact'><b>Let's Connect</b></div>
            <div className='text-wrap d-flex justify-content-center' style={{ textAlign: 'center' }}>Have questions or interested in working together? Drop me a message, and I'll get back to you as soon as possible. Let's make something great together!</div>
            <form ref={form} className='my-4' onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <div className='submit'><input type="submit" value="Send" /></div>
            </form>
        </div>
    );
};