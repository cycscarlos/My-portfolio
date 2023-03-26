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

          {/* <p class="about__parrafo">
            <small>
              I'm Carlos <small>(zCoder on Social Medias)</small>, There is
              always time to reinvent ourselves; my goal is to inspire you and
              help you follow your dreams. A long time ago, I worked as IBM
              Mainframe system programmer
              <small> (for over 25 years)</small>, and later, I developed a
              successfull career
              <small> (for another 20 years, and currently active)</small> as
              specialist in field deployments of microwave networks, and
              electronics security systems; in the process, I co-founded two
              technology startups. Most currently
              <small> (since the beginning of 2020-year)</small>, and as an
              enthusiastic and passionate by programming code, I started to
              formally train and develop websites (HTML/CSS, JavaScript, React),
              smartphone apps (React Native, Kotlin), and server-side platforms
              (NodeJS, MySQL, MongoDB, Python). My complete CV can be seen in
              the following link
              <a href="https://carlos-colmenares-a.netlify.app">
                {" "}
                Online CV
              </a>{" "}
            </small>
          </p> */}
          <p class="about__parrafo">
            <small>
              Hi, I'm Carlos Colmenares Álvarez{" "}
              <small>(known as "zCoder" on social media).</small>
              There is always time to reinvent yourself; my goal is to inspire
              and help you follow your dreams. A long time ago, I worked as a
              systems programmer for IBM Mainframe Technologies{" "}
              <small>(for more than 20 years)</small>. Later, I developed a
              successful career{" "}
              <small>(for another 20 years, and I'm still working on it)</small>{" "}
              as a specialist in microwave network field deployments and
              electronic security systems; in the process, I co-founded two
              technology startups. As an enthusiast, and passionate about
              software programming, I started to formally train myself in the
              whole ecosystem that makes up web development; I currently develop
              applications for smartphones, desktops, servers, cloud servers,
              landing pages, websites, etc.My complete CV can be seen in the
              following link
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
