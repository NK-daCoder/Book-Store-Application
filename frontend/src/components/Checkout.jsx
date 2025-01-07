import React from "react";
import { Link, useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { totalCost, totalItems } = location.state || { totalCost: 0, totalItems: 0 };

  

  return (
    <article className="h-full bg-gray-100 p-5 flex flex-col justify-center">
      <section className="mb-5 text-left">
        <h3 className="text-2xl font-semibold text-gray-800 flex item-center gap-2">
          Cash On Delivery
        </h3>
        <p className="text-lg text-gray-600">Total Price: {totalCost}</p>
        <p className="text-lg text-gray-600">No. of Items: {totalItems}</p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <div className="text-center">
          <h4 className="mb-3 text-xl font-semibold text-gray-800 flex flex-col gap-2 items-center justify-center ">
            <span className="material-symbols-rounded text-white rounded-md p-[.3rem] bg-gradient-to-bl from-blue-500 to-blue-800">person</span>
              Personal Details
          </h4>
          
          <p className="text-sm text-gray-500">Please fill out all fields</p>
        </div>

        <form action="" className="space-y-4">
          <fieldset className="flex items-center gap-2">
            <span className="material-symbols-rounded text-gray-500">person</span>
            <input
              id="user-name"
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>

          <fieldset className="flex items-center gap-2">
            <span className="material-symbols-rounded text-gray-500">mail</span>
            <input
              id="user-email"
              type="email"
              placeholder="Email"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>

          <fieldset className="flex items-center gap-2">
            <span className="material-symbols-rounded text-gray-500">phone</span>
            <input
              id="user-cel-number"
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>

          <fieldset className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-rounded text-gray-500">location_on</span>
              <input
                id="user-address"
                type="text"
                placeholder="Address/Street"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-rounded text-gray-500">location_city</span>
              <input
                id="user-city"
                type="text"
                placeholder="City"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </fieldset>

          <fieldset className="grid grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-rounded text-gray-500">public</span>
              <input
                id="user-region"
                type="text"
                placeholder="Country/Region"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-rounded text-gray-500">flag</span>
              <input
                id="user-state"
                type="text"
                placeholder="State/Province"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-rounded text-gray-500">pin</span>
              <input
                id="user-zipcode"
                type="number"
                placeholder="ZipCode"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </fieldset>
          <fieldset className="flex gap-2 py-5 justify-start">
            <input type="checkbox" />
            <p>I acknowledge and accept the <Link to="/T&C" className="text-blue-600 ">Terms & Conditions</Link> as well as the <Link to="/Shopping-Policy" className="text-blue-600 ">Shopping Policy.</Link></p>
          </fieldset>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </section>
    </article>
  );
};

export default Checkout;
