import React from "react";
import mail from "../assets/mail.png"
import phone from "../assets/Vector.png"
import image6 from "../assets/image 6.png";

const Colab3 = () => {
  return (
    <>
      <div className="main bg-black">
        <div className="pics border-2 border-white rounded my-5 mx-12 w-[90vw] h-[90vh]">
          <div className="imgHeading">
            <p className='text-white text-3xl font-bold  flex justify-center pt-4'>Contect us</p>
          </div>
          <div className="images flex">
        <div className="img2 mx-20">
        <img className='h-96 w-96 m-16' src={image6} alt="" />
          
        </div>
        <div className="text mx-20 text-white text-3xl font-bold m-16">
          Video ads
        </div>
          </div>
       
        </div>
        <div className="main h-[100vh] bg-black">
        <div className="pics border-2 border-white rounded my-5 mx-12 w-[90vw] h-[80vh] ">
          <div className="imgHeading">
            <p className='text-white text-3xl font-bold py-8 px-16'>We will customize the <br /> advertisement for you. <br /><br />Contect us now!</p>
          </div>
          <div className="email flex">
            <div className="svg">
              <img className="h-20 w-20 my-5 mx-12" src={mail} alt="" />
            </div>
            <div className="email text-white text-3xl font-bold py-8 px-16">
abc@gmail.com
            </div>
          </div>
          <div className="email flex">
            <div className="svg">
              <img className="h-16 w-16 my-5 mx-12" src={phone} alt="" />
            </div>
            <div className="email text-white text-3xl font-bold py-8 px-16">
1234567899900
            </div>
          </div>
       
       
        </div>
        </div>
       
  
        
      </div>
    </>
  );
};

export default Colab3;
