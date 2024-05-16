import { Link } from "react-router-dom";
import hero from "../assets/home-hero.png";
import Carousel from "../components/Carousel";
import FAQS from "../components/FAQS";
import Footer from "../components/Footer";
import { Link as ScrollLink } from "react-scroll" ;

const Home = () => {
  return (
    <div className="home-container px-28  bg-black text-white">
      <div className="hero flex py-28 items-center justify-between">
        <div className="hero-text flex flex-col gap-y-10 w-1/2">
          <h1 className="text-5xl font-bold">Help Your Business GROW</h1>
          <p className="text-xl">
            Unlock the Power of Influence: Elevate Your Business with Top-tier
            Influencer Marketing Solutions. Connect with Influencers to Amplify
            Your Brand Reach, Drive Engagement, and Achieve Remarkable Growth.
          </p>
          <div className="button-group flex gap-x-5">
            <ScrollLink to="faqs" smooth="true">
            <button className="bg-white text-black rounded-3xl px-10 py-4">
              How it Works
            </button>
            </ScrollLink>
            <Link to={"/register/brand"}>
            <button className="bg-white text-black rounded-3xl px-10 py-4">
              Join as a Brand
            </button>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={hero} alt="hero" />
        </div>
      </div>
      <div className="metrics flex flex-col gap-y-7 items-center">
        <h2 className="text-5xl font-bold">Out Metrics Tell the Story</h2>
        <p>
          Our metrics component gives you the inside scoop on your success and
          helps you stay on top of your game in style.
        </p>
        <div className="grid grid-cols-3 gap-x-10 text-center mt-10 ">
          <div className="metric  bg-white flex flex-col items-center gap-y-2 text-black px-36 py-10 rounded-t-3xl">
            <h3 className="text-6xl font-semibold">150k+</h3>
            <p className="">Generated for Business</p>
          </div>
          <div className="metric  bg-white flex flex-col items-center gap-y-2 text-black px-36 py-10 rounded-t-3xl">
            <h3 className="text-6xl font-semibold">98%</h3>
            <p className="">Customer Satisfaction</p>
          </div>
          <div className="metric  bg-white flex flex-col items-center gap-y-2 text-black px-36 py-10 rounded-t-3xl">
            <h3 className="text-6xl font-semibold">10k+</h3>
            <p className="">Influencer Registered</p>
          </div>
        </div>
      </div> 
      <div id="reviews" className="carousel mt-36"> <Carousel /></div>
      <div id="faqs">
      <FAQS  />
      </div>
      <div id="contact" className="footer">

      <Footer id="contact" />
      </div>
    </div>
  );
};

export default Home;
