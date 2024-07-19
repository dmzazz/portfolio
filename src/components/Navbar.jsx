import React from "react";
import cv from "../assets/file/CV-Dimas-Azizir.pdf";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand fs-4 fw-bold" href="#">
          Dimas Azizir
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href={cv}>
                Download CV
              </a>
            </li>
            <li className="nav-item nav-text px-0 px-lg-3">
              <a className="nav-link" href="mailto:dimaslaylaa@gmail.com">
                Let's Chat
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
