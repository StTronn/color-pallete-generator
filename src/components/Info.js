import React from "react";

const Info = ({ inputRef }) => {
  return (
    <div className="self-center">
      <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Looking for a color pallete?
        <br />
        <span className="text-teal-600">
          Find it using your favourite image.
        </span>
      </h2>
      <div className="mt-8 flex lg:flex-shrink-0 lg:mt-8">
        <div className="inline-flex rounded-md shadow">
          <button
            onClick={() => {
              inputRef.current.click();
            }}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Upload Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
