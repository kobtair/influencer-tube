const mongoose = require("mongoose");

const influencerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
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
  collabStyle: {
    type: String,
    required: true,
  },
  links: {
    type: Object,
    required: true,
  }
});

const Influencer = mongoose.model("Influencer", influencerSchema);

module.exports = Influencer;
