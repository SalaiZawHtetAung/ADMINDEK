import React, { useContext } from "react";
import { contextDrawer } from "./contexts/DrawerProvider";

const SecondRight = () => {
  const { SecondRightDrawer, toggleSecondRightDrawer } =
    useContext(contextDrawer);
  return (
    <div
      className={`fixed top-0 right-0  h-screen z-50  transition-transform ${
        !SecondRightDrawer && "translate-x-[600px]"
      }  bg-white shadow-2xl w-[297px] `}
    >
      <div className="w-full  pt-5 ps-5 mb-[38px] border-slate-200 pb-5 border-b  ">
        <h1 className=" ps-20 text-sm">Josephin Doe</h1>
      </div>
      <div className="relative">
        <button
          onClick={toggleSecondRightDrawer}
          className="absolute -translate-x-full w-10 -translate-y-4 flex justify-center items-center h-10 ps-1  rounded-l-full bg-white shadow-md"
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
      </div>

      <div className="p-[15px]  -mt-7  ">
        <div className="flex gap-5 mb-2">
          <img
            className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            src="https://demo.dashboardpack.com/admindek-html/files/assets/images/avatar-2.jpg"
            alt=""
          />
          <div className="relative">
            <p className=" p-3  bg-blue-100 gap-6 ">
              <span>
                I'm just looking around. Will you tell me something about
                yourself?
              </span>
            </p>
          </div>
        </div>
        <span className="ps-16 ">8:20 a.m.</span>
        <span className="  ps-3 py-3 bg-blue-100 block ml-32">
          Ohh! very nice
        </span>
        <div className="w-full  flex items-center pt-5 p-[6px] mb-[38px] absolute bottom-0  translate-y-6 ">
          <input
            className="w-[192px] h-9 text-base rounded-none rounded-l-sm text-[15px] border-slate-300"
            placeholder="write hear . ."
            type="text"
          />
          <button className="bg-blue-500 hover:bg-blue-400 duration-700 h-9 px-4 rounded-none rounded-r-sm ">
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
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
              />
            </svg>
          </button>
        </div>
        <span className="ml-48 ">8:22 a.m.</span>
        <div className="flex gap-5 mt-4 mb-2">
          <img
            className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            src="https://demo.dashboardpack.com/admindek-html/files/assets/images/avatar-2.jpg"
            alt=""
          />
          <di>
            <p className=" p-3  bg-blue-100 gap-6 ">
              <span>can you come with me?</span>
            </p>
          </di>
        </div>
        <span className="ml-16 ">8:22 a.m.</span>
      </div>
    </div>
  );
};

export default SecondRight;
