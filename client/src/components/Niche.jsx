import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import InfluencerCard from './InfluencerCard';
import { AuthContext } from '../contexts/AuthContext';

const Niche = () => {
  const [influencers, setInfluencers] = useState([]);
  const {niches} = useContext(AuthContext)
  const nicheQuery = niches.join(",")
  useEffect(() => {
    const fetchInfluencers = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/influencers?niches=${nicheQuery}`);
        setInfluencers(response.data);
      } catch (error) {
        console.error('Error fetching influencers:', error);
      }
    };

    if (nicheQuery) {
      fetchInfluencers();
    }
  }, []);

  return (
    <div className="px-36 py-20 grid grid-cols-4 gap-5">
      {influencers.map(influencer => (
        <InfluencerCard key={influencer.id} item={influencer} />
      ))}
    </div>
  );
};

export default Niche;
