import profile from "../assets/avatar-placeholder.jpg";
import InfluencerCard from "../components/InfluencerCard";
// import img1 from "../assets/free-images.jpg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ChatModal from "../components/ChatModal";
import BookingModal from "../components/BookingModal";

const Profile = () => {
  const { id } = useParams();
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const fetchInfluencers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/influencers", {
          params: {
            offset: 0,
            limit: 3,
          },
        });
        setInfluencers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching influencers:", error);
        setLoading(false);
      }
    };

    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/profile/${id}`);
        setProfileData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching influencers:", error);
        setLoading(false);
      }
    };
    fetchProfile();
    fetchInfluencers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      {isChatModalOpen && (
        <ChatModal
          setIsModalOpen={setIsChatModalOpen}
          user={profileData}
        />
      )}
      {isBookingModalOpen && ( 
        <BookingModal
          setIsBookingModalOpen={setIsBookingModalOpen}
        />
      )}

      <div className="profile-hero py-20 flex items-center justify-between px-20 bg-black text-white">
        <div className="profile-text w-1/2 px-28 flex flex-col gap-y-10">
          <h2 className="text-5xl font-semibold">
            I am <span className="text-[#FFC107]">{profileData.fullName}</span>{" "}
            <br />A <span className="text-[#FFC107]">{profileData.niche}</span>
          </h2>
          <p className="text-xl font-normal">
           {profileData.biography}
          </p>
          <div className="profile-stats flex  text-xl font-medium gap-x-12 divide-x-4 divide-white">
            <span className="px-4">
              {profileData.followerCount} <br /> Followers
            </span>
            <span className="px-4">
              0 <br /> Orders
            </span>
            <span className="px-4">
              5.0 <br /> Rating
            </span>
          </div>
          <div className="profile-buttons flex gap-x-6">
            <button
              onClick={() => setIsChatModalOpen(true)}
              className="px-7 rounded-md font-semibold py-3 bg-gray-500 "
            >
              Message
            </button>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="px-7 rounded-md font-semibold py-3 bg-white text-black "
            >
              Book Now
            </button>
            <button className="px-7 rounded-md font-semibold py-3 bg-[#2746E6] ">
              Follow
            </button>
          </div>
        </div>
        <div className="profile-image ">
          <img className="max-w-full" src={profile} alt="prof" />
        </div>
      </div>
      <div className="profile-gallery px-20 flex flex-col items-center py-20">
        <h2 className="text-5xl  font-bold">Photos Gallery</h2>
        <div className="grid grid-cols-5 gap-7">
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="related-profiles px-20 text-white bg-black flex flex-col items-center py-20">
        <h2 className="text-5xl  font-bold">Related Profiles</h2>
        <div className="grid grid-cols-3 mt-7 gap-7 text-black">
          {influencers
            .filter((_, i) => i < 3)
            .map((item) => (
              <InfluencerCard item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
