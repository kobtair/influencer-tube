const mongoose = require("mongoose");

const gigSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: "true",
    },
    niche: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Gig = mongoose.model("Gig", gigSchema);

module.exports = Gig;
