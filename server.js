// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const exphbs = require("express-handlebars");
const logger = require("morgan");

// Instantiate Express
const app = express();

// Set Express PORT
const PORT = process.env.PORT || 3000;

// Use Morgan Logger for logging requests
app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public static folder
app.use(express.static("public"));

// Set Handlebars as the default template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Connect MongoDB
const db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Mongoose connection is successful");
  }
});

// Routes
app.get("/", function(req, res) {
  res.render("index")
});

// Start Server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});