import React, { Fragment } from "react";
import Tooltip from "@mui/material/Tooltip";
import {
  SiReact,
  SiGit,
  SiKotlin,
  SiJenkins,
  SiJira,
  SiGithub,
  SiTypescript,
  SiNodedotjs,
  SiRedis,
  SiClaude,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { DiAndroid } from "react-icons/di";
import { BiCodeAlt } from "react-icons/bi";
import resumeData from "../../assets/resume.json";

const Skills = () => {
  return (
    <Fragment>
      {resumeData !== null ? (
        <section id="skills" className="section-container">
          <div className="resume">
            <div className="container">
              <div className="position-relative">
                <div className="title">
                  <span>Skills</span>
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
                              case "Java":
                                icon = (
                                  <FaJava size="3rem" color={skill.color} />
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
                              case "TypeScript":
                                icon = (
                                  <SiTypescript
                                    size="3rem"
                                    color={skill.color}
                                  />
                                );
                                break;
                              case "Node.js":
                                icon = (
                                  <SiNodedotjs
                                    size="3rem"
                                    color={skill.color}
                                  />
                                );
                                break;
                              case "Redis":
                                icon = (
                                  <SiRedis size="3rem" color={skill.color} />
                                );
                                break;
                              case "Claude":
                                icon = (
                                  <SiClaude size="3rem" color={skill.color} />
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

export default Skills;
