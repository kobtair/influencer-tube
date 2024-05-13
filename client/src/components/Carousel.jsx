import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import CarouselCard from "./CarouselCard";
const Carousel = () => {
  return (
    <div className="carousel-container flex gap-x-20 items-center justify-between">
      <div className="left-arrow p-5 rounded-full bg-slate-600">
        <FaArrowLeft />
      </div>
      <div className="content flex no-scrollbar overflow-x-scroll">
        {[...Array(10)].map((_,i)=>
        <CarouselCard />
    )} 
      </div>
      <div className="right-arrow p-5 rounded-full bg-slate-600">
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Carousel;
