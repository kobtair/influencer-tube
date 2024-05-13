import React from "react";
import img1 from "../assets/free-images.jpg";
const TopInfluencer = () => {
  const dummyData = [
    { location:"usa", name: "John", img: img1   ,type:"a/b/c"},
    { location:"usa", name: "Emma", img: img1  ,type:"a/b/c" },
    { location:"usa", name: "Michael", img: img1  ,type:"a/b/c" }
  ];
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
            {dummyData.map((item) => (
              <div key={item.id}>
                <div style={{backgroundImage: `url(${item.img})`, backgroundSize: "cover"}}   className="relative w-96 h-96 rounded-xl">
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-40  px-5 py-3">
                  <p className=" font-semibold" >{item.name}</p>
                  <p className="" >{item.type}</p>
                  <p className=" text-yellow-400" >{item.location}</p>
                  <p>4 Star</p>
                  </div>
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