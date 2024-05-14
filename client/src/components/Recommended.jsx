import { useState, useEffect } from "react";
// import img1 from "../assets/free-images.jpg";
import axios from "axios";
import InfluencerCard from "./InfluencerCard";

const Recommended = () => {
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInfluencers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/influencers', {
          params: {
            offset: 0, 
            limit: 10,
          },
        });
        console.log(response.data)
        setInfluencers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching influencers:', error);
        setLoading(false);
      }
    };
    fetchInfluencers();
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="text-5xl bg-black text-white font-bold m-10 ">
        Recommended
      </div>
      <div className="wrap grid grid-cols-3 gap-20 p-10   ">
        {influencers.map((item) => (
         <InfluencerCard item={item} />
        ))}
      </div>
      <div className="showbtn flex justify-center">
        <button className="bg-white p-5 m-8">Show More</button>
      </div>
    </>
  );
};

export default Recommended;
