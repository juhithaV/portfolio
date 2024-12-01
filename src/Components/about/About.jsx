import React from 'react';
import './about.css';
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/John-Cv.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">
            About Me
        </h2>
        <span className="section__subtitle">
            My Introduction
        </span>

        <div className="about__container container grid">
            <img src="{AboutImg}" alt="" className="about__img" />
            <p className="about__description">
                Full-Stack Developer with more weighted experience in 
                FrontEnd. I have 2 years experience in Angular Development and 1 plus 
                year experience in SpringBoot Java Development.
            </p>

            <a download="" href="{CV}" className="button button--flex">
                Download my Resume here
            </a>
        </div>
    </section>
  )
}

export default About
