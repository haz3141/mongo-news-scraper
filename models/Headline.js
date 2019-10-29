// Import Mongoose
const mongoose = require("mongoose");

// Reference Schema Constructor
const Schema = mongoose.Schema;

// Create new Schema object
const HeadlineSchema = new Schema({
  headline: {
    type: String,
    required: true,
    unique: true
  },
  summary: {
    type: String,
    required: true,
    default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  link: {
    type: String,
    required: true
  },
  date: String,
  saved: {
    type: Boolean,
    default: false
  }
});

// Create the model
const Headline = mongoose.model("Headline", HeadlineSchema);

// Export the model
module.exports = Headline;