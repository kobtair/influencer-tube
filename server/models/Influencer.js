const mongoose = require("mongoose");

const influencerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  biography: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  profilePic: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: String,
    default: false,
  },
  niche: {
    type: String,
    required: true,
  },
  instagramLink: {
    type: String,
    required: true,
  },
  followers: {
    type: [String],
    default: [],
  },
  followerCount: {
    type: Number,
    default: 0,
  },
  username: {
    type: String,
  },
  images: {
    type: [String],
  },
  messages: [
    {
      sender: String,
      messages: [
        {
          message: String,
          timestamp: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    },
  ],
  bookingRequest: {
    type: [Object], // Define bookingRequest as an array of objects
    default: []     // Default value is an empty array
  },
});

const Influencer = mongoose.model("Influencer", influencerSchema);

module.exports = Influencer;
