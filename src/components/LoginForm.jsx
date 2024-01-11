import React from "react";

const LoginForm = () => {
  return (
    <div>
      <div className=" py-32 bg-[#42a5f5]">
        <div className=" absolute top-0  right-0 left-0 py-10 mx-auto bg-gradient-to-b from-[rgba(255,255,255,0.7)]  to-[#f2f7fb]">
          <form action="" className=" text-center max-[570px]:px-5">
            <div className=" relative text-center">
              <img
                src="https://demo.dashboardpack.com/admindek-html/files/assets/images/logo.png"
                alt=""
                className=" text-center relative left-0 right-0 m-auto"
              />
            </div>
            <div className="max-w-md mt-5 mb-0 mx-auto rounded-md bg-white">
              <div className=" p-5">
                <div className=" mb-8">
                  <h3 className=" text-2xl font-sans font-medium">Sign In</h3>
                </div>
                <div className=" grid grid-cols-2 mb-10 gap-5 max-[570px]:grid-cols-1">
                  <div className=" bg-[#3b5998] rounded-sm">
                    <button className=" px-4 py-1 text-white max-[570px]:py-2">
                      <i className="fa-brands fa-facebook"></i>
                      <span className=" ms-1">Facebook</span>
                    </button>
                  </div>
                  <div className=" bg-[#00aced] rounded-sm">
                    <button className=" px-4 py-1 text-white max-[570px]:py-2">
                      <i class="fa-brands fa-twitter"></i>
                      <span className=" ms-1">Twitter</span>
                    </button>
                  </div>
                </div>
                <p className=" text-[#6c757d] text-center pb-1 text-sm mb-5">
                  Sign in with your regular account
                </p>
                <div class=" relative mb-5">
                  <input
                    type="text"
                    name="user-name"
                    className="h-11 w-full border-0 text-base font-normal bg-transparent border-b-2 border-b-[#ccc]"
                    required=""
                  />
                  <label className=" pointer-events-none absolute top-3 left-0 text-sm font-normal mb-2">
                    Username
                  </label>
                </div>
                <div className=" relative mb-5">
                  <input
                    type="password"
                    name=""
                    id=""
                    className="h-11 w-full border-0 text-base font-normal bg-transparent border-b-[1px] border-b-[#ccc]"
                  />
                  <label className=" pointer-events-none absolute top-3 left-0 text-sm font-normal mb-2">
                    Password
                  </label>
                </div>
                <div className="">
                  <div className=" flex justify-between px-4">
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className=" w-5 h-5 active:border-none"
                      />
                      <span>Remember Me</span>
                    </div>
                    <div className="">
                      <a href="">Forget Password?</a>
                    </div>
                  </div>
                </div>
                <div className=" mt-7">
                  <div className=" px-4">
                    <button className=" w-full bg-[#4099ff] text-white rounded-sm py-3 px-4 hover:bg-blue-400 duration-75">
                      LOGIN
                    </button>
                  </div>
                </div>
                <p className=" text-left  text-[#37474f] mt-4">
                  Don't have an account?
                  <a href="" className=" hover:text-blue-500">
                    Register here
                  </a>
                  for free!
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
