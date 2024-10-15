const Publications = ({ isDarkMode, publications }) => {
  const api = process.env.REACT_APP_API_URL;

  return (
    <section
      id="publications"
      className={`pt-20 pb-10 ${
        isDarkMode ? "bg-dark-bg text-dark-text" : "bg-light-bg text-light-text"
      }`}
    >
      <div className=" flex flex-row w-3/4 mx-auto gap-10 ">
        <div className="w-1/4">
          <h2 className="text-4xl font-serif leading-relaxed  mr-20 mt-5">
            Publications
          </h2>
        </div>
        <div className="w-/3/4 flex-col ">
          {publications &&
            publications.map((publication) => (
              <div
                className=" flex flex-row items-center my-5"
                key={publication.id}
              >
                <div className=" w-3/4 ">
                  <div className="  text-2xl pb-5 hover:text-blue-700 hover:underline">
                    <a href={publication.link} target="blank">
                      {publication.title}
                    </a>
                  </div>
                  <a
                    href={publication.link}
                    target="blank"
                    className=" text-gray-500 hover:underline "
                  >
                    With the global upsurge in climatic extremes, disasters are
                    causing more significant damages. While disaster risk
                    management (DRM) is a …
                  </a>
                </div>
                <div className=" w-1/4">
                  <a href={publication.link} target="blank" className="">
                    <img
                      src={api + "/" + publication.image?.url}
                      alt="publication image"
                      className="w-[10vw] h-[20vh]  object-cover mx-auto transition-transform transform hover:scale-105"
                    />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
