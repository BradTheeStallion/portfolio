import React from 'react';
import './Styles/About.css';
import './Styles/Project.css';

const About = () => {
    return (
        <div className='project-box'>
            <div className='about'>
                <div className='component-box'>
                    <h2>About Me</h2>
                    <p>Hello! I’m Brad, a software development student at Keyin College in St. John’s, Newfoundland.</p>
                    <p>I've been studying Python and JavaScript for the past 8 months and have recently gotten into React, taking full advantage of the tools I've learned to put together this portfolio.</p>
                    <p>My studies so far have focused on frontend development, but I am very excited to dive deeper into backend and learn Java next semester.</p>
                    <p>I make an effort to attend networking events here in St. John's. Hopefully I'll see you at the next Hackathon!</p>
                </div>
                <div className='component-box'>
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
                </div>
            </div>
        </div>
    );
};

export default About;