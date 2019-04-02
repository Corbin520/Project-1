/////////////////// Yelp Summer Reviews API's ////////////////////////
// dont touch //


// JANS Fishing
var fishingURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/RIb5dysqapFn2AfUk6xHww/reviews"
$.ajax({
    url: fishingURL,
    method: "GET",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx');
    }
}).then(function (response) {
    var results = response.reviews[0].rating
    var comments = response.reviews[2].text
    $("#onthefly-reviews").append("Yelp review: ");
    $("#onthefly-reviews").append(results);
    $("#onthefly-reviews").append(" / 5 Stars");
    $("#onthefly-CustomerComment").append("Customer Reviews: ").append(comments);
});

// Horseback Riding
var horsebackURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/0lUzB0wUu23sZf2eVi_zTQ/reviews"
$.ajax({
    url: horsebackURL,
    method: "GET",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx');
    }
}).then(function (response) {

    var results = response.reviews[0].rating
    var comments = response.reviews[0].text
    $("#KBHorses-reviews").append("Yelp review: ");
    $("#KBHorses-reviews").append(results);
    $("#KBHorses-reviews").append(" / 5 Stars")
    $("#KBHorses-CustomerComment").append("Customer Reviews: ").append(comments);
});

// Bike Riding
var bikeRidingURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/4v_Rx0kXeZVbh5uRbRjzzw/reviews"
$.ajax({
    url: bikeRidingURL,
    method: "GET",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx');
    }
}).then(function (response) {

    var results = response.reviews[0].rating
    var comments = response.reviews[1].text
    $("#electricBikes-reviews").append("Yelp review: ");
    $("#electricBikes-reviews").append(results);
    $("#electricBikes-reviews").append(" / 5 Stars")
    $("#electricBikes-CustomerComment").append("Customer Reviews: ").append(comments);
});


// Hot Air Balloon
var hotairURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/f3omPJOC6qVHJYfO5-fmfA/reviews"
$.ajax({
    url: hotairURL,
    method: "GET",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx');
    }
}).then(function (response) {

    var results = response.reviews[0].rating
    var comments = response.reviews[1].text
    $("#airballoons-reviews").append("Yelp review: ");
    $("#airballoons-reviews").append(results);
    $("#airballoons-reviews").append(" / 5 Stars")
    $("#airballoons-CustomerComment").append("Customer Reviews: ").append(comments);
});

// Olympic Course
var olympicCourseURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/XrmFMW6UoRBTUbB8lD3vdg/reviews"
$.ajax({
    url: olympicCourseURL,
    method: "GET",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx');
    }
}).then(function (response) {

    var results = response.reviews[0].rating
    var comments = response.reviews[0].text
    $("#bobsled-reviews").append("Yelp review: ");
    $("#bobsled-reviews").append(results);
    $("#bobsled-reviews").append(" / 5 Stars")
    $("#bobsled-CustomerComment").append("Customer Reviews: ").append(comments);

});

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