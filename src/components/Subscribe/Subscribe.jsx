import React from "react";

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20   text-black dark:text-white"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl !text-center sm:text-left sm:text-3xl font-bold">
            Get Notifiy  About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3  bg-slate-300 dark:bg-gray-700 rounded-md text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
        </div>

      </div>
    </div>
  );
};

export default Subscribe;
