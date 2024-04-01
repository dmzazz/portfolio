import React from "react";
import { Link } from "react-router-dom";

// Import Assets
import selfcare from "../assets/img/project-selfcare.png";
import undangan from "../assets/img/projects-undangan-2.png";
import warehouse from "../assets/img/projects-warehouse.png";
import portofolio from "../assets/img/projects-portofolio.png";

const projects = [
  {
    id: "selfcare",
    title: "SelfCare",
    text: "Self-Care is a website-based information system so that adolescents can gain insight into psychological problems starting from learning to recognize themselves, knowing about what psychology is and the impact that will be received if ignored and understand when to consult psychology. Built using ReactJs, Bootstrap, JSON Server",
    link: "https://github.com/dmzazz/capstone-kel-5",
    linkText: "View Code",
    imgSrc: selfcare,
    aos: "fade-left",
  },
  {
    id: "undangan",
    title: "Undangan Digital",
    text: "An online invitation in the form of a website to make it easier for users to invite relatives to remote weddings or circumcisions. Built using HTML, CSS, JavaScript and Bootstrap.",
    link: "https://dymas.my.id",
    linkText: "View Project",
    imgSrc: undangan,
    aos: "fade-right",
  },
  {
    id: "warehouse",
    title: "Warehouse",
    text: "An application that functions to record incoming and outgoing goods. using several programming languages ​​such as ReactJs, NodeJs and MongoDB as Database. Tailwind for styling.",
    link: "https://github.com/whend12/Warehouse-Stocktifity",
    linkText: "View Code",
    imgSrc: warehouse,
    aos: "fade-left",
  },
  {
    id: "portofolio",
    title: "Portfolio CMS WordPress",
    text: "Another portfolio created using the Wordpress CMS contains educational background to projects that have been made.",
    link: "https://me.dymas.my.id",
    linkText: "View Project",
    imgSrc: portofolio,
    aos: "fade-right",
  },
];

const Project = () => {
  return (
    <div className="container justify-content-center">
      <h2>Projects</h2>
      {projects.map((project) => (
        <div key={project.id} className={`card ${project.id} mb-3 mt-5 border-0`} data-aos={project.aos} data-aos-duration="700" data-aos-delay="200">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <img src={project.imgSrc} className="img-fluid rounded-start" alt={project.title}></img>
            </div>
            <div className="col-lg-4">
              <div className="card-body pb-5 px-5 p-lg-0">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text my-4">{project.text}</p>
                <Link to={project.link} target="_blank">
                  <button className="view-project text-light py-3 px-5 border-0 rounded">{project.linkText}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
