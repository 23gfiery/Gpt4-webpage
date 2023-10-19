import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai2.png';


const Header = () => {
  return (
    <div className="gpt4__header section__padding" id="home">
      <div className="gpt4__header-content">
        <h1 className="gradient__text">Unleash OpenAI's GPT-4 potential for groundbreaking innovation</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.Party we years to order allow asked of.</p>
        
        <div className="gpt4__header-content__input">
          <input type="email" placeholder="your E-mail address"/>
          <button type="button">Get Started</button>
        </div>
        
        <div className="gpt4__header-content__people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt4__header-image">
        <img src={ai} alt="ai"/>
      </div>
    </div>
  )
}

export default Header
