$(document).ready(function() {

  // Scrape New
  $(".scrape-new").on("click", function() {
    $.ajax({
      type: "GET",
      url: "/api/scrape"
    }).then(function() {
      renderFromDatabase();
    });
  });

  $(".clear").on("click", handleArticleClear);

  // Clear Headline Function
  function handleArticleClear() {
    $.ajax({
      type: "GET",
      url: "/api/clear"
    }).then(function() {
      $(".article-container").empty();
      renderFromDatabase();
    });
  }

  // Function for rendering stored headlines
  function renderFromDatabase() {
    console.log("RENDER");
    $.ajax({
      type: "GET",
      url: "/api/headlines?saved=false"
    }).then(function(results) {
      console.log("results ", results);

      // Empty div on load
      $(".article-container").empty();

      for (var i = 0; i < results.length; i++) {
        var card = `
          <div class="card my-4 p-4 text-center" style="width: 60rem;">
            <div class="card-header">
              <h3>${results[i].headline}</h3>
              <button class="saveButton btn btn-info float-right" data-id="${results[i]._id}">
                Save Article
              </button> 
            </div> 
            <div class="card-body">
              <a class="text-info mx-auto" rel="noopener noreferrer" target="_blank" href="${results[i].link}">
              ${results[i].link}</a>
            </div>
          </div>
        `;

        $('.article-container').append(card);
      }
    });
  }

});