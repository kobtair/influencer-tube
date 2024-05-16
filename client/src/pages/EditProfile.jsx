import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    biography: "",
    email: "",
    niche: "",
    instagramLink: "",
    profilePic: null, // File input for profile picture
  });

  const {loggedInUser} = useContext(AuthContext)
  const {username} = loggedInUser

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:3001/influencers/${username}`;

    try {
      const response = await axios.put(url, formData);
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error("Error updating influencer:", error);
      // Handle error
    }
  };

  return (
    <div className="bg-black text-white">
    <h1 className="text-2xl font-bold mb-4">Edit Influencer</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Input fields with labels */}
      <div>
        <label htmlFor="fullName" className="block font-semibold mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="dark:bg-gray-700 dark:text-white border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Full Name"
        />
      </div>
      <div>
        <label htmlFor="biography" className="block font-semibold mb-1">
          Biography
        </label>
        <input
          type="text"
          id="biography"
          name="biography"
          value={formData.biography}
          onChange={handleChange}
          className="dark:bg-gray-700 dark:text-white border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Biography"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-semibold mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="dark:bg-gray-700 dark:text-white border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Email"
        />
      </div>
      <div>
        <label htmlFor="niche" className="block font-semibold mb-1">
          Niche
        </label>
        <input
          type="text"
          id="niche"
          name="niche"
          value={formData.niche}
          onChange={handleChange}
          className="dark:bg-gray-700 dark:text-white border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Niche"
        />
      </div>
      <div>
        <label htmlFor="instagramLink" className="block font-semibold mb-1">
          Instagram Link
        </label>
        <input
          type="text"
          id="instagramLink"
          name="instagramLink"
          value={formData.instagramLink}
          onChange={handleChange}
          className="dark:bg-gray-700 dark:text-white border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Instagram Link"
        />
      </div>
      {/* File input for profile picture */}
     
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Save Changes
      </button>
    </form>
  </div>
  );
};

export default EditProfile;
