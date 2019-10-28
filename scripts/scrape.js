// Import Cheerio and Axios
const axios = require("axios");
const cheerio = require("cheerio");

const scrape = function(cb) {
  axios
  .get("https://old.reddit.com/r/webdev/")
  .then(function(response) {
    // Load the html body from axios into cheerio  
    const $ = cheerio.load(response.data);
    console.log($);

    // Save articles to array
    const articles = [];

    // Traverse tags for headline and link
    $("p.title").each(function(i, element) {
      const headline = $(element).text();
      const link = $(element).children().attr("href");

      // Create result object
      if (headline && link) {
        const result = {
          headline: headline,
          link: link
        };

        // Push result to articles array
        articles.push(result);
      }
    });
    
    // Fire callback and pass array
    cb(articles);
  });
};

module.exports = scrape;