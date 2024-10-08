import React from "react";
import Home from "../sections/Home";
import Projects from "../sections/Projects";

const Sections = ({ isDarkMode }) => {
  return (
    <main className="">
      <Home isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />

      <section id="publications" className="min-h-screen  text-white p-10">
        <h1 className="text-4xl font-bold">Section 3</h1>
        <p className="mt-4">Content for Section 3.</p>
      </section>

      <section
        id="posts"
        className="min-h-screen bg-yellow-500 text-white p-10"
      >
        <h1 className="text-4xl font-bold">Section 4</h1>
        <p className="mt-4">Content for Section 4.</p>
      </section>
      <section
        id="research"
        className="min-h-screen bg-yellow-500 text-white p-10"
      >
        <h1 className="text-4xl font-bold">Section 5</h1>
        <p className="mt-4">Content for Section 5.</p>
      </section>
      <section
        id="visualizations"
        className="min-h-screen bg-yellow-500 text-white p-10"
      >
        <h1 className="text-4xl font-bold">Section 6</h1>
        <p className="mt-4">Content for Section 6.</p>
      </section>
    </main>
  );
};

export default Sections;
