import React, { useState } from "react";

const PublicationCard = ({ publication }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className=" flex flex-row lg:items-center my-5" key={publication.id}>
      <div className=" lg:w-full w-[90vw]  p-3">
        <div className=" xl:text-lg pb-5 hover:text-blue-500 hover:underline">
          <a href={publication.link} target="blank">
            {publication.title}
          </a>
        </div>
        <div>
          <p className=" text-gray-500">{publication.description}</p>
        </div>
        {isExpanded && (
          <div className="mt-4">
            <p className="text-gray-600">{publication.abstract}</p>
          </div>
        )}

        <button
          onClick={toggleExpand}
          className="mt-2 text-blue-400 hover:underline focus:outline-none "
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default PublicationCard;
