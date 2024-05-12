import React from 'react'
import banner from "../Assets/Banner.png"
const Banner = () => {
  return (
   <>
   <div className="img ">
    <img className='w-[100vw] m-0 p-0 h-[63vh]  ' src={banner} alt='' />
    <div className="box bg-slate-200 w-[45vw] h-[41vh]  flex items-center rounded-md absolute bottom-0 right-0 mb-60 mr-[4vw] ">
        <div className="content  m-8">
        <div className=''>
        New Arrival
      </div>
      <div className="heading font-bold text-3xl w-56">
        <h1>Discover Our Top Influencers</h1>
      </div>
      <div className="text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic perferendis cupiditate, iste sit corporis eveniet commodi excepturi?
      </div>
  <button className='bg-black  text-white py-2 px-3 mt-4'>Discover</button>
        </div>
    </div>
   </div>
   </>
  )
}

export default Banner