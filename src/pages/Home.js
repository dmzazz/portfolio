import { Link } from "react-router-dom";

// Import File
import "./Home.css";
import cv from "../assets/file/CV-Dimas-Azizir.pdf";

// Import Image
import profile from "../assets/img/profile-2.png";
import undangan from "../assets/img/projects-undangan-2.png";
import warehouse from "../assets/img/projects-warehouse.png";
import portofolio from "../assets/img/projects-portofolio.png";
import linkedln from "../assets/img/linkedln.png";
import github from "../assets/img/github-mark.png";
import instagram from "../assets/img/instagram.png";
import whatsapp from "../assets/img/whatsapp.png";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <header>
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
      </header>

      {/* About */}
      <div id="about">
        <div className="container">
          <div className="about-content">
            <div className="row align-items-center">
              <div className="head-text col">
                <p className="about-text fs-1 fw-bold">
                  Hi, I'm Dimas Azizir: <br></br>A FrontEnd Web Developer.
                </p>
                <span className="about-description fs-4">Student at President A university that likes to explore new things</span>
                <p className="about-familiar fs-5 mt-3">
                  <span className="fw-bold">Familiar With:</span> HTML, CSS, JavaScript, Bootstrap, Tailwind, ReactJs, Git, Figma
                </p>
              </div>
              <div className="head-image col text-center">
                <img src={profile} alt="profile.png" width={250}></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="projects">
        <div className="container justify-content-center">
          <h2>Projects</h2>

          <div className="card undangan mb-3 mt-5 border-0" data-aos="fade-right" data-aos-duration="700" data-aos-delay="200">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <img src={undangan} className="img-fluid rounded-start" alt="undangan.png"></img>
              </div>
              <div className="col-lg-4">
                <div className="card-body pb-5 px-5 p-lg-0">
                  <h3 className="card-title">Undangan Digital</h3>
                  <p className="card-text my-4">An online invitation in the form of a website to make it easier for users to invite relatives to remote weddings or circumcisions. Built using HTML, CSS, JavaScript and Bootstrap.</p>
                  <Link to="https://dymas.my.id" target="_blank">
                    <button className="view-project text-light py-3 px-5 border-0 rounded">View Project</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card warehouse mb-3 mt-5 border-0" data-aos="fade-left" data-aos-duration="700" data-aos-delay="200">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <img src={warehouse} className="img-fluid rounded-start" alt="undangan.png"></img>
              </div>
              <div className="col-lg-4">
                <div className="card-body pb-5 px-5 p-lg-0">
                  <h3 className="card-title">Warehouse</h3>
                  <p className="card-text my-4">An application that functions to record incoming and outgoing goods. using several programming languages ​​such as ReactJs, NodeJs and MongoDB as Database. Tailwind for styling.</p>
                  <Link to="https://github.com/whend12/Warehouse-Stocktifity" target="_blank">
                    <button className="view-project text-light py-3 px-5 border-0 rounded">View Code</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card portofolio mb-3 mt-5 border-0" data-aos="fade-right" data-aos-duration="700" data-aos-delay="200">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <img src={portofolio} className="img-fluid rounded-start" alt="undangan.png"></img>
              </div>
              <div className="col-lg-4">
                <div className="card-body pb-5 px-5 p-lg-0">
                  <h3 className="card-title">Portfolio CMS WordPress</h3>
                  <p className="card-text my-4">Another portfolio created using the Wordpress CMS contains educational background to projects that have been made.</p>
                  <button className="view-project text-light py-3 px-5 border-0 rounded">View Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact">
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 mt-5 mt-lg-0">
              <h2 className="text-lg-end" data-aos="fade-left" data-aos-duration="800">
                Contact Us
              </h2>
              <p className="py-2 text-lg-end fs-4" data-aos="fade-left" data-aos-duration="800">
                Want to recruit me? Send a message via email at dimaslaylaa@gmail.com{" "}
              </p>
              <Link to="mailto:dimaslaylaa@gmail.com">
                <button className="border-0 px-4 py-2 float-lg-end" data-aos="fade-left" data-aos-duration="800">
                  Let's Chat
                </button>
              </Link>
            </div>
            <div className="col-lg-4 text-center">
              <img src={profile} alt="profile.png" data-aos="flip-left" data-aos-duration="900"></img>
              <ul className="list-group list-group-horizontal justify-content-center align-items-center">
                <li className="list-text list-group fs-5 me-2" data-aos="fade-right" data-aos-delay="200">
                  Keep in touch
                </li>
                <li className="list-group mx-2">
                  <Link to="https://www.linkedin.com/in/dimas-azizir-261661198/" target="_blank" data-aos="fade-right" data-aos-delay="500">
                    <img src={linkedln} alt="linkedln.png" width={50}></img>
                  </Link>
                </li>
                <li className="list-group mx-2">
                  <Link to="https://github.com/dmzazz" target="_blank" data-aos="fade-right" data-aos-delay="800">
                    <img src={github} alt="github.png" width={50}></img>
                  </Link>
                </li>
                <li className="list-group mx-2">
                  <Link to="https://instagram.com/dimas.azizir" target="_blank" data-aos="fade-right" data-aos-delay="1100">
                    <img src={instagram} alt="instagram.png" width={50}></img>
                  </Link>
                </li>
                <li className="list-group mx-2" data-aos="fade-right" data-aos-delay="1300">
                  <Link to="https://wa.me/6289601769642" target="_blank">
                    <img src={whatsapp} alt="whatsapp.png" width={50}></img>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="d-flex align-items-center bg-dark">
        <span className="text-body-tertiary ms-5 mt-5">2023 Dimas Azizir</span>
      </footer>
    </>
  );
};

export default Home;
