import React, { useState } from "react";
import tick from "../assets//black-check.png";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookingModal = ({setIsBookingModalOpen}) => {
  const {id} = useParams()
  const [position, setPosition] = useState("first");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    details: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post(`http://localhost:3001/booking-request/${id}`, {
        formData,
      })
      .then((res) =>{
         console.log(res.data)
         setIsBookingModalOpen(false)
        })
      .catch((err) => alert(err));
  };
  const handleShuffle = () => {
    setPosition((prevPosition) =>
      prevPosition === "first" ? "second" : "first"
    );
  };
  return (
    <>
      <div
        className="fixed top-16 left-0 w-screen h-screen z-20 bg-gray-800 bg-opacity-50 flex"
      >
        <div className="bg-slate-200 top-10 rounded-lg py-4  mx-auto w-[60%] h-[80%]">
          <div className="chat flex justify-between items-center px-2 border-black border-b-2 ">
            <div className="svg mt-1 mr-0.5 h-5 w-5 ">
              <img src={tick} alt="" />
            </div>
            <div className="font-semibold text-lg ">Booking influencer</div>
            <div onClick={()=>{setIsBookingModalOpen(false)}} className="text-3xl cursor-pointer bg-black text-white px-3 mb-3 ">X</div>
          </div>

          <div className=" ">
            <form onSubmit={handleSubmit}>
              <div className="wrap">
                <div className="my-2 mt-4 flex ">
                  <label htmlFor="name" className="flex font-medium mx-4 ">
                    Your name: <p className="text-red-600 text-2xl">*</p>{" "}
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border bg-inherit border-gray-500 p-2 w-56 mx-2"
                  />
                </div>
                <div className="my-2 flex">
                  <label htmlFor="email" className="flex font-medium mx-4 ">
                    Email: <p className="text-red-600 text-2xl">*</p>
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border bg-inherit border-gray-500  p-2 w-72 mx-4 ml-11"
                  />
                </div>
                <div className="my-2 flex">
                  <label htmlFor="phone" className="flex font-medium mx-4">
                    Phone: <p className="text-red-600 text-2xl">*</p>
                  </label>
                  <input
                    required
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border bg-inherit border-gray-500  p-2 w-64 ml-9"
                  />
                </div>
                <div className="my-2 flex">
                  <label htmlFor="address" className="flex font-medium mx-4">
                    Address: <p className="text-red-600 text-2xl">*</p>
                  </label>
                  <input
                    required
                    id="address"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="border bg-inherit border-gray-500  p-2 w-[40vw] ml-6 "
                  />
                </div>
                <div className="my-2 flex">
                  <label htmlFor="date" className="flex font-medium mx-4">
                    Date: <p className="text-red-600 text-2xl">*</p>
                  </label>
                  <input
                    required
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="border bg-inherit border-gray-500  p-2 w-40 ml-12"
                  />
                </div>

                <div className="my-2 flex">
                  <label htmlFor="details" className="flex font-medium mx-4">
                    Details: <p className="text-red-600 text-2xl">*</p>
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    className="border bg-inherit border-gray-500 p-2 w-[40vw] ml-8"
                  ></textarea>
                </div>
                <div className="payment my-3 flex">
                  <div
                    htmlFor="details"
                    className=" flex font-medium mx-4 mt-2"
                  >
                    Payment: <p className="text-red-600 text-2xl">*</p>
                  </div>
                  <button className="showpass flex items-center mt-2 cursor-pointer ">
                    <div className="svgs">
                      <div
                        className={position === "first" ? "" : "hidden"}
                        onClick={handleShuffle}
                      >
                        <MdCheckBoxOutlineBlank />
                      </div>
                      <div
                        className={position === "second" ? "" : "hidden"}
                        onClick={handleShuffle}
                      >
                        <MdCheckBox />
                      </div>
                    </div>

                    <p
                      className="text-md font-medium text-blue-500"
                      onClick={handleShuffle}
                    >
                      Payment
                    </p>
                  </button>
                </div>
                <div className="sub flex float-right mx-10">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 font-semibold rounded-md"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
