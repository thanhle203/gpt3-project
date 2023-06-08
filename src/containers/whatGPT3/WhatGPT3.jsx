import React from 'react';
import './whatgpt3.css';
import { Feature } from '../../components';

const whatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3?" text="GPT-3 (Generative Pre-trained Transformer 3) is a state-of-the-art language model developed by OpenAI. It belongs to the family of transformers, a type of deep learning model that uses self-attention mechanisms to process sequential data, such as text."/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond our imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="GPT-3 can be used to create powerful chatbots where you are able to have a conversation about anything and everything with it."/>
        <Feature title="Knowledge Base" text="GPT-3 can access and utilize information stored within a knowledge base to enhance its responses and generate more accurate and contextually relevant output."/>
        <Feature title="Education" text="GPT-3 can have several applications in the field of education. Some ways are Personalized Learning, Language Learning, Question-Answering/Homework help, etc.."/>    
      </div>
    </div>
  )
}

export default whatGPT3