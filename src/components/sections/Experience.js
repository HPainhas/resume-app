import React, { Fragment } from "react";
import resumeData from "../../assets/resume.json";
import toastLogo from "../../assets/toast-logo.png";
import eRetailingLogo from "../../assets/eretailing-logo.jpeg";

const Experience = () => {
  return (
    <Fragment>
      {resumeData !== null ? (
        <section id="experience" className="section-container">
          <div className="resume">
            <div className="container">
              <div className="position-relative">
                <div className="title">
                  <span>Experience</span>
                </div>
                <div className="row work">
                  <div className="three columns header-col">
                    <h1>
                      <span>Work Experience</span>
                    </h1>
                  </div>
                  <div className="nine columns main-col">
                    <div className="row item">
                      <div className="twelve columns">
                        <div>
                          <div className="header-div">
                            <img src={toastLogo} alt="Toast logo"></img>
                            <h3>Toast</h3>
                          </div>
                          <p className="job-title">
                            Software Engineer II
                            <span>•</span>
                            <em className="date">March 2024 - Present</em>
                          </p>
                          <p className="job-info">
                            Android Engineer (Kotlin). Member of the Payments
                            Experience team. Responsible for implementing new
                            features, reducing complexity and ambiguity in the
                            code through PRs and documentation, improving user
                            experience, collaborating with other teams, writing
                            Unit/Espresso tests, and fixing bugs within the
                            Toast point of sale (POS) application.
                          </p>
                        </div>
                        <div>
                          <div className="header-div">
                            <img src={toastLogo} alt="Toast logo"></img>
                            <h3>Toast</h3>
                          </div>
                          <p className="job-title">
                            Software Engineer I<span>•</span>
                            <em className="date">December 2021 - March 2024</em>
                          </p>
                          <p className="job-info">
                            Mainly working as an Android Engineer (Kotlin).
                            Member of the Payments Experience team. Responsible
                            for implementing new features, updating existing
                            payment functionalities, and fixing bugs within the
                            Toast point of sale (POS) application.
                          </p>
                        </div>
                        <div>
                          <div className="header-div">
                            <img
                              src={eRetailingLogo}
                              alt="eRetailing logo"
                            ></img>
                            <h3>eRetailing</h3>
                          </div>
                          <p className="job-title">
                            Software Engineer
                            <span>•</span>
                            <em className="date">May 2019 - December 2021</em>
                          </p>
                          <p className="job-info">
                            My tasks on the e-commerce team include: continue to
                            improve the in-house Android application I developed
                            which monitors all of our order processing workflow,
                            handles the inventory system accuracy, and allows
                            the production team to receive inbound goods
                            efficiently; writing software to enhance our
                            inventory management system and handle errors; help
                            with the design of the new warehouse labeling
                            system; among other tasks.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </Fragment>
  );
};

export default Experience;
