import React from 'react';
import './footer.css';
import gpt3logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to be one of the forerunners and take a step in to the future?</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3logo} alt="logo" />
          <p>123 Sandalwood Dr, Yuba City, CA 56789</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>123 Sandalwood Dr, Yuba City, CA 56789</p>
          <p>445-290-3345</p>
          <p>info@gpt3.net</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>© 2022 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer