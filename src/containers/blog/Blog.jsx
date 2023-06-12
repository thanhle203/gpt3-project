import React from 'react';
import './blog.css';

import { Article } from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './import';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening. We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="June 13, 2023" title="GPT-3 AI is the Future" />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date="May 2, 2023" title="We are entering a new era" />
          <Article imgUrl={blog03} date="October 13,2022" title="Improvements in AI continue to drive innovation and reshape the way we live, work, and interact with technology." />
          <Article imgUrl={blog04} date="March 19, 2022" title="AI has started to create new possibilities and we are here for it" />
          <Article imgUrl={blog05} date="February 3, 2022" title="Nothing can stop the evolution of technology" />
        </div>
      </div>
    </div>
  )
}

export default Blog
