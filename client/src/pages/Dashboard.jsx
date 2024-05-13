import Banner from "../components/Banner";
import TopInfluencer from "../components/TopInfluencer";
import Recommended from "../components/Recommended";
import Navbar from "../components/Navbar";
const Dashboard = () => {
  return (
    <>
      <div className="bg-black">
        <div className="banner m-0">
          <Banner />
        </div>
        <div className="topinfuencer m-0">
          <TopInfluencer />
        </div>
        <div className="rec">
          <Recommended />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
