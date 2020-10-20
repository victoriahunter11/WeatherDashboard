//api.openweathermap.org/data/2.5/weather?q={city name}&appid={'6db34ef713e549526f3d19aba8df78ca'}


$(document).ready(function () {


$('#searchBtn').on('click', function (e) {
e.preventDefault()

var cityName = $('#searchTerm').val()
console.log(cityName);

var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' +cityName + '&appid=6db34ef713e549526f3d19aba8df78ca'

console.log('queryURL:', queryURL);

$.ajax({
    url: queryURL,
    method: 'GET',
  }).then(function (response) {
    console.log('response:', response);

    var temp = response.main.temp;
    var humidity = response.main.humidity;
    var wind = response.wind.speed;

    $('#temp').text(temp);
    $('#humidity').text(humidity);
    $('#wind').text(wind);

   // $('#movie-view').text(data);
  });

})


});