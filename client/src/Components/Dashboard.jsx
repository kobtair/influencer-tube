import React, { useState } from "react";
import log from "../Assets/log.PNG";
import { IoIosSearch } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Banner from "../Screens/Banner";
import TopInfluencer from "../Screens/TopInfluencer";
import Recumended from "../Screens/Recumended";
const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <div className="bg-black">
        <nav className="bg-black h-16 flex justify-between items-center ">
          <div className="logo flex items-center">
            <img
              className="h-10 w-32 flex items-center m-2 p-1"
              src={log}
              alt=""
            />
          </div>
          <div className="right flex mx-12 items-center">
            <div className="right border-b-2  flex ">
              <div className="svg text-white flex justify-center items-center m-0.5">
                <IoIosSearch size={30} />
              </div>
              <div className="input my-3 mx-2 ">
                <input
                  className="border-none text-slate-300 bg-black outline-none mx-2 mt-1"
                  type="text"
                  placeholder="Search by name"
                />
              </div>
              <div
                className=" flex bg-slate-300 rounded-md items-center p-2 m-2"
                onClick={toggleModal}
              >
                Filter
                <FaFilter size={20} />
              </div>
              {modalOpen && (
                <div className="fixed top-16 left-0 w-screen h-screen z-20 mx-40 bg-gray-800 bg-opacity-50 flex">
                  <div className="bg-white top-10 rounded-lg p-4  mx-auto w-[50%] h-[65%]">
                  <div className="btns">
                    <p className="text-xl font-semibold flex justify-center" >Select the filter you want to apply </p>
                    <button className="border-2 border-black p-2 m-4 rounded-md">Fasion and clothing</button>
                    <button className="border-2 border-black p-2 m-4 rounded-md">TV Personality</button>
                    <button className="border-2 border-black p-2 m-4 rounded-md">Jewelry and accessories</button>
                    <button className="border-2 border-black p-2 m-4 rounded-md">Health</button>
                    <button className="border-2 border-black p-2 m-4 rounded-md">Food blogger</button>
                    <button className="border-2 border-black p-2 m-4 rounded-md">Lifestyle</button>
                    <button className="border-2 border-black p-2 m-4 rounded-md">Cloths designing</button>
                    <button className="border-2 border-black p-2 m-4 rounded-md">Music and Singig</button>
                    <button className="border-2 border-black p-2 m-4 rounded-md">Travel</button>
                    <button className="border-2 border-black p-2 m-4 rounded-md">Esport and gamming</button>
                    <button className="border-2 border-black p-2 m-4 rounded-md">Art and painting</button>
                    <button className="border-2 border-black p-2 m-4 rounded-md">Tech and computing</button>
                    <button className="border-2 border-black p-2 m-4 rounded-md">Photography</button>
                    <button className="border-2 border-black p-2 m-4 rounded-md">Fittness and gym</button>
                    <button className="border-2 border-black p-2 m-4 rounded-md">View more </button>
                  </div>
                    <button className=" w-72 bg-slate-600 border-2 border-black p-2 m-4 mx-8 rounded-md" onClick={toggleModal}>Close</button>
                    <button className=" w-72 bg-slate-600 border-2 border-black p-2 m-4  mx-8 rounded-md" >Apply</button>
                  </div>
                </div> 
              )}
            </div>
            <div className="hamburger text-white ml-20">
              <GiHamburgerMenu size={30} />
            </div>
          </div>
        </nav>
        <div className="banner m-0">
          <Banner />
        </div>
        <div className="topinfuencer m-0">
          <TopInfluencer />
        </div>
        <div className="rec">
          <Recumended />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
