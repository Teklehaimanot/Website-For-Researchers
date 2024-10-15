import axios from "axios";
import React, { useEffect, useState } from "react";

const Projects = ({ isDarkMode, projects }) => {
  // const [projects, setProjects] = useState([]);
  const api = process.env.REACT_APP_API_URL;

  return (
    <section id="projects" className="pt-20 pb-12">
      <div className="flex flex-col w-5/6 mx-auto">
        <div className=" mx-auto mb-5">
          <h1 className="text-4xl font-serif leading-relaxed"> Projects</h1>
        </div>
        <div className=" flex flex-row flex-wrap w-full gap-10  justify-center py-2  ">
          {projects &&
            projects.map((project) => {
              return (
                <div
                  className={`${
                    isDarkMode ? " bg-dark-bg" : "bg-light-bg"
                  } w-1/4 p-5`}
                  key={project.id}
                >
                  <div className="mb-5 text-gray-500 text-sm">
                    <span>Last updated on {project.last_updated}</span>
                  </div>
                  <a href={project.link} target="blank" className="z-10">
                    <div>
                      <img
                        src={api + "/" + project.image?.url}
                        alt=" project demo"
                        className="h-80  object-cover transition-transform transform hover:scale-105  "
                      />
                    </div>
                  </a>
                  <div className="my-3 underline ">
                    <a
                      href={project.link}
                      target="blank"
                      className="text-xl  hover:text-blue-700"
                    >
                      {project.title}
                    </a>
                  </div>
                  <div className=" py-2">
                    <p>{project.description}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
