import React, { useContext } from "react";
import { contextDrawer } from "./contexts/DrawerProvider";
import ListGroup from "./ListGroup";

const Right = () => {
  const { rightDrawer, toggleRightDrawer } = useContext(contextDrawer);

  return (
    <>
      <div
        className={`fixed top-0 right-0  h-screen  z-50  transition-transform ${
          !rightDrawer && "translate-x-[500px]"
        }  bg-white shadow-2xl w-[297px]`}
      >
        <div className="w-full flex items-center pt-5 ps-5 mb-[38px]  ">
          <input
            className="w-[192px] h-9 rounded-none rounded-l-sm text-[15px] border-slate-300"
            placeholder="Search Friend"
            type="text"
          />
          <button className="bg-blue-400 hover:bg-blue-300 duration-700 h-9 px-4 rounded-none rounded-r-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <div className="relative">
          <button
            onClick={toggleRightDrawer}
            className="absolute -translate-x-full w-10 -translate-y-3 flex justify-center items-center h-10 ps-1  rounded-l-full bg-white shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ListGroup />
        </div>
      </div>
    </>
  );
};

export default Right;
