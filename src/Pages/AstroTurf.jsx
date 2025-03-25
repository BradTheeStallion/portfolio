import React from 'react';
import "./Styles/Project.css";
import AstroTurfLogo from './img/AstroTurf.jpeg';


const AstroTurf = () => {
  return (
    <div className='component-box'>
        <img src={AstroTurfLogo} alt="" />
        <div className='text-left'>
      <h2>AstroTurf</h2>
      <p>This one started as the combined 2nd QAP for my Software Development and Testing & DevOps courses at Keyin College.</p>
      <p>I had the opportunity to explore different ways to host a backend and create a basic frontend for the API, which allowed me to expand my skills beyond the initial scope. And the best part? This was all done for free—just imagine what I could achieve with a budget!</p>
      <p>Key Skills:</p>
      <ul>
        <li>Java (Spring Boot, Maven, JUnit, Mockito)</li>
        <li>Docker (Containerizing the project)</li>
        <li>MySQL (Database)</li>
        <li>Aiven (Database host)</li>
        <li>Render (API Host)</li>
        <li>Retool (GUI)</li>
      </ul>
      </div>
      <div className='project-box'>
      <iframe 
        src="https://bradtheestallion.retool.com/apps/AstroTurf" title="AstroTurf"
      ></iframe>
      </div>
      <p>Click <a href="https://github.com/BradTheeStallion/astroturf" target='_blank'>here</a> to interact with the code. I recommend cloning it and trying out some tests on Postman for yourself!</p>
    </div>
  );
};

export default AstroTurf;