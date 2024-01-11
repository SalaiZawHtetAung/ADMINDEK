import React from "react";

const InputForm = () => {
  return (
    <div className=" mx-auto ">
      <div className=" w-full bg-gray-100 py-10">
        <div className=" relative bg-cover bg-transparent mb-4 mx-9 max-[570px]:mx-4">
          <div className=" grid grid-cols-3 mb-8 max-[570px]:grid-cols-1">
            <div className=" col-span-2">
              <div className="flex items-center gap-5 max-[570px]:flex-col max-[570px]:text-center">
                <div className="inline-flex w-10 h-10 rounded-md justify-center align-middle text-xl text-white bg-[#4099ff] items-center">
                  <i class="fa-regular fa-clipboard"></i>
                </div>
                <div>
                  <h5 className=" font-serif text-lg font-medium">
                    Basic Form Inputs
                  </h5>
                  <span className=" text-sm">
                    lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </span>
                </div>
              </div>
            </div>
            <div className=" col-span-1 max-[570px]:text-center">
              <div>
                <ul className=" flex flex-wrap list-none px-4 py-3 mt-0">
                  <nav class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                      <li class="inline-flex items-center">
                        <a
                          href="#"
                          class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600"
                        >
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
                              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <div class="flex items-center">
                          <svg
                            class="rtl:rotate-180 w-3 h-3 text-gray-500 mx-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                          <a
                            href="#"
                            class="ms-1 text-sm font-medium text-gray-500 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                          >
                            Form Components
                          </a>
                        </div>
                      </li>
                      <li aria-current="page">
                        <div class="flex items-center">
                          <svg
                            class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                          <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 ">
                            Basic Form Inputs
                          </span>
                        </div>
                      </li>
                    </ol>
                  </nav>
                </ul>
              </div>
            </div>
          </div>

          <div className=" w-full bg-white rounded-md">
            <div className=" p-5">
              <div className=" relative bg-transparent mb-5">
                <h4 className=" mb-0 text-base font-bold text-[#333]">
                  Basic Form Inputs
                </h4>
              </div>
              <div>
                <h4 className=" font-sans text-sm border-b pb-3 mb-5 text-[#2c3e50]">
                  Basic Inputs
                </h4>
                <form action="#">
                  <div className=" grid grid-cols-6 mb-5 max-[570px]:grid-cols-1">
                    <label htmlFor="" className=" col-span-1">
                      Simple Output
                    </label>
                    <div className=" col-span-5 max-[570px]:mt-3">
                      <input
                        type="text"
                        className=" w-full bg-[#fff] border border-[#ccc] rounded-sm"
                      />
                    </div>
                  </div>

                  <div className=" grid grid-cols-6 mb-5 max-[570px]:grid-cols-1">
                    <label htmlFor="" className=" col-span-1">
                      Placeholder
                    </label>
                    <div className=" col-span-5 max-[570px]:mt-3">
                      <input
                        type="text"
                        className=" w-full bg-[#fff] border border-[#ccc] rounded-sm"
                        placeholder="Type your title in placeholder"
                      />
                    </div>
                  </div>

                  <div className=" grid grid-cols-6 mb-5 max-[570px]:grid-cols-1">
                    <label htmlFor="" className=" col-span-1">
                      Password
                    </label>
                    <div className=" col-span-5 max-[570px]:mt-3">
                      <input
                        type="text"
                        className=" w-full bg-[#fff] border border-[#ccc] rounded-sm"
                        placeholder="Password input"
                      />
                    </div>
                  </div>

                  <div className=" grid grid-cols-6 mb-5 max-[570px]:grid-cols-1">
                    <label htmlFor="" className=" col-span-1">
                      Read only
                    </label>
                    <div className=" col-span-5 max-[570px]:mt-3">
                      <input
                        type="text"
                        className=" w-full bg-[#e9ecef] border border-[#ccc] rounded-sm"
                        placeholder="You can't change me"
                      />
                    </div>
                  </div>

                  <div className=" grid grid-cols-6 mb-5 max-[570px]:grid-cols-1">
                    <label htmlFor="" className=" col-span-1">
                      Disable input
                    </label>
                    <div className=" col-span-5 max-[570px]:mt-3">
                      <input
                        type="text"
                        className=" w-full cursor-not-allowed bg-[#e9ecef] border border-[#ccc] rounded-sm"
                        placeholder="Disabled text"
                      />
                    </div>
                  </div>

                  <div className=" grid grid-cols-6 mb-5 max-[570px]:grid-cols-1">
                    <label htmlFor="" className=" col-span-1">
                      Predefine Input
                    </label>
                    <div className=" col-span-5 max-[570px]:mt-3">
                      <input
                        type="text"
                        className=" w-full bg-[#fff] border border-[#ccc] rounded-sm"
                        placeholder="Enter yout content after me"
                      />
                    </div>
                  </div>

                  <div className=" grid grid-cols-6 mb-5 max-[570px]:grid-cols-1">
                    <label htmlFor="" className=" col-span-1">
                      Select Box
                    </label>
                    <div className=" col-span-5 max-[570px]:mt-3">
                      <select
                        name=""
                        id=""
                        className=" w-full border-0 border-b border-[#ccc] rounded-sm"
                      >
                        <option value="opt1" className=" text-[#495057]">
                          Select One Value Only
                        </option>
                        <option value="opt2">Type 2</option>
                        <option value="opt3">Type 3</option>
                        <option value="opt4">Type 4</option>
                        <option value="opt5">Type 5</option>
                        <option value="opt6">Type 6</option>
                        <option value="opt7">Type 7</option>
                        <option value="opt8">Type 8</option>
                      </select>
                    </div>
                  </div>
                  <div className=" grid grid-cols-6 mb-5 max-[570px]:grid-cols-1">
                    <label htmlFor="" className=" col-span-1">
                      Rounded Input
                    </label>
                    <div className=" col-span-5 max-[570px]:mt-3">
                      <input
                        type="text"
                        className=" w-full bg-[#fff] rounded-full border border-[#ccc]"
                        placeholder=".form-control-rounded"
                      />
                    </div>
                  </div>
                  <div className=" grid grid-cols-6 mb-5 max-[570px]:grid-cols-1">
                    <label htmlFor="" className=" col-span-1">
                      Maximum Length
                    </label>
                    <div className=" col-span-5 max-[570px]:mt-3">
                      <input
                        type="text"
                        className=" w-full rounded-sm text-sm borer border-[#ccc]"
                        placeholder="Content must be in 6 characters"
                      />
                    </div>
                  </div>

                  <div className=" grid grid-cols-6 mb-5 max-[570px]:grid-cols-1">
                    <label htmlFor="" className=" col-span-1">
                      Color
                    </label>
                    <div className=" col-span-5 max-[570px]:mt-3">
                      <input
                        type="color"
                        className=" w-full border border-[#ccc] rounded-sm h-8 py-1 px-3"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className=" grid grid-cols-6 mb-5 max-[570px]:grid-cols-1">
                    <label htmlFor="" className=" col-span-1">
                      Upload file
                    </label>
                    <div className=" col-span-5 max-[570px]:mt-3">
                      <input
                        type="file"
                        className=" w-full border border-[#ccc] rounded-sm bg-[#fff]"
                        placeholder="Content must be in 6 characters"
                      />
                    </div>
                  </div>

                  <div className=" grid grid-cols-6 mb-5 max-[570px]:grid-cols-1">
                    <label htmlFor="" className=" col-span-1">
                      Textarea
                    </label>
                    <div className=" col-span-5 max-[570px]:mt-3">
                      <textarea
                        name=""
                        rows="5"
                        cols="5"
                        placeholder="Default textarea"
                        className=" w-full border border-[#ccc] rounded-sm"
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
