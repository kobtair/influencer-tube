import React from "react";
import img1 from "../assets/avatar-placeholder.jpg";
import { FaRegStar } from "react-icons/fa";
const TopInfluencer = ({influencers}) => {

  return (
    <>
      <div className="main bg-black flex justify-center m-0 p-20">
        <div className="wrap">
          <div className="heading text-white font-bold m-3  flex justify-center">
            <h1 className="text-5xl">Top influencers of the week</h1>
          </div>
          <div className="text-white text-2xl m-3 flex justify-center ">
            Professtional and high rated
          </div>
          <div className="cards grid grid-cols-3 gap-20 text-white  mt-16 ">
            {influencers.filter((_,i)=>i<3).map((item) => (
              <div key={item.id}>
                <div
                  style={{
                    backgroundImage: `url(${item.profilePic.includes("cloudinary")? item.profilePic : img1})`,
                    backgroundSize: "cover",
                  }}
                  className="relative w-96 h-96 rounded-xl"
                >
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-40  px-5 py-3">
                    <p className=" font-semibold">{item.fullName}</p>
                    <p className="">{item.niche}</p>
                    
                  </div>
                  <p className="absolute flex items-center right-0 top-0">
                    4 <FaRegStar />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopInfluencer;
