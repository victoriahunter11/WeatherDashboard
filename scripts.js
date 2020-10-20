//api.openweathermap.org/data/2.5/weather?q={city name}&appid={'6db34ef713e549526f3d19aba8df78ca'}


$(document).ready(function () {

//Search Button clicking
$('#searchBtn').on('click', function (e) {
e.preventDefault()

var cityName = $('#searchTerm').val()
console.log(cityName);

//Weather API
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
    var cityName = response.name;
    var date = new Date().toLocaleDateString()
    console.log(date)

    $('#cityName').text(cityName + ':');
    $('#currentDate').text(date);
    $('#temp').text(temp);
    $('#humidity').text(humidity);
    $('#wind').text(wind);


    //latitudes and longitudes

    //UV Index
    
    //5 day forecast

    var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=6db34ef713e549526f3d19aba8df78ca'
    
    console.log('queryURL:', queryURL);

    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function (response) {
        console.log('response:', response);

        //firstday
        var temp1 = response.list[0].main.temp;
        var humidity1 = response.list[0].main.humidity;
        var date = new Date().toLocaleDateString()
        console.log('temp:', temp);
        console.log('humidity:', humidity);
        $('#currentDate1').text(date);
        $('#temp1').text(temp);
        $('#humidity1').text(humidity);

        //2ndday

        var temp2 = response.list[7].main.temp;
        var humidity2 = response.list[7].main.humidity;
        
        console.log('temp:', temp);
        console.log('humidity:', humidity);
        
        $('#temp2').text(temp2);
        $('#humidity2').text(humidity2);

        //3rdday

        var temp3 = response.list[16].main.temp;
        var humidity3 = response.list[16].main.humidity;
        
        console.log('temp:', temp);
        console.log('humidity:', humidity);
        
        $('#temp3').text(temp3);
        $('#humidity3').text(humidity3);

        //4thDay
        
        var temp4 = response.list[24].main.temp;
        var humidity4 = response.list[24].main.humidity;
        var date = new Date().toLocaleDateString()
        console.log('temp:', temp);
        console.log('humidity:', humidity);
        $('#currentDate1').text(date);
        $('#temp4').text(temp4);
        $('#humidity4').text(humidity4);

        //5thday

        var temp5 = response.list[32].main.temp;
        var humidity5 = response.list[32].main.humidity;
        console.log('temp:', temp);
        console.log('humidity:', humidity);
        $('#currentDate1').text(date);
        $('#temp5').text(temp5);
        $('#humidity5').text(humidity5);

    })

  });

})


});