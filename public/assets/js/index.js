$(document).ready(function() {
  $(".scrape-new").on("click", function() {
    $.ajax({
      type: "GET",
      url: "/api/scrape"
    }).then(renderFromDatabase);

    function renderFromDatabase() {
      $.ajax({
        type: "GET",
        url: "/api/headlines"
      }).then(function(results) {
        console.log("results ", results);

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
});