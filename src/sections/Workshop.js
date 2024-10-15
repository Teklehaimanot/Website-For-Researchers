import axios from "axios";
import React, { useEffect, useState } from "react";

const Workshop = () => {
  const [workshops, setWorkshops] = useState([]);
  const [error, setError] = useState("");
  const token = process.env.REACT_APP_TOKKEN;
  const api = process.env.REACT_APP_API_URL;
  const [loading, setLoading] = useState(true);

  const arr = [1, 2, 3, 4, 5];

  const fetchData = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const responsse = await axios.get(
        `${api}/api/workshop-and-presentations1`,
        {
          headers,
        }
      );

      const result = await responsse.data;
      setWorkshops(result.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <section id="workshop" className=" pt-20 pb-20">
      <div className=" w-3/4 mx-auto">
        <div>
          <h2 className="text-4xl font-serif leading-relaxed border-b-2">
            Workshops and Presentations
          </h2>
        </div>
        {workshops &&
          workshops.map((workshop) => (
            <div key={workshop.id}>
              <div className=" my-5 mx-5">
                <h2 className=" text-2xl font-sans"> {workshop.name}</h2>
              </div>
              <div className=" mx-10">
                <li>Title: {workshop.title}</li>
                <li>Date: {workshop.date}</li>
                <li>Location: {workshop.location}</li>
              </div>
              <div className=" mx-5 my-3">
                <p>{workshop.description}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Workshop;
