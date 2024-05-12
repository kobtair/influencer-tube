import React from "react";
import img1 from "../Assets/free-images.jpg";

const Recumended = () => {
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
      <div className="text-3xl bg-black text-white font-bold m-10">
        Recumended
      </div>
      <div className="wrap flex p-10 w-[98vw] flex-wrap">
        {dummyData.map((item) => (
          <div key={item.id}>
            <div className="wrap">
              <img
                className="h-96 w-96 rounded-t-lg mx-10 mt-5 "
                src={item.img}
                alt={item.name}
              />
              <div className="imgdata ">
                <p className="text-xl   bg-slate-200 w-96 ml-10  px-5 font-semibold">{item.name}</p>
                <p className="text-xl  bg-slate-200 w-96 ml-10  px-5">{item.type}</p>
                <p className="text-xl   bg-slate-200 w-96 ml-10 px-5 rounded-b-md  text-yellow-400">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="showbtn flex justify-center">
        <button className="bg-white p-5 m-8">Show More</button>
      </div>
    </>
  );
};

export default Recumended;
