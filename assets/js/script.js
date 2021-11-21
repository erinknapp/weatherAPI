var formEl = $("#city-form");
var weatherEl = $("weather-details");

var handleFormSubmit = function(event) {
    //prevent default reloading webpage
    event.preventDefault();
  
    var cityInput= formEl.val();
  
    if (!cityInput) {
      console.log('You need to enter a city name!');
      return;
    }
  
    printSkills(nameInput, dateInput);
  
    // resets form
    nameInputEl.val('');
    dateInputEl.val('');
  };