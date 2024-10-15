import axios from "axios";
import React, { useEffect, useState } from "react";

const Projects = ({ isDarkMode }) => {
  const [projects, setProjects] = useState([]);

  const [error, setError] = useState("");
  const token = process.env.REACT_APP_TOKKEN;
  const api = process.env.REACT_APP_API_URL;
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const responsse = await axios.get(
        `${api}/api/projects1/?populate=image`,
        {
          headers,
        }
      );

      const result = await responsse.data;
      setProjects(result.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
                >
                  <div className="mb-5 text-gray-500 text-sm">
                    <span>Last updated on {project.last_updated}</span>
                  </div>
                  <a
                    href="https://github.com/Teklehaimanot"
                    target="blank"
                    className="z-10"
                  >
                    <div>
                      <img
                        src={api + "/" + project.image?.url}
                        alt=" project demo"
                        className="h-80  object-cover transition-transform transform hover:scale-105  "
                      />
                    </div>
                  </a>
                  <div className="mt-5 ">
                    <a
                      href="https://github.com/Teklehaimanot"
                      target="blank"
                      className="text-xl  hover:text-blue-700"
                    >
                      {project.title}
                    </a>
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
