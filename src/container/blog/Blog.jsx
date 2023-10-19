import React from 'react';
import './blog.css';
import { Article } from '../../components';
import {Blog01, Blog02, Blog03, Blog04, Blog05 } from './imports';

const Blog = () => {
  return (
    <div className="gpt4__blog section__padding" id="blog">
      <div className="gpt4__blog-heading">
        <h1 className="gradient__text">A lot is happening! Check out our Blogs</h1>
      </div>
      <div className="gpt4__blog-container">
        <div className="gpt4__blog-container_groupA">
            <Article imgUrl={Blog01} date="Sep 26, 2021" title="Latest developements LLM Models"/>
        </div>
        <div className="gpt4__blog-container_groupB">
            <Article imgUrl={Blog02} date="Sep 26,2021" title="Fun things to perform using GPT-4"/>
            <Article imgUrl={Blog03} date="Sep 26,2021" title="Is AI going replace humans?"/>
            <Article imgUrl={Blog04} date="Sep 26,2021" title="Is GPT the next face in content creation?"/>
            <Article imgUrl={Blog05} date="Sep 26,2021" title="OpenAI is the future, Let's explore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog

