import React from "react";
import artpic from "../assets/Art.png";
import Inputs from "../components/Inputs";
const SignUpForBrand = () => {
  return (
    <div className="main flex justify-center items-center w-[100vw] h-[100vh]">
      <div className="left">
        <img className="w-[40vw] h-[90vh]" src={artpic} alt="" />
      </div>
      <div className="right m-7 flex justify-center items-center w-[43vw]">
        <div className="right-wrap">
          <Inputs />
          <div className="btn">
            <button
              className="bg-black rounded-xl w-32  text-white flex items-center justify-center float-end my-3 mx-4 p-2"
              type=" button"
              id="btn"
            >
              Create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForBrand;
