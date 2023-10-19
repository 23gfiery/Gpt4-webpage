import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt4__possibility section__padding" id="possibility">
      <div className="gpt4__possibility-image">
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className="gpt4__possibility-content">
        <h4>GPT-4 Model Trained with large amount of data</h4>
        <h1 className="gradient__text">The possibilities are endless,Try The GPT-4!</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Sign up to get early access</h4>
      </div>
      
    </div>
  )
}

export default Possibility
