import React, { useState } from "react";
import dot from "../assets/Capture.PNG";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
const Inputs = () => {
  const [position, setPosition] = useState("first");
  const [inputType, setInputType] = useState("password");
  const handleShuffle = () => {
    setPosition((prevPosition) =>
      prevPosition === "first" ? "second" : "first"
    );
  };
  const handleToggle = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };
  return (
    <>
      <div className="left-rap w-[33vw]">
        <div className="dot my-3 h-4 mx-2 ">
          <img className="h-8" src={dot} alt="" />
        </div>
        <h1 className="text-2xl font-medium mt-1.5 mx-2">Create an account</h1>
        <div className="text flex mb-4 mx-2">
          Alredy have an account?
          <p className="font-semibold cursor-pointer">
            <u>Log in</u>
          </p>
        </div>
        <div class="mb-4 flex">
          <div className="input1 mx-2">
            {" "}
            <label class="block text-gray-700 text-sm  " for="email">
              First name
            </label>
            <input
              class="border px-3 py-1 w-[16vw] rounded-lg"
              id="email"
              type="text"
            />
          </div>
          <div className="input2 mx-2">
            <label class="block text-gray-700 text-sm  " for="email">
              Last name
            </label>
            <input
              class="border px-3 py-1 w-[16vw] rounded-lg"
              id="email"
              type="text"
            />
          </div>
        </div>
        <div className="email-input mx-2">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm " for="email">
              Email Address
            </label>
            <input
              class="border px-3 py-1 w-[33vw] rounded-lg"
              id="email"
              type="text"
            />
          </div>
        </div>
        <div class="mb-3 ">
          <div className="password flex">
           
            <div className="input1 mx-2">
             
              <label class="block text-gray-700 text-sm  " for="email">
                Password
              </label>
              <input
                class="border px-3 py-1 w-[16vw] rounded-lg"
                id="password1"
                type={inputType}
              />
            </div>
            <div className="input2 mx-2">
            <label class="block text-gray-700 text-sm " for="email">
              Confirm your password
            </label>
            <input
              class="border px-3 py-1 w-[16vw] rounded-lg"
              id="password2"
              type={inputType}
            />
          </div>
          </div>

          <div class="mb-3 mx-2">
            <p className="text-sm flex flex-nowrap">
              Use 8 are more charactors with a mix of latters,numbers & symbols
            </p>
            <button className="showpass flex items-center mt-2 cursor-pointer ">
              <div className="svgs" onClick={handleToggle}>
                <div
                  className={position === "first" ? "" : "hidden"}
                  onClick={handleShuffle}
                >
                  <MdCheckBoxOutlineBlank />
                </div>
                <div
                  className={position === "second" ? "" : "hidden"}
                  onClick={handleShuffle}
                >
                  <MdCheckBox />
                </div>
              </div>

              <p className="text-sm">Show Password</p>
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Inputs;
