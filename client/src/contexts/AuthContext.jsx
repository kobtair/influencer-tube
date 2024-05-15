import { createContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  loggedInUser: {},
  setLoggedInUser: () => {},
  signOut: () => {},
  loggedInAs: "",
  setLoggedInAs: ()=>{},
  setNiches: ()=>{},
  niches: [],


});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [loggedInAs, setLoggedInAs] = useState("");
  const [niches, setNiches] = useState([])
  const signOut = (navigate) => {
    setIsLoggedIn(false);
    setLoggedInUser({});
    setLoggedInAs("")
    navigate("/login");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInAs");
  };
  const data = {
    isLoggedIn,
    setIsLoggedIn,
    loggedInUser,
    setLoggedInUser,
    signOut,
    loggedInAs,
    setLoggedInAs,
    niches,
    setNiches,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
