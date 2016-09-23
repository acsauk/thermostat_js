$(document).ready(function(){

  var thermostat = new Thermostat;

  function updateCurrentTemp() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
    $("#temperature").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  };

  $("#increase-temp").click(function() {
    thermostat.up();
    updateCurrentTemp();
    var red = thermostat.temperature * 2.5;
    var blue = 100 - red;
    $("body").css({"background":"radial-gradient(red " + red + "%, blue"});
  });

  $("#decrease-temp").click(function() {
    thermostat.down();
    updateCurrentTemp();
    var red = thermostat.temperature * 2.5;
    var blue = 100 - red;
    $("body").css({"background":"radial-gradient(red " + red + "%, blue"});
  });

  $("#reset-temp").click(function() {
    thermostat.reset();
    updateCurrentTemp();
    $("body").css({"background":"radial-gradient(red 50%, blue)"});
  });

  $("#psm-on").click(function() {
    thermostat.powerSavingOn();
    $("#power-saving-status").text("on");
  });

  $("#psm-off").click(function() {
    thermostat.powerSavingOff();
    $("#power-saving-status").text("off");
  });

  $("#select-city").submit(function(event){
    event.preventDefault();
    var city = $("#current-city").val();
    displayWeather(city);
  });

  displayWeather('London');

  function displayWeather(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var token = '&appid=bcebb95329f7ace43020439afcb4e214';
    var units = '&units=metric';
    $.get(url + city + token + units, function(data) {
     $("#current-temperature").text(data.main.temp);
    });
    $("#selected-city").text(city);
  };

});
