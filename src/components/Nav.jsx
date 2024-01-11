import React, { useContext } from "react";
import { contextDrawer } from "./contexts/DrawerProvider";
import Text from "./Text";
import Setting from "./Setting";

const Nav = () => {
  const { toggleLeftDrawer } = useContext(contextDrawer);
  const { toggleRightDrawer } = useContext(contextDrawer);
  const { toggleTextDrawer } = useContext(contextDrawer);
  const { toggleSettingDrawer } = useContext(contextDrawer);
  const { secondNav , toggleSecondNav } = useContext(contextDrawer);
  return (
    <nav className="border-gray-200 bg-white shadow-md relative">
      <div className="max-w-screen-2xl flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex   items-center gap-14">
          <div className="bg-slate-800 p-[23px] border-b border-white lg:border-none flex justify-between items-center gap-[60px] ps-[10px] w-full">
            <label className="lg:hidden relative inline-flex items-center cursor-pointer">
              <input
                onClick={toggleLeftDrawer}
                type="checkbox"
                defaultValue
                className="sr-only peer"
                defaultChecked
              />
              <div className="w-4 h-2 peer peer-focus:ring-4   rounded-md bg-slate-400  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:absolute   after:border after:rounded-full after:h-2 after:w-2 after:transition-all" />
            </label>
            <img
              src="https://demo.dashboardpack.com/admindek-html/files/assets/images/logo.png"
              alt=""
            />

            <label className="hidden relative lg:inline-flex items-center cursor-pointer">
              <input
                onClick={toggleLeftDrawer}
                type="checkbox"
                defaultValue
                className="sr-only peer"
                defaultChecked
              />
              <div className="w-4 h-2 peer peer-focus:ring-4   rounded-md bg-slate-400  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:absolute   after:border after:rounded-full after:h-2 after:w-2 after:transition-all" />
            </label>
            <button onClick={toggleSecondNav} className="block lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button>
          </div>

          <button className="hidden lg:block">
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
          <button className="hidden lg:block">
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
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
              />
            </svg>
          </button>
        </div>
        <div className= {`flex justify-end lg:justify-normal  a items-center gap-5 lg:gap-10 lg:-mt-[10px] ${!secondNav && "hidden lg:flex"} -mt-0 py-4  lg:p-0`}>
          <div className="flex items-center gap-5 lg:gap-10">
            <button onClick={toggleTextDrawer} className="relative">
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
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
              <span className="absolute animate__animated animate__flash   -translate-y-7 translate-x-2 w-[19px] flex items-center justify-center text-xs h-[19px] rounded-full bg-green-500 text-white">
                5
              </span>
            </button>
            <button onClick={toggleRightDrawer} className="relative">
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
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              <span className="opacity-50 animate__animated animate__flash  absolute -translate-y-7 translate-x-2 w-[19px] flex items-center justify-center text-xs h-[19px] rounded-full bg-green-500 text-white">
                3
              </span>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="w-9 h-9 rounded-full mt-[3px]"
              src="https://demo.dashboardpack.com/admindek-html/files/assets/images/avatar-4.jpg"
              alt=""
            />
            <div className="flex items-center gap-4 pr-[53px]">
              <h1 className="text-base">John Doe </h1>
              <button onClick={toggleSettingDrawer} className="mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-2 h-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <Text />
          <Setting />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
