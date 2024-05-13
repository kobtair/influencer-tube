import React, { useState } from "react";
import artpic from "../assets/Art.png";
import Inputs from "../components/Inputs";
const SignUpAsInfluencer = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div className="main flex justify-center items-center w-[100vw] h-[100vh]">
        <div className="left">
          <img className="w-[40vw] h-[90vh]" src={artpic} alt="" />
        </div>
        <div className="right m-7 flex justify-center items-center w-[43vw]">
          <div className="right-wrap">
            <Inputs />
            <div className="option-wrap ">
              <div className="mx-2">
                <select
                  id="dropdown"
                  className="border px-3 py-2 rounded-lg mb-3 w-[32vw]"
                  onChange={handleSelect}
                  value={selectedOption}
                >
                  <option value=""> Nech/Industry</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                {selectedOption && (
                  <p className="text-xs text-gray-500">
                    Selected option: {selectedOption}
                  </p>
                )}
              </div>
              <div className="mx-2">
                <select
                  id="dropdown"
                  className="border px-3 py-2 rounded-lg mb-3 w-[32vw] "
                  onChange={handleSelect}
                  value={selectedOption}
                >
                  <option value=""> Nech/Industry</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                {selectedOption && (
                  <p className="text-xs text-gray-500">
                    Selected option: {selectedOption}
                  </p>
                )}
              </div>
            </div>
            <div className="socialaccounts mx-3 ">
              <p className=" cursor-pointer border-2 p-2 float-start rounded-md m-1.5  w-[15vw]">
                Instagram
              </p>
              <p className=" cursor-pointer border-2 p-2 float-start rounded-md m-1.5 w-[15vw]">
                Youtube
              </p>
              <p className=" cursor-pointer border-2 p-2 float-start rounded-md m-1.5 w-[15vw]">
                Facebook
              </p>
              <p className=" cursor-pointer border-2 p-2 float-start rounded-md m-1.5 w-[15vw]">
                Tiktok
              </p>
            </div>

            <div className="btn w-[32vw]">
              <button
                className="bg-black rounded-xl w-32  text-white flex items-center justify-center float-end my-2 mx-4 p-1.5"
                type=" button"
                id="btn"
              >
                Create account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpAsInfluencer;
