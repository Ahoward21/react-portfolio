import React from 'react';
import GitHubIconBlue from '../../assets/icon_gitHub_blue.png';
import linkIcon from '../../assets/icon_link.png'
import img0 from '../../assets/projects/0.png'
import img1 from '../../assets/projects/1.png'
import img2 from '../../assets/projects/2.png'
import img3 from '../../assets/projects/3.png'
import img4 from '../../assets/projects/4.png'
import img5 from '../../assets/projects/5.png'
import img7 from '../../assets/projects/7.png'
// import img6 from '../../assets/projects/6.png'

function Projects() {
    const projectsArr = [
        {
            name: 'Pokemon Card Search',
            description: 'Website where users can search and create a deck of Pokemon Cards',
            github: 'https://github.com/Ahoward21/pokemon-search',
            deployedApp: 'https://ahoward21.github.io/pokemon-search/',
            skills: 'HTML, CSS, JavaScript, Web APIs, jQuery', 
            img: `${img0}`
        },
        {
            name: 'GG Denim Brand Template',
            description: 'This is an ecommerce site for the brand GG Denim',
            github: 'https://github.com/Abduler21/brand-template',
            deployedApp: 'https://brand-to-death.herokuapp.com/',
            skills: 'React, Graphql, JWS, Javascript, Stripe',
            img: `${img7}`
        },
        {
            name: 'Password Generator',
            description: 'Create an unique password from 8-128 characters',
            github: 'https://github.com/Ahoward21/password-generator',
            deployedApp: 'https://ahoward21.github.io/password-generator/',
            skills: 'HTML, CSS, JavaScript,',
            img: `${img2}`
        },
        {
            name: 'Code Quiz',
            description: 'Test you coding knowledge with the Code Quiz',
            github: 'https://github.com/Ahoward21/code-quiz',
            deployedApp: 'https://ahoward21.github.io/code-quiz/',
            skills: 'HTML, CSS, JavaScript, local storage web API`s, timed interals, event listeners',
            img: `${img3}`
        },
        {
            name: 'Work Day Scheduler',
            description: 'A planner for your work day',
            github: 'https://github.com/Ahoward21/scheduler',
            deployedApp: 'https://ahoward21.github.io/scheduler/',
            skills: 'JavaScript, Node.js, jQuery, Moment.js, built in and web API`s',
            img: `${img4}`
        },
        {
            name: 'Photographer`s React Website',
            description: `Website build using React for a Photographer`,
            github: 'https://github.com/Ahoward21/photo-port',
            deployedApp: 'https://ahoward21.github.io/photo-port/',
            skills: 'JavaScript, Node.js, React',
            img: `${img5}`
        },
    ];

    return (
        <section className="my-5 portfolio">
            <h1 className="project-title">Projects</h1>
            {projectsArr.map((project, idx) => {
                return (
                    <div key={idx} className="card">
                        {/* Project image */}
                        <div className="card-img-top">
                            <img
                                src={project.img}
                                className="projectImgs img-thumbnail mx-1"
                                alt={project.name}
                                key={project.name}
                            >
                            </img>
                        </div>
                        <div className="card-body">
                            <h2 className="projectName card-title">
                                {/* Project title and deployed link */}
                                <a href={project.deployedApp} className="projectTitle" target="_blank">
                                    {project.name}
                                </a>
                            </h2>

                            {/* Project Description */}
                            <p className="card-text">{project.description}</p>

                            {/* GitHub link */}
                            <a href={project.github} className="gitHubIcon card-link" target="_blank">
                                <img alt="GitHub icon" src={GitHubIconBlue} width="50px"></img>
                            </a>

                            {/* Deployed link */}
                            <a href={project.deployedApp} className="linkIcon card-link" target="_blank">
                                <img alt={project.name} src={linkIcon} width="50px"></img>
                            </a>

                            {/* Project Skills */}
                            <p className="card-text">Skills: {project.skills}</p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Projects;