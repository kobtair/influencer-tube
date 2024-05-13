import React from "react";
import img1 from "../assets/free-images.jpg";
import InfluencerCard from "./InfluencerCard";

const Recommended = () => {
  const dummyData = [
    { location: "usa", name: "John", img: img1, type: "a/b/c" },
    { location: "usa", name: "Emma", img: img1, type: "a/b/c" },
    { location: "usa", name: "Michael", img: img1, type: "a/b/c" },
    { location: "usa", name: "John", img: img1, type: "a/b/c" },
    { location: "usa", name: "Emma", img: img1, type: "a/b/c" },
    { location: "usa", name: "Michael", img: img1, type: "a/b/c" },
    { location: "usa", name: "John", img: img1, type: "a/b/c" },
    { location: "usa", name: "Emma", img: img1, type: "a/b/c" },
    { location: "usa", name: "Michael", img: img1, type: "a/b/c" },
    { location: "usa", name: "John", img: img1, type: "a/b/c" },
    { location: "usa", name: "Emma", img: img1, type: "a/b/c" },
    { location: "usa", name: "Michael", img: img1, type: "a/b/c" },
  ];
  return (
    <>
      <div className="text-5xl bg-black text-white font-bold m-10 ">
        Recommended
      </div>
      <div className="wrap grid grid-cols-3 gap-20 p-10   ">
        {dummyData.map((item) => (
         <InfluencerCard item={item} />
        ))}
      </div>
      <div className="showbtn flex justify-center">
        <button className="bg-white p-5 m-8">Show More</button>
      </div>
    </>
  );
};

export default Recommended;
