import React, { useEffect, useState } from "react";
import Home from "../sections/Home";
import Projects from "../sections/Projects";
import Publications from "../sections/Publications";
import Workshop from "../sections/Workshop";
import axios from "axios";
import Loader from "./Loader";

const Sections = ({ isDarkMode }) => {
  const [profile, setProfile] = useState("");
  const [Interests, setInterests] = useState("");
  const [educations, setEducations] = useState("");
  const [projects, setProjects] = useState([]);
  const [publications, setPublications] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [error, setError] = useState("");

  const token = process.env.REACT_APP_TOKKEN;
  const api = process.env.REACT_APP_API_URL;
  const [loading, setLoading] = useState(true);

  const feachData = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`, // Add Authorization header
        "Content-Type": "application/json",
      };

      const response1 = await axios.get(
        `${api}/api/profile?populate[profile_pic]=*&&populate[social_medias]=*`,
        {
          headers,
        }
      );
      const response2 = await axios.get(`${api}/api/interests`, {
        headers,
      });
      const response3 = await axios.get(`${api}/api/educations`, {
        headers,
      });
      const response4 = await axios.get(`${api}/api/projects/?populate=image`, {
        headers,
      });

      const response5 = await axios.get(`${api}/api/publications`, {
        headers,
      });
      const response6 = await axios.get(
        `${api}/api/workshop-and-presentations`,
        {
          headers,
        }
      );

      const [result1, result2, result3, result4, result5, result6] =
        await Promise.all([
          response1,
          response2,
          response3,
          response4,
          response5,
          response6,
        ]);
      setProfile(result1.data.data);
      setInterests(result2.data.data);
      setEducations(result3.data.data);
      setProjects(result4.data.data);
      setPublications(result5.data.data);
      setWorkshops(result6.data.data);

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

  if (loading)
    return (
      <div className=" flex justify-center min-h-screen">
        <div className=" my-auto">
          <Loader />
        </div>
      </div>
    );
  if (error)
    return (
      <div className=" flex justify-center min-h-screen">
        <div className=" my-auto">
          <p className=" text-red-500">{error.message} </p>
        </div>
      </div>
    );

  return (
    <main className="content">
      <Home
        isDarkMode={isDarkMode}
        profile={profile}
        Interests={Interests}
        educations={educations}
      />
      <Projects isDarkMode={isDarkMode} projects={projects} />
      <Publications isDarkMode={isDarkMode} publications={publications} />
      <Workshop isDarkMode={isDarkMode} workshops={workshops} />
    </main>
  );
};

export default Sections;
