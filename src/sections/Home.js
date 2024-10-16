import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import axios from "axios";

const Home = ({ isDarkMode, profile, Interests, educations }) => {
  const api = process.env.REACT_APP_API_URL;
  return (
    <section
      id="about"
      className={`pt-20 pb-10 ${
        isDarkMode ? "bg-dark-bg text-dark-text" : "bg-light-bg text-light-text"
      }`}
    >
      {profile && (
        <div className="flex lg:flex-row flex-col justify-between xl:w-3/4 mx-auto space-x-5  my-14">
          <div className="lg:w-2/5 flex flex-col space-y-7 ">
            <div className=" space-y-2 flex flex-col items-center">
              <img
                src={api + "/" + profile.profile_pic?.url}
                alt="profile preview"
                className=" lg:w-[17vw] lg:h-[17vw] md:w-[30vw] md:h-[30vw] sm:w-[40vw] sm:h-[40vw] w-[60vw] h-[60vw] rounded-full object-cover mx-auto"
              />
              <h2 className=" text-4xl font-light ">{profile.name}</h2>
              <h3 className="text-lg text-gray-500">{profile.position}</h3>
              <h3 className=" font-light hover:text-blue-700 ">
                <a href="https://smartcsvtool.com" target="blank">
                  {profile.Institution}
                </a>
              </h3>
            </div>
            <ul className=" flex  mx-auto space-x-7 flex-wrap ">
              <li className="">
                <a href={profile.social_medias[1]?.link} target="blank">
                  <MdEmail
                    size={32}
                    color={isDarkMode ? "#bbdefb" : "0e76a8"}
                    className="transition-transform transform hover:scale-150"
                  />
                </a>
              </li>
              <li>
                <a href={profile.social_medias[2]?.link} target="blank">
                  <FaGoogleScholar
                    size={32}
                    color={isDarkMode ? "#bbdefb" : "0e76a8"}
                    className="transition-transform transform hover:scale-150"
                  />
                </a>
              </li>
              <li>
                <a href={profile.social_medias[0]?.link} target="blank">
                  <FaGithub
                    size={32}
                    color={isDarkMode ? "#bbdefb" : "0e76a8"}
                    className="transition-transform transform hover:scale-150"
                  />
                </a>
              </li>
              <li>
                <a href={profile.social_medias[3]?.link} target="blank">
                  <FaLinkedin
                    size={32}
                    color={isDarkMode ? "#bbdefb" : "0e76a8"}
                    className="transition-transform transform hover:scale-150"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:w-3/5 ">
            <div>
              <p className=" font-serif text-xl my-5 text-pretty leading-relaxed tracking-wide whitespace-pre-line ">
                {profile.description}
              </p>
            </div>
            <div className="flex flex-row  space-x-10">
              <div className="w-1/2">
                <h3 className=" text-2xl font-serif">Interests</h3>
                <ul className=" ml-7 my-2  font-serif  leading-relaxed tracking-wide list-disc list-inside space-y-2">
                  {Interests?.map((interest) => (
                    <li key={interest.id}>{interest.title}</li>
                  ))}
                </ul>
              </div>
              <div className="1/2">
                <h3 className=" text-2xl font-serif">Education</h3>
                <ul className=" ml-7 my-2  font-serif  leading-relaxed tracking-wide space-y-3">
                  {educations?.map((education) => (
                    <li
                      className=" flex flex-row space-x-4 "
                      key={education.id}
                    >
                      <FaGraduationCap size={24} />
                      <div className="font-serif  leading-relaxed tracking-wide">
                        <p>
                          {education.level} in {education.field_of_study},{" "}
                          {education.year?.split("-")[0]}
                        </p>
                        <p className=" font-light  text-sm text-gray-500">
                          {education.university}
                        </p>
                      </div>
                    </li>
                  ))}
                  <li className=" flex flex-row space-x-4 ">
                    <FaGraduationCap size={24} />
                    <div className="font-serif  leading-relaxed tracking-wide">
                      <p>PhD in Geography (cont.), 2026</p>
                      <p className=" font-light  text-sm text-gray-500">
                        Hong Kong Baptist University - HK
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
