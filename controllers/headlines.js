const scrape = require("../scripts/scrape");

const Headline = require("../models/Headline");

module.exports = {

  // Saves to Database
  fetch: function() {
    scrape(function(article) {
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
  },

  // Find all headlines from DB
  findAll: function(req, res) {
    Headline
      .find(req.query)
      .sort({ date: -1 })
      .then(function(dbHeadline) {
        res.json(dbHeadline);
      });
  },

  // Update the specified headline
  update: function(req, res) {
    Headline.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbHeadline) {
      res.json(dbHeadline);
    });
  },

  clearDB: function(req, res) {
    Headline.remove({})
      .then(function() {
        return db.Note.remove({});
      })
      .then(function() {
        res.json({ ok: true });
      });
  },

  renderDB: function(req, res) {
    Headline.find({ saved: false })
      .sort({ date: -1 })
      .then(function(dbArticles) {
        res.render("index", { articles: dbArticles });
      });
  }
}