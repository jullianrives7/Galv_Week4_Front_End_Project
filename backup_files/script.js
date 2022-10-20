console.log("script.js successfully linked")

const $test = $("#test");
//console.log($test);

//setting global variables to grab the results div and the submit button
const $results = $("#results");
const $submit = $("#submit");
$results.text("Use the search bar above to find shows by your favorite band!");


//function that generates each result card upon search
function generateResultCards(data){

    var bootstrapHorizonalCard = `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="..." class="img-fluid rounded-start" id="img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
  `
var $img = $("#img");


var $span = $('<span class="result-card"></span>');
var $h3 = $('<h3 class="card-title"></h3>');
//   var $img = $('<img class="card-image" src=""></img>')
var $h2 = $('<h2 class="card-genres">');
//   var $div = $('<div class="card-summary">');
//   var $em = $('<em>Summary:</em>');
//   var $a = $('<a>View Show</a>');

  $h3.text(data.artistName);
  $img.attr('src', data.artworkUrl100);
  $h2.text(data.trackName);
//   $div.append($em);
//   $div.append(data.show.summary);
//   $a.attr('href', data.show.url);

  $results.append(bootstrapHorizonalCard);
  $results.append($span);
  $span.append($h3);
//   $span.append($img);
  $span.append($h2);
//   $span.append($div);
//   $span.append($a);
console.log($img);

}



//function that initiates result card generation after getting search data
function returnResults(){
console.log("submit button clicked");
  //sets url to the tvmaze search url and sets the query to the search box text
  let url =  "https://itunes.apple.com/search?term=" + $("#text").val(); 
  console.log(url);

  //retrieves search data based off search url
  $.get(url, headers={"Access-Control-Allow-Origin": "*"}, (data) => {

      //Clears previous results upon initiating a new search
      $results.empty();

      data = JSON.parse(data);
      
      //console.log(data.results[0]);
     
    //   for(index in data){
    //     console.log(data[index]);
    //   }
        //Alerts the user if search results returns no results
    //   if(data.length === 0){
    //     $results.text("Sorry, we didn't find anything... try something else.");
    //   };

          //generates result cards while looping through the collected search data
        //   for (var index = 0; index < data.length; index++){
        //       generateResultCards(data[index]);
        //       console.log(data[index]);
        //   };

          for (var index = 0; index < data.results.length; index++){
            generateResultCards(data.results[index]);
            console.log(data.results[index]);
        };
  });

};


//on clicking submit, it executes the returnResults function
$("#submit").click(returnResults);


//on hitting enter after typing search, run returnResults()
$("#text").keydown(function (e) {
  if (e.keyCode == 13) {
    returnResults();
  };
});