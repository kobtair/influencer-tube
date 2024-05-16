import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router for routing
import InfluencerCard from './InfluencerCard';

const Search = () => {
  const [influencers, setInfluencers] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchInfluencers = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/influencers?search=${name}`);
        setInfluencers(response.data);
      } catch (error) {
        console.error('Error fetching influencers:', error);
      }
    };

    fetchInfluencers();
  }, [name]);

  return (
    <div className="px-36 py-20 grid grid-cols-4">
      {influencers.map(influencer => (
        <InfluencerCard key={influencer.id} item={influencer} />
      ))}
    </div>
  );
};

export default Search;
