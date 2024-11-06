import { useEffect, useState } from "react";
import DarkMode from "./DarkMode";
import LightMode from "./LightMode";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ toggleTheme, isDarkMode, profile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // To track the active section
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "publications", "workshop", "cv"]; // Added 'cv' to the list
      let currentSection = "";

      // Loop through each section and determine which one is in view
      for (const section of sections) {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const { top, bottom } = sectionElement.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (sectionId) => {
    navigate("/"); // navigate to the home page
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Allow time for the navigation to complete
  };

  return (
    <header
      className={`p-4 fixed top-0 left-0 w-full z-10 shadow-md ${
        isDarkMode
          ? "bg-dark-bg text-dark-text shadow-gray-600"
          : "bg-light-bg text-light-text"
      }`}
    >
      <nav className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDrawer}
              className={`${
                isDarkMode ? "text-dark-text" : "text-light-text"
              } focus:outline-none`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex">
            <button
              onClick={() => handleScrollToSection("about")}
              className={`${
                isDarkMode
                  ? activeSection === "about"
                    ? "text-blue-500"
                    : "text-dark-text hover:text-dark-primary"
                  : activeSection === "about"
                  ? "text-blue-500"
                  : "text-light-text hover:text-light-primary"
              } px-3 py-2 rounded-md text-sm font-medium`}
            >
              Home
            </button>
            <button
              onClick={() => handleScrollToSection("projects")}
              className={`${
                isDarkMode
                  ? activeSection === "projects"
                    ? "text-blue-500"
                    : "text-dark-text hover:text-dark-primary"
                  : activeSection === "projects"
                  ? "text-blue-500"
                  : "text-light-text hover:text-light-primary"
              } px-3 py-2 rounded-md text-sm font-medium`}
            >
              Grants and Awards
            </button>
            <button
              onClick={() => handleScrollToSection("publications")}
              className={`${
                isDarkMode
                  ? activeSection === "publications"
                    ? "text-blue-500"
                    : "text-dark-text hover:text-dark-primary"
                  : activeSection === "publications"
                  ? "text-blue-500"
                  : "text-light-text hover:text-light-primary"
              } px-3 py-2 rounded-md text-sm font-medium`}
            >
              Publications
            </button>
            <button
              onClick={() => handleScrollToSection("workshop")}
              className={`${
                isDarkMode
                  ? activeSection === "workshop"
                    ? "text-blue-500"
                    : "text-dark-text hover:text-dark-primary"
                  : activeSection === "workshop"
                  ? "text-blue-500"
                  : "text-light-text hover:text-light-primary"
              } px-3 py-2 rounded-md text-sm font-medium`}
            >
              Training & Workshops
            </button>
            <Link
              to="/visualizations"
              className={`${
                isDarkMode
                  ? activeSection === "cv"
                    ? "text-blue-500"
                    : "text-dark-text hover:text-dark-primary"
                  : activeSection === "cv"
                  ? "text-blue-500"
                  : "text-light-text hover:text-light-primary"
              } px-3 py-2 rounded-md text-sm font-medium`}
            >
              Visualizations
            </Link>
            <Link
              to="/cv"
              className={`${
                isDarkMode
                  ? activeSection === "cv"
                    ? "text-blue-500"
                    : "text-dark-text hover:text-dark-primary"
                  : activeSection === "cv"
                  ? "text-blue-500"
                  : "text-light-text hover:text-light-primary"
              } px-3 py-2 rounded-md text-sm font-medium`}
            >
              CV
            </Link>
          </div>

          {profile && (
            <div className="flex flex-row items-center space-x-5">
              <a
                href={profile.social_medias[0]?.link}
                target="_blank"
                className="hidden md:block"
              >
                <MdEmail size={21} />
              </a>
              <a
                href={profile.social_medias[2]?.link}
                target="_blank"
                className="hidden md:block"
              >
                <FaLinkedin size={18} />
              </a>
              <div onClick={toggleTheme}>
                {isDarkMode ? <DarkMode /> : <LightMode />}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <nav className="md:hidden mt-2">
          <button
            onClick={() => handleScrollToSection("about")}
            className={`block ${
              isDarkMode
                ? activeSection === "about"
                  ? "text-blue-500"
                  : "text-dark-text hover:bg-dark-bg"
                : activeSection === "about"
                ? "text-blue-500"
                : "text-light-text hover:bg-light-bg"
            } px-3 py-2 rounded-md text-sm font-medium`}
          >
            Home
          </button>
          <button
            onClick={() => handleScrollToSection("projects")}
            className={`block ${
              isDarkMode
                ? activeSection === "projects"
                  ? "text-blue-500"
                  : "text-dark-text hover:bg-dark-bg"
                : activeSection === "projects"
                ? "text-blue-500"
                : "text-light-text hover:bg-light-bg"
            } px-3 py-2 rounded-md text-sm font-medium`}
          >
            Grants and Awards
          </button>
          <button
            onClick={() => handleScrollToSection("publications")}
            className={`block ${
              isDarkMode
                ? activeSection === "publications"
                  ? "text-blue-500"
                  : "text-dark-text hover:bg-dark-bg"
                : activeSection === "publications"
                ? "text-blue-500"
                : "text-light-text hover:bg-light-bg"
            } px-3 py-2 rounded-md text-sm font-medium`}
          >
            Publications
          </button>
          <button
            onClick={() => handleScrollToSection("workshop")}
            className={`block ${
              isDarkMode
                ? activeSection === "workshop"
                  ? "text-blue-500"
                  : "text-dark-text hover:bg-dark-bg"
                : activeSection === "workshop"
                ? "text-blue-500"
                : "text-light-text hover:bg-light-bg"
            } px-3 py-2 rounded-md text-sm font-medium`}
          >
            Training & Workshops
          </button>
          <Link
            to="/cv"
            onClick={() => handleScrollToSection("cv")}
            className={`block ${
              isDarkMode
                ? activeSection === "cv"
                  ? "text-blue-500"
                  : "text-dark-text hover:bg-dark-bg"
                : activeSection === "cv"
                ? "text-blue-500"
                : "text-light-text hover:bg-light-bg"
            } px-3 py-2 rounded-md text-sm font-medium`}
          >
            CV
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
