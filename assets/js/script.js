var formEl = $("user-form");

var getWeather = function(city) {
        $('.weather-temperature').openWeather({
            key: '1f193a6993fbc7775567c85ed6ca33da',
            city: 'Los Angeles',
            descriptionTarget: '.weather-description',
            windSpeedTarget: '.weather-wind-speed',
            minTemperatureTarget: '.weather-min-temperature',
            maxTemperatureTarget: '.weather-max-temperature',
            humidityTarget: '.weather-humidity',
            sunriseTarget: '.weather-sunrise',
            sunsetTarget: '.weather-sunset',
            placeTarget: '.weather-place',
            iconTarget: '.weather-icon',
            customIcons: '../src/img/icons/weather/',
            success: function(data) {
                // show weather
                $('.weather-wrapper').show();
                console.log(data);
            },
            error: function(data) {
                console.log(data.error);
                $('.weather-wrapper').remove();
            }
        });
    }

$(function() {

    $("#user-form").submit(function(event){
        event.preventDefault();
        var city = $("#city").val();

        getWeather(city);
    })

});

