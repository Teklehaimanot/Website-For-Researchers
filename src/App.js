import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme());

  const [profile, setProfile] = useState("");
  const [error, setError] = useState("");
  const token = process.env.REACT_APP_TOKKEN;
  const api = process.env.REACT_APP_API_URL;
  const [loading, setLoading] = useState(true);

  const feathData = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`, // Add Authorization header
        "Content-Type": "application/json",
      };
      const response = await axios.get(
        `${api}/api/profile?populate=social_medias`,
        {
          headers,
        }
      );

      const result = response.data;
      setProfile(result.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    feathData();
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
    <BrowserRouter>
      <div
        className={
          isDarkMode
            ? "bg-dark-bg2 text-dark-text"
            : "bg-light-bg2 text-light-text"
        }
      >
        <Navbar
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
          profile={profile}
        />
        <Sections isDarkMode={isDarkMode} />
      </div>
    </BrowserRouter>
  );
}

export default App;
