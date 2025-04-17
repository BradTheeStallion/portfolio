import React from 'react';
import "./Styles/Project.css";

const DSAFinal = () => {
  return (
    <div className='component-box'>
        <div className='text-left'>
          <h2>Binary Search Tree</h2>
          <p>This is the Final Sprint Project for my Data Structures and Algorithms course at Keyin College.</p>
          <p>The objective of this project was to develop a Spring Boot application that allows users to create a binary search tree from a series of numbers, visualize the resulting tree, and view previous tree results. The backend API was built using Java with Spring Boot, and the frontend was developed using React. A MySQL database was used to manage all application data. The entire project was containerized with Docker, thoroughly tested using a combination of unit and manual testing, and deployed to AWS using EC2.</p>
          <p>Key Skills:</p>
          <ul>
            <li>Java (Spring Boot, Maven, JUnit, Mockito)</li>
            <li>Docker (Containerizing the project)</li>
            <li>MySQL (Database)</li>
            <li>AWS (S3 and EC2)</li>
            <li>React (Frontend)</li>
            <li>Postman (API testing, JSON)</li>
            <li>GitHub (Version control)</li>
            <li>DevOps (CI/CD pipelines)</li>
          </ul>
        </div>
        <div className='project-box'>
          <p>
            <a href="https://github.com/BradTheeStallion/DataStructuresAlgorithms_FinalSprint/actions/workflows/ci.yml">
              <img src="https://github.com/BradTheeStallion/DataStructuresAlgorithms_FinalSprint/actions/workflows/ci.yml/badge.svg" alt="JUnit Tests" />
            </a>
          </p>
          <p>
            <a href="https://github.com/BradTheeStallion/DataStructuresAlgorithms_FinalSprint/actions/workflows/cd.yml">
              <img src="https://github.com/BradTheeStallion/DataStructuresAlgorithms_FinalSprint/actions/workflows/cd.yml/badge.svg" alt="Deploy to EC2" />
            </a>
          </p>

          <h1>Binary Search Trees</h1>
          <h2>Final Sprint Project for Data Structures and Algorithms</h2>
          <ul>
            <li><h3><a href='https://github.com/BradTheeStallion/DataStructuresAlgorithms_FinalSprint' target='_blank'>Backend GitHub</a></h3></li>
            <li><h3><a href="https://github.com/BradTheeStallion/binary-search-tree" target="_blank">Frontend GitHub</a></h3></li>
            <li><h3><a href="http://brad-thee-stallion-portfolio.s3-website-us-east-1.amazonaws.com/" target="_blank">Deployed Project</a></h3></li>
          </ul>
        </div>
    </div>
  );
};

export default DSAFinal;