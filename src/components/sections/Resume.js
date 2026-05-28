import React, { Fragment } from "react";
import Tooltip from "@mui/material/Tooltip";
import {
  SiJavascript,
  SiMysql,
  SiReact,
  SiGit,
  SiFirebase,
  SiKotlin,
  SiFigma,
  SiJenkins,
  SiJira,
  SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { DiAndroid } from "react-icons/di";
import { BiCodeAlt } from "react-icons/bi";
import resumeData from "../../assets/resume.json";
import toastLogo from "../../assets/toast-logo.png";
import eRetailingLogo from "../../assets/eretailing-logo.jpeg";
import topcheeseLogo from "../../assets/topcheese-app-icon.png";
import ohioStateUniversityLogo from "../../assets/ohio-state-university-logo.png";
import trineUniversityLogo from "../../assets/trine-university-logo.jpeg";

const Resume = () => {
  return (
    <Fragment>
      {resumeData !== null ? (
        <section id="resume" className="section-container">
          <div className="resume">
            <div className="container">
              <div className="position-relative">
                <div className="title">
                  <span>Resume</span>
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
                <div className="row projects">
                  <div className="three columns header-col">
                    <h1>
                      <span>Projects</span>
                    </h1>
                  </div>
                  <div className="nine columns main-col">
                    <div className="row item">
                      <div className="twelve columns">
                        <div>
                          <div className="header-div">
                            <img src={topcheeseLogo} alt="TopCheese logo"></img>
                            <h3>TopCheese</h3>
                          </div>
                          <p className="project-title">
                            Founder
                            <span>•</span>
                            <em className="date">March 2026 - Present</em>
                          </p>
                          <p className="project-info">
                            TopCheese was built to make hockey stats feel alive.
                            Instead of drowning fans in numbers, it presents
                            real-time momentum, player heat levels, and scoring
                            threats instantly and clearly. As both a hockey fan
                            and a developer, I wanted better live stats at my
                            fingertips—so I built TopCheese to do exactly that.
                            The idea is simple: surface the stats that matter
                            most in a visual, intuitive way—showing who's
                            shooting, who's heating up, and who might score
                            next—so you never miss the momentum building toward
                            the next goal.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                <div className="row skill">
                  <div className="three columns header-col">
                    <h1>
                      <span>Technical Skills</span>
                    </h1>
                  </div>
                  <div className="nine columns main-col">
                    <div className="row item">
                      <div className="twelve columns">
                        <div className="technical-skills">
                          {resumeData.technicalSkills.map((skill) => {
                            let icon = null;

                            switch (skill.name) {
                              case "Kotlin":
                                icon = (
                                  <SiKotlin size="3rem" color={skill.color} />
                                );
                                break;
                              case "Figma":
                                icon = (
                                  <SiFigma size="3rem" color={skill.color} />
                                );
                                break;
                              case "Jenkins":
                                icon = (
                                  <SiJenkins size="3rem" color={skill.color} />
                                );
                                break;
                              case "GitHub":
                                icon = (
                                  <SiGithub size="3rem" color={skill.color} />
                                );
                                break;
                              case "Jira":
                                icon = (
                                  <SiJira size="3rem" color={skill.color} />
                                );
                                break;
                              case "JavaScript":
                                icon = (
                                  <SiJavascript
                                    size="3rem"
                                    color={skill.color}
                                  />
                                );
                                break;
                              case "Java":
                                icon = (
                                  <FaJava size="3rem" color={skill.color} />
                                );
                                break;
                              case "SQL":
                                icon = (
                                  <SiMysql size="3rem" color={skill.color} />
                                );
                                break;
                              case "Android":
                                icon = (
                                  <DiAndroid size="3rem" color={skill.color} />
                                );
                                break;
                              case "React":
                                icon = (
                                  <SiReact size="3rem" color={skill.color} />
                                );
                                break;
                              case "Git":
                                icon = (
                                  <SiGit size="3rem" color={skill.color} />
                                );
                                break;
                              case "Firebase":
                                icon = (
                                  <SiFirebase size="3rem" color={skill.color} />
                                );
                                break;
                              default:
                                icon = (
                                  <BiCodeAlt size="3rem" color={skill.color} />
                                );
                                break;
                            }

                            return (
                              <div
                                key={skill.name}
                                className="tech-skill"
                                data-aos="zoom-in"
                              >
                                <Tooltip title={skill.name}>
                                  <div>{icon}</div>
                                </Tooltip>
                              </div>
                            );
                          })}
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

export default Resume;
