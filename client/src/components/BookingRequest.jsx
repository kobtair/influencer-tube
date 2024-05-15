import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const BookingRequestsPage = () => {
  const [bookingRequests, setBookingRequests] = useState([]);
  const {loggedInAs, loggedInUser} = useContext(AuthContext)
  const username = loggedInUser.username
  const navigate = useNavigate()

  useEffect(() => {
    // if(loggedInAs !== "influencer"){
    //     navigate("/")
    // }
    fetchBookingRequests();
  }, []);

  const fetchBookingRequests = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/booking-requests/${username}`);
      console.log(response.data.bookingRequests)
      setBookingRequests(response.data.bookingRequests);
    } catch (error) {
      console.error("Error fetching booking requests:", error);
    }
  };

  const handleApproveRequest = async (requestId) => {
    try {
      await axios.put(`http://localhost:3001/booking-requests/${username}/approve/${requestId}`);
      fetchBookingRequests();
    } catch (error) {
      console.error("Error approving booking request:", error);
    }
  };

  return (
    <div>
      <h1>Booking Requests</h1>
      <ul className="">
        {bookingRequests.map((request) => (
          <li className="text-white flex justify-around" key={request._id}>
            <p>Name: {request.name}</p>
            <p>Email: {request.email}</p>
            <p>Phone: {request.phone}</p>
            <p>Address: {request.address}</p>
            <p>Date: {request.date}</p>
            <p>Details: {request.details}</p>
            {request.status !== "approved" && (
              <button className="bg-black text-white border-2 border-solid " onClick={() => handleApproveRequest(request._id)}>
                Approve
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingRequestsPage;
