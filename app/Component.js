"use client";
import Image from "next/image";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";

const Component = () => {
  const [ps, setPs] = useState(false);
  return (
    <div className="bg-[url('/bg.png')] w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center my-32 md:my-0 ">
      <div className="bg-white max-w-[1000px] w-full px-10 pt-10 pb-3 rounded-[30px] overflow-hidden">
        <div className="relative w-[160px] h-[79px] mx-auto">
          <Image src="/logo.png" fill className="w-full h-full object-cover" />
        </div>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-[34px]">
          <div>
            <h2 className="text-[#333] text-xs capitalize">welcome 👋</h2>
            <h1 className="mt-1 text-[#000] text-sm font-semibold">
              Login to your account
            </h1>
            <form className="mt-[29px]">
              <div>
                <label
                  htmlFor="email"
                  className="text-[#333] text-xs font-medium"
                >
                  Email/Phone
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full h-[41px] rounded-[5px] border bg-[#f9f9f9] placeholder:text-[#B4B4B4] placeholder:text-[10px] px-3"
                  placeholder="Enter your email/phone number"
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="email"
                  className="text-[#333] text-xs font-medium"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={ps ? "text" : "password"}
                    name="email"
                    id="email"
                    className="w-full h-[41px] rounded-[5px] border bg-[#f9f9f9] placeholder:text-[#B4B4B4] placeholder:text-[10px] px-3"
                    placeholder="Enter password"
                  />
                  <IoEyeSharp
                    onClick={() => setPs(!ps)}
                    className="absolute top-[27%] right-5 text-[#498E42] cursor-pointer"
                  />
                </div>
              </div>
              <input
                type="submit"
                value="login"
                className="block w-full cursor-pointer h-[44px] rounded-[5px] bg-[#154423] mt-[25px] text-white text-sm font-semibold capitalize"
              />
            </form>
            <div className="mt-[32px] flex items-center">
              <span className="flex-1 bg-gray-200 h-[2px]"></span>
              <span className="capitalize text-sm text-[#333] px-1">or</span>
              <span className="flex-1 bg-gray-200 h-[2px]"></span>
            </div>
            <div className="mt-[29px]">
              <label htmlFor="" className="text-[#333] text-xs font-medium">
                Join meeting directly
              </label>
              <div className="relative">
                <input
                  type="email"
                  name=""
                  id=""
                  className="w-full h-[41px] rounded-[5px] border bg-[#f9f9f9] placeholder:text-[#B4B4B4] placeholder:text-[10px] px-3 mt-1.5"
                  placeholder="Enter Code"
                />
                <button className="bg-[#498E42] rounded-[7px] w-[75px] absolute right-[6px] top-[11px] text-white  h-[32px]">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-[319px] relative overflow-hidden">
            <Image
              src="/right.png"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="mt-[40px] flex items-center space-x-4 justify-center">
          <span className="text-black text-[13px]">Powered by</span>
          <div className="w-[49px] h-[57px] relative">
            <Image
              src="/nitb.png"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
