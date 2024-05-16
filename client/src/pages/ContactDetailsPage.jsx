import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const ContactDetailsPage = () => {
  const [contactDetails, setContactDetails] = useState([]);
  const {loggedInAs} = useContext(AuthContext)
  const navigate = useNavigate

  useEffect(() => {
    if(loggedInAs!=="admin"){
        navigate("/")
    }
    fetchContactDetails();
  }, []);

  const fetchContactDetails = async () => {
    try {
      const response = await axios.get('http://localhost:3001/admin/contact');
      setContactDetails(response.data);
    } catch (error) {
      console.error('Error fetching contact details:', error);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Contact Details</h1>
        <div className="grid grid-cols-1 gap-6">
          {contactDetails.map((contact, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg">
              <h2 className="text-xl font-semibold">{contact.fullname}</h2>
              <p className="text-gray-300">{contact.bio}</p>
              <p className="text-gray-300">Date of Birth: {new Date(contact.dob).toLocaleDateString()}</p>
              <p className="text-gray-300">Description: {contact.description}</p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Social Media Links:</h3>
                <ul className="list-disc list-inside">
                  {contact.socialMediaLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link} className="text-blue-400">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsPage;
