import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const Visualizations = () => {
  const [visualizations, setVisualizations] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedVisualization, setSelectedVisualization] = useState(null);

  const token = process.env.REACT_APP_TOKKEN;
  const api = process.env.REACT_APP_API_URL;

  const fetchData = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`, // Add Authorization header
        "Content-Type": "application/json",
      };

      const response = await axios.get(
        `${api}/api/visualizations?populate=image`,
        { headers }
      );
      setVisualizations(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log("Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (visualization) => {
    setSelectedVisualization(visualization);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedVisualization(null);
  };

  if (loading)
    return (
      <div className="flex justify-center min-h-screen">
        <div className="my-auto">
          <Loader />
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center min-h-screen">
        <div className="my-auto">
          <p className="text-red-500">{error.message}</p>
        </div>
      </div>
    );

  return (
    <div id="visualizations" className="pt-20 pb-20 min-h-screen">
      <div className="md:w-5/6 mx-auto">
        <div className="flex border-b-2">
          <h2 className="mx-auto text-4xl font-serif leading-relaxed">
            Visualizations
          </h2>
        </div>
        <div className="flex flex-col justify-between flex-wrap my-5">
          {visualizations &&
            visualizations
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((visualization) => (
                <div
                  className="my-2 flex md:flex-row flex-col gap-5 p-1 shadow-md"
                  key={visualization.id}
                >
                  <div className="md:w-1/3">
                    <img
                      src={api + "/" + visualization.image?.url}
                      alt="Visualization image"
                      className="w-full object-cover transition-transform transform hover:scale-105 cursor-pointer"
                      onClick={() => openModal(visualization)}
                    />
                  </div>
                  <div className="md:w-2/3 py-5">
                    <div className="flex gap-5 mb-5">
                      <h2 className="text-blue-500">{visualization.title}</h2>
                      <p className="text-gray-500">{visualization.date}</p>
                    </div>
                    <div>
                      <p className="text-sm my-5 text-pretty leading-relaxed tracking-wide whitespace-pre-line">
                        {visualization.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>

      {showModal && selectedVisualization && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-md shadow-lg w-3/4 max-w-3xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">
                {selectedVisualization.title}
              </h2>
              <button className="text-red-500 font-bold" onClick={closeModal}>
                X
              </button>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={api + "/" + selectedVisualization.image?.url}
                alt="Visualization"
                className="w-full h-auto mb-4"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Visualizations;
