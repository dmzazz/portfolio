import React from "react";
import profile from "../assets/img/profile-2.png";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="about-content">
          <div className="row align-items-center">
            <div className="head-text col">
              <p className="about-text fs-1 fw-bold">
                Hi, I'm Dimas Azizir: <br></br>A FrontEnd Web Developer.
              </p>
              <span className="about-description fs-4">Fresh Graduate at President A university that likes to explore new things</span>
              <p className="about-familiar fs-5 mt-3">
                <span className="fw-bold">Familiar With:</span> HTML, CSS, JavaScript, Bootstrap, Tailwind, Shadcn, ReactJs, NextJs, Git, Figma, Responsive Web Design
              </p>
            </div>
            <div className="head-image col text-center">
              <img src={profile} alt="profile.png" width={250}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
