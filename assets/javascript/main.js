

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

