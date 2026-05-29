import React, { Fragment } from "react";
import resumeData from "../../assets/resume.json";
import topcheeseLogo from "../../assets/topcheese-app-icon.png";

const FeaturedProject = () => {
  const project = resumeData.featuredProject;

  if (!project) {
    return null;
  }

  return (
    <Fragment>
      <section id="project" className="section-container">
        <div className="resume">
          <div className="container">
            <div className="position-relative">
              <div className="title">
                <span>Featured Project</span>
              </div>
              <div className="row projects">
                <div className="three columns header-col">
                  <h1>
                    <span>{project.name}</span>
                  </h1>
                </div>
                <div className="nine columns main-col">
                  <div className="row item">
                    <div className="twelve columns">
                      <div>
                        <div className="header-div">
                          <img src={topcheeseLogo} alt="TopCheese logo" />
                          <h3>{project.name}</h3>
                        </div>
                        <p className="project-title">
                          {project.role}
                          <span>•</span>
                          <em className="date">
                            {project.startDate} - Present
                          </em>
                          <span>•</span>
                          {project.platform}
                        </p>
                        <p className="project-info">{project.description}</p>
                        {project.appStoreUrl ? (
                          <div className="button">
                            <a
                              href={project.appStoreUrl}
                              target="_blank"
                              rel="noreferrer"
                            >
                              View on the App Store
                            </a>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FeaturedProject;
