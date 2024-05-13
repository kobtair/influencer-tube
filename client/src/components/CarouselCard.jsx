import dp from "../assets/review-image.jpeg";
import { RiStarFill } from "react-icons/ri";

const CarouselCard = ({review, reviewer}) => {
  return (
    <div className="carousel-card mx-20 flex flex-col gap-y-5 text-center items-center w-1/3">
      <div className="display-picture w-36 aspect-square overflow-hidden border-2 border-solid border-white rounded-full">
        <img className="max-h-full max-w-full " src={dp} alt="review image" />
      </div>
      <div className="review-text">
        <p>
         {review}
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
        {reviewer}
      </div>
    </div>
  );
};

export default CarouselCard;
