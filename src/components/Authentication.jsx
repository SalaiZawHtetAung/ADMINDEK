import React, { useContext } from "react";
import { contextDrawer } from "./contexts/DrawerProvider";

const Authentication = () => {
  const { login, toggleLogin } = useContext(contextDrawer);
  return (
    <>
      <div className="border-l-2 border-blue-500   mt-2">
        <div
          onClick={toggleLogin}
          className={`cursor-pointer flex justify-between pt-2 ps-5 pr-4 py-3 items-center ${
            login && "bg-black"
          }`}
        >
          <h1 className="text-[#b9a3a3] flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>

            <span>Authentication</span>
          </h1>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-3 h-3 stroke-[#b9a3a3] ${login && "rotate-90"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <a
          href="#"
          className={`flex items-center gap-1 ps-5 mt-4 ${!login && "hidden"}`}
        >
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 stroke-[#b9a3a3]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <span className="text-[#b9a3a3] select-none">Login</span>
        </a>
      </div>
    </>
  );
};

export default Authentication;
