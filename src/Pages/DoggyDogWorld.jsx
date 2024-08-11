import React from 'react';
import "./Styles/Project.css";


const DoggyDogWorld = () => {
  return (
    <div className='component-box'>
        <div className='text-left'>
      <h2>Doggy Dog World</h2>
      <p>I’m especially proud of this one because it was my first project using React. This was the third QAP from my second semester of school. The assignment was direct: we connect to an API and fetch a range of up to 100 pictures of a specific dog breed.</p>
      <p>This was a fun project, so I thought the style should be a little playful. I hope you enjoy Doggy Dog World!</p>
      </div>
      <div className='project-box'>
      <iframe 
        src="https://bradtheestallion.github.io/qap3/" title="Doggy Dog World"
      ></iframe>
      </div>
      <p>Click <a href="https://github.com/BradTheeStallion/qap3" target='_blank'>here</a> to interact with the code.</p>
    </div>
  );
};

export default DoggyDogWorld;