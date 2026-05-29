import React, { Fragment, useEffect } from "react";
import logo from "../../assets/hpainhas-logo-medium.png";
import $ from "jquery";

const Navbar = () => {
  useEffect(() => {
    $(function () {
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 200) {
          $(".navbar-inner").addClass("opened-dark");
        } else {
          $(".navbar-inner").removeClass("opened-dark");
        }
      });
    });

    $("#anchor-nav > li").on("click", function () {
      $(this).addClass("current").siblings().removeClass("current");
    });
  }, []);

  return (
    <Fragment>
      <div className="navbar">
        <div className="navbar-inner">
          <div className="logo">
            <a
              aria-current="page"
              className="active"
              href="https://hpainhas-resume.netlify.app/"
            >
              <img src={logo} alt="HPainhas Logo" />
            </a>
          </div>
          <div className="menu">
            <ul id="anchor-nav" className="anchor-nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
