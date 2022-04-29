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
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Design and creation of the user interface with homogeneous
                visual for all the screens of the interface.
              </p>
            </li>
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Design and creation of interactive elements and their placement
                in the interface for proper usability.
              </p>
            </li>
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Design ensuring through the implementation of best practices of
                responsive interfaces, in order to create accessibility from any
                device, whether Smartphone, Tablet or Smart TV or desktop or
                laptop.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Development and programming of websites and online applications
                for companies and/or private clients
              </p>
            </li>
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Our solid knowledge of many different technical tools and
                development concepts, to allow us to generate solutions with
                high quality standards
              </p>
            </li>
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                We have a solid Web development capabilities in all of the web
                areas, namely:
              </p>
            </li>
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Front-end development <small>(websites only)</small>
              </p>
            </li>
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Back-end development <small>(servers applications)</small>
              </p>
            </li>
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Database configuration{" "}
                <small>(frontend & backend interface)</small>
              </p>
            </li>
            <li>
              <BiCheck class="service__list-icon" />
              <p>Maintenance of the site on the server</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Writing of original and unique content, whose product will be
                input for publishing editorials and advertising campaigns for
                the target audience
              </p>
            </li>
            <li>
              <BiCheck class="service__list-icon" />
              <p>Creation and planning of content strategies</p>
            </li>
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Creation of omni-channel marketing strategies, oriented to
                multiple advertising platforms
              </p>
            </li>
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Optimization of editable content, according to the needs of the
                clients, the target audience, and based on market trends
              </p>
            </li>
            <li>
              <BiCheck class="service__list-icon" />
              <p>
                Measurement and analysis of marketing strategies and constant
                revision if necessary{" "}
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
