import React from "react";
import "./about.css";
import ME from "../../assets/img/me-about.png";
import { FaAward } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to KNow</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-imgBx">
            <img src={ME} alt="me" className="about__me-image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencie</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <HiOutlineUsers className="about__icon" />
              <h5>Clents</h5>
              <small>10+ Venezuela</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>40+ Completed</small>
            </article>
          </div>

          <p>
            {/* <small>
              I'm a Software Developer and a lover of technology. Electronics
              engineer, 1981. I worked for more than 25 years as a software
              engineer in IBM's Mainframe technologies; In parallel to this work
              experience, I have also developed a successful career as a project
              engineer
              <small>
                <i> (for more than 20 years) </i>
              </small>
              in the implementation of microwave telecommunications networks
              <small>
                <i> (my academic major) </i>
              </small>
              and electronic security systems. Currently
              <small>
                <i> (and for the last two years) </i>
              </small>
              I have been working as a full-stack web developer. Since early
              2020
              <small>
                <i> (and due to the covid-19 pandemic) </i>
              </small>
              I have been in deep training in many of these technologies that
              make up the web development ecosystem, becoming a solid web
              developer. My entire CV can be seen in
              <a href="https://carlos-colmenares-a.netlify.app">
                <small> Online CV</small>
              </a>
              .
            </small> */}
            <small>
              I'm a Software Developer and a lover of technology. Electronic
              Engineer, 1981. I worked for more than 25 years as a software
              engineer in IBM Mainframe technologies. In parallel to this
              activity, I also developed a successful career as a project
              engineer
              <small> (for more than 20 years) </small>in the areas of microwave
              telecommunication networks
              <small> (my academic specialization) </small>and electronic
              security systems. Currently and since early 2020
              <small>
                <i> (...due to the confinement by the Covid-19 pandemic), </i>
              </small>
              I began to train myself in many of the technologies that make up
              the web development ecosystem, becoming a solid web developer;
              profession that I currently exercise. My progress in this area can
              be seen in the following link
              <a href="https://carlos-colmenares-a.netlify.app">
                <small> Online CV</small>
              </a>
              
            </small>
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
