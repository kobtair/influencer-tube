import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

const UploadForm = () => {
  const [description, setDescription] = useState("");
  const {loggedInUser} = useContext(AuthContext)

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/gigs', {
        owner: (loggedInUser.firstName + " " + loggedInUser.lastName) || loggedInUser.username,
        niche: selectedOption,
        description: description,
      });

      console.log('Response:', response.data);

      // Reset form fields after successful upload
      setSelectedOption('');
      setDescription('');

      alert('Gig uploaded successfully!');
    } catch (error) {
      console.error('Error uploading gig:', error.message);
    }
  };
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Upload Gig</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-semibold mb-2"
          >
            Category
          </label>
          <select
            required
            id="dropdown"
            className="border px-3 py-2 rounded-lg mb-3 w-full"
            onChange={handleSelect}
            value={selectedOption}
          >
            <option value=""> Niche/Industry</option>
            <option value="Gamer">Gamer</option>
            <option value="Public Figure">Public Figure</option>
            <option value="Athlete">Athlete</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter description"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
