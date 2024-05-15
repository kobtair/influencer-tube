import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Modal = ({toggleModal}) => {
  const navigate = useNavigate();
  const {niches, setNiches} = useContext(AuthContext)
  const handleSubmit = (e)=>{
    e.preventDefault()
    navigate("/filter")
    
  }
  return (
    <form onSubmit={handleSubmit}  className="fixed pt-16  -left-40 w-full h-screen z-20 mx-40 bg-gray-800 bg-opacity-50 flex">
      <div  className="bg-white z-30 rounded-lg p-4  mx-auto w-[50%] h-[65%]">
        <div className="btns">
          <p className="text-xl font-semibold flex justify-center">
            Select the filter you want to apply{" "}
          </p>
          <button type="button" onClick={(e)=>{setNiches([...niches, e.target.value])}} value="Gamer"  className={`border-2 ${niches.includes("Gamer")? "bg-black text-white":""} border-black p-2 m-4 rounded-md`}>
            Gamer
          </button>
          <button type="button" onClick={(e)=>{setNiches([...niches, e.target.value])}} value="Public Figure" className={`border-2 ${niches.includes("Public Figure")? "bg-black text-white":""} border-black p-2 m-4 rounded-md`}>
            Public Figure
          </button>
          <button type="button" onClick={(e)=>{setNiches([...niches, e.target.value])}} value="Athlete" className={`border-2 ${niches.includes("Athlete")? "bg-black text-white":""} border-black p-2 m-4 rounded-md`}>
            Athlete
          </button>
          <button type="button" onClick={(e)=>{setNiches([...niches, e.target.value])}} value="Health" className={`border-2 ${niches.includes("Health")? "bg-black text-white":""} border-black p-2 m-4 rounded-md`}>
            Health
          </button>
          <button type="button" onClick={(e)=>{setNiches([...niches, e.target.value])}} value="Food blogger" className={`border-2 ${niches.includes("Food blogger")? "bg-black text-white":""} border-black p-2 m-4 rounded-md`}>
            Food blogger
          </button>
          <button type="button" onClick={(e)=>{setNiches([...niches, e.target.value])}} value="Lifestyle" className={`border-2 ${niches.includes("Lifestyle")? "bg-black text-white":""} border-black p-2 m-4 rounded-md`}>
            Lifestyle
          </button>
          <button type="button" onClick={(e)=>{setNiches([...niches, e.target.value])}} value="Cloths designing" className={`border-2 ${niches.includes("Cloths designing")? "bg-black text-white":""} border-black p-2 m-4 rounded-md`}>
            Cloths designing
          </button>
          <button type="button" onClick={(e)=>{setNiches([...niches, e.target.value])}} value="Music and Singig" className={`border-2 ${niches.includes("Music and Singig")? "bg-black text-white":""} border-black p-2 m-4 rounded-md`}>
            Music and Singig
          </button>
          <button type="button" onClick={(e)=>{setNiches([...niches, e.target.value])}} value="Travel" className={`border-2 ${niches.includes("Travel")? "bg-black text-white":""} border-black p-2 m-4 rounded-md`}>
            Travel
          </button>
          <button type="button" onClick={(e)=>{setNiches([...niches, e.target.value])}} value="Esport and gamming" className={`border-2 ${niches.includes("Esport and gamming")? "bg-black text-white":""} border-black p-2 m-4 rounded-md`}>
            Esport and gamming
          </button>
          <button type="button" onClick={(e)=>{setNiches([...niches, e.target.value])}} value="Art and painting" className={`border-2 ${niches.includes("Art and painting")? "bg-black text-white":""} border-black p-2 m-4 rounded-md`}>
            Art and painting
          </button>
          <button type="button" onClick={(e)=>{setNiches([...niches, e.target.value])}} value="Tech and computing" className={`border-2 ${niches.includes("Tech and computing")? "bg-black text-white":""} border-black p-2 m-4 rounded-md`}>
            Tech and computing
          </button>
          <button type="button" onClick={(e)=>{setNiches([...niches, e.target.value])}} value="Photography" className={`border-2 ${niches.includes("Photography")? "bg-black text-white":""} border-black p-2 m-4 rounded-md`}>
            Photography
          </button>
          <button type="button" onClick={(e)=>{setNiches([...niches, e.target.value])}} value="Fittness and gym" className={`border-2 ${niches.includes("Fittness and gym")? "bg-black text-white":""} border-black p-2 m-4 rounded-md`}>
            Fittness and gym
          </button>
          <button  className="border-2 border-black p-2 m-4 rounded-md">
            View more{" "}
          </button>
        </div>
        <button
        type="button"
          className=" w-72 bg-white border-2 border-black p-2 m-4 mx-8 rounded-md"
          onClick={toggleModal}
        >
          Close
        </button>
        <button type="submit" className=" w-72 bg-black text-white border-2 border-black p-2 m-4  mx-8 rounded-md">
          Apply
        </button>
      </div>
    </form>
  );
};

export default Modal;
