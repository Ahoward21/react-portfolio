import React from 'react';
import coverImage from "../../assets/aboutme_cover.png"

function About() {
    return (
        <section className="my-5 about-sec">
            <h2 id="about">About</h2>
            <div className="content">
                <img src={coverImage} className="my-2 about-img" alt="cover" />
                <div className="my-2 about-txt">
                    <p>Hello, and welcome. My name is Adam Howard and I am an upcoming full stack web developer currently enrolled in Rutger's University Coding Bootcamp. </p>
                    <br />
                    <p>This is info about me.</p>
                </div>
            </div>
        </section>
    );
};

export default About