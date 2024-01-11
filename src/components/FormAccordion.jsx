import React, { useContext } from "react";
import { contextDrawer } from "./contexts/DrawerProvider";

const FormAccordion = () => {
  const { openForm, toggleFormDrawer } = useContext(contextDrawer);

  return (
    <>
      <div className="border-l-2  border-blue-500  mt-2">
        <div
          onClick={toggleFormDrawer}
          className={`cursor-pointer flex  justify-between pt-2 ps-5 pr-4 py-3 items-center ${
            openForm && "bg-black"
          }`}
        >
          <h1 className="text-[#b9a3a3] flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>

            <span className="hover:text-[#ebe2e2]">Form</span>
          </h1>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-3 h-3 stroke-[#b9a3a3] ${openForm && "rotate-90"}`}
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
          className={`flex items-center gap-1 ps-5 mt-4 ${
            !openForm && "hidden"
          }`}
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
          <span className="text-[#b9a3a3] select-none">Components</span>
        </a>
      </div>
    </>
  );
};

export default FormAccordion;
