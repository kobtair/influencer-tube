import React, { useEffect } from "react";
import banner from "../assets/image 3.png";
import google from "../assets/image 4.png";
import image5 from "../assets/image 5.png";
import image6 from "../assets/image 6.png";
import image7 from "../assets/image 7.png";
import image8 from "../assets/image 8.png";
import image9 from "../assets/image 9.png";
import image10 from "../assets/image 10.png";
import { Link } from "react-router-dom";
import image11 from "../assets/image 11.png";
import { animateScroll } from "react-scroll";
import image12 from "../assets/image 12.png";

const ColaborationHub = () => {
  useEffect(()=>{
    animateScroll.scrollToTop()
  }, [])
  return (
    <>
      <div className="main bg-black">
        z
        <div className="banner m-0">
          <img className="w-[100vw] m-0 p-0 h-[75vh]" src={banner} alt="" />
          <div className="box h-44 w-96 bg-slate-300 rounded-md relative  bottom-56 left-[64vw] ">
            <h1 className="font-semibold text-2xl  mx-2 ">wellcome!</h1>
            <p className="p-1">
              On this page our recommends different promotion methods and their
              charactiristics to you. You can understand and choose the the
              advertising the promotion that suit you and maintain the most
              efficient use of costs
            </p>
          </div>
        </div>
        <div className="pics border-2 border-white rounded my-5 mx-12 w-[90vw] h-[80vh]">
          <div className="imgHeading">
            <p className="text-white font-medium text-2xl flex justify-center pt-4">
              Internet advertising business
            </p>
          </div>
          <div className="images flex">
            <div className="img1">
              <img className="h-80 w-80 m-16" src={google} alt="" />
              <p className="relative bottom-24 left-16 bg-white w-80 h-16 rounded-md text-2xl font-medium pt-3 px-8">
                Search ads
              </p>
            </div>
            <div className="img2">
              <img className="h-80 w-80 m-16" src={image5} alt="" />
              <p className="relative bottom-24 left-16 bg-white w-80 h-16 rounded-md text-2xl font-medium px-8 pt-3">
                display advertising
              </p>
            </div>
          <Link to={"/collaboration-2"} >  <div className="img2">
              <img className="h-80 w-80 m-16" src={image6} alt="" />
              <p className="relative bottom-24 left-16 bg-white w-80 h-16 rounded-md text-2xl font-medium px-8 pt-3">
                video ads
              </p>
            </div>
            </Link>
          </div>
        </div>
        <div className="pics border-2 border-white rounded my-5 mx-12 w-[90vw] h-[80vh]">
          <div className="imgHeading"></div>
          <div className="images flex">
            <div className="img1">
              <img className="h-80 w-80 m-16" src={image7} alt="" />
            </div>
            <div className="img2">
              <img className="h-80 w-80 m-16" src={image8} alt="" />
            </div>
            <div className="img2">
              <img className="h-80 w-80 m-16" src={image9} alt="" />
            </div>
          </div>
        </div>
        <div className="pics border-2 mb-12 border-white rounded my-5 mx-12 w-[90vw] h-[80vh]">
          <div className="imgHeading"></div>
          <div className="images flex ">
            <div className="img1">
              <img className="h-80 w-80 m-16" src={image10} alt="" />
            </div>
            <div className="img2">
              <img className="h-80 w-80 m-16" src={image11} alt="" />
            </div>
            <div className="img2">
              <img className="h-80 w-80 m-16" src={image12} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColaborationHub;
