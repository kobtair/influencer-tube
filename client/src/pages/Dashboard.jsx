import Banner from "../components/Banner";
import TopInfluencer from "../components/TopInfluencer";
import Recommended from "../components/Recommended";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
const Dashboard = () => {
  const navigate = useNavigate()
  const {isLoggedIn, loggedInAs} = useContext(AuthContext)
  useEffect(()=>{
    if(!isLoggedIn) {
      navigate('/login')
    }   
    if(loggedInAs!=="brand") {
      navigate('/')
    }  
  },[])
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
      <div className="bg-black">
        <div className="banner m-0">
          <Banner />
        </div>
        <div id="top-influencers" className="topinfuencer m-0">
          <TopInfluencer influencers={influencers} />
        </div>
        <div className="rec">
          <Recommended influencers={influencers}/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
