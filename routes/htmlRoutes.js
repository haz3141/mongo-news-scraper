module.exports = function(router) {
  // Home Route
  router.get("/", function(req, res) {
    res.render("index");
  });

  // Saved Route
  router.get("/saved", function(req, res) {
    res.render("saved");
  });
}