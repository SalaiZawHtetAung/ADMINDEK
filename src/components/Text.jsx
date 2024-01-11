import React, { useContext } from "react";
import { contextDrawer } from "./contexts/DrawerProvider";

function Text() {
    const {text } = useContext(contextDrawer)
  return (
    <div className={`bg-white shadow-xl pb-1 lg:pb-0 z-50 p-6 absolute right-0 translate-y-72 rounded-md -translate-x-4 lg:-mt-4 -mt-0 lg:-translate-x-72 ${!text && "hidden"} `}>
      <div className="flex justify-start gap-28 lg:justify-between lg:gap-0 items-center mb-5 relative">
       <div className="p-3 rotate-45 hidden lg:block absolute lg:right-0 -translate-y-9 translate-x-1 bg-white shadow-blue-300 shadow-xl"></div>
       <div className="p-3 rotate-45 block lg:hidden absolute left-0 -translate-y-9 translate-x-1 bg-white shadow-blue-300 shadow-xl"></div>
        <h1>Notifications</h1>
        <button className="bg-green-500 px-2 text-sm rounded-md text-white">
          New
        </button>
      </div>
      <div className="mb-6">
        <div className="flex justify-between items-center gap-3">
          <img
            className="w-10 h-10 rounded-full -mt-6"
            src="https://demo.dashboardpack.com/admindek-html/files/assets/images/avatar-4.jpg"
            alt=""
          />
          <div className="">
            <h1 className="text-slate-600 ">John Doe</h1>
            <p className="text-slate-600  max-w-52 lg:max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetuer elit.
            </p>
          </div>
        </div>
        <span className="px-[50px] text-sm text-gray-400">30 minutes ago</span>
      </div>
      <div className="mb-6">
        <div className="flex justify-between items-center gap-3">
          <img
            className="w-10 h-10 rounded-full -mt-6"
            src="https://demo.dashboardpack.com/admindek-html/files/assets/images/avatar-4.jpg"
            alt=""
          />
          <div className="">
            <h1 className="text-slate-600 ">John Doe</h1>
            <p className="text-slate-600 max-w-52 lg:max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetuer elit.
            </p>
          </div>
        </div>
        <span className="px-[50px] text-sm text-gray-400">30 minutes ago</span>
      </div>
      <div className="mb-6">
        <div className="flex justify-between items-center gap-3">
          <img
            className="w-10 h-10 rounded-full -mt-6"
            src="https://demo.dashboardpack.com/admindek-html/files/assets/images/avatar-4.jpg"
            alt=""
          />
          <div className="">
            <h1 className="text-slate-600 ">John Doe</h1>
            <p className="text-slate-600 max-w-52 lg:max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetuer elit.
            </p>
          </div>
        </div>
        <span className="px-[50px] text-sm text-gray-400">30 minutes ago</span>
      </div>
    </div>
  );
}

export default Text;
