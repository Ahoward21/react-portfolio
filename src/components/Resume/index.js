import React from 'react';
// import resume from '../../assets/resume';

function Resume() {
    return (
        <article className="resume-content">
            <h2 className="contact-title">Resume</h2>
            {/* <p>Download my
                <a href={resume} target="_blank" download> Resume</a>
            </p> */}
            <br />
            <div>
                <div className="res-card">
                    <div className="res-card-container">
                        <h3 className="text-color">
                            Employment Skills
                        </h3>
                        <ul>
                            <li>
                                <span className="text-color2">Coding: </span>HTML, CSS, Git, JavaScript, Web API’s, Third Party API’s, Server-Side API’s, Node.js, Object-Oriented Programming, Express.js, Structured Query Language, Object Relational Mapping, Model-View-Controller, NoSQL, Progressive Web Applications,
                                REACT, MERN, State
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Education */}
                <div className="res-card">
                    <div className="res-card-container">
                        <h3 className="text-color">
                            Education
                        </h3>

                        <h4 className="text-color2"> Coding Bootcamp Certificate</h4>
                        <ul>
                            <li>
                                Completion April 7th, 2022
                            </li>
                            <li>
                                Rutger's University, New Brunswick, NJ
                            </li>
                        </ul>
                        <h4 className="text-color2"> Pharmacy Technician</h4>
                        <ul>
                            <li>
                                October 2009
                            </li>
                            <li>
                                Apollo College - Mesa, AZ
                            </li>
                            <li>
                                4.0 GPA - Dean's List
                            </li>
                        </ul>
                        <h4 className="text-color2"> High School Diploma </h4>
                        <ul>
                            <li>
                                May 2007
                            </li>
                            <li>
                                Highland High School, Gilbert, AZ
                            </li>
                            <li>
                                3.85 GPA - Top 10% of Graduating class
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* EXPERIENCE */}
            <div className="res-card">
                <div className="res-card-container">
                    <h3 className="text-color">
                        Experience
                    </h3>
                    <article>
                        <h4 className="text-color2">Reach ai - Account Executive </h4>
                        <div className="resLocDate">
                            <p>January 2022 - present</p>
                            <h5>Scottsdale, AZ</h5>
                        </div>
                        <ul>
                            <li>
                                - Responsible for creating, developing and maintaining relationships with potential clients.
                            </li>
                            <li>
                                - Provide customer support for UI of product. 
                            </li>
                            <li>
                                - Get new clients to sign up for Reach.
                            </li>
                        </ul>
                    </article>
                    <article>
                        <h4 className="text-color2"> Oreganos - Bartender </h4>
                        <div className="resLocDate">
                            <p> August 2017 - January 2022</p>
                            <h5>Scottsdale, AZ</h5>
                        </div>
                        <ul>
                            <li>
                                - Responsible for providing top notch service to guests, I treat every guest as if they were family.
                            </li>
                            <li>
                                - Inventory management
                            </li>
                            <li>
                                - Creating an environment of learning and happiness for all new employees
                            </li>
                        </ul>
                    </article>
                    <article>
                        <h4 className="text-color2"> A Better Today - Marketing Specialist</h4>
                        <div className="resLocDate">
                            <p> August 2015 - August 2017 </p>
                            <h5>Scottsdale, AZ</h5>
                        </div>
                        <ul>
                            <li>
                                - Manager of a team of 5
                            </li>
                            <li>
                                - Editor for content submitted, ensuring all websites met required criteria based on company specifications. 
                            </li>
                            <li>
                                - Create workflow in order to increase productivity.
                            </li>
                        </ul>
                    </article>
                    {/* <article>
                        <h4 className="text-color2"> Guido's Chicago Deli - Chef </h4>
                        <div className="resLocDate">
                            <p>April 2014 - August 2015</p>
                            <h5>Scottsdale, AZ</h5>
                        </div>
                        <ul>
                            <li>
                                - Responsible for opening the resturant and ensuring deliver's were correct.  
                            </li>
                            <li>
                                - Cook all food from scratch in a cook to order kitchen.
                            </li>
                        </ul>
                    </article> */}

                </div>
            </div>
        </article>
    )
};

export default Resume;