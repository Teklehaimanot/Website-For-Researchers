import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

const Home = ({ isDarkMode }) => {
  const [profile, setProfile] = useState("");
  const [error, setError] = useState("");

  const token = process.env.REACT_APP_TOKKEN;
  const api = process.env.REACT_APP_API_URL;
  const [loading, setLoading] = useState(true);

  const feachData = async () => {
    try {
      const response = await fetch(`${api}/api/profile?populate=profile_pic`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Add Authorization header
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setProfile(data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log("er", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    feachData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section
      id="about"
      className={`pt-20 pb-10 ${
        isDarkMode ? "bg-dark-bg text-dark-text" : "bg-light-bg text-light-text"
      }`}
    >
      {profile && (
        <div className="flex flex-row justify-between w-3/4 mx-auto space-x-5  my-14">
          <div className="w-2/5 flex flex-col space-y-7 ">
            <div className=" space-y-2 flex flex-col items-center">
              <img
                src={api + "/" + profile.profile_pic?.url}
                alt="profile preview"
                className=" w-[17vw] h-[17vw] rounded-full object-cover mx-auto"
              />
              <h2 className=" text-4xl font-light ">{profile.name}</h2>
              <h3 className="text-lg text-gray-500">{profile.position}</h3>
              <h3 className=" text font-light hover:text-blue-700   ">
                <a href="https://smartcsvtool.com" target="blank">
                  {profile.Institution}
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
            <div>
              <p className=" font-serif text-xl my-5 text-pretty leading-relaxed tracking-wide whitespace-pre-line ">
                {profile.description}
              </p>
            </div>
            <div className="flex flex-row  space-x-10">
              <div className="w-1/2">
                <h3 className=" text-2xl font-serif">Interests</h3>
                <ul className=" ml-7 my-2  font-serif  leading-relaxed tracking-wide list-disc list-inside space-y-2">
                  <li>Remote Sensing & GIS</li>
                  <li>Applied Machine Learning</li>
                  <li>Google Earth Engine</li>
                  <li>Disaster Risk Management (Floods)</li>
                </ul>
              </div>
              <div className="1/2">
                <h3 className=" text-2xl font-serif">Education</h3>
                <ul className=" ml-7 my-2  font-serif  leading-relaxed tracking-wide space-y-3">
                  <li className=" flex flex-row space-x-4 ">
                    <FaGraduationCap size={24} />
                    <div className="font-serif  leading-relaxed tracking-wide">
                      <p>PhD in Geography (cont.), 2026</p>
                      <p className=" font-light  text-sm text-gray-500">
                        Hong Kong Baptist University - HK
                      </p>
                    </div>
                  </li>
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
