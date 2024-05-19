import React, { useState, useEffect } from "react";
import axios from "axios";

const GigList = () => {
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    // Fetch all gigs when the component mounts
    const fetchGigs = async () => {
      try {
        const response = await axios.get("http://localhost:3001/gigs");
        setGigs(response.data);
      } catch (error) {
        console.error("Error fetching gigs:", error.message);
      }
    };

    fetchGigs();
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">All Gigs</h1>
      {gigs.map((gig) => (
        <div key={gig._id} className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-semibold mb-2">{gig.owner}</h2>
          <p className="text-gray-700 mb-2">Niche: {gig.niche}</p>
          <p className="text-gray-700">{gig.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GigList;
