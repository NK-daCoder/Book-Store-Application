import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa6";
import { clearFormData } from "./Register";

const Register = () => {

  const signInOptions = [
    {
      signInText: "Login Using Google",
      signInIcon: <FaGoogle />
    },
    {
      signInText: "Login Using Apple",
      signInIcon: <FaApple />
    },
    {
      signInText: "Login Using Micrsoft",
      signInIcon: <FaMicrosoft  />
    },

  ]

  return (
    <section className="flex flex-col items-center justify-center p-3 h-full relative">
      <h1 className="flex gap-2 items-center text-3xl font-semibold">
        <span className="material-symbols-rounded p-[.5rem] bg-gradient-to-bl from-blue-500 to-blue-800 text-white !text-md rounded-xl">
          how_to_reg
        </span>
        User Login
      </h1>

      <Link to="/" onClick={clearFormData} className="absolute top-0 left-0 p-3 rounded-full w-10 h-10 flex items-center justify-center text-white bg-gradient-to-bl from-blue-500 to-blue-600 text-3xl">
        <span className="material-symbols-rounded">
          close
        </span>
      </Link>

      <form action="" className=" mt-5 flex flex-col gap-2 md:gap-4">
        <fieldset className="flex items-center gap-3 border rounded-md p-2">
          <label htmlFor="email" className="flex items-center border-r pr-1 text-gray-400">
            <span className="material-symbols-rounded">
              mail
            </span>
          </label>
          <input type="email" placeholder="Email....." id="email" required className="w-full p-2 rounded-md"/>
        </fieldset>

        <fieldset className="flex items-center gap-3 border rounded-md p-2">
          <label htmlFor="password" className="flex items-center border-r pr-1 text-gray-400">
            <span className="material-symbols-rounded">
              passkey
            </span>
          </label>
          <input type="password" placeholder="Password....." id="password" required className="w-full p-2 rounded-md"/>
        </fieldset>

        <fieldset>

        </fieldset>

        <section className="flex justify-between">
          <button className="text-blue-500 flex gap-1 items-center">
            Login
            <span className="material-symbols-rounded !text-sm">
              north_east
            </span>
          </button>
          <Link to="/register" className="text-blue-500 flex gap-1 items-center text-right">
            Don't Have An Account
            <span className="material-symbols-rounded !text-sm">
              north_east
            </span>
          </Link>
        </section>

        <hr className="my-2"/>
        
        <fieldset>
          <ul className="flex flex-wrap gap-5">
            {signInOptions.map((options, index) => (
              <li key={index}>
                <button type="button" className="flex gap-2 items-center px-3 py-4 font-semibold rounded-lg text-white bg-gradient-to-bl from-blue-500 to-blue-800 transition-transform hover:scale-105 active:scale-95">
                  {options.signInIcon}
                  <span>{options.signInText}</span>
                </button>
              </li>
            ))}
          </ul>
        </fieldset>

        <footer className="text-center p-3 text-gray-500">
          <strong>&copy;</strong>2025 Book Alchemy library <br/>All Rights Reserved. 
        </footer>

      </form>
    </section>
  )
}

export default Register;

