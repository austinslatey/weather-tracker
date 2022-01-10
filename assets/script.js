var fetchButton = document.querySelector('.button');
var cityInput = document.querySelector(".city-name");
var cityName = document.querySelector(".display-name");
var name = document.querySelector(".name");
var description = document.querySelector(".desc");
var temp = document.querySelector(".temp");

var list = document.querySelector("ul")

//get a weather api
var apiKey = '7f6e2d150ab435b458c12a5ccbabd3de';
//ask for location\

//format for a current time and day
var todaysDate = moment().format("MMM Do YY");
var cities = [""];
var recentlySearched = {};

//create functions based on what is needed for api to run

fetchButton.addEventListener('click', function(event) {
   event.preventDefault();
   var getApi = function() {
      //api url
      var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+'&cnt=7&units=imperial&appid=' + apiKey;
      console.log(apiUrl);
      //make a request to url
      fetch(apiUrl)
         .then(function(response) {
            //request succeded
            if (response.ok) {
               response.json().then(function(data) {
                  console.log(data);
                  var nameValue = data['name'];
                  var tempValue = data['main']['temp'];
                  var descValue = data['weather'][0]['description'];
                  var getId = data['sys']['id'];
                  console.log(getId);
                  var lat = data['coord']['lat'];
                  var long = data['coord']['lon'];
                  console.log(lat);
                  console.log(long);
                 

                  cityName.innerHTML = nameValue;
                  temp.innerHTML = tempValue;
                  description.innerHTML = descValue;
                  
                  
                  
                  
               });
            } 
         })
         .catch(function(error) {
            alert("Unable to connect to Weather-Tracker");
         });
      }

   //get value from input element
   var cityName = cityInput.value.trim();
   var citySplit = cityName.split(" ");
   var cityNoSpace = citySplit.join("");
   console.log(cityName);
   console.log(citySplit);
   console.log(cityNoSpace);


   if (cityName) {
      getApi(cityName);

   } else {
      alert("Please enter a valid city")
   }
});




//initial pull for city name given lat and long
var oneCallID = function() {
   apiId = '214caed1da037973b02525f881263cfe';
   //api url
   var newUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='+grabLat+'&lon='+grabLong+'&appid='+apiKey;
   //make a request to url
   fetch(newUrl)
      .then(function(response) {
         //request succeded
         if (response.ok) {
            response.json().then(function(data) {
               console.log(data);
               
            });
         } 
      })
      .catch(function(error) {
         alert("Unable to connect to Weather-Tracker");
      });
   }

   oneCallID();

   
  
   //atempting to pull by city name 
  



