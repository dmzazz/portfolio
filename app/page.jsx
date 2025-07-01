"use client";

// Import from AOS
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

// Import Components
import CardSocialMedia from "./components/Card/CardSocialMedia";
import CardEducation from "./components/Card/CardEducation";
import CardWorkExperiences from "./components/Card/CardWorkExperiences";
import CardProjects from "./components/Card/CardProjects";

// Import Icon
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiBootstrap } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";

// Source Data
import { realProjects } from "./data/projects";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: true, // Animasi hanya berjalan sekali
    });
  }, []);

  return (
    <>
      {/* Left */}
      <div className="bg-white md:fixed md:left-0 md:top-0 md:h-screen md:w-5/12 md:overflow-y-auto">
        <div className="absolute top-2 left-2 flex gap-1" data-aos="fade-right">
          <div className="bg-red-500 w-5 h-5 rounded-full"></div>
          <div className="bg-yellow-500 w-5 h-5 rounded-full"></div>
          <div className="bg-green-500 w-5 h-5 rounded-full"></div>
        </div>

        {/* Profile */}
        <div className="px-10 pt-14 md:px-20 md:py-24">
          {/* Profile Image */}
          <div className="relative mb-20">
            <div className="absolute -top-2 bg-gray-700 p-3 drop-shadow-lg rounded-full animate-bounce-2.6s" data-aos="zoom-in" data-aos-delay="1000">
              <RiJavascriptFill />
            </div>
            <div className="absolute left-[265px] sm:left-72 top-10 bg-gray-700 p-3 drop-shadow-lg rounded-full animate-bounce-1.5s" data-aos="zoom-in" data-aos-delay="1800">
              <FaReact />
            </div>

            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <div className="hover:skew-y-6 duration-300 transition-transform inline-block rounded-full border-4 border-white bg-gray-200 drop-shadow-xl overflow-hidden w-[250px] h-[250px]">
                <Image src="/images/dimas-azizir.png" alt="dimas azizir" width={250} height={250} className="object-cover w-full h-full" />
              </div>
            </div>

            <div className="absolute left-5 -bottom-10 bg-gray-700 p-3 drop-shadow-lg rounded-full animate-bounce-1.8s" data-aos="zoom-in" data-aos-delay="1400">
              <FaHtml5 />
            </div>
            <div className="absolute bottom-0 left-64 bg-gray-700 p-3 drop-shadow-lg rounded-full animate-bounce-2.2s" data-aos="zoom-in" data-aos-delay="2000">
              <IoLogoCss3 />
            </div>
          </div>

          {/* Profile Description */}
          <div className="text-color-main font-bold text-5xl my-4" data-aos="fade-up">
            Dimas Azizir
          </div>
          <div className="mt-5" data-aos="fade-up">
            <p className="text-color-second text-xl">💻 Front-End Developer</p>
            <p className="text-color-second text-xl">📍 Bekasi, Jawa Barat, Indonesia</p>
            <p className="text-color-second text-xl my-1">✉️ dmzazz9@gmail.com</p>
            <p className="text-color-second text-xl">💼 Open to work: Full-time / Contract / Freelance</p>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="md:ml-[41.666667%] p-10 bg-white md:min-h-screen">
        <div className="space-y-10">
          <p className="text-color-second" data-aos="fade-down">
            Graduates from <strong>President University</strong> who have an interest in the field of <strong>Frontend Developer</strong>. Strong initiative and ambition to create creative and effective solutions for problems in web
            development.
          </p>

          {/* Social Media */}
          <div id="social-media">
            <h2 className="sticky top-2 text-color-main font-bold text-lg z-50" data-aos="fade-down-right">
              👋🏻 Check this out!
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <Link href="https://www.linkedin.com/in/dimas-azizir" target="_blank">
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                  <CardSocialMedia icon="https://img.icons8.com/ios-filled/100/0077B5/linkedin.png" description="👋🏻 Let's Connect" link="linkedin.com" />
                </div>
              </Link>
              <Link href="https://drive.google.com/file/d/1R9A0hzZadXnnoChqIxaAWvWFoR85OMZ3/view?usp=sharing" target="_blank">
                <div className="ml-16 sm:ml-0" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-delay="750" data-aos-duration="1000">
                  <CardSocialMedia
                    icon="https://storage.googleapis.com/creatorspace-public/sites%2Ffavicons%2FaHR0cHM6Ly9zc2wuZ3N0YXRpYy5jb20vaW1hZ2VzL2JyYW5kaW5nL3Byb2R1Y3QvMXgvZHJpdmVfMjAyMHE0XzMyZHAucG5n.png"
                    description="📄 Latest Resume"
                    link="drive.google.com"
                  />
                </div>
              </Link>
              <Link href="https://github.com/dmzazz" target="_blank">
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-delay="1500" data-aos-duration="1000">
                  <CardSocialMedia icon="https://img.icons8.com/ios-filled/100/000000/github.png" description="🧑‍💻 Let's Connect" link="github.com" />
                </div>
              </Link>
            </div>
          </div>

          {/* Education */}
          <div id="education">
            <h2 className="sticky top-2 text-color-main font-bold text-lg z-50" data-aos="fade-down-right">
              📖 Education
            </h2>
            <div className="mt-5" data-aos="zoom-in">
              <CardEducation educationUrl="https://president.ac.id" educationName="President University" major="Information System" batch="2021 - 2024" />
            </div>
          </div>

          {/* Work Experiences */}
          <div id="work-experiences">
            <h2 className="sticky top-2 text-color-main font-bold text-lg z-50" data-aos="fade-down-right">
              💼 Work Experiences
            </h2>
            <div className="mt-5 grid lg:grid-cols-2">
              <div data-aos="fade-down-right" data-aos-delay="300">
                <Link href="https://bintang7.com" target="_blank">
                  <CardWorkExperiences
                    imageUrl="/images/company/pt-bintang-toedjoe.jpg"
                    imageDescription="PT Bintang Toedjoe"
                    companyName="PT Bintang Toedjoe"
                    division="Business Operation Intern"
                    years="Jan 2024 - Aug 2024"
                    skills="Next.Js | .Net | Tailwind | MySql | UIPath"
                  />
                </Link>
              </div>
              <div className="mt-5 lg:mt-0" data-aos="fade-down-right" data-aos-delay="600">
                <Link href="https://vocasia.id" target="_blank">
                  <CardWorkExperiences imageUrl="/images/company/vocasia.png" imageDescription="Vocasia" companyName="Vocasia" division="MSIB Front-End Web Developer" years="Aug 2023 - Des 2023" skills="React.Js" />
                </Link>
              </div>
            </div>
          </div>

          {/* Real Projects */}
          <div id="real-projects">
            <h2 className="sticky top-2 text-color-main font-bold text-lg z-50" data-aos="fade-down-right">
              🧠 Real Projects
            </h2>
            <div className="pb-10 mt-5 grid xl:grid-cols-2 gap-5" data-aos="fade-right">
              {realProjects.map((project, index) => (
                <CardProjects key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Right */}
      <div className="w-max fixed top-1/3 right-0 bg-slate-400 bg-opacity-35 hover:bg-opacity-75 p-1 rounded-full" data-aos="fade-left">
        <div className="flex flex-col gap-2">
          <a href="#social-media">
            <span>👋🏻</span>
          </a>
          <a href="#education">
            <span>📖</span>
          </a>
          <a href="#work-experiences">
            <span>💼</span>
          </a>
          <a href="#real-projects">
            <span>🧠</span>
          </a>
        </div>
      </div>

      {/* Fixed Bottom */}
      <div className="w-full fixed bottom-0 bg-gray-400 bg-opacity-30 py-2" data-aos="zoom-in">
        <marquee>
          <div className="flex items-center gap-2">
            <span className="text-color-main">Skills:</span>
            <span className="bg-gray-700 p-2 rounded-full">
              <FaHtml5 />
            </span>
            <span className="bg-gray-700 p-2 rounded-full">
              <IoLogoCss3 />
            </span>
            <span className="bg-gray-700 p-2 rounded-full">
              <RiJavascriptFill />
            </span>
            <span className="bg-gray-700 p-2 rounded-full">
              <FaReact />
            </span>
            <span className="bg-gray-700 p-2 rounded-full">
              <DiNodejs />
            </span>
            <span className="bg-gray-700 p-2 rounded-full">
              <RiTailwindCssFill />
            </span>
            <span className="bg-gray-700 p-2 rounded-full">
              <DiBootstrap />
            </span>

            <span className="text-color-main ml-10">Tools:</span>
            <span className="bg-gray-700 p-2 rounded-full">
              <FaGithub />
            </span>
            <span className="bg-gray-700 p-2 rounded-full">
              <FaFigma />
            </span>
          </div>
        </marquee>
      </div>
    </>
  );
}
