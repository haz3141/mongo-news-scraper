const headlinesController = require("../controllers/headlines");

module.exports = function(router) {
  // Scrape Route
  router.get("/api/scrape/", function(req, res) {
    headlinesController.fetch(res.send("SCRAPING..."));
  });

  // Find headlines
  router.get("/api/headlines/", function(req, res) {
    headlinesController.find({}, function(err, result){ 
      //undefined??
      if (err) return res.status(500).send({err: 'Error: Could not delete robot'});
      if(!result) return res.status(400).send({err: 'Robot bot deleted from firebase database'});
      console.log('deleted!!!');
      res.send(result); 
    });
  });

  // Delete article
  router.get("/api/headlines/:id", function(req, res) {
    
    const _id = req.params.id;
    console.log("id ", _id);

    headlinesController.delete({ _id: _id }, function(err, result){ 
      //undefined??
      if (err) return res.status(500).send({err: 'Error: Could not delete robot'});
      if(!result) return res.status(400).send({err: 'Robot bot deleted from firebase database'});
      console.log('deleted!!!');
      res.send(result); 
    });
  });

  // Clear DB
  router.get("/api/clear", function(req, res) {
    headlinesController.clearDB(req, res);
      console.log('cleared!!!');
      res.send("cleared");
  });

  
}