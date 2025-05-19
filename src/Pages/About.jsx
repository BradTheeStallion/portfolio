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
    const techSkills = [
        { Icon: AmazonwebservicesOriginalWordmark, name: "AWS" },
        { Icon: DockerOriginalWordmark, name: "Docker" },
        { Icon: GithubOriginal, name: "GitHub" },
        { Icon: PythonOriginalWordmark, name: "Python" },
        { Icon: JavaOriginalWordmark, name: "Java" },
        { Icon: SpringOriginal, name: "Spring" },
        { Icon: MavenOriginal, name: "Maven" },
        { Icon: PostmanOriginal, name: "Postman" }
    ];
    
    const frontendSkills = [
        { Icon: ReactOriginalWordmark, name: "React" },
        { Icon: JavascriptOriginal, name: "JavaScript" },
        { Icon: Css3OriginalWordmark, name: "CSS3" },
        { Icon: Html5OriginalWordmark, name: "HTML5" }
    ];
    
    const otherSkills = [
        { Icon: AzuresqldatabaseOriginal, name: "Azure SQL" },
        { Icon: AppleOriginal, name: "Apple" }
    ];

    return (
        <div className="component-box">
            <div className="project-box about-container">
                <h1 className="about-title">About Me</h1>
                
                <div className="about-section">
                    <div className="about-content">
                        <p>Hello! I'm <span className="highlight">Brad</span>, a recent graduate of Keyin College's software development program in St. John's, Newfoundland.</p>
                        <p>I'm currently working with Keyin as a <span className="highlight">micro-credential tech support specialist</span> where I do my best to ensure that all students can learn without technical disruptions.</p>
                        <p>My strongest skillset includes <span className="highlight">AWS, Java, Python, databases, and CI/CD</span>. I hold several certifications and I am currently preparing for the AWS Certified Developer Associate exam.</p>
                        <p>I'm also interested in learning more about Terraform, machine learning, cybersecurity, and biotechnology.</p>
                        <p>I make an effort to attend networking events here in St. John's. Hopefully I'll see you at the next Hackathon!</p>
                        <p className="resume-link">
                            <a href={HackathonResumeBA} target="_blank" rel="noreferrer" className="button-link">
                                View My Resume
                            </a>
                        </p>
                    </div>
                </div>
                
                <div className="about-section skills-section">
                    <h2 className="section-title">Technical Skills</h2>
                    
                    <div className="skills-container">
                        <div className="skills-category">
                            <h3>Backend & DevOps</h3>
                            <div className="code-logos">
                                {techSkills.map(({Icon, name}, i) => (
                                    <div key={i} className="skill-item" title={name}>
                                        <Icon size={60} />
                                        <span className="skill-name">{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="skills-category">
                            <h3>Frontend</h3>
                            <div className="code-logos">
                                {frontendSkills.map(({Icon, name}, i) => (
                                    <div key={i} className="skill-item" title={name}>
                                        <Icon size={60} />
                                        <span className="skill-name">{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="skills-category">
                            <h3>Database & Other</h3>
                            <div className="code-logos">
                                {otherSkills.map(({Icon, name}, i) => (
                                    <div key={i} className="skill-item" title={name}>
                                        <Icon size={60} />
                                        <span className="skill-name">{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="about-section">
                    <h2 className="section-title">AWS Certifications</h2>
                    <div className="certification-container">
                        <div className="certification-item">
                            <img src={Awsccp} alt="AWS Certified Cloud Practitioner" className="cert-image" />
                            <div className="cert-info">
                                <h3>AWS Certified Cloud Practitioner</h3>
                                <p>Foundational knowledge of AWS Cloud services</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="about-section">
                    <h2 className="section-title">Portfolio</h2>
                    <div className="portfolio-info">
                        <p>This portfolio began as part of my final project for Semester 2 of my program.</p>
                        <p>It has since evolved into a place where I can showcase my projects and skills as a developer.</p>
                        <p>I started this portfolio keeping principles of test-driven development in mind and plan to continue testing new components as I add them.</p>
                        <p>Feel free to take a look around and check out my projects!</p>
                        <p>My contact information is in the footer, please don't hesitate to reach out!</p>
                        <p>Don't like the colour scheme? Refresh the page until you do!</p>
                        <p className="github-link">
                            <a href="https://github.com/BradTheeStallion/portfolio" target="_blank" rel="noreferrer" className="button-link">
                                View Source Code
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;