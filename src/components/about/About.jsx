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
            <small>
              I'm Carlos (zCoder!), There is always time to reinvent ourselves.
              My goal is to inspire you and help you follow your dreams. A long
              time ago, I was IBM Mainframe system programmer
              <small> (for over 25 years)</small>, and later, I developed a
              successfull career
              <small> (for over 20 years)</small> as specialist in field
              deployments of microwave networks, electronics security, and
              automation systems; in the process, I co-founded two technology
              startups. Most currently
              <small> (since the beginning of 2020-year)</small>, and as an
              enthusiastic and passionate by programming code, I started to
              formally train and develop websites (HTML/CSS, JavaScript, React,
              Java), smartphone apps (React Native, Kotlin), and server-side
              platforms (NodeJS, MySQL, MongoDB, Python). My complete CV can be
              seen in the following link
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
