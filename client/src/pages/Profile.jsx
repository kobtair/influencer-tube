import profile from "../assets/profile.jpg";
import InfluencerCard from "../components/InfluencerCard";
import img1 from "../assets/free-images.jpg";

const Profile = () => {
    const dummyData = [
        { location: "usa", name: "John", img: img1, type: "a/b/c" },
        { location: "usa", name: "Emma", img: img1, type: "a/b/c" },
        { location: "usa", name: "Michael", img: img1, type: "a/b/c" },
        { location: "usa", name: "John", img: img1, type: "a/b/c" },
        { location: "usa", name: "Emma", img: img1, type: "a/b/c" },
        { location: "usa", name: "Michael", img: img1, type: "a/b/c" },
        { location: "usa", name: "John", img: img1, type: "a/b/c" },
        { location: "usa", name: "Emma", img: img1, type: "a/b/c" },
        { location: "usa", name: "Michael", img: img1, type: "a/b/c" },
        { location: "usa", name: "John", img: img1, type: "a/b/c" },
        { location: "usa", name: "Emma", img: img1, type: "a/b/c" },
        { location: "usa", name: "Michael", img: img1, type: "a/b/c" },
      ];

  return (
    <div className="profile-container">
      <div className="profile-hero py-20 flex items-center justify-between px-20 bg-black text-white">
        <div className="profile-text w-1/2 px-28 flex flex-col gap-y-10">
          <h2 className="text-5xl font-semibold">
            I am <span className="text-[#FFC107]">Emma Smith </span> <br />A
            Beauty, Fashion & Lifestyle{" "}
            <span className="text-[#FFC107]">Influencer</span>
          </h2>
          <p className="text-xl font-normal">
            I have been a fashion creator for many years. I’m embracing beauty,
            fashion, and lifestyle. Let's create memories together!
          </p>
          <div className="profile-stats flex  text-xl font-medium gap-x-12 divide-x-4 divide-white">
            <span className="px-4">
              200k <br /> Orders
            </span>
            <span className="px-4">
              200k <br /> Orders
            </span>
            <span className="px-4">
              200k <br /> Orders
            </span>
          </div>
          <div className="profile-buttons flex gap-x-6">
            <button className="px-7 rounded-md font-semibold py-3 bg-gray-500 ">
              Message
            </button>
            <button className="px-7 rounded-md font-semibold py-3 bg-white text-black ">
              Book Now
            </button>
            <button className="px-7 rounded-md font-semibold py-3 bg-[#2746E6] ">
              Follow
            </button>
          </div>
        </div>
        <div className="profile-image ">
          <img className="max-w-full" src={profile} alt="profile-image" />
        </div>
      </div>
      <div className="profile-gallery px-20 flex flex-col items-center py-20">
        <h2 className="text-5xl  font-bold">
        Photos Gallery
        </h2>
        <div className="grid grid-cols-5 gap-7">
            <img src={profile} alt="" />
        </div>
        </div>
      <div className="related-profiles px-20 text-white bg-black flex flex-col items-center py-20">
        <h2 className="text-5xl  font-bold">Related Profiles</h2>
        <div className="grid grid-cols-3 mt-7 gap-7 text-black">
        {dummyData.filter((_, i)=> i<3).map((item)=>(
            <InfluencerCard item ={item} />
        ))}
        </div>
        </div>
    </div>
  );
};

export default Profile;
