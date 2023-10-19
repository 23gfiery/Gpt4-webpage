import React from 'react';
import './footer.css';
import gpt4Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="gpt4__footer section__padding">
      <div className="gpt4__footer-heading">
        <h1 className="gradient__text">Do you Want to step into the future before others?</h1>
      </div>
      <div className="gpt4__footer-btn">
        <p>Request early access</p>
      </div>
      <div className="gpt4__footer-links">
        <div className="gpt4__footer-links_logo">
          <img src={gpt4Logo} alt="logo"/>
          <p>Crechterwoord K12 182 DK ALknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt4__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt4__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt4__footer-links_div">
          <h4>Get in touch</h4>
          <p>DLP trichy, India</p>
          <p>92785784949</p>
          <p>info@payme.io</p>
        </div>
      </div>
      <div className="gpt4__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div> 
    </div>
  )
}

export default Footer
