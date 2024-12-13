import { projects, socialMedia, workExperience } from "@/constant";
import Link from "next/link";

export default function Home() {
  return (
    <div className="before:content-[''] before:absolute before:inset-0 before:bg-dots before:opacity-20 select-none ">
      <div className="relative w-10/12 lg:w-3/4 mx-auto py-6">
        {/* Top */}
        <section>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-1 h-6 bg-background-second mr-1 animate-pulse"></div>
              <h2 className="text-xl font-semibold">
                Dimas Azizir <span className="bg-white text-main text-sm uppercase p-1 ml-1">hi.</span>
              </h2>
            </div>
            <div className="flex gap-4">
              <Link href="https://drive.google.com/file/d/1crw4-xNk9-j0uGo_qzrpKTr11yAvbZ8r/view?usp=sharing" target="_blank">
                <button className="bg-background-second hover:bg-[#a0153e] hover:skew-y-3 text-white font-bold py-2 px-4 rounded duration-300">Resume</button>
              </Link>
              <Link href="https://drive.google.com/file/d/1KZ7BEtVz7MGqxLTDDtR1DvTXwbqy4829/view?usp=sharing" target="_blank">
                <button className="bg-background-second hover:bg-[#a0153e] hover:skew-y-3 text-white font-bold py-2 px-4 rounded duration-300">Detail Portfolio</button>
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section>
          <div className="mt-16">
            <h2 className="text-lg font-semibold">About.</h2>
            <p className="md:w-1/2 mt-4">
              A graduates from <span className="font-semibold">President University</span> who have an interest in the field of <span className="text-red-500 font-semibold">Frontend Engineer</span>
            </p>
            <ul className="flex gap-5 mt-2">
              {socialMedia.map((social, index) => (
                <li key={index}>
                  <Link href={social.link} target="_blank">
                    <span className="hover:text-red-500">{social.icon}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* <section>
        <div className="mt-16">
          <h2 className="text-center text-lg font-semibold">Familiar with</h2>
          <div className="flex justify-center items-center gap-5 mt-4">
            {familiarTech.map((tech, index) => (
              <ul key={index}>
                <li>
                  <Image src={tech.icon} alt="tech" width={75} height={75} />
                </li>
              </ul>
            ))}
          </div>
        </div>
      </section> */}

        {/* Work Experiences */}
        <section>
          <div className="mt-16">
            <h2 className="text-lg font-semibold">Work Experiences.</h2>
            <div className="relative ml-4">
              {workExperience.map((work, index) => (
                <div key={index} className="mt-4 pl-4 relative">
                  {index < workExperience.length && <span className="absolute left-0 top-0 h-full border-l-2 border-red-500" />}
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{work.company}</h3>
                    <p className="text-sm">{work.date}</p>
                  </div>

                  <p className="text-sm">{work.position}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {work.tech.map((tech, idx) => (
                      <span key={idx} className="border border-red-500 text-third rounded-full px-2 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <div className="mt-16">
            <h2 className="text-lg font-semibold">Projects.</h2>
            <div className="grid md:grid-cols-2 gap-5 mt-4">
              {projects.map((project, index) => (
                <div key={index} className="border p-3 rounded-lg hover:scale-105 duration-300">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      <Link href={project.github} target="_blank">
                        {project.github && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="hover:text-red-500">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.16c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.35-1.78-1.35-1.78-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.84 1.31 3.54 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.91 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.52 11.52 0 013.01-.4c1.02.01 2.05.14 3.01.4 2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.59-2.81 5.61-5.49 5.9.43.37.82 1.1.82 2.23v3.31c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                          </svg>
                        )}
                      </Link>
                      <Link href={project.website}>
                        {project.website && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="hover:text-red-500">
                            <path d="M10.59 13.41a1 1 0 0 0 1.41 0l4.24-4.24a1 1 0 1 0-1.41-1.41l-4.24 4.24a1 1 0 0 0 0 1.41zm-4.95 6.36A5 5 0 0 1 3 13.66l1.41-1.41a5 5 0 0 1 7.07 0 1 1 0 1 0 1.41-1.41 7 7 0 0 0-9.9 0L1.58 12.24a7 7 0 0 0 0 9.9 7 7 0 0 0 9.9 0l1.41-1.41a1 1 0 1 0-1.41-1.41l-1.41 1.41a5 5 0 0 1-7.07 0zm16.97-16.97a7 7 0 0 0-9.9 0l-1.41 1.41a1 1 0 1 0 1.41 1.41l1.41-1.41a5 5 0 0 1 7.07 0 5 5 0 0 1 0 7.07l-1.41 1.41a5 5 0 0 1-7.07 0 1 1 0 1 0-1.41 1.41 7 7 0 0 0 9.9 0l1.41-1.41a7 7 0 0 0 0-9.9z" />
                          </svg>
                        )}
                      </Link>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="border border-red-500 text-third rounded-full px-2 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
