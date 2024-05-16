import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Colab5 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    socialMediaLinks: "",
    bio: "",
    dob: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/admin/contact", {
        username: "admin", // Provide the admin's username
        contactDetails: formData,
      });
      console.log("New contact details added successfully");
      alert("New contact details added successfully");
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      console.error("Error adding contact details:", error);
    }
  };

  return (
    <div className="main bg-black">
      <div className="heading text-3xl font-bold text-white py-8 px-20">
        JOIN US
      </div>
      <div className="form">
        <div className="min-h-screen flex items-center justify-center bg-black">
          <form
            onSubmit={handleSubmit}
            className="w-[70vw] bg-black p-8 rounded-lg shadow-lg text-white"
          >
            <div className="mb-6">
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Full Name"
                className="bg-white border border-black text-black outline-none w-full py-2 px-3 placeholder-black placeholder-opacity-50"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                name="socialMediaLinks"
                value={formData.socialMediaLinks}
                onChange={handleChange}
                placeholder="Social Media Links"
                className="bg-white border border-black text-black outline-none w-full py-2 px-3 placeholder-black placeholder-opacity-50"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="BIO"
                className="bg-white border border-black text-black outline-none w-full py-2 px-3 placeholder-black placeholder-opacity-50"
              />
            </div>
            <div className="mb-6">
              <input
                type="date" // Changed to type "date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="bg-white border border-black text-black outline-none w-full py-2 px-3 placeholder-black placeholder-opacity-50"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="bg-white border border-black text-black outline-none w-full py-2 px-3 placeholder-black placeholder-opacity-50"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-white text-black py-4 px-20 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Colab5;
