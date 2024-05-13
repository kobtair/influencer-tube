import React from 'react'

const InfluencerCard = ({item}) => {
  return (
    <div key={item.id}>
    <div className="wrap ">
      <img
        className=" rounded-t-lg "
        src={item.img}
        alt={item.name}
      />
      <div className="imgdata flex justify-between bg-white px-10 py-3">
        <div>
        <p className=" font-semibold">{item.name}</p>
        <p className="">{item.type}</p>
        <p className=" rounded-b-md  text-yellow-700  font-outline-2 ">{item.location}</p>
        </div>
        <button className="bg-[#955ddd] rounded-md px-5 h-8 text-white"> Profile</button>
      </div>
    </div>
  </div>
  )
}

export default InfluencerCard