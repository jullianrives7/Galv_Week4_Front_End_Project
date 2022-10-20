//setting global variables to grab the results div and the submit button
const $searchResults = $("#search-results");
const $submit = $("#submit");


//function that initiates result card generation after getting search data
function returnResults(){
    
    console.log("submit button clicked");

    //sets url to the tvmaze search url and sets the query to the search box text
    let url =  "https://itunes.apple.com/search?term=" + $("#text").val(); 
    console.log(url);

        //retrieves search data based off search url
        $.get(url, headers={"Access-Control-Allow-Origin": "*"}, (data) => {

            //Clears previous results upon initiating a new search
            $searchResults.empty();        

            //Parses JSON Stringified data to make it easier to access
            data = JSON.parse(data);
                
                //For loop that dynamically creates result cards
                for (var index = 0; index < data.results.length; index++){
                    
                    console.log(data.results[index]);

// <div class="result-card-container">
//     <div class="art-and-text-container">
//         <img src="" class="img"></img>
//         <div class="text-boxes">
//             <h1>Track Title</h1>
//             <p>Artist</p>
//             <p>Album</p>
//         </div>
//     </div>

//     <div class= "play-back-container">
//     </div>
// </div>

//display: flex                    

                    var $resultCardContainer = $('<div class="result-card-container card"></div>');
                        var $artTextContainer = $('<div class="art-and-text-container"></div>');
                            var $img = $('<img src="" class="img rounded" style="max-height: 100%" style="max-width: 100%"></img>');
                            var $textBoxesContainer = $('<div class="text-boxes">');
                                var $h1 = $('<h1>Track Title</h1>');
                                var $p1 = $('<p>Artist</p>')
                                var $p2 = $('<p>Album</p>')
                            var $playbackContainer = $('<div class="play-back-container"></div>');
                                var $figure = $('<figure></figure>');
                                var $figcaption = $('<figcaption></figcaption>');
                                var $audio = $('<audio controls src=""></audio>');
                                var $a = $('<a href="">Download audio</a>')
                 
                  

                    $img.attr('src', data.results[index].artworkUrl100);
                    $h1.text(data.results[index].trackName);
                    $p1.text(data.results[index].artistName);
                    $p2.text(data.results[index].collectionName);
                    $audio.attr('src', data.results[index].previewUrl);
                    $a.attr('href', data.results[index].previewUrl);

                    $searchResults.append($resultCardContainer);
                        $resultCardContainer.append($artTextContainer);
                            $artTextContainer.append($img);
                            $artTextContainer.append($textBoxesContainer);
                                $textBoxesContainer.append($h1);
                                $textBoxesContainer.append($p1);
                                $textBoxesContainer.append($p2);
                        $resultCardContainer.append($playbackContainer);
                            $playbackContainer.append($figure);
                                $figure.append($figcaption);
                                $figure.append($audio);
                                $audio.append($a);

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





            // <div class="card mb-3" style="max-width: 500px;" style="max-height: fit-content;">
                    //     <div class="row g-0">
                    //         <div class="col-md-4">
                    //             <img src="" class="img-fluid rounded">
                    //         </div>
                    //         <div class="col-md-8">
                    //             <div class="card-body">
                    //                <h5 class="card-title-song"></h5>
                    //                <p class="card-text-artist" style="font-size: 18px;"></p>
                    //                <p class="card-text-album"><small class="text-muted-album"></small></p>
                    //                <button id="preview">Preview</button>
                    //             </div>
                    //         </div>
                    //     </div>
            //  </div>














    //<figure>
    //     <figcaption>Listen to the T-Rex:</figcaption>
    //     <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
    //         <a href="/media/cc0-audio/t-rex-roar.mp3">
    //             Download audio
    //         </a>
    //     </audio>
    // </figure>