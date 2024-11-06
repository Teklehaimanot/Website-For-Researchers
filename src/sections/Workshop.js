const Workshop = ({ workshops }) => {
  console.log(workshops);

  const myWorkshops = workshops.sort(
    (a, b) => new Date(b.start_date) - new Date(a.start_date)
  );
  return (
    <section id="workshop" className=" pt-20 pb-20">
      <div className=" md:w-3/4 mx-auto">
        <div>
          <h2 className=" mx-5 text-4xl font-serif leading-relaxed border-b-2">
            Training & Workshops
          </h2>
        </div>
        {myWorkshops &&
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
          ))}
      </div>
    </section>
  );
};

export default Workshop;
