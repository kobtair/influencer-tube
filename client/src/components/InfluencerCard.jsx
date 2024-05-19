import React from 'react'
import image from "../assets/avatar-placeholder.jpg"
import { Link } from 'react-router-dom'

const InfluencerCard = ({item}) => {
  return (
    <div key={item.id}>
    <div className="wrap ">
      <img
        className=" rounded-t-lg min-w-full "
        src={item.profilePic? (item.profilePic.includes("cloudinary")? item.profilePic : image ): image}
        alt={item.fullName}
      />
      <div className="imgdata flex justify-between bg-white px-10 py-3">
        <div>
        <p className=" font-semibold">{item.fullName}</p>
        <p className="">{item.niche}</p>
        {/* <p className=" rounded-b-md  text-yellow-700  font-outline-2 ">"USA"</p> */}
        </div>
        <Link to={`/profile/${item.username}`}>
        <button className="bg-[#955ddd] rounded-md px-5 h-8 text-white"> Profile</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default InfluencerCard