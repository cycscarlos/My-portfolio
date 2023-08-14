import React from "react";
import "./about.css";
// import ME from "../../assets/img/me-about.png";
import { FaAward } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to KNow</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-imgBx">
            <img src={ME} alt="me" className="about__me-image" />
          </div>
        </div> */}

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

          <p class="about__parrafo">
            <small>
              Hi, I'm Carlos Colmenares Álvarez. ¡Software Developer! I worked{" "}
              <small>(for more than 20 years)</small> as a system programmer for
              IBM Mainframe technologies. For the past twenty years; also had a
              successful career as a project engineer, especially in the design
              and installation of electronic systems for public safety and
              microwave telecommunications. In parallel and on a day-to-day
              basis, complementing my fieldwork with my other passion, software
              programming, in which continuously train myself in most of the
              technologies that make up its ecosystem, developing software or
              apps for smartphones, desktops, websites, and cloud servers. My
              complete CV can be seen in the following link
              <a href="https://carlos-colmenares-a.netlify.app">
                {" "}
                Online CV
              </a>{" "}
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
