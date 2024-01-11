import React, { useContext } from "react";
import { contextDrawer } from "./contexts/DrawerProvider";

const Row = () => {
  const { toggleSecondRightDrawer } = useContext(contextDrawer);

  return (
    <>
      <div
        onClick={toggleSecondRightDrawer}
        className="flex items-center gap-[10px] mb-2 border-b pb-3 ps-5 border-slate-200"
      >
        <img
          className="w-[45px] h-[45px] rounded-full border-2 border-white shadow-md"
          src="https://demo.dashboardpack.com/admindek-html/files/assets/images/avatar-3.jpg"
          alt=""
        />

        <div className="flex  items-center gap-[91px]">
          <h1 className="text-[15px]">josephin Doe</h1>
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
        </div>
      </div>
      <div className="flex items-center gap-[10px] mb-2 border-b pb-3 ps-5 border-slate-200">
        <img
          className="w-[45px] h-[45px] rounded-full border-2 border-white shadow-md"
          src="https://demo.dashboardpack.com/admindek-html/files/assets/images/avatar-2.jpg"
          alt=""
        />

        <div className="flex  items-center gap-[120px]">
          <h1 className="text-[15px]">Lary Doe</h1>
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
        </div>
      </div>
      <div className="flex items-center gap-[10px] mb-2 border-b pb-3 ps-5 border-slate-200">
        <img
          className="w-[45px] h-[45px] rounded-full border-2 border-white shadow-md"
          src="https://demo.dashboardpack.com/admindek-html/files/assets/images/avatar-4.jpg"
          alt=""
        />

        <div className="flex  items-center gap-[145px]">
          <h1 className="text-[15px]">Alice</h1>
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
        </div>
      </div>
      <div className="flex items-center gap-[10px] mb-2 border-b pb-3 ps-5 border-slate-200">
        <img
          className="w-[45px] h-[45px] rounded-full border-2 border-white shadow-md"
          src="https://demo.dashboardpack.com/admindek-html/files/assets/images/avatar-3.jpg"
          alt=""
        />

        <div className="flex  items-center gap-[151px]">
          <h1 className="text-[15px]">Alia</h1>
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
        </div>
      </div>{" "}
      <div className="flex items-center gap-3 mb-2 border-b pb-3 ps-5 border-slate-200">
        <img
          className="w-[45px] h-[45px] rounded-full border-2 border-white shadow-md"
          src="https://demo.dashboardpack.com/admindek-html/files/assets/images/avatar-2.jpg"
          alt=""
        />

        <div className="flex  items-center gap-[133px]">
          <h1 className="text-[15px]">Suzen</h1>
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
        </div>
      </div>
    </>
  );
};

export default Row;
