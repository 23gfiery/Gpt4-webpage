import React from 'react';
import { Feature } from '../../components';
import './whatGPT4.css';

const WhatGPT4 = () => {
  return (
    <div className="gpt4__whatgpt4 section__margin" id="wgpt4">
      <div className="gpt4__whatgpt4-feature">
        <Feature title="What is GPT-4?" text="GPT-4, or Generative Pre-trained Transformer, is an advanced natural language processing model developed by OpenAI. It's known for its ability to generate human-like text and perform various language-related tasks, such as text generation, translation, and sentiment analysis"/>
      </div>
      <div className="gpt4__whatgpt4-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt4__whatgpt4-container">
        <Feature title="Chatbots" text="Chatbots are AI-driven computer programs designed to interact with users through text or speech, providing automated responses and assistance in a conversational manner."/>
        <Feature title="Knowledge Base" text="A knowledge base is a centralized repository of information and data, often organized for easy retrieval and reference. "/>
        <Feature title="Education" text="Education about GPT is crucial to understand the potential and limitations of AI language models."/>


      </div>
    </div>
  )
}

export default WhatGPT4
