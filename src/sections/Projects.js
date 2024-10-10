import React from "react";

const Projects = ({ isDarkMode }) => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <section id="projects">
      <div className="flex flex-col w-5/6 mx-auto">
        <div className=" mx-auto my-10">
          <h1 className="text-4xl font-serif leading-relaxed"> Projects</h1>
        </div>
        <div className=" flex flex-row flex-wrap w-full gap-10  justify-center py-2  ">
          {arr.map(() => {
            return (
              <div
                className={`${
                  isDarkMode ? " bg-dark-bg" : "bg-light-bg"
                } w-1/4 p-5`}
              >
                <div className="mb-5 text-gray-500 text-sm">
                  <span>Last updated on 20 Nov 2023</span>
                </div>
                <a
                  href="https://github.com/Teklehaimanot"
                  target="blank"
                  className="z-10"
                >
                  <div>
                    <img
                      src="https://waleedgeo.com/project/30daymap/featured_hu8905355628c839ba36b674fa5ef16ed1_38795_808x455_fill_q75_h2_lanczos_center_3.webp"
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
                    30 Day Map Challenge (2023)
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
