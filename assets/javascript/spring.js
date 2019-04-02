//Deer Valley//
var deerValleyURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/4utuWi6qEHQdJU68SKU2dw/reviews"
$.ajax({
    url: deerValleyURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {
    
    var results = response.reviews[0].rating
    var comments = response.reviews[2].text
    $("#deerValleyReviews").append("Yelp review: ");
    $("#deerValleyReviews").append(results);
    $("#deerValleyReviews").append("/5")
    $("#deerValleyCustomerComment").append("Customer Reviews: ").append(comments);
});

// Olympic Park
var olympicParkURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/XrmFMW6UoRBTUbB8lD3vdg/reviews"
$.ajax({
    url: olympicParkURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {

    // var totalReviews = response.
    var results = response.reviews[0].rating
    var comments = response.reviews[2].text
    $("#olympicParkReviews").append("Yelp review: ");
    $("#olympicParkReviews").append(results);
    $("#olympicParkReviews").append("/5")
    $("#canyonsCustomerComment").append("Customer Comments: ").append(comments);
});

// Canyons Village
var canyonURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/GExfHOQpyNdIqpSq8mvFVA/reviews"
$.ajax({
    // has no reviews
    url: canyonURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {

    var comments = response.reviews[0].text
    var results = response.reviews[0].rating
    $("#canyonsReviews").append("Yelp review: ");
    $("#canyonsReviews").append(results);
    $("#canyonsReviews").append("/5")
    $("#canyonsCustomerComment").append("Customer Comments: ").append(comments);
});

// Fly Fishing
var flyFishingURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/P9qws2eTzl0m6ArCX3adJQ/reviews"
$.ajax({
    url: flyFishingURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {

    var comments = response.reviews[2].text
    var results = response.reviews[0].rating
    $("#flyFishingReviews").append("Yelp review: ");
    $("#flyFishingReviews").append(results);
    $("#flyFishingReviews").append("/5")
    $("#flyFishingCustomerComment").append("Customer Comments: ").append(comments);
});

// Swaner Preserve
var swanerURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/4HyfZpxI_yAyoZ3bSFKjMg/reviews"
$.ajax({
    url: swanerURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {

    var comments = response.reviews[0].text
    var results = response.reviews[0].rating
    $("#swanerReviews").append("Yelp review: ");
    $("#swanerReviews").append(results);
    $("#swanerReviews").append("/5")
    $("#swanerCustomerComment").append("Customer Comments: ").append(comments);

});

//////////////////// End of Yelp Reviews API's ///////////////////////


  // Initialize Firebase
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
