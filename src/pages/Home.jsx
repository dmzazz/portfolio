// Import CSS
import "../css/home.css";

// Import Components
import Project from "../components/Project";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
