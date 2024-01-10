import React from "react";
import DealsChart from "../components/DealsCharts";
import MixedChart from "../components/MixedChart";
import NewProducts from "../components/NewProducts";
import WhatsNew from "../components/WhatsNews";
import LatestActivity from "../components/LatestActivity";

const DeshboardHome = () => {
  return (
    <div className="bg-slate-100 grid grid-col-12  ">
      <div className="grid grid-col-12">
        <div className="flex justify-between mx-8  mb-10 mt-28">
          <div className="flex text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-10 h-10 mt-1 bg-blue-500 rounded-lg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <div className="px-5">
              <h2 className="text-gray-700  text-xl">Dashboard</h2>
              <span className="">
                <p className="text-gray-500  text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </span>
            </div>
          </div>
          <div className="text-gray-800 mt-3 flex">
            <a href="#">
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
            </a>
            <a href="#" className="text-sm pl-2">
              / Dashboard
            </a>
          </div>
        </div>
      </div>
      <div className="mx-5 grid grid-cols-12 ">
        <div className="  col-span-8 ">
          <DealsChart />
        </div>
        <div className=" ml-3 grid  col-span-4 gap-5 ">
          <div className=" border border-slate-50 bg-slate-50  rounded-md p-5 shadow-md group">
            <div className="row justify-between flex">
              <div className="col ">
                <h6 className="mb-4 text-gray-800">Impressions</h6>
                <h3 className="text-2xl font-semibold text-blue-500">1,563</h3>
                <p className="text-sm text-gray-700 mt-1">
                  May 23 - June 01 (2017)
                </p>
              </div>
              <div className="mt-7 text-white">
                <i className="fas fa-eye bg-blue-500 p-5 rounded-lg group-hover:rounded-full transition-all delay-200" />
              </div>
            </div>
          </div>
          <div className="border border-slate-50 bg-slate-50  rounded-2xl p-5 shadow-md group">
            <div className="row justify-between flex">
              <div className="col ">
                <h6 className="mb-4 text-gray-800">Goal</h6>
                <h3 className="text-2xl font-semibold text-green-400">
                  30,564
                </h3>
                <p className="text-sm text-gray-700 mt-1">
                  May 23 - June 01 (2017)
                </p>
              </div>
              <div className="mt-7 text-white">
                <i className="fas fa-bullseye bg-green-400 p-5 rounded-lg group-hover:rounded-full transition-all delay-200" />
              </div>
            </div>
          </div>
          <div className="border border-slate-50 bg-slate-50  rounded-2xl p-5 shadow-md group">
            <div className="row justify-between  flex">
              <div className="col">
                <h6 className="mb-4 text-gray-800">Impact</h6>
                <h3 className="text-2xl font-semibold text-yellow-300">
                  42.6%
                </h3>
                <p className="text-sm text-gray-700 mt-1">
                  May 23 - June 01 (2017)
                </p>
              </div>
              <div className="mt-7 text-white">
                <i className="fas fa-hand-paper bg-yellow-300 p-5 rounded-lg group-hover:rounded-full transition-all delay-200" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 mx-5 mt-10 gap-3 p-5 border rounded-lg bg-slate-50 shadow-md">
        <div className="col-span-3 ">
          <h6 className="text-gray-800">Published Project</h6>
          <h5 className="font-bold mt-1">
            532<span className="text-green-500 ml-4">+1.69%</span>
          </h5>
          <div className="mt-7">
            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div
                className="bg-red-600 h-1.5 rounded-full"
                style={{ width: "30%" }}
              />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <h6 className="text-gray-800">Completed Task</h6>
          <h5 className="font-bold mt-1">
            4,569<span className="text-red-600 ml-4">-0.5%</span>
          </h5>
          <div className="mt-7">
            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div
                className="bg-blue-500 h-1.5 rounded-full"
                style={{ width: "60%" }}
              />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <h6 className="text-gray-800">Successfull Task</h6>
          <h5 className="font-bold mt-1">
            89%<span className="text-green-500 ml-4">+0.99%</span>
          </h5>
          <div className="mt-7">
            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div
                className="bg-green-400 h-1.5 rounded-full"
                style={{ width: "80%" }}
              />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <h6 className="text-gray-800">Ongoing Project</h6>
          <h5 className="font-bold mt-1">
            365<span className="text-green-500 ml-4">+0.35%</span>
          </h5>
          <div className="mt-7">
            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div
                className="bg-yellow-300 h-1.5 rounded-full"
                style={{ width: "40%" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-col-12 mx-5 mt-10">
        <div className="grid grid-cols-3">
          <div className="">
            <MixedChart />
          </div>
          <div className="ml-10 bg-slate-50 p-10  rounded-xl shadow-md">
            <WhatsNew />
          </div>
          <div className="ml-10 bg-slate-50 p-10 rounded-xl shadow-md">
            <LatestActivity />
          </div>
        </div>
      </div>

      <div className="grid grid-col-12 mx-5 mt-10 mb-20">
        <NewProducts />
      </div>
    </div>
  );
};

export default DeshboardHome;
