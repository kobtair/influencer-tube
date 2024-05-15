import React from "react";

import image6 from "../assets/image 6.png";

const Colaboration2 = () => {
  return (
    <>
      <div className="main bg-black">
        
        <div className="main"> <div className="image flex justify-center h-[84] w-max ">
          <img className="w-[75vw] h-[80vh] mx-36 " src={image6} alt="" />
        </div>
        <div className="text  mx-36 p-10 border-2 mb-4 w-[75vw] rounded-b-md">  <p className="text-white text-2xl ">Video ads</p></div>
        </div>
        <div className="intro text-white  border-2 rounded-md mx-36 w-[75vw]  ">
          <p className="border-b-2">
            <div className="tex py-6 px-12 text-white text-2xl ">Information</div></p>
          <p className="flex justify-center text-white font-semibold text-2xl w-[60vw] p-20">
            Insert your advertisement before, during, and after playing in the media of the video. 
<br />
Wide social acceptance. Video advertisements can attract a wide audience because they usually have high production standards, can accurately convey information, and are easy to trigger consensus and emotional resonance among the audience.
<br />
Accurately locate the target audience. Video advertisements can be accurately targeted based on different platforms and user groups, which enables them to more effectively reach the target audience.
<br />
Featuring a large creative space and strong social attributes
          </p>
        </div>
        <div className="btn bg-black h-40 ">
          <button className="rounded-3xl bg-slate-100 p-2 m-8 flex float-right px-10 mx-44 ">Start now!</button>
        </div>
      </div>
    </>
  );
};

export default Colaboration2;
