import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Visualizations = () => {
  const [visualizations, setVisualizations] = useState([]);
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

      const response = await axios.get(
        `${api}/api/visualizations?populate=image`,
        {
          headers,
        }
      );
      setVisualizations(response.data.data);
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
    <div id="visualizations" className=" pt-20 pb-20 min-h-screen">
      <div className=" md:w-5/6 mx-auto">
        <div className=" flex border-b-2">
          <h2 className=" mx-auto text-4xl font-serif leading-relaxed ">
            Visualizations
          </h2>
        </div>
        <div className=" flex flex-col justify-between flex-wrap my-5 ">
          {visualizations &&
            visualizations
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((visualizations) => (
                <div
                  className="  my-2 flex md:flex-row flex-col  gap-5  p-1 shadow-md"
                  key={visualizations.id}
                >
                  <div className="md:w-1/3 ">
                    <img
                      src={api + "/" + visualizations.image?.url}
                      alt=" Visualization image"
                      className="h-60 w-full  object-cover transition-transform transform hover:scale-105  "
                    />
                  </div>
                  <div className="md:w-2/3 py-5">
                    <div className=" flex gap-5 mb-5">
                      <h2 className=" text-blue-500">
                        {visualizations.title}{" "}
                      </h2>
                      <p className=" text-gray-500">{visualizations.date}</p>
                    </div>

                    <div>
                      <p className="text-sm my-5 text-pretty leading-relaxed tracking-wide whitespace-pre-line">
                        {visualizations.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* {myWorkshops &&
          myWorkshops.map((workshop) => (
            <div key={workshop.id}>
              <div className=" my-5 mx-5">
                <h2 className=" text-2xl font-sans"> {workshop.name}</h2>
              </div>
              <div className=" mx-10">
                <li>
                  Title:{" "}
                  <a href={workshop.link} target="blank">
                    <span className=" font-serif text-gray-500 hover:text-blue-800 hover:underline">
                      {workshop.title}
                    </span>
                  </a>
                </li>
                <li>
                  Date:{" "}
                  <span className=" font-serif text-gray-500">
                    From {workshop.start_date} to {workshop.end_date}
                  </span>
                </li>
                <li>
                  Location:{" "}
                  <span className=" font-serif text-gray-500">
                    {workshop.location}
                  </span>
                </li>
              </div>
              <div className=" mx-5 my-3">
                <p>{workshop.description}</p>
              </div>
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default Visualizations;
