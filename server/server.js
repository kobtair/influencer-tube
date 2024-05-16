const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const Admin = require("./models/Admin");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const Influencer = require("./models/Influencer");
const { createTokens, validateToken } = require("./JWT");
const cookieParser = require("cookie-parser");
const instagramUsernames = require("./instaUsernames");
const Gig = require("./models/Gig");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/products/:id", (req, res) => {
  res.send(req.params.id);
});

app.put("/influencers/:username", async (req, res) => {
  const { username } = req.params;
  const { fullName, biography, email, niche, instagramLink, profilePic } = req.body;

  try {
    // Find the influencer by their username
    let influencer = await Influencer.findOne({ username });

    if (!influencer) {
      return res.status(404).json({ error: "Influencer not found" });
    }

    // Update influencer fields
    if (fullName) influencer.fullName = fullName;
    if (biography) influencer.biography = biography;
    if (email) influencer.email = email;
    if (niche) influencer.niche = niche;
    if (instagramLink) influencer.instagramLink = instagramLink;
    if (profilePic) influencer.profilePic = profilePic;

    // Save the updated influencer document
    await influencer.save();

    res.json({ message: "Influencer updated successfully" });
  } catch (error) {
    console.error("Error updating influencer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/gigs", async (req, res) => {
  try {
    const { owner, niche, description } = req.body;
    const newGig = new Gig({ owner, niche, description });
    await newGig.save();
    res.status(201).json(newGig);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET endpoint to get all gigs
app.get("/gigs", async (req, res) => {
  try {
    const gigs = await Gig.find();
    res.json(gigs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/admin/contact", async (req, res) => {
  try {
    // Find admin by username
    const admin = await Admin.findOne({ username: "admin" }); // Change 'admin' to the username you're using

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json(admin.contactDetails);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

app.put("/admin/updateRefreshToken", async (req, res) => {
  
  const { refreshToken } = req.body;

  try {
    // Find the admin with username "admin"
    const admin = await Admin.findOneAndUpdate(
      { username: "admin" },
      { refreshToken: refreshToken },
      { new: true }
    );

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ message: "Refresh token updated successfully", admin });
  } catch (error) {
    console.error("Error updating refresh token:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/admin/contact", async (req, res) => {
  try {
    const { username, contactDetails } = req.body;

    // Find the admin by username
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Add contact details to the admin
    admin.contactDetails.push(contactDetails);

    // Save the admin with the updated contact details
    await admin.save();

    res.status(201).json({ message: "Contact details added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/register/brand", async (req, res) => {
  const data = req.body;

  try {
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = {
      ...data,
      password: hash,
    };
    await User.create(newUser);
    res.json("Brand registered successfully");
  } catch (err) {
    console.error("Error registering Brand:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/register/influencer", async (req, res) => {
  const data = req.body;
  const username =
    data.instagramLink.split("/")[data.instagramLink.split("/").length - 1];
  try {
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = {
      ...data,
      username,
      password: hash,
    };
    await Influencer.create(newUser);

    res.json(newUser);
  } catch (err) {
    console.error("Error registering influencer:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/booking-request/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const { name, email, phone, address, date, details } = req.body.formData;
    console.log(req.body);

    // Find the influencer based on the provided email
    const influencer = await Influencer.findOne({ username });

    // If influencer not found, return an error response
    if (!influencer) {
      return res.status(404).json({ error: "Influencer not found" });
    }

    // Update the influencer's bookingRequest field
    influencer.bookingRequest.push({
      name,
      email,
      phone,
      address,
      date,
      details,
    });

    // Save the updated influencer document
    await influencer.save();

    res.json({ message: "Booking request saved successfully" });
  } catch (error) {
    console.error("Error saving booking request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET endpoint to fetch all booking requests
app.get("/booking-requests/:username", async (req, res) => {
  const { username } = req.params;
  try {
    // Find the influencer based on the provided username
    const influencer = await Influencer.findOne({ username });

    // If influencer not found, return an error response
    if (!influencer) {
      return res.status(404).json({ error: "Influencer not found" });
    }

    // Retrieve the booking requests for the influencer
    const bookingRequests = influencer.bookingRequest;

    res.json({ bookingRequests });
  } catch (error) {
    console.error("Error fetching booking requests:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.put("/approve-booking/:username/:requestId", async (req, res) => {
  const { username, requestId } = req.params;

  try {
    // Find the influencer based on the provided username
    const influencer = await Influencer.findOne({ username });

    // If influencer not found, return an error response
    if (!influencer) {
      return res.status(404).json({ error: "Influencer not found" });
    }

    // Find the index of the booking request in the influencer's bookingRequest array
    const requestIndex = influencer.bookingRequest.findIndex(
      (request) => request._id.toString() === requestId
    );

    // If request index not found, return an error response
    if (requestIndex === -1) {
      return res.status(404).json({ error: "Booking request not found" });
    }

    // Update the status of the booking request to 'approved'
    influencer.bookingRequest[requestIndex].status = "approved";

    // Save the updated influencer document
    await influencer.save();

    res.json({ message: "Booking request approved successfully" });
  } catch (error) {
    console.error("Error approving booking request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/login/influencer", async (req, res) => {
  const data = req.body;
  const user = await Influencer.findOne({ email: data.email });
  if (!user) {
    res.status(400).json("Brand account does not exist");
    return;
  }
  bcrypt.compare(data.password, user.password).then((match) => {
    if (!match) res.status(400).json("Wrong credentials");
    else {
      res.json(user);
    }
  });
});

app.post("/message/:username", async (req, res) => {
  const { sender, message } = req.body;
  const { username } = req.params;

  try {
    // Find the influencer by their username
    const influencer = await Influencer.findOne({ username });

    if (!influencer) {
      return res
        .status(404)
        .json({ success: false, message: "Influencer not found" });
    }

    // Check if the sender already exists in the messages array
    let senderExists = false;
    influencer.messages.forEach((msg) => {
      if (msg.sender === sender) {
        // If the sender exists, add the message to their existing messages
        msg.messages.push({ message });
        senderExists = true;
      }
    });

    // If sender does not exist, create a new sender and add the message
    if (!senderExists) {
      influencer.messages.push({ sender, messages: [{ message }] });
    }

    // Save the updated influencer document
    await influencer.save();

    res
      .status(200)
      .json({ success: true, message: "Message received successfully" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.get("/messages/:username", async (req, res) => {
  const { username } = req.params;

  try {
    // Find the influencer by their username
    const influencer = await Influencer.findOne({ username });

    if (!influencer) {
      return res
        .status(404)
        .json({ success: false, message: "Influencer not found" });
    }

    // Get all messages for the influencer
    const allMessages = influencer.messages;

    res.status(200).json({ success: true, messages: allMessages });
  } catch (error) {
    console.error("Error retrieving messages:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.get("/influencers", async (req, res) => {
  try {
    const { offset, limit, niches, search } = req.query;
    let query = {};

    if (niches) {
      const nicheArray = niches.split(",");
      query.niche = { $regex: new RegExp(nicheArray.join("|"), "i") };
    }

    if (search) {
      query.fullName = { $regex: new RegExp(search, "i") };
    }

    const influencers = await Influencer.find(query)
      .skip(parseInt(offset))
      .limit(parseInt(limit));

    res.json(influencers);
  } catch (error) {
    console.error("Error retrieving influencers:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/login/brand", async (req, res) => {
  const data = req.body;
  const user = await User.findOne({ email: data.email });
  if (!user) {
    res.status(400).json("Influencer account does not exist");
    return;
  }
  const pass = data.password.toString();
  const dbPass = user.password;
  bcrypt.compare(pass, dbPass).then((match) => {
    if (!match) res.status(400).json("Wrong credentials");
    else {
      res.json(user);
    }
  });
});

app.get("/profile/:id", async (req, res) => {
  const id = req.params.id;
  const user = await Influencer.findOne({ username: id });
  if (!user) res.status(400).json("User does not exist");
  res.json(user);
});

app.post("/follow/:id");

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
