import axios from "axios";
import React, { useEffect, useState } from "react";

const Projects = ({ isDarkMode, projects }) => {
  const api = process.env.REACT_APP_API_URL;

  const myProjects = projects.sort(
    (a, b) => new Date(b.last_updated) - new Date(a.last_updated)
  );

  return (
    <section id="projects" className="pt-20 pb-12">
      <div className="flex flex-col mx-auto">
        <div className=" mx-auto mb-5">
          <h1 className="text-4xl font-serif leading-relaxed">
            {" "}
            Grants and Awards
          </h1>
        </div>
        <div className=" flex flex-row flex-wrap w-full gap-10  justify-center py-2  ">
          {myProjects &&
            myProjects.map((project) => {
              return (
                <div
                  className={`${
                    isDarkMode ? " bg-dark-bg" : "bg-light-bg"
                  } lg:w-1/4 md:w-1/3 w-[90vw] p-5`}
                  key={project.id}
                >
                  <div className="mb-5 text-gray-500 text-sm">
                    <span>Last updated on {project.last_updated}</span>
                  </div>
                  <a href={project.link} target="blank" className="z-10">
                    <div>
                      <img
                        src={api + "/" + project.image?.url}
                        alt=" project image"
                        className="h-80  object-cover transition-transform transform hover:scale-105  "
                      />
                    </div>
                  </a>
                  <div className="my-3 underline ">
                    <a
                      href={project.link}
                      target="blank"
                      className="text-lg font-sans  hover:text-blue-500"
                    >
                      {project.title}
                    </a>
                  </div>
                  <div className=" py-2  text-sm">
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
