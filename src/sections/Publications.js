import PublicationCard from "../components/PublicationCard";

const Publications = ({ isDarkMode, publications }) => {
  const api = process.env.REACT_APP_API_URL;

  return (
    <section
      id="publications"
      className={`pt-20 pb-10 ${
        isDarkMode ? "bg-dark-bg text-dark-text" : "bg-light-bg text-light-text"
      }`}
    >
      <div className=" flex lg:flex-row flex-col lg:w-3/4 w-[90vw] mx-auto gap-10 ">
        <div className="lg:w-1/4">
          <h2 className="text-4xl  font-serif leading-relaxed  mr-20 mt-5">
            Publications
          </h2>
        </div>
        <div className="lg:w-/3/4 flex-col ">
          {publications &&
            publications.map((publication) => (
              <PublicationCard publication={publication} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
