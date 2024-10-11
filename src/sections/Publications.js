import React from "react";

const Publications = ({ isDarkMode }) => {
  const arr = [1, 2, 3, 4, 5];
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
          {arr.map(() => (
            <div className=" flex flex-row items-center my-5">
              <div className=" w-3/4 ">
                <div className="  text-2xl pb-5 hover:text-blue-700 hover:underline">
                  <a href="https://smartcsvtool.com">
                    Urbanization-led land cover change impacts terrestrial
                    carbon storage capacity: A high-resolution remote
                    sensing-based nation-wide assessment in Pakistan (1990–2020)
                  </a>
                </div>
                <a
                  href="https://smartcsvtool.com"
                  className=" text-gray-500 hover:underline "
                >
                  With the global upsurge in climatic extremes, disasters are
                  causing more significant damages. While disaster risk
                  management (DRM) is a …
                </a>
              </div>
              <div className=" w-1/4">
                <a href="https://smartcvtool.com" className="">
                  <img
                    src="http://78.47.152.86:1337/uploads/thumbnail_photo_2024_08_27_13_40_03_750x430_a2c3fa5137.jpg"
                    alt="publication image"
                    className="w-[10vw] h-[20vh]  object-cover mx-auto"
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
