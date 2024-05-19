import React, { useState } from "react";
import axios from "axios";

const UpdateRefreshTokenForm = () => {
  const [refreshToken, setRefreshToken] = useState("");

  const handleChange = (e) => {
    setRefreshToken(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "http://localhost:3001/admin/updateRefreshToken",
        { refreshToken }
      );

      alert(response.data.message);
      // Handle success
    } catch (error) {
      console.error("Error updating refresh token:", error);
      // Handle error
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Update Refresh Token</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="refreshToken" className="block text-gray-700 font-semibold mb-1">
            Refresh Token:
          </label>
          <input
            type="text"
            id="refreshToken"
            value={refreshToken}
            onChange={handleChange}
            className="border border-gray-400 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter Refresh Token"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateRefreshTokenForm;
