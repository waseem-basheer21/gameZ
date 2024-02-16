import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import data from "./data";
import "./styles.css";

const Header = () => {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItemEffect = (to) => {
    setActive(to);
    setMenuOpen(false); // Close the menu when a navigation item is clicked
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menuOpen state
  };

  return (
    <nav className="navbar">
      <div className=" flex flex-wrap items-center justify-between">
        <Link
          to="/"
          className="flex items-center justify-center space-x-3 rtl:space-x-reverse"
        >
          <img src="" className="h-8 rounded-full pt-4 hidden" alt="" />
          <div className="spinner *: ">
            <Player
              src="logoanimation.json"
              className="player h-[100px] w-[100px]"
              loop
              autoplay
            />
          </div>
        </Link>
        <button
          onClick={toggleMenu} // Toggle menu visibility when button is clicked
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={menuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`text-center text-[1.3rem] w-full md:block md:w-auto ${
            menuOpen ? "" : "hidden" // Show/hide the menu based on menuOpen state
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li className="flex gap-6">
              {data.map((item, index) => (
                <NavLink
                  key={index}
                  onClick={() => navItemEffect(item.to)}
                  to={item.to}
                  className={` ${item.to === active ? "active" : "inActive"} navItems`}
                >
                  {item.name}
                </NavLink>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
