import React from 'react';
import './Styles/About.css';
import './Styles/Project.css';
import HackathonResumeBA from '../HackathonResumeBA.pdf';
import Awsccp from '../Awsccp.png';

import {
    AmazonwebservicesOriginalWordmark,
    DockerOriginalWordmark,
    GithubOriginal,
    PythonOriginalWordmark,
    JavaOriginalWordmark,
    SpringOriginal,
    MavenOriginal,
    PostmanOriginal,
    AzuresqldatabaseOriginal,
    ReactOriginalWordmark,
    JavascriptOriginal,
    Css3OriginalWordmark,
    Html5OriginalWordmark,
    AppleOriginal
} from 'devicons-react';

const About = () => {
    const icons = [
        AmazonwebservicesOriginalWordmark,
        DockerOriginalWordmark,
        GithubOriginal,
        PythonOriginalWordmark,
        JavaOriginalWordmark,
        SpringOriginal,
        MavenOriginal,
        PostmanOriginal,
        AzuresqldatabaseOriginal,
        ReactOriginalWordmark,
        JavascriptOriginal,
        Css3OriginalWordmark,
        Html5OriginalWordmark,
        AppleOriginal
    ];

    const midIndex = Math.ceil(icons.length / 2);
    const iconRows = [icons.slice(0, midIndex), icons.slice(midIndex)];

    return (
        <div className='component-box'>
            <div className='project-box'>
                <div className='about'>
                    <div className='text-left-about'>
                        <h2>Skills</h2>
                        {iconRows.map((row, rowIndex) => (
                            <div key={rowIndex} className='code-logos'>
                                {row.map((Icon, i) => (
                                    <Icon key={i} size={80} />
                                ))}
                            </div>
                        ))}

                        <h2>About Me</h2>
                        <p>Hello! I’m Brad, a recent graduate of Keyin College's software development program in St. John’s, Newfoundland.</p>
                        <p>I'm currently working with Keyin as a micro-credential tech support specialist where I do my best to ensure that all students can learn without technical disruptions.</p>
                        <p>My strongest skillset includes AWS, Java, Python, databases, and CI/CD. I hold several certifications and I am currently preparing for the AWS Certified Developer Associate exam.</p>
                        <p>I'm also interested in learning more about Terraform, machine learning, cybersecurity, and biotechnology.</p>
                        <p>I make an effort to attend networking events here in St. John's. Hopefully I'll see you at the next Hackathon!</p>
                        <p>Click <a href={HackathonResumeBA} target='_blank' rel="noreferrer">here</a> to see my resume.</p>
                    </div>

                    <div className='text-left-about'>
                        <h2>AWS Certifications</h2>
                        <div className='code-logos'>
                            <img src={Awsccp} alt="AWS Certified Cloud Practitioner" />
                        </div>

                        <h2>Portfolio</h2>
                        <p>This portfolio began as part of my final project for Semester 2 of my program.</p>
                        <p>It has since evolved into a place where I can showcase my projects and skills as a developer.</p>
                        <p>I started this portfolio keeping principles of test-driven development in mind and plan to continue testing new components as I add them.</p>
                        <p>Feel free to take a look around and check out my projects!</p>
                        <p>My contact information is in the footer, please don't hesitate to reach out!</p>
                        <p>Don't like the colour scheme? Refresh the page until you do!</p>
                        <p>Click <a href='https://github.com/BradTheeStallion/portfolio' target="_blank" rel="noreferrer">here</a> to see the code.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;