
/////////////////// Yelp Summer Reviews API's ////////////////////////
                // dont touch //


// JANS MTN BIKE
var mtnBikeURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/-3LZfDFYPE9aXPc0Hn-4UA/reviews"
$.ajax({
    url: mtnBikeURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {
    var results = response.reviews[0].rating
    var comments = response.reviews[2].text
    $("#mtn-bike-reviews").append("Yelp review: ");
    $("#mtn-bike-reviews").append(results);
    $("#mtn-bike-reviews").append(" / 5 Stars")
    $("#mtn-bike-CustomerComment").append("Customer Reviews: ").append(comments);
});

// Zip Line
var ziplineURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/djjBf3bV_-yJPjElIULh5w/reviews"
$.ajax({
    url: ziplineURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {
    
    var results = response.reviews[0].rating
    var comments = response.reviews[0].text
    $("#zip-line-reviews").append("Yelp review: ");
    $("#zip-line-reviews").append(results);
    $("#zip-line-reviews").append(" / 5 Stars")
    $("#zip-line-CustomerComment").append("Customer Reviews: ").append(comments);
});

// golf 
var golfURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/9qOo7I8OkWQ_CVot1HbHiA/reviews"
$.ajax({
    url: golfURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {

    var results = response.reviews[0].rating
    var comments = response.reviews[1].text
    $("#golf-course-reviews").append("Yelp review: ");
    $("#golf-course-reviews").append(results);
    $("#golf-course-reviews").append(" / 5 Stars")
    $("#golf-course-CustomerComment").append("Customer Reviews: ").append(comments);
});


// Alpine Slide
var alpineSlideURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/djjBf3bV_-yJPjElIULh5w/reviews"
$.ajax({
    url: alpineSlideURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {

    var results = response.reviews[0].rating
    var comments = response.reviews[1].text
    $("#alpine-slide-reviews").append("Yelp review: ");
    $("#alpine-slide-reviews").append(results);
    $("#alpine-slide-reviews").append(" / 5 Stars")
    $("#alpine-slide-CustomerComment").append("Customer Reviews: ").append(comments);
});

// ropes course
var ropesCourseURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/XrmFMW6UoRBTUbB8lD3vdg/reviews"
$.ajax({
    url: ropesCourseURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {

    var results = response.reviews[0].rating
    var comments = response.reviews[0].text
    $("#ropes-course-reviews").append("Yelp review: ");
    $("#ropes-course-reviews").append(results);
    $("#ropes-course-reviews").append(" / 5 Stars")
    $("#ropes-course-CustomerComment").append("Customer Reviews: ").append(comments);

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

////////////////// End of Yelp Reviews API's /////////////////////////







