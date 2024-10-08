import { useEffect, useState } from "react";
import DarkMode from "./DarkMode";
import LightMode from "./LightMode";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [isDarkMode]);

  return (
    <header
      className={`p-4 fixed top-0 left-0 w-full z-10 shadow-md    ${
        isDarkMode
          ? "bg-dark-bg text-dark-text shadow-gray-600"
          : "bg-light-bg text-light-text "
      }`}
    >
      <nav className=" container max-w-7xl mx-auto px-4">
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
            <a
              href="#about"
              className={`${
                isDarkMode
                  ? "text-dark-text hover:text-dark-primary"
                  : " text-light-text hover:text-light-primary"
              } px-3 py-2 rounded-md text-sm font-medium  `}
            >
              Home
            </a>
            <a
              href="#projects"
              className={`${
                isDarkMode
                  ? "text-dark-text hover:text-dark-primary"
                  : " text-light-text hover:text-light-primary"
              } px-3 py-2 rounded-md text-sm font-medium `}
            >
              {" "}
              Projects
            </a>
            <a
              href="#publications"
              className={`${
                isDarkMode
                  ? "text-dark-text hover:text-dark-primary"
                  : " text-light-text hover:text-light-primary"
              } px-3 py-2 rounded-md text-sm font-medium `}
            >
              {" "}
              Publications
            </a>
            <a
              href="#posts"
              className={`${
                isDarkMode
                  ? "text-dark-text hover:text-dark-primary"
                  : " text-light-text hover:text-light-primary"
              } px-3 py-2 rounded-md text-sm font-medium `}
            >
              {" "}
              Posts
            </a>
            <a
              href="#research"
              className={`${
                isDarkMode
                  ? "text-dark-text hover:text-dark-primary"
                  : " text-light-text hover:text-light-primary"
              } px-3 py-2 rounded-md text-sm font-medium `}
            >
              {" "}
              Research
            </a>
            <a
              href="#visualizations"
              className={`${
                isDarkMode
                  ? "text-dark-text hover:text-dark-primary"
                  : " text-light-text hover:text-light-primary"
              } px-3 py-2 rounded-md text-sm font-medium `}
            >
              {" "}
              Visualizations
            </a>
            <a
              href="#"
              className={`${
                isDarkMode
                  ? "text-dark-text hover:text-dark-primary"
                  : " text-light-text hover:text-light-primary"
              } px-3 py-2 rounded-md text-sm font-medium `}
            >
              {" "}
              CV
            </a>
          </div>
          <div className="flex flex-row items-center space-x-5">
            <a
              href="https://smartcsvtool.com"
              target="_blank"
              className="hidden md:block"
            >
              <MdEmail size={21} />
            </a>
            <a
              href="https://smartcsvtool.com"
              target="_blank"
              className="hidden md:block"
            >
              <FaLinkedin size={18} />
            </a>
            <div onClick={toggleTheme}>
              {isDarkMode ? <DarkMode /> : <LightMode />}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <nav className="md:hidden mt-2">
          <a
            href="#about"
            className={`block ${
              isDarkMode
                ? "text-dark-text  hover:bg-dark-bg"
                : " text-light-text hover:bg-light-bg"
            } px-3 py-2 rounded-md text-sm font-medium `}
            onClick={toggleDrawer}
          >
            Home
          </a>
          <a
            href="#projects"
            className={`block ${
              isDarkMode
                ? "text-dark-text  hover:bg-dark-bg"
                : " text-light-text hover:bg-light-bg"
            } px-3 py-2 rounded-md text-sm font-medium `}
            onClick={toggleDrawer}
          >
            Projects
          </a>
          <a
            href="#publications"
            className={`block ${
              isDarkMode
                ? "text-dark-text  hover:bg-dark-bg"
                : " text-light-text hover:bg-light-bg"
            } px-3 py-2 rounded-md text-sm font-medium `}
            onClick={toggleDrawer}
          >
            Publications
          </a>
          <a
            href="#posts"
            className={`block ${
              isDarkMode
                ? "text-dark-text  hover:bg-dark-bg"
                : " text-light-text hover:bg-light-bg"
            } px-3 py-2 rounded-md text-sm font-medium `}
            onClick={toggleDrawer}
          >
            Posts
          </a>
          <a
            href="#research"
            className={`block ${
              isDarkMode
                ? "text-dark-text  hover:bg-dark-bg"
                : " text-light-text hover:bg-light-bg"
            } px-3 py-2 rounded-md text-sm font-medium `}
            onClick={toggleDrawer}
          >
            Research
          </a>
          <a
            href="#visualizations"
            className={`block ${
              isDarkMode
                ? "text-dark-text  hover:bg-dark-bg"
                : " text-light-text hover:bg-light-bg"
            } px-3 py-2 rounded-md text-sm font-medium `}
            onClick={toggleDrawer}
          >
            Visualizations
          </a>
          <a
            href="#"
            className={`block ${
              isDarkMode
                ? "text-dark-text  hover:bg-dark-bg"
                : " text-light-text hover:bg-light-bg"
            } px-3 py-2 rounded-md text-sm font-medium `}
            onClick={toggleDrawer}
          >
            CV
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
