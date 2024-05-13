import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import CarouselCard from "./CarouselCard";
import { useState } from "react";

const Carousel = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const reviews = [
    {
      reviewer: "John Doe",
      review:
        "I was amazed by the quality of influencers available on this platform. Hiring an influencer for my brand was seamless and the results were outstanding. Highly recommend!",
    },
    {
      reviewer: "Jane Smith",
      review:
        "As a small business owner, I was hesitant about investing in influencer marketing, but this website made the process so easy and affordable. The influencer I hired helped boost my brand awareness significantly. Thank you!",
    },
    {
      reviewer: "David Johnson",
      review:
        "I've tried several influencer marketing platforms before, but none of them provided the level of service and professionalism that I experienced here. The team was responsive and helpful throughout the entire campaign. Will definitely be coming back!",
    },
    {
      reviewer: "Emily Brown",
      review:
        "Booking an influencer through this website was a game-changer for my marketing strategy. The influencer I collaborated with perfectly aligned with my brand values, and the content they created exceeded my expectations. Can't wait to work with them again!",
    },
    {
      reviewer: "Michael Wilson",
      review:
        "I've been burned by unreliable influencers in the past, but this website helped me find trustworthy and authentic influencers who delivered exceptional results. My campaign ROI has never been better. Thank you for restoring my faith in influencer marketing!",
    },
  ];

  return (
    <div>
      <div className="carousel-container flex gap-x-20 items-center justify-between">
        <div
          onClick={() =>
            setCurrentReview(currentReview === 0 ? 4 : currentReview - 1)
          }
          className="left-arrow cursor-pointer p-5 rounded-full bg-slate-600"
        >
          <FaArrowLeft />
        </div>
        <div className="content flex justify-center ">
          {/* {reviews.map(({ review, reviewer }, i) => ( */}
          <CarouselCard
            review={reviews[currentReview].review}
            reviewer={reviews[currentReview].reviewer}
          />
          {/* ))} */}
        </div>
        <div
          onClick={() =>
            setCurrentReview((currentReview % (reviews.length - 1)) + 1)
          }
          className="right-arrow cursor-pointer p-5 rounded-full bg-slate-600"
        >
          <FaArrowRight />
        </div>
      </div>
      <div className="flex justify-center mt-10 gap-x-2 ">
        {reviews.map((_, i) => (
          <div onClick={()=>setCurrentReview(i)}
            className={`max-w-4 min-w-4 aspect-square cursor-pointer bg-gray-500 ${
              currentReview === i ? "bg-white" : ""
            } rounded-full`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
