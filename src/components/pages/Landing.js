import React, { Fragment, useState, useEffect } from "react";
import About from "../sections/About";
import Experience from "../sections/Experience";
import FeaturedProject from "../sections/FeaturedProject";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import resumeData from "../../assets/resume.json";
import TextTransition, { presets } from "react-text-transition";

const positions = [
  "Software Engineer",
  "Android Developer",
  "Web Developer",
  "Curious",
];

const Landing = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // Every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Fragment>
      {resumeData !== null ? (
        <section id="home" className="landing-container">
          <div className="dark-overlay">
            <div className="landing-inner">
              <div className="content">
                <div className="name-wrap">
                  <h3>
                    <span>
                      Henrique
                      <br />
                    </span>
                    <div>
                      <TextTransition
                        className="positions"
                        text={positions[index % positions.length]}
                        springConfig={presets.wobbly}
                      />
                    </div>
                  </h3>
                </div>
                <div className="location-wrap">
                  <span className="location">based in Scottsdale, AZ.</span>
                </div>
                <a
                  href="#experience"
                  className="white-fill-bg btn-outline btn-medium"
                >
                  VIEW EXPERIENCE
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      <About />
      <Experience />
      <FeaturedProject />
      <Skills />
      <Education />
      <Contact />
    </Fragment>
  );
};

export default Landing;
