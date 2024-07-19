import React from "react";
import { Link } from "react-router-dom";

// Import Assets
import profile from "../assets/img/profile-2.png";
import linkedln from "../assets/img/linkedln.png";
import github from "../assets/img/github-mark.png";
import instagram from "../assets/img/instagram.png";
import whatsapp from "../assets/img/whatsapp.png";

const Contact = () => {
  return (
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
  );
};

export default Contact;
