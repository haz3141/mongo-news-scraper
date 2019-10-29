var Headline = require("../models/Headline");
const headlinesController = require("../controllers/headlines");
module.exports = function(router) {
  // // Home Route
  // router.get("/", function(req, res) {
  //   res.render("index");
  // });

  // // Saved Route
  // router.get("/saved", function(req, res) {
  //   res.render("saved");
  // });

  // This route renders the homepage
router.get("/", function(req, res) {
  headlinesController.renderDB(req, res);
});

// This route renders the saved handlebars page
router.get("/saved", function(req, res) {
  Headline.find({ saved: true })
    .sort({ date: -1 })
    .then(function(dbArticles) {
      res.render("saved", { articles: dbArticles });
    });
});
}