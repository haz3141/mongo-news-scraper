// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const exphbs = require("express-handlebars");

// Instantiate Express
const app = express();

// Set Express PORT
const PORT = process.env.PORT || 3000;

// Set Handlebars as the default template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
app.get("/", function(req, res) {
  res.render("index")
});

// Start Server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});