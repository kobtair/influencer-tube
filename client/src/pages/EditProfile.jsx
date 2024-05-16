import React, { useContext, useState, useEffect, useRef } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

const EditProfile = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dqdtdhr16',
      uploadPreset: "e0a1n42e",
      sources: ['local'], // Restrict file sources to local disk only
      multiple: false, // Only allow uploading one file at a time
      cropping: true, // Enable cropping
      croppingAspectRatio: 1, // Set aspect ratio for cropping (optional)
      croppingShowDimensions: true, // Show dimensions during cropping (optional)
      croppingCoordinatesMode: 'custom', // Set cropping mode to custom (optional)
      croppingDefaultSelectionRatio: { width: 1, height: 1 }, // Set default cropping selection ratio (optional)
    }, function (error, result) {
      if (!error && result && result.event === "success") {
        // Handle successful upload
        const { secure_url } = result.info;
        setFormData({ ...formData, profilePic: secure_url });
      }
    })
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    biography: "",
    email: "",
    niche: "",
    instagramLink: "",
    profilePic: "", // File input for profile picture
  });

  const { loggedInUser } = useContext(AuthContext);
  const { username } = loggedInUser;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:3001/influencers/${username}`;

    try {
      const response = await axios.put(url, formData);
      alert(response.data.message);
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
        <div>
          <label htmlFor="fullName" className="block font-semibold mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={loggedInUser.fullName}
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
            value={loggedInUser.biography}
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
            value={loggedInUser.email}
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
            value={loggedInUser.niche}
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
            value={loggedInUser.instagramLink}
            onChange={handleChange}
            className="dark:bg-gray-700 dark:text-white border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Instagram Link"
          />
        </div>
        <div>
          <label htmlFor="profilePic" className="block font-semibold mb-1">
            Profile Picture
          </label>
          <input
            type="text"
            id="profilePic"
            name="profilePic"
            value={loggedInUser.profilePic}
            onChange={handleChange}
            className="dark:bg-gray-700 dark:text-white border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Profile Picture URL"
            readOnly // Prevent user from manually editing the URL
          />
          <div className="mt-2">
            <button type="button" onClick={() => { widgetRef.current.open() }} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
              Upload Profile Picture
            </button>
          </div>
        </div>
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
