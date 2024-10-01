import React from "react";

const Home = ({ isDarkMode }) => {
  return (
    <section
      id="section1"
      className={`min-h-screen pt-20 ${
        isDarkMode ? "bg-dark-bg text-dark-text" : "bg-light-bg text-light-text"
      }`}
    >
      <h1 className="text-4xl font-bold">Section 1</h1>
      <p className="mt-4">Content for Section 1.</p>
    </section>
  );
};

export default Home;
