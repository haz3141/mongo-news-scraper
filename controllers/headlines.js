const scrape = require("../scripts/scrape");

const Headline = require("../models/Headline");

module.exports = {

  // Saves to Database
  fetch: function(cb) {
    scrape(function(data) {
      const article = data;
      console.log("Article: ", article);
      Headline.create(article);
    });
  },

  // Remove Article from DB
  delete: function(query, cb) {
    Headline.remove(query, cb);
  },

  find: function(query, cb) {
    console.log("find hit");
    Headline.find(query, cb);
  }
}