//api.openweathermap.org/data/2.5/weather?q={city name}&appid={'6db34ef713e549526f3d19aba8df78ca'}


$(document).ready(function () {

//Search Button clicking
$('#searchBtn').on('click', function (e) {
e.preventDefault()

var cityName = $('#searchTerm').val()
console.log(cityName);

//Weather API
var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' +cityName + '&appid=6db34ef713e549526f3d19aba8df78ca&units=imperial'

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
    var icon = 'https://openweathermap.org/img/w/' + response.weather[0].icon + '.png';

    var date = new Date().toLocaleDateString()
    console.log(date)

    $('#cityName').text(cityName + ':');
    $('#currentDate').text(date);
    $('#temp').text('Temperature: '+ temp + ' F');
    $('#humidity').text('Humidity: '+ humidity + '%');
    $('#wind').text('Wind: '+ wind + ' MPH');
    $('#icon').attr('src', icon);

     
   /* UV INDEX ATTEMPT 
   var latitude = response.coord.lat;
   var longitude = response.coord.long;
   //UV index 

   var queryURL = 'https://api.openweathermap.org/data/2.5/uvi?lat=' + latitude + '&lon=' + longitude + '&appid=6db34ef713e549526f3d19aba8df78ca'

   $.ajax({
       url: queryURL,
       method: 'GET',
   }).then(function (response) {
       console.log('response:', response);

*/
       
    //5 day forecast

    var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=6db34ef713e549526f3d19aba8df78ca&units=imperial'
    
    
    console.log('queryURL:', queryURL);

    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function (response) {
        console.log('response:', response);


        //days
        var today  = new Date()
        var date1 = new Date(today)
        date1.setDate(date1.getDate() + 1);

        var date2 = new Date(date1);
        date2.setDate(date1.getDate() + 1);

        var date3 = new Date(date2);
        date3.setDate(date2.getDate() + 1);

        var date4 = new Date(date3);
        date4.setDate(date3.getDate() + 1);

        var date5 = new Date(date4);
        date5.setDate(date4.getDate() + 1);

        //firstday
        var temp1 = response.list[0].main.temp;
        var humidity1 = response.list[0].main.humidity;
        var date1 = date1.toLocaleDateString();
        var icon = 'https://openweathermap.org/img/w/' + response.list[0].weather[0].icon + '.png';
        console.log('temp:', temp);
        console.log('humidity:', humidity);
        $('#date1').text(date1);
        $('#temp1').text('temp: ' + temp1 + ' F');
        $('#humidity1').text('humidity: ' + humidity +'%');
        $('#icon1').attr('src', icon);


        //2ndday
        var date2 = date2.toLocaleDateString()
        var temp2 = response.list[7].main.temp;
        var humidity2 = response.list[7].main.humidity;
        var icon = 'https://openweathermap.org/img/w/' + response.list[7].weather[0].icon + '.png';
        console.log('temp:', temp);
        console.log('humidity:', humidity);
        $('#temp2').text('temp: ' +temp2+ ' F');
        $('#humidity2').text('humidity: ' + humidity2 + '%');
        $('#icon2').attr('src', icon);
        $('#date2').text(date2);

        //3rdday
        var date3 = date3.toLocaleDateString()
        var temp3 = response.list[16].main.temp;
        var humidity3 = response.list[16].main.humidity;
        console.log('temp:', temp);
        console.log('humidity:', humidity);
        var icon = 'https://openweathermap.org/img/w/' + response.list[16].weather[0].icon + '.png';
        $('#temp3').text('temp: ' +temp3+ ' F');
        $('#humidity3').text('humidity: ' + humidity3 + '%');
        $('#icon3').attr('src', icon);
        $('#date3').text(date3);

        //4thDay
        
        var date4 = date4.toLocaleDateString()
        var temp4 = response.list[24].main.temp;
        var humidity4 = response.list[24].main.humidity;
        var date = new Date().toLocaleDateString()
        console.log('temp:', temp);
        console.log('humidity:', humidity);
        var icon = 'https://openweathermap.org/img/w/' + response.list[24].weather[0].icon + '.png';
        $('#date4').text(date4)
        $('#temp4').text('temp: ' +temp4+ ' F');
        $('#humidity4').text('humidity: ' + humidity4 + '%');
        $('#icon4').attr('src', icon);

    
        //5thday

        var date5 = date5.toLocaleDateString()
        var temp5 = response.list[32].main.temp;
        var humidity5 = response.list[32].main.humidity;
        console.log('temp:', temp);
        console.log('humidity:', humidity);
        var icon = 'https://openweathermap.org/img/w/' + response.list[32].weather[0].icon + '.png';
        $('#date5').text(date4);
        $('#temp5').text('temp: ' +temp5+ ' F');
        $('#humidity5').text('humidity: ' + humidity5 + '%');
        $('#icon5').attr('src', icon);

   
    })

  });

})

//})
});
