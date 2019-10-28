const scrape = require("../scripts/scrape");

const Headline = require("../models/Headline");

module.exports = {
  fetch: function(cb) {
    scrape(function(data) {
      const articles = data;
      for (let i = 0; i < articles.length; i++) {
        articles[i].date = Date.now();
        articles[i].saved = false;
      }

      Headline.collection.insertMany(articles, { ordered: false }, function(err, docs) {
        cb(err, docs);
      });
    });
  }
}