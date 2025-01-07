import React, { useState } from 'react';
import companyLogo from "../assets/book-alchemy-log.png";
import { Link } from "react-router-dom";

export const buttonNav = [
  {
    buttonType: "Discovery",
    buttonIcon: "explore",
    path: "/", // Path to Discovery
  },
  {
    buttonType: "Bookmarks",
    buttonIcon: "bookmark",
    path: "/bookmarks", // Path to Bookmarks
  },
  {
    buttonType: "Favorites",
    buttonIcon: "favorite",
    path: "/favorites", // Path to Favorites (needs to be defined in router)
  },
  {
    buttonType: "Purchased",
    buttonIcon: "shopping_bag",
    path: "/purchased", // Path to Orders
  },
  {
    buttonType: "Settings",
    buttonIcon: "settings",
    path: "/settings", // Path to Settings (needs to be defined in router)
  },
  {
    buttonType: "Support",
    buttonIcon: "contact_support",
    path: "/support", // Path to Support (needs to be defined in router)
  },
  {
    buttonType: "Logout",
    buttonIcon: "logout",
    path: "/logout", // Path to Logout (implement appropriate logout logic)
  },
];


const Header = () => {
  // 0 enables first button of the array to be active
  const [activeState, setActiveState] = useState(0);

  return (
    <header className="flex flex-col py-4 max-h-screen w-60 bg-white">
      <div className="flex justify-center items-center mb-5">
        <img src={companyLogo} alt="Book Alchemist" className="w-32" />
      </div>
      <nav>
        <ul className="px-6 h-full grid gap-5">
          {buttonNav.map((button, index) => (
            <li key={index}>
              <Link
                to={button.path} // Dynamically link to the path
                onClick={() => setActiveState(index)}
                className={`text-md flex items-center gap-2 w-full transition-all ${
                  activeState === index ? "text-blue-500 font-semibold" : "text-gray-400"
                }`}
              >
                <span
                  className={`material-symbols-rounded rounded-md p-1 !text-md ${
                    activeState === index
                      ? "bg-gradient-to-bl from-blue-400 to-blue-600 text-white drop-shadow-sm"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {button.buttonIcon}
                </span>
                {button.buttonType}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
