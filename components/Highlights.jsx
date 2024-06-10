import React from "react";

function Highlights({ stats }) {
  return (
    <>
      <div className="bg-slate-600 p-2 text-slate-300 flex flex-col justify-start items-center">
        <h2>{stats.title}</h2>
        <div className="mt-2 ">
          <span className="text-4xl font-semibold">{stats.value}</span>
          <span className="text-2xl font-semibold">{stats.unit}</span>
          {/* icon */}
          {stats.direction ? (
            <div className=" flex mt-4 ml-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
              <div className="text-slate-200 ml-2">{stats.direction}</div>
            </div>
          ) : null}

          {stats.title == "Humidity" ? (
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 mt-5"
                style={{ width: `${stats.value}%` }}
              ></div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Highlights;
