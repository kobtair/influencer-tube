import React from "react";
import { Link } from "react-scroll";
import banner from "../assets/Banner.png";
const Banner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPositionY: "center",
        }}
        className="img w-full h-[63vh] flex items-center justify-end pr-40 "
      >
        <div className="box  bg-slate-200 w-[45vw] h-[41vh] p-10 flex items-center rounded-md  ">
          <div className="content flex flex-col gap-y-5 ">
            <div className="tracking-widest text-1xl">New Arrival</div>
            <div className="heading font-bold text-3xl w-56">
              <h1 className="text-5xl w-full whitespace-nowrap leading-snug">Discover Our <br /> Top Influencers</h1>
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              perferendis cupiditate, iste sit corporis eveniet commodi
              excepturi?
            </div>
            <Link to="top-influencers" smooth="true">
            <button className="bg-black  text-white w-40 h-16 py-2 px-3 mt-4">
              Discover
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
