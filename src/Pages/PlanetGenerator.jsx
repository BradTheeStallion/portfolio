import React from 'react';
import "./Styles/Project.css";


const PlanetGenerator = () => {
  return (
    <div className='component-box'>
        <div className='text-left'>
      <h2>AI Capstone Project</h2>
      <p>When the instructor of my Introduction to Generative AI micro-credential assigned our capstone, he gave us complete freedom regarding what we created and suggested we treat AI as a toy.</p>
      <p>What began as a highly honed prompt became a simple webpage that allows a user to generate descriptions of a hypothetical planet and what alien life might live there. I have used JavaScript to connect with an AI API. The user can control variables about the planet such as the size of the planet and its distance from its star. The project returns a vibrant description of the planet and the life that might live there.</p>
      <p>I’ve always had an interest in the area between science and sci-fi, and this felt like building a toy. Here is an embeded version I whipped up in React.</p>
      </div>
      <div className='project-box'>
      <iframe 
        src="https://bradtheestallion.github.io/planet-finder/" title="Doggy Dog World"
      ></iframe>
      </div>
      <p>Click <a href="https://github.com/BradTheeStallion/planet-finder" target='_blank'>here</a> to interact with the code.</p>
    </div>
  );
};

export default PlanetGenerator;