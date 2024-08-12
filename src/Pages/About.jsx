import React from 'react';
import './Styles/About.css';
import './Styles/Project.css';

const About = () => {
    return (
        <div className='component-box'>
                <div className='project-box'>
                <div className='about'>
                    <div className='text-left-about'>
                        <h2>About Me</h2>
                        <p>Hello! I’m Brad, a software development student at Keyin College in St. John’s, Newfoundland.</p>
                        <p>I've been studying Python and JavaScript for the past 8 months and have recently gotten into React, taking full advantage of the tools I've learned to put together this portfolio.</p>
                        <p>My studies so far have focused on frontend development, but I am very excited to dive deeper into backend and learn Java next semester.</p>
                        <p>I make an effort to attend networking events here in St. John's. Hopefully I'll see you at the next Hackathon!</p>
                    </div>
                    <div className='text-left-about'>
                        <h2>Portfolio</h2>
                        <p>This portfolio began as part of my final project for Semester 2 of my program.</p>
                        <p>It has since evolved into a place where I can showcase my projects and skills as a developer.</p>
                        <p>I started this portfolio keeping principles of test-driven development in mind and plan to continue testing new components as I add them.</p>
                        <p>Feel free to take a look around and check out my projects!</p>
                        <p>My contact information is in the footer, please don't hesitate to reach out!</p>
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