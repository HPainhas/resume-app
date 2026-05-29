import React, { Fragment } from "react";
import resumeData from "../../assets/resume.json";
import ohioStateUniversityLogo from "../../assets/ohio-state-university-logo.png";
import trineUniversityLogo from "../../assets/trine-university-logo.jpeg";

const Education = () => {
  return (
    <Fragment>
      {resumeData !== null ? (
        <section id="education" className="section-container">
          <div className="resume">
            <div className="container">
              <div className="position-relative">
                <div className="title">
                  <span>Education</span>
                </div>
                <div className="row education">
                  <div className="three columns header-col">
                    <h1>
                      <span>Education</span>
                    </h1>
                  </div>
                  <div className="nine columns main-col">
                    <div className="row item">
                      <div className="twelve columns">
                        <div className="degree-container">
                          <div className="header-div">
                            <img
                              src={trineUniversityLogo}
                              alt="Trine University logo"
                            ></img>
                            <h3>Trine University</h3>
                          </div>
                          <p className="degree">
                            M.S. in Information Studies
                            <span>•</span>
                            <em className="date">May 2024</em>
                          </p>
                          <div className="degree-info-mobile">
                            <p className="gpa">
                              GPA
                              <span>:</span>
                              <span
                                style={{
                                  fontWeight: 600,
                                }}
                              >
                                4.0
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="header-div">
                            <img
                              src={ohioStateUniversityLogo}
                              alt="The Ohio State University logo"
                            ></img>
                            <h3>The Ohio State University</h3>
                          </div>
                          <p className="degree">
                            B.S. in Computer and Information Science
                            <span>•</span>
                            <em className="date">May 2020</em>
                          </p>
                          <div className="degree-info-mobile">
                            <p className="gpa">
                              GPA
                              <span>:</span>
                              <span
                                style={{
                                  fontWeight: 600,
                                }}
                              >
                                3.28
                              </span>
                            </p>
                            <p className="focus">
                              Focus
                              <span>:</span>
                              <span
                                style={{
                                  fontWeight: 600,
                                }}
                              >
                                Software Systems
                              </span>
                            </p>
                            <p className="deans">
                              Member of the Dean's List
                              <span>:</span>
                              <span
                                style={{
                                  fontWeight: 600,
                                }}
                              >
                                5 semesters
                              </span>
                            </p>
                          </div>
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

export default Education;
