import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    id: 1,
    title: 'Improving ends distrust instantly',
    text: 'The surefire way to eliminate distrust and skepticism about AI technology and the pursuit of it, is by improving the AI algorithms and displaying how reliable AI technology can be.',
  },
  {
    id: 2,
    title: 'Become the tended active',
    text: 'Although AI is advancing and becoming more efficient in assisting humans in their tasks, they still require human supervision and guidance to ensure ethical anmd responsible behavior.',
  },
  {
    id: 3,
    title: 'Revolutionizing the vehicle industry',
    text: 'Through sensors, computer vision, and machine learning algorithms, AI-driven cars can perceive their environment, make real-time decisions, and navigate safely. This innovation has the potential to revolutionize transportation, making it safer and more efficient. ',
  },
  {
    id: 4,
    title: 'The home helper you never knew you needed',
    text: 'AI-powered personal assistants, such as voice-activated devices, can perform tasks like managing schedules, controlling smart home devices, and providing information or entertainment. These systems enhance convenience and offer seamless integration with various devices and services.',
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need to Realize it. Step into the Future today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item) => 
        <Feature title={item.title} text={item.text} key={item.id} />
        )}
      </div>
    </div>
  )
}

export default Features