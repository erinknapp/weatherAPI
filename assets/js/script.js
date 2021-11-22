// Global variables
var cityFormEl = document.querySelector("city-form");
var historyListEl = document.querySelector("history-list");
var weatherSearchTerm = document.querySelector ("weather-search-term");
var weatherContainer = document.querySelector("weather-container");
var cityInputEl = document.querySelector("city-input");

var printHistory = function (city) {
    var listEl = city;
    listEl.addClass('list-group-item').text(listDetail);
    listEl.appendTo(historyListEl);
}

// Function for form submission and error checking
var formSubmitHandler = function (event) {
    //prevent default reloading webpage
    event.preventDefault();

    var city = cityInputEl.value.trim();

    // error check
    if (city) {
        getCity(city);
        cityFormEl.textContent = "";
        cityInputEl = "";
    } else (
        alert('Please enter a city name')
    )

    printHistory(city);
};

//button click event
var buttonClickHandler = function (event) {
    var name = event.target.getAttribute('data-name');
    if (name) {
        getCity(name);

        weatherContainer.textContent = "";
    }
};

// Function to capture city data for use in API
var getCity = function (city) {
    var apiURL = "api.openweathermap.org/data/2.5/weather?q=" + cityInputEl + "&appid=1f193a6993fbc7775567c85ed6ca33da";

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
        .catch(function (error) {
                alert('Unable to connect to OpenWeather');
        });
};

// Function to display results based on city search
var displayWeather = function () {

};

cityFormEl.addEventListener('submit', formSubmitHandler);
