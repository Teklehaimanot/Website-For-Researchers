import React from "react";
import Home from "../sections/Home";

const Sections = ({ isDarkMode }) => {
  return (
    <main className="">
      <Home isDarkMode={isDarkMode} />
      <section
        id="section2"
        className="min-h-screen bg-dark-bg2 text-white p-10"
      >
        <h1 className="text-4xl font-bold">Section 2</h1>
        <p className="mt-4">Content for Section 2.</p>
      </section>

      <section id="section3" className="min-h-screen  text-white p-10">
        <h1 className="text-4xl font-bold">Section 3</h1>
        <p className="mt-4">Content for Section 3.</p>
      </section>

      <section
        id="section4"
        className="min-h-screen bg-yellow-500 text-white p-10"
      >
        <h1 className="text-4xl font-bold">Section 4</h1>
        <p className="mt-4">Content for Section 4.</p>
      </section>
      <section
        id="section5"
        className="min-h-screen bg-yellow-500 text-white p-10"
      >
        <h1 className="text-4xl font-bold">Section 5</h1>
        <p className="mt-4">Content for Section 5.</p>
      </section>
      <section
        id="section6"
        className="min-h-screen bg-yellow-500 text-white p-10"
      >
        <h1 className="text-4xl font-bold">Section 6</h1>
        <p className="mt-4">Content for Section 6.</p>
      </section>
    </main>
  );
};

export default Sections;
