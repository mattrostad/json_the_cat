const request = require("request");

const URL = "https://api.thecatapi.com/v1/breeds/search?q=";
const queryString = process.argv.slice(2)[0];

function breedFetcher(URL, query) {
  request(URL + query, function(error, data) {
    if (error) {
      //Outputs message if request fails
      return console.log("Something happened");
    }
    const body = JSON.parse(data.body);
    if (body.length === 0) {
      //Outputs message if the breed is not found
      return console.log("Breed is not found");
    }
    console.log(body[0].description);
  });
}

breedFetcher(URL, queryString);
