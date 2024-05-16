import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUpForBrand from "./pages/SignUpForBrand";
import SignUpAsInfluencer from "./pages/SignUpAsInfluencer";
import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import ColaborationHub from "./pages/ColaborationHub";
import Colab3 from "./pages/Colab3";
import Colab4 from "./pages/Colab4";
import Colab5 from "./pages/Colab5";
import Colaboration2 from "./pages/Colaboration2";
import Search from "./components/Search";
import { AuthContext } from "./contexts/AuthContext";
import Niche from "./components/Niche";
import BookingRequestsPage from "./components/BookingRequest";
import EditProfile from "./pages/EditProfile";
import ContactDetailsPage from "./pages/ContactDetailsPage";

function App() {
  const { setIsLoggedIn, setLoggedInUser, setLoggedInAs } =
    useContext(AuthContext);
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const loggedInAs = localStorage.getItem("loggedInAs");

    if (loggedInUser && isLoggedIn && loggedInAs) {
      setLoggedInUser(loggedInUser);
      setIsLoggedIn(true);
      setLoggedInAs(loggedInAs);
    }
  }, []);
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/influencer" element={<SignUpAsInfluencer />} />
        <Route path="/register/brand" element={<SignUpForBrand />} />
        <Route path="/collaboration-hub" element={<ColaborationHub />} />
        <Route path="/collaboration-2" element={<Colab3 />} />
        <Route path="/collaboration-3" element={<Colab4 />} />
        <Route path="/collaboration-4" element={<Colab5 />} />
        <Route path="/collaboration-5" element={<Colaboration2 />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="/filter" element={<Niche />} />
        <Route path="/register/brand" element={<SignUpForBrand />} />
        <Route path="/booking-requests" element={<BookingRequestsPage />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/admin/contact" element={<ContactDetailsPage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
