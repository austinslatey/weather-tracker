var searchFormEl = document.querySelector("#search-form");
var cityInputEl = document.querySelector("#city-name")
var searchButtonEl = document.querySelector("#search-btn");

//get a weather api
var apiKey = "7f6e2d150ab435b458c12a5ccbabd3de";
//ask for location
if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(function(pos) {
      var geoLat = pos.coords.latitude.toFixed(5);
      var geoLong = pos.coords.longitude.toFixed(5);
      var geoAcc = pos.coords.accuracy.toFixed(1);

   });
} else {
   alert("geoloc broken");
}

//format for a current time and day
var todaysDate = moment().format("MMM Do YY");
var cities = [""];
var recentlySearched = {};

//create functions based on what is needed for api to run
   //initial pull for city name given lat and long
var buttonSubmit = function(event) {
   event.preventDefault();

   //get value from input element
   var cityName = cityInputEl.value.trim();
   var citySplit = cityName.split(" ");
   var cityNoSpace = citySplit.join("");
   console.log(cityName);
   console.log(citySplit);
   console.log(cityNoSpace);

   if (cityName) {
      getCityId(cityName);

   } else {
      alert("Please enter a valid city");
   }
}


   //initial pull for city name given lat and long
   var getCityId = function(name) {
      var key = '7f6e2d150ab435b458c12a5ccbabd3de'
      var apiUrl= 'https://api.openweathermap.org/data/2.5/weather?q=minneapolis&appid=' + key;
      console.log(apiUrl);

      fetch(apiUrl)
      .then(function(response) {return response.json() 
      })
      .then(function(data) {
         var temp = data.main;
         var place = data.name;
         var description = data.weather[0];
         var { sunrise, sunset } = data.sys;

         var convertToFahrenheit = (temp * 9) / 5 + 32;
         console.log(data);
      })
      .catch(function() {
   
      });
   }

   
   window.onload = function() {
      getCityId();
   }

 

   
    // search for a location desired and display
     // weather forcast display for location 
     // search history
    //
     //  on click functions for search button
     // 
