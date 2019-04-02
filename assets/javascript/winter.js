

///////////////////// Yelp Winter Review API's ///////////////////////
                    // dont touch //

// Red Pine Adventures
var redPineURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/rms878N7RVxxftsYGkK6YQ/reviews"
$.ajax({
    url: redPineURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {

    var results = response.reviews[0].rating
    var comments = response.reviews[2].text
    $("#redPineReviews").append("Yelp review: ");
    $("#redPineReviews").append(results);
    $("#redPineReviews").append(" / 5 Stars")
    $("#redPineCustomerComment").append("Customer Reviews: ").append(comments);
});

// // Canyons Ski/SB
var canyonsURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/RVFF4koJbeM0dUAaO28SvA/reviews"
$.ajax({
    url: canyonsURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {

    // var totalReviews = response.
    var results = response.reviews[0].rating
    var comments = response.reviews[2].text
    $("#canyonsReviews").append("Yelp review: ");
    $("#canyonsReviews").append(results);
    $("#canyonsReviews").append(" / 5 Stars")
    $("#canyonsCustomerComment").append("Customer Comments: ").append(comments);
});

// // Soldier Hollow Nordic Center
var soldierHollowURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/WnKVHq6_aijz461b3SxRqA/reviews"
$.ajax({
    // has no reviews
    url: soldierHollowURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {

    var comments = response.reviews[0].text
    var results = response.reviews[0].rating
    $("#soldierHollowReviews").append("Yelp review: ");
    $("#soldierHollowReviews").append(results);
    $("#soldierHollowReviews").append(" / 5 Stars")
    $("#soldierCustomerComment").append("Customer Comments: ").append(comments);
});

// // Luna Lobos Dog Sled
var lunaLobosURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/YR09D-XfQdNKJeENAKJp1Q/reviews"
$.ajax({
    url: lunaLobosURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {

    var comments = response.reviews[2].text
    var results = response.reviews[0].rating
    $("#lunaLobosReviews").append("Yelp review: ");
    $("#lunaLobosReviews").append(results);
    $("#lunaLobosReviews").append(" / 5 Stars")
    $("#lunaCustomerComment").append("Customer Comments: ").append(comments);
});

// // Park City MS Pizza and Noodle
var pcMainStreetURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/21Xb2--o4XowCIp4N0YLUg/reviews"
$.ajax({
    url: pcMainStreetURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {

    var comments = response.reviews[0].text
    var results = response.reviews[0].rating
    $("#mainstreetReviews").append("Yelp review: ");
    $("#mainstreetReviews").append(results);
    $("#mainstreetReviews").append(" / 5 Stars")
    $("#mainStreetCustomerComment").append("Customer Comments: ").append(comments);

});

var config = {
    apiKey: "AIzaSyCIxTlm6ok8zCdxX3M5UbNLtYObnPa4Q-g",
    authDomain: "temp-72d12.firebaseapp.com",
    databaseURL: "https://temp-72d12.firebaseio.com",
    projectId: "temp-72d12",
    storageBucket: "temp-72d12.appspot.com",
    messagingSenderId: "510559825843"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

// weather API
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?zip=84068&appid=63cb4b4f89b17591871bc3bc7aa807f0&units=imperial"
$.ajax({
    url: weatherURL,
    method: "GET"
}).then(function(response) {

    var weatherTemp = response.main.temp;
    var weatherForcast = response.weather[0].description;

    database.ref().push({
        temprature: weatherTemp,
        forcast: weatherForcast,
      });
});

// returning database data
firebase.database().ref().once("child_added", function (snapshot) {
  
    var returnedWeather = snapshot.val().temprature;
    var returnedForcast = snapshot.val().forcast;
       
    $("#weather-temp").append(returnedWeather);
    $("#weather-forcast").append(returnedForcast);
});