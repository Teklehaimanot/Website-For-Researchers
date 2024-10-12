import React from "react";

const Workshop = () => {
  const arr = [1, 2, 3, 4, 5];

  return (
    <section id="workshop" className=" pt-20 pb-20">
      <div className=" w-3/4 mx-auto">
        <div>
          <h2 className="text-4xl font-serif leading-relaxed border-b-2">
            Workshops and Presentations
          </h2>
        </div>
        {arr.map(() => (
          <div>
            <div className=" my-5 mx-5">
              <h2 className=" text-2xl font-sans"> Workshop 1</h2>
            </div>
            <div className=" mx-10">
              <li>Title: Geostatistical modelling</li>
              <li>Date: September 17, 2022</li>
              <li>Location: Hilton Hotel, Brisbane</li>
            </div>
            <div className=" mx-5 my-3">
              <p>
                I was an invited speaker at the 5th Annual South Cross Travel
                Medicine Conference and the Inaugural South Cross Tropical
                Medicine Conference, conducted from 16th - 18th September 2022
                at Hilton Hotel Brisbane.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workshop;
