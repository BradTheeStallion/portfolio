import React from 'react';
import './Styles/About.css';
import './Styles/Project.css';
import HackathonResumeBA from '../HackathonResumeBA.pdf';
import Awsccp from '../Awsccp.png';
import { PythonOriginalWordmark, Html5OriginalWordmark, Css3OriginalWordmark, JavascriptOriginal, ReactOriginalWordmark, JavaOriginalWordmark, AzuresqldatabaseOriginal } from 'devicons-react';


const About = () => {
    return (
        <div className='component-box'>
                <div className='project-box'>
                <div className='about'>
                    <div className='text-left-about'>
                        <h2>Skills</h2>
                    <div className='code-logos'>
                    <PythonOriginalWordmark size={80}/>
                    <Html5OriginalWordmark size={80}/>
                    <Css3OriginalWordmark size={80}/>
                    <JavascriptOriginal size={80}/>
                    <ReactOriginalWordmark size={80}/>
                    <JavaOriginalWordmark size={80}/>
                    <AzuresqldatabaseOriginal size={80}/>
                    </div>
                        <h2>About Me</h2>
                        <p>Hello! I’m Brad, a software development student at Keyin College in St. John’s, Newfoundland.</p>
                        <p>I've been studying Python and JavaScript for the past 8 months and have recently gotten into React, taking full advantage of the tools I've learned to put together this portfolio.</p>
                        <p>The first two semesters of my program focused on frontend development, and I have just gotten into databases and Java to continue my journey to full-stack development.</p>
                        <p>I'm interested in learning more about blockchain, machine learning, cybersecurity, and biotechnology.</p>
                        <p>I make an effort to attend networking events here in St. John's. Hopefully I'll see you at the next Hackathon!</p>
                        <p>Click <a href={HackathonResumeBA} target='_blank'>here</a> to see my resume.</p>
                    </div>
                    <div className='text-left-about'>
                        <h2>AWS Certifications</h2>
                        <div className='code-logos'>
                        <img src={Awsccp} alt="" />
                        </div>
                        <h2>Portfolio</h2>
                        <p>This portfolio began as part of my final project for Semester 2 of my program.</p>
                        <p>It has since evolved into a place where I can showcase my projects and skills as a developer.</p>
                        <p>I started this portfolio keeping principles of test-driven development in mind and plan to continue testing new components as I add them.</p>
                        <p>Feel free to take a look around and check out my projects!</p>
                        <p>My contact information is in the footer, please don't hesitate to reach out!</p>
                        <p>Don't like the colour scheme? Refresh the page until you do!</p>
                        <p>Click <a href='https://github.com/BradTheeStallion/portfolio' target="_blank">here</a> to see the code.</p>
                    </div>
                </div>
                <h2>Notable Certifications</h2>
                        <ul className='list'>
                            <li>Software Testing</li>
                            <li>Cybersecurity</li>
                            <li>English (B.A.)</li>
                        </ul>
                        <h2>Interests</h2>
                        <ul className='list'>
                            <li>Blockchain</li>
                            <li>Backend Development</li>
                            <li>Cybersecurity</li>
                        </ul>
                        <br />
            </div>
        </div>
    );
};

export default About;