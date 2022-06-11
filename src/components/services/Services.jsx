import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Programming of websites and online applications for smartphones
                and servers with high quality standards
              </p>
            </li>
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Robust and secure Data Base environment design and integration
              </p>
            </li>
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Developement of statistical and geographic information
                applications to manage very sensitive user data
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content and UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Writing unique content, that will be input for publishing
                editorials and advertising campaigns for the target audience
              </p>
            </li>
            <li>
              <BiCheck class="service__list-icon" />
              <p>Creation and planning of content strategies</p>
            </li>
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Design and creation of interactive elements and their placement
                in the interface for proper usability.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>...Others services</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Desktops and servers software installation, configuration, and
                maintenance
              </p>
            </li>
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Physical configuration and maintenance of the Desktops, servers
                and its components
              </p>
            </li>
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Installation and configuration of the telecommunication networks
                <small> (WiFi, LAN, WAN, Wireless Links, etc.)</small>
              </p>
            </li>
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Installation and maintenance of the camera surveillance and
                indoor/outdoor alarms systems
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
