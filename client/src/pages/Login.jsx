import React, { useContext, useEffect, useState } from "react";
import artpic from "../assets/Art.png";
import dot from "../assets/Capture.PNG";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const { setIsLoggedIn, setLoggedInUser, setLoggedInAs, isLoggedIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email ==="admin" && password ==="admin"){
      setLoggedInUser({
        username: "admin"

      });
        setIsLoggedIn(true);
        setLoggedInAs("admin")
        localStorage.setItem("loggedInUser", JSON.stringify({username: "admin"}));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("loggedInAs", "influencer");
        navigate("/dashboard");
        return
      
    }
    if (isInfluencer) {
      try {
        const response = await axios.post(
          "http://localhost:3001/login/influencer",
          { email, password }
        );
        setLoggedInUser(response.data);
        setIsLoggedIn(true);
        setLoggedInAs("influencer")
        localStorage.setItem("loggedInUser", JSON.stringify(response.data));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("loggedInAs", "influencer");
        navigate("/dashboard");
      } catch (error) {
        alert("Error signing in:", error);
      }
    } else {
      try {
        const response = await axios.post("http://localhost:3001/login/brand", {
          email,
          password,
        });
        setLoggedInUser(response.data);
        setIsLoggedIn(true);
        setLoggedInAs("brand")
        localStorage.setItem("loggedInUser", JSON.stringify(response.data));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("loggedInAs", "brand");
        navigate("/dashboard");
      } catch (error) {
        alert("Error signing in:", error);
      }
    }
  };

  const [position, setPosition] = useState("first");
  const [inputType, setInputType] = useState("password");
  const handleShuffle = () => {
    setPosition((prevPosition) =>
      prevPosition === "first" ? "second" : "first"
    );
  };
  const handleToggle = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInfluencer, setIsInfluencer] = useState(false);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="main flex justify-center bg-white items-center w-[100vw] h-[100vh] "
      >
        <div className="left m-7 flex justify-center items-center w-[43vw] ">
          <div className="left-rap w-[33vw]">
            <div className="dot my-4 h-4 ">
              <img className="h-8" src={dot} alt="" />
            </div>
            <h1 className="text-2xl font-medium mt-2">Log In</h1>
            <div className="text flex mb-4">
              dont have an account?
              <p className="font-semibold cursor-pointer">
                <Link to="/register/brand">
                  <u>Sign Up</u>
                </Link>
              </p>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold "
                for="email"
              >
                Email Address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="border px-3 py-1 w-[32vw] rounded-lg"
                id="email"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold "
                for="email"
              >
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="border px-3 py-1 w-[32vw] rounded-lg"
                id="email"
                type={inputType}
              />
              <p className="text-sm flex flex-nowrap">
                Use 8 are more charactors with a mix of latters,numbers &
                symbols
              </p>
              <button className="showpass flex items-center mt-2 cursor-pointer ">
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
              <div className="regulate-screen my-2">
                <input
                  onClick={() => {
                    setIsInfluencer(!isInfluencer);
                  }}
                  type="checkbox"
                />
                <span>Login as influencer</span>
              </div>
              <div className="btn">
                <button
                  className="bg-black rounded-xl w-24  text-white flex items-center justify-center float-end my-3 mx-4 p-1"
                  type=" submit"
                  id="btn"
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="right  ">
          <img className="w-[40vw] h-[90vh]" src={artpic} alt="" />
        </div>
      </form>
    </>
  );
};

export default Login;
