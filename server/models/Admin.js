const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
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
    default: true,
  },
  contactDetails: [
    {
      fullname: String,
      bio: String,
      dob: Date,
      socialMediaLinks: [String],
      description: String
    }
  ]
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
