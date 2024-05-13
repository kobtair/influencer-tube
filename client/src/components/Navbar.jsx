import Modal from "./Modal";
import log from "../assets/log.PNG";
import { IoIosSearch } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { pathname } = useLocation();
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <nav className="bg-[#202020] h-16 flex  justify-between items-center ">
        <Link to={'/'} className="logo flex items-center cursor-pointer">
          <img
            className="h-10 w-32 flex items-center m-2 p-1"
            src={log}
            alt=""
          />
        </Link >
        <div className="right flex mx-12 items-center">
          {pathname === "/dashboard" && (
            <div className="right   flex ">
              <div className="svg text-white flex justify-center items-center m-0.5">
                <IoIosSearch size={30} />
              </div>
              <div className="input my-3 mx-2 ">
                <input
                  className=" text-slate-300 bg-[#202020] border-b-2 border-blue-50 border-solid py-2 px-5 outline-none mx-2 mt-1"
                  type="text"
                  placeholder="Search by name"
                />
              </div>
              <button
                className=" flex bg-slate-300 rounded-md items-center p-2 m-2"
                onClick={toggleModal}
              >
                Filter
                <FaFilter size={20} />
              </button>
              {modalOpen && <Modal toggleModal={toggleModal} />}
            </div>
          )}

          <div className="hamburger text-white ml-20">
            <GiHamburgerMenu size={30} />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
