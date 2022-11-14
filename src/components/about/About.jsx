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

          <p class="about__parrafo">
            {/* <small>
              Electronics engineer by education; software engineer by
              profession. Co-founder of two technologies start-ups; "CYCS
              Computing Specialists"
              <small>(IBM Mainframe Technologies Software Engineering)</small>,
              and "CYCS & Co. Ingeniería e Instalaciones"
              <small>
                (Electronics Security systems, and Telecommunications Networks
                Engineering)
              </small>
              . I worked for more than 25 years as a software engineer in IBM
              Mainframe technologies. In parallel, I also developed a successful
              career as a project engineer{" "}
              <small>(for more than 20 years) </small>in the areas of microwave
              telecommunication networks and electronic security systems.
              Currently and since early 2020 as a Web Software Developer; I
              develop Web sites & Apps systems for smartphones, and servers
              platforms. My complete CV can be seen in the following link
              <a href="https://carlos-colmenares-a.netlify.app"> Online CV </a>
            </small> */}
            <small>
              I'm Carlos, an IBM system software specialist, telco
              field-implementation manager, and web software developer with 25+
              certified technologies courses. We are always on time to reinvent
              ourselves. My goal is to inspire you and help follow your dreams.
              Co-founder of two tech start-ups. Since early 2020-year, as
              enthusiats and passionate by coding, I have been developing
              websites, and apps systems for smartphones, and servers platforms.
              My complete CV can be seen in the following link
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
