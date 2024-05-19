import Modal from "./Modal";
import log from "../assets/log.PNG";
import logo from "../assets/logo.png"
import { IoIosSearch } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import ChatModalInfluencer from "./ChatModalInfluencer";

const Navbar = () => {
  const { isLoggedIn, loggedInUser, loggedInAs, signOut } =
    useContext(AuthContext);
  const [isMessageClicked, setIsMessageClicked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [searchParam, setSearchParam] = useState();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const handleSearchSubmit = () => {
    navigate(`/search/${searchParam}`);
  };

  return (
    <>
      {isChatModalOpen && (
        <ChatModalInfluencer
          onClose={setIsChatModalOpen}
          username={loggedInUser.username}
        />
      )}
      <nav className="bg-[#202020] h-16 flex  justify-between items-center ">
        <Link to={"/"} className="logo flex items-center cursor-pointer">
          <span className="flex items-center">
            <img
              className="h-10 "
              src={logo}
              alt=""
            />
          <img
            className="h-10 w-32 flex items-center m-2 p-1"
            src={log}
            alt=""
          />
          </span>
        </Link>
        <div className="right flex mx-12 items-center">
          {pathname === "/dashboard" && loggedInAs === "brand" && (
            <div className="right   flex ">
              <div className="svg text-white flex justify-center items-center m-0.5">
                <IoIosSearch size={30} />
              </div>
              <form onSubmit={handleSearchSubmit} className="input my-3 mx-2 ">
                <input
                  onChange={(e) => {
                    setSearchParam(e.target.value);
                  }}
                  className=" text-slate-300 bg-[#202020] border-b-2 border-blue-50 border-solid py-2 px-5 outline-none mx-2 mt-1"
                  type="text"
                  placeholder="Search by name"
                />
              </form>
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
           {loggedInAs === "admin" ? (
            <span>
              <button
                onClick={() => {
                  navigate("/admin/contact");
                }}
                className="bg-white text-black rounded-3xl px-5 py-3 mr-5"
              >
                Contact Details
              </button>
              <button
                onClick={() => {
                  navigate("/token/update");
                }}
                className="bg-white text-black rounded-3xl px-5 py-3 mr-5"
              >
                Update Refresh Token
              </button>
              
            </span>
          ) : (
            ""
          )}
          {pathname === "/" && !isLoggedIn ? (
            <div className="flex gap-x-5">
              <Link to={"/collaboration-4"}>
                <button className="bg-white text-black rounded-3xl px-5 py-3">
                  Contact Us
                </button>
              </Link>
              <Link to={"/register/influencer"}>
                {" "}
                <button className="bg-white text-black rounded-3xl px-5 py-3">
                  Join as Creator
                </button>
              </Link>
              <Link to={"/login"}>
                {" "}
                <button className="bg-white text-black rounded-3xl px-5 py-3">
                  Log In
                </button>
              </Link>
            </div>
          ) : pathname === "/" && loggedInAs === "brand" ? (
            <span>
            <Link to={"/dashboard"}>
              <button className="bg-white text-black rounded-3xl px-5 py-3 mr-5">
                Dashboard
              </button>
            </Link>
            <Link to={"/gig/upload"}>
              <button className="bg-white text-black rounded-3xl px-5 py-3 mr-5">
                Upload Gig
              </button>
            </Link>
            </span>
          ) : (
            ""
          )}
         
          {loggedInAs === "influencer" ? (
            <span>
              <button
                onClick={() => {
                  setIsChatModalOpen(true);
                  setIsMessageClicked(true)
                }}
                className="bg-white text-black rounded-3xl px-5 py-3 mr-5"
              >
                Messages {!isMessageClicked && <span className="text-3xl text-red-700">*</span>} 
              </button>
              <button
                onClick={() => {
                  navigate("/booking-requests");
                }}
                className="bg-white text-black rounded-3xl px-5 py-3 mr-5"
              >
                Booking Requests
              </button>
              <button
                onClick={() => {
                  navigate("/gigs");
                }}
                className="bg-white text-black rounded-3xl px-5 py-3 mr-5"
              >
                Gigs
              </button>
              <button
                onClick={() => {
                  navigate("edit-profile");
                }}
                className="bg-white text-black rounded-3xl px-5 py-3 mr-5"
              >
                Edit Profile
              </button>
            </span>
          ) : (
            ""
          )}
          {isLoggedIn ? (
            <span className="text-white">
              Welcome {loggedInUser.username || loggedInUser.firstName}{" "}
              <button
                onClick={() => {
                  signOut(navigate);
                }}
                className="px-5 py-2 border-2 border-solid border-white"
              >
                Sign Out
              </button>
            </span>
          ) : (
            ""
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
