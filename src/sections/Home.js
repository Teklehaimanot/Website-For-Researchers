import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Home = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen pt-20 ${
        isDarkMode ? "bg-dark-bg text-dark-text" : "bg-light-bg text-light-text"
      }`}
    >
      <div className="flex flex-row justify-between w-3/4 mx-auto space-x-5  my-14">
        <div className="w-2/5 flex flex-col space-y-7 ">
          <div className=" space-y-2 flex flex-col items-center">
            <img
              src="http://78.47.152.86:1337/uploads/thumbnail_photo_2024_08_27_13_40_03_750x430_a2c3fa5137.jpg"
              alt="profile preview"
              className=" w-[17vw] h-[17vw] rounded-full object-cover mx-auto"
            />
            <h2 className=" text-4xl font-light ">Teklehaimanot</h2>
            <h3 className="text-lg text-gray-500">
              PhD Researcher | Google Developer Expert
            </h3>
            <h3 className=" text font-light hover:text-blue-700   ">
              <a href="https://smartcsvtool.com" target="blank">
                Department of Geography, Hong Kong Baptist University
              </a>
            </h3>
          </div>
          <ul className=" flex  mx-auto space-x-7 flex-wrap ">
            <li className="">
              <a href="mailto:waleedgeo@outlook.com" target="blank">
                <MdEmail
                  size={32}
                  color={isDarkMode ? "#bbdefb" : "0e76a8"}
                  className="transition-transform transform hover:scale-150"
                />
              </a>
            </li>
            <li>
              <a href="https://smartcsvtool.com" target="blank">
                <FaGoogleScholar
                  size={32}
                  color={isDarkMode ? "#bbdefb" : "0e76a8"}
                  className="transition-transform transform hover:scale-150"
                />
              </a>
            </li>
            <li>
              <a href="https://smartcsvtool.com" target="blank">
                <FaGithub
                  size={32}
                  color={isDarkMode ? "#bbdefb" : "0e76a8"}
                  className="transition-transform transform hover:scale-150"
                />
              </a>
            </li>
            <li>
              <a href="https://smartcsvtool.com" target="blank">
                <FaLinkedin
                  size={32}
                  color={isDarkMode ? "#bbdefb" : "0e76a8"}
                  className="transition-transform transform hover:scale-150"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-3/5">
          <p className=" font-serif text-xl my-7 text-pretty leading-relaxed tracking-wide ">
            I am Waleed, a PhD Fellow in Geography focusing on remote sensing,
            geo-analytics, cloud computing, and artificial intelligence for
            disaster risk management, particularly for flood hazard. Besides, I
            am a Google Developer Expert in Earth Engine category. I am also
            working part-time on Fiverr, where I provide geospatial analytics
            and Google Earth Engine related consultancy services. My ultimate
            goal is to develop new (open-source) techniques or methods to
            improve the accuracy and effectiveness of flood hazard mapping,
            monitoring, and risk assessment. I am also interested in creating
            open-sourced tools, which can simplify existing geospatial analysis.
            I am always enthusiastic about connecting with like-minded
            professionals who share my passion for geospatial analytics, and I
            welcome any opportunity to collaborate and create a positive impact
            together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
