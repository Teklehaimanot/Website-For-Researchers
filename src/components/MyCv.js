import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const MyCv = () => {
  const [myCv, setMycv] = useState("");
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
        "https://desu.smartcsvtool.com/api/cv?populate=cv_pdf",
        {
          headers,
        }
      );

      const result = await response.data;
      setMycv(result.data);
      setLoading(false);
    } catch (error) {
      setError(error);
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
    <div className="container mx-auto pt-20">
      <h1 className="text-2xl font-bold underline">My CV | {myCv.your_name}</h1>
      <p className="text-gray-500">{myCv.full_name}</p>
      <iframe
        src={api + "" + myCv.cv_pdf?.url}
        title="CV"
        width="100%"
        height="1000px"
        className="border border-gray-300"
      ></iframe>
    </div>
  );
};

export default MyCv;
