// Global variables
var cityList = [];
var cityFormEl = document.querySelector("city-form");
var historyListEl = document.querySelector("history-list");
var weatherSearchTerm = document.querySelector ("weather-search-term");
var weatherContainer = document.querySelector("weather-container");
var APIkey = "1f193a6993fbc7775567c85ed6ca33da";

//Print history of searched cities
//Create funtion to capture stored data (city names) from localstorage
//then create a dynamic list of cities
//append each city as the user enters them
var printHistory = function (city) {
    var listEl = city;
    listEl.addClass('list-group-item').text(listDetail);
    listEl.appendTo(historyListEl);
}

// Function for form submission and error checking
//using array features such as push (add city to array) and shift
$("#city-input").on("click", function(event){
    event.preventDefault();

    var cityname = $("#city-input").val().trim();
    if(cityname === "") {

    } else if(cityList.length >= 3) {
        cityList.shift();
        cityList.push(cityname);
    } else {
        cityList.push(cityname);    
    }

    //call to a function that would display the city and weather data
});

// Function to display the city and weather data
var getCity = function (city) {
    var apiURL = "api.openweathermap.org/data/2.5/weather?q=" + cityInputEl + "&appid=" + APIkey;

    fetch(apiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    displayWeather(data.items, );
                });
            } else {
                alert("Error: " + response.statusText);
            }
        })
        //built in error handling for server status
        .catch(function (error) {
                alert('Unable to connect to OpenWeather');
        });
};

// Function to display results based on city search
var displayWeather = function () {
    //display current temp, high temp, low temp, UV index, weather state, wind
    // 
};