import React from "react";
import img1 from "../Assets/free-images.jpg";
const TopInfluencer = () => {
  const dummyData = [
    { location:"usa", name: "John", img: img1   ,type:"a/b/c"},
    { location:"usa", name: "Emma", img: img1  ,type:"a/b/c" },
    { location:"usa", name: "Michael", img: img1  ,type:"a/b/c" }
  ];
  return (
    <>
      <div className="main bg-black flex justify-center m-0">
        <div className="wrap">
          <div className="heading text-white font-bold text-3xl m-3  flex justify-center">
            <p>Top influencers of the week</p>
          </div>
          <div className="text-white m-3 flex justify-center ">
            Professtional and high rated
          </div>
          <div className="cards text-white flex  m-12">
            {dummyData.map((item) => (
              <div key={item.id}>
                <div className="wrap flex">
                  <img className="h-96 w-96 rounded-lg mx-10 my-5 " src={item.img} alt={item.name} />
                  <p className="absolute text-xl mx-20 font-semibold" style={{bottom:"-295px"}}>{item.name}</p>
                  <p className="absolute text-xl mx-20" style={{bottom:"-320px"}}>{item.type}</p>
                  <p className="absolute text-xl mx-20 text-yellow-400" style={{bottom:"-345px"}}>{item.location}</p>
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
