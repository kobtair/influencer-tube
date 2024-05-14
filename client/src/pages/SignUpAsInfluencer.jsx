import React, { useState } from "react";
import artpic from "../assets/Art.png";
// import Inputs from "../components/Inputs";
import dot from "../assets/Capture.PNG";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import axios from "axios";
const SignUpAsInfluencer = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("first");
  const [instagramLink, setInstagramLink] = useState("");
  const [inputType, setInputType] = useState("password");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert("passwords do not match");
      return;
    }
    axios
      .post("http://localhost:3001/register/influencer", {
        fullName: firstName + " " + lastName,
        email,
        password,
        instagramLink,
        niche: selectedOption,
      })
      .then((res) => {
        console.log(res);
        alert("User Registered Successfully")
      }).catch(err=>alert(err.message));
  };

  const handleShuffle = () => {
    setPosition((prevPosition) =>
      prevPosition === "first" ? "second" : "first"
    );
  };
  const handleToggle = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="main flex justify-center bg-white items-center w-[100vw] h-[100vh]">
        <div className="left">
          <img className="w-[40vw] h-[90vh]" src={artpic} alt="" />
        </div>
        <div className="right m-7 flex justify-center items-center w-[43vw]">
          <div className="right-wrap">
            <div className="left-rap w-[33vw]">
              <div className="dot my-3 h-4 mx-2 ">
                <img className="h-8" src={dot} alt="" />
              </div>
              <h1 className="text-2xl font-medium mt-1.5 mx-2">
                Create an account
              </h1>
              <div className="text flex mb-4 mx-2">
                Alredy have an account?
                <p className="font-semibold cursor-pointer">
                  <u>Log in</u>
                </p>
              </div>
              <div class="mb-4 flex">
                <div className="input1 mx-2">
                  {" "}
                  <label class="block text-gray-700 text-sm  " for="email">
                    First name
                  </label>
                  <input
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    class="border px-3 py-1 w-[16vw] rounded-lg"
                    id="email"
                    type="text"
                  />
                </div>
                <div className="input2 mx-2">
                  <label class="block text-gray-700 text-sm  " for="email">
                    Last name
                  </label>
                  <input
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    class="border px-3 py-1 w-[16vw] rounded-lg"
                    id="email"
                    type="text"
                  />
                </div>
              </div>
              <div className="email-input mx-2">
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm " for="email">
                    Email Address
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    class="border px-3 py-1 w-[33vw] rounded-lg"
                    id="email"
                    type="email"
                  />
                </div>
              </div>
              <div class="mb-3 ">
                <div className="password flex">
                  <div className="input1 mx-2">
                    <label class="block text-gray-700 text-sm  " for="email">
                      Password
                    </label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      class="border px-3 py-1 w-[16vw] rounded-lg"
                      id="password1"
                      type={inputType}
                    />
                  </div>
                  <div className="input2 mx-2">
                    <label class="block text-gray-700 text-sm " for="email">
                      Confirm your password
                    </label>
                    <input
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      class="border px-3 py-1 w-[16vw] rounded-lg"
                      id="password2"
                      type={inputType}
                    />
                  </div>
                </div>

                <div class="mb-3 mx-2">
                  <p className="text-sm flex flex-nowrap">
                    Use 8 are more charactors with a mix of latters,numbers &
                    symbols
                  </p>
                  <button
                    type="button"
                    className="showpass flex items-center mt-2 cursor-pointer "
                  >
                    <div className="svgs" onClick={handleToggle}>
                      <div
                        className={position === "first" ? "" : "hidden"}
                        onClick={handleShuffle}
                      >
                        <MdCheckBoxOutlineBlank />
                      </div>
                      <div
                        className={position === "second" ? "" : "hidden"}
                        onClick={handleShuffle}
                      >
                        <MdCheckBox />
                      </div>
                    </div>

                    <p className="text-sm">Show Password</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="option-wrap ">
              <div className="mx-2">
                <select
                  required
                  id="dropdown"
                  className="border px-3 py-2 rounded-lg mb-3 w-[32vw]"
                  onChange={handleSelect}
                  value={selectedOption}
                >
                  <option value=""> Niche/Industry</option>
                  <option value="Gamer">Gamer</option>
                  <option value="Public Figure">Public Figure</option>
                  <option value="Athlete">Athlete</option>
                </select>
                {selectedOption && (
                  <p className="text-xs text-gray-500">
                    Selected option: {selectedOption}
                  </p>
                )}
              </div>
            </div>
            <div className="socialaccounts mx-3 ">
              <input
                onChange={(e) => setInstagramLink(e.target.value)}
                placeholder="Instagram"
                required
                className=" cursor-pointer border-2 p-2 float-start rounded-md m-1.5  w-[15vw]"
              />
              {/* <p className=" cursor-pointer border-2 p-2 float-start rounded-md m-1.5 w-[15vw]">
                Youtube
              </p>
              <p className=" cursor-pointer border-2 p-2 float-start rounded-md m-1.5 w-[15vw]">
                Facebook
              </p>
              <p className=" cursor-pointer border-2 p-2 float-start rounded-md m-1.5 w-[15vw]">
                Tiktok
              </p> */}
            </div>

            <div className="btn w-[32vw]">
              <button
                className="bg-black rounded-xl w-32  text-white flex items-center justify-center float-end my-2 mx-4 p-1.5"
                type=" submit"
                id="btn"
              >
                Create account
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpAsInfluencer;
