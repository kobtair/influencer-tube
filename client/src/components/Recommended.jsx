import InfluencerCard from "./InfluencerCard";

const Recommended = ({influencers}) => {

  return (
    <>
      <div className="text-5xl bg-black text-white font-bold m-10 ">
        Recommended
      </div>
      <div className="wrap grid grid-cols-3 xl:grid-cols-4 gap-20 p-10   ">
        {influencers.map((item) => (
         <InfluencerCard item={item} />
        ))}
      </div>

    </>
  );
};

export default Recommended;
