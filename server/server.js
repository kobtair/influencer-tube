const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const Influencer = require("./models/Influencer");
const { createTokens, validateToken } = require("./JWT");
const cookieParser = require("cookie-parser");
const instagramUsernames = require("./instaUsernames");

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
    await User.create({
      ...data,
      password: hash,
    });
    res.json("Brand registered successfully");
  } catch (err) {
    console.error("Error registering Brand:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/register/influencer", async (req, res) => {
  const data = req.body;
  const username = data.instagramLink.split("/")[data.instagramLink.split("/").length-1];
  try {
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    const hash = await bcrypt.hash(data.password, 10);
    await Influencer.create({
      ...data,
      username,
      password: hash,
    });

    res.json("Influencer registered successfully");
  } catch (err) {
    console.error("Error registering influencer:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/login/influencer", async (req, res) => {
  const data = req.body;
  console.log(data);
  const user = await Influencer.findOne({ email: data.email });
  console.log(user);
  if (!user) {
    res.status(400).json("Brand account does not exist");
    return;
  }
  bcrypt.compare(data.password, user.password).then((match) => {
    if (!match) res.status(400).json("Wrong credentials");
    else {
      res.json("User logged in succesfully");
    }
  });
});

app.get('/influencers', async (req, res) => {
  try {
    const { offset, limit, niches, search } = req.query;
    let query = {};

    if (niches) {
      // Convert niches string to an array of niches
      const nicheArray = niches.split(',');

      // Use case-insensitive regular expression for niche matching
      query.niche = { $regex: new RegExp(nicheArray.join('|'), 'i') };
    }

    if (search) {
      query.fullName = { $regex: new RegExp(search, 'i') }; // Case-insensitive search
    }

    const influencers = await Influencer.find(query)
      .skip(parseInt(offset))
      .limit(parseInt(limit));

    res.json(influencers);
  } catch (error) {
    console.error('Error retrieving influencers:', error);
    res.status(500).json({ error: 'Internal server error' });
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
      const accessToken = createTokens(user);
      res.cookie("access-token", accessToken, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
      });
      res.json("User logged in succesfully");
    }
  });
});

app.get("/profile/:id", async (req, res) => {
  const id = req.params.id;
  const user = await Influencer.findOne({username: id});
  if(!user) res.status(400).json("User does not exist")
  res.json(user);
});

app.post("/follow/:id");

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
