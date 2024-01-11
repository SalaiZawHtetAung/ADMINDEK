import React, { useContext, useState } from "react";
import { contextDrawer } from "./contexts/DrawerProvider";

const Accordion = () => {
    const {open , toggleOpenDrawer} = useContext(contextDrawer)
  return (
    <>
      <div className="border-l-2 border-blue-500   mt-2">
        <div onClick={toggleOpenDrawer} className={`cursor-pointer flex justify-between pt-2 ps-5 pr-4 py-3 items-center ${open && "bg-black"}`}>
          <h1  className="text-[#b9a3a3] flex items-center gap-3">
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
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <span>Dashboard</span>
          </h1>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-3 h-3 stroke-[#b9a3a3] ${open && "rotate-90"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <a href="#" className={`flex items-center gap-1 ps-5 mt-4 ${!open && "hidden"}`}>
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
          <span className="text-[#b9a3a3] select-none">Default</span>
        </a>
      </div>
    </>
  );
};

export default Accordion;
