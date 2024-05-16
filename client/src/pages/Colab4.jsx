import React from "react";
import image15 from "../assets/image 15.png";
import image16 from "../assets/image 16.png";
import image17 from "../assets/image 17.png";
const Colab4 = () => {
  return (
    <div className="main bg-black">
      {" "}
     
      <div className="text-2xl font-semibold text-white py-8 px-20">
        Wellcome to our website!
        <br /> <br />
        On this site you will recieve
      </div>
      <div
        className="img1 border-b-2 border-white border-t-2
  flex "
      >
        <img className="h-96 w-96 mx-10 p-5" src={image15} alt="" />
        <p className="text-2xl  text-white flex justify-center items-center w-60 mx-40">
          Advertising products suitable for every customer
        </p>
      </div>
      <div
        className="img1 border-b-2 border-white border-t-2
  flex "
      >
        <img className="h-96 w-96 mx-10 p-5" src={image16} alt="" />
        <p className="text-2xl  text-white flex justify-center items-center w-60 mx-40">
          Update more innovative advertising methods，Accurate advertising
          placement
        </p>
      </div>
      <div
        className="img1 border-b-2 border-white border-t-2
flex flex-wrap "
      >
        <img className="h-96 w-96 mx-10 p-5" src={image17} alt="" />
        <p className="text-2xl  text-white flex justify-center items-center w-60 mx-40">
          Customize your own influencer information and update it in real-time
        </p>
      </div>
      <div className="btn bg-black h-40 ">
        <button className="rounded-3xl bg-slate-100 p-2 m-8 flex float-right px-10 my-20 mx-44 ">
          Lets do it!
        </button>
      </div>
    </div>
  );
};

export default Colab4;
