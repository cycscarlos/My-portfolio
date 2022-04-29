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
              <small>3+ Years Working</small>
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
            <small>
              Electronics engineer, 1981. More than 25 years as a software
              engineer in IBM's Mainframe technologies; currently,
              <small>
                <i> and for the last 3 years</i>
              </small>
              , I have been working as a fullstack web developer. In parallel to
              the functions described above, I have also developed a successful
              career as a project engineer
              <small>
                <i>(for more than 20 years)</i>
              </small>
              , in the implementation of microwave telecommunications networks
              and electronic security systems. Since early 2020,
              <small>
                <i> and due to covid-19 pandemic</i>
              </small>
              , I have been in deep training in many of the technologies that
              make up the web development ecosystem, becoming a solid web
              developer. My progress can be seen at
              <a href="https://github.com/cycscarlos">
                <small> https://github.com/cycscarlos</small>
              </a>
              .
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
