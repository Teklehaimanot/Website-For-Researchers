const Workshop = ({ workshops }) => {
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
