import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUpForBrand from "./pages/SignUpForBrand";
import SignUpAsInfluencer from "./pages/SignUpAsInfluencer"
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound"
import Profile from "./pages/Profile";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<Navbar/>} > 
      <Route path="/" element={<Home />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register/influencer" element={<SignUpAsInfluencer />} />
      <Route path="/register/brand" element={<SignUpForBrand />} />
      <Route path="*" element={<NotFound />} />
      </Route>
      </Routes>

  );
}

export default App;


