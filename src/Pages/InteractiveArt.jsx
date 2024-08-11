import React from 'react';
import "./Styles/Project.css";


const InteractiveArt = () => {
  return (
    <div className='component-box'>
        <div className='text-left'>
      <h2>Interactive Art-Making Experience</h2>
      <p>This was my very first JavaScript project. I went to a Ladies Learning Code event—welcoming to men comfortable in a female-oriented space. It was a fun project and a great workshop.</p>
      <p>Here we have an interactive art-making experience. Drag your mouse over the canvas and see what you can make with this watermelon inspired palette.</p>
      </div>
      <div className='project-box'>
      <iframe 
        src="https://editor.p5js.org/BradTheeStallion/full/TEVa1hGlV" title="Interactive Art-Making Experience"
      ></iframe>
      </div>
      <p>Click <a href="https://editor.p5js.org/BradTheeStallion/sketches/TEVa1hGlV" target='_blank'>here</a> to interact with the code.</p>
    </div>
  );
};

export default InteractiveArt;