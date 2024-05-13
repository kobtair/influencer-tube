const Modal = ({toggleModal}) => {
  return (
    <div  className="fixed pt-16  -left-40 w-full h-screen z-20 mx-40 bg-gray-800 bg-opacity-50 flex">
      <div  className="bg-white z-30 rounded-lg p-4  mx-auto w-[50%] h-[65%]">
        <div className="btns">
          <p className="text-xl font-semibold flex justify-center">
            Select the filter you want to apply{" "}
          </p>
          <button className="border-2 border-black p-2 m-4 rounded-md">
            Fasion and clothing
          </button>
          <button className="border-2 border-black p-2 m-4 rounded-md">
            TV Personality
          </button>
          <button className="border-2 border-black p-2 m-4 rounded-md">
            Jewelry and accessories
          </button>
          <button className="border-2 border-black p-2 m-4 rounded-md">
            Health
          </button>
          <button className="border-2 border-black p-2 m-4 rounded-md">
            Food blogger
          </button>
          <button className="border-2 border-black p-2 m-4 rounded-md">
            Lifestyle
          </button>
          <button className="border-2 border-black p-2 m-4 rounded-md">
            Cloths designing
          </button>
          <button className="border-2 border-black p-2 m-4 rounded-md">
            Music and Singig
          </button>
          <button className="border-2 border-black p-2 m-4 rounded-md">
            Travel
          </button>
          <button className="border-2 border-black p-2 m-4 rounded-md">
            Esport and gamming
          </button>
          <button className="border-2 border-black p-2 m-4 rounded-md">
            Art and painting
          </button>
          <button className="border-2 border-black p-2 m-4 rounded-md">
            Tech and computing
          </button>
          <button className="border-2 border-black p-2 m-4 rounded-md">
            Photography
          </button>
          <button className="border-2 border-black p-2 m-4 rounded-md">
            Fittness and gym
          </button>
          <button className="border-2 border-black p-2 m-4 rounded-md">
            View more{" "}
          </button>
        </div>
        <button
          className=" w-72 bg-white border-2 border-black p-2 m-4 mx-8 rounded-md"
          onClick={toggleModal}
        >
          Close
        </button>
        <button className=" w-72 bg-black text-white border-2 border-black p-2 m-4  mx-8 rounded-md">
          Apply
        </button>
      </div>
    </div>
  );
};

export default Modal;
