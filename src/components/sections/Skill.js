import React, { Fragment } from "react";
import resumeData from "../../assets/resume.json";

const Skill = () => {
  return (
    <Fragment>
      {resumeData !== null ? (
        <section id="skill" className="section-container">
          <div className="skills">
            <div className="container">
              <div className="skills-inner">
                <div className="left">
                  <div className="title">
                    <h3>
                      Shipping production software by day, building with AI on
                      the side
                    </h3>
                  </div>
                  <div className="text">
                    <p>
                      For nearly five years, I've been a Software Engineer at
                      Toast, the all-in-1 restaurant POS company, on the
                      Payments Experience team, where I build, maintain, and
                      improve the payments workflow inside our POS app. The
                      recent AI boom has also reshaped how I tinker outside of
                      work: frustrated by how hard it was to follow NHL shots on
                      goal live, I used Cursor and Claude Code to build
                      TopCheese — an iOS app that tracks them in real time. It's
                      now live on the App Store for free with more than 120
                      users, and it's been a fun way to keep sharpening my
                      skills.
                    </p>
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

export default Skill;
