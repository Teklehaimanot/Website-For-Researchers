import React from "react";
import Home from "../sections/Home";
import Projects from "../sections/Projects";
import Publications from "../sections/Publications";
import Workshop from "../sections/Workshop";

const Sections = ({ isDarkMode }) => {
  return (
    <main className="">
      <Home isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Publications isDarkMode={isDarkMode} />
      <Workshop isDarkMode={isDarkMode} />
    </main>
  );
};

export default Sections;
