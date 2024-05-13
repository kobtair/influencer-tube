import dp from "../assets/review-image.jpeg";
import { RiStarFill } from "react-icons/ri";

const CarouselCard = () => {
  return (
    <div className="carousel-card mx-20">
      <div className="display-picture w-36 aspect-square overflow-hidden border-2 border-solid border-white rounded-full">
        <img className="max-h-full max-w-full " src={dp} alt="review image" />
      </div>
      <div className="review-text">
        <p>
          Outstanding service! This platform revolutionized my business's
          marketing strategy. Hiring influencers was effortless, and the impact
          on brand visibility and sales was immediate. The team provided
          exceptional support throughout the process. I couldn't be happier with
          the results.{" "}
        </p>
      </div>
      <div className="rating flex">
        <RiStarFill color="gold" />
        <RiStarFill color="gold" />
        <RiStarFill color="gold" />
        <RiStarFill color="gold" />
        <RiStarFill />
      </div>
      <div className="reviewer-name text-xl font-semibold">
        {" "}
        Oliver Mitchell
      </div>
    </div>
  );
};

export default CarouselCard;
