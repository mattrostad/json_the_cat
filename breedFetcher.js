const request = require("request");

const URL = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {
  request(URL + breedName, function(error, response, body) {
    if (error) {
      //Outputs message if request fails
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      //Outputs message if the breed is not found
      return callback("Breed is not found", null);
    }
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
