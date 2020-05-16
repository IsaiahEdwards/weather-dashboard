
// global VAl
console.log("hello");
var i = 0


  //click function for city
  $("#find-city").on("click",function(event){
  event.preventDefault();
  i++

  // input for selecting a city
 var city =$("#city-input").val();



 // adding to our list
 var btn = $('<button>').text(city);
 btn.attr("class", "list-group-item")
 $("#listHolder").append(btn);

  //local storage
  
  localStorage.setItem("city", city);
  
   


    // ajax info
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=imperial&cnt=6" + "&appid=166a433c57516f51dfab1f7edaed8413"
    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        console.log(response)

         // button for get storage to work

        // forecast today code
        $("#cityToday").text("city: " + response.city.name)
        $("#tempHigh").text("tempHigh: " + response.list[0].temp.max)
        $("#humdityToday").text("humidity: " + response.list[0].humidity)
        $("#windSpeedToday").text("Wind Speed: " + response.list[0].speed)
        $("#tempLow").text("tempLow:" + response.list[0].temp.min)

        // for loop for 5 day forecast
        for (var i = 1;  i < 6 ; i++){
        $("#tempHigh" + [i]).text("tempHigh: " + response.list[i].temp.max)
        $("#humdityToday" + [i]).text("humidity: " + response.list[i].humidity)
        $("#windSpeedToday" + [i]).text("Wind Speed: " + response.list[i].speed)
        $("#tempLow" + [i]).text("tempLow:" + response.list[i].temp.min)
        }
    });
  });
  
  
  
  // adding our get storage
  var getStorage = localStorage.getItem("city");
  var btn = $('<button>').text(getStorage)
   btn.attr("class", "list-group-item")
   $("#listHolder").append(btn);
  
  
  



  //click function for get storage button
  $(".list-group-item").on("click",function(event){
  event.preventDefault();
  
    // input for selecting a city
   var city = localStorage.getItem("city");
    
     
  
  
      // ajax info
      var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=imperial&cnt=6" + "&appid=166a433c57516f51dfab1f7edaed8413"
      
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          console.log(response)
  
           // button for get storage to work
  
          // forecast today code
          $("#cityToday").text("city: " + response.city.name)
          $("#tempHigh").text("tempHigh: " + response.list[0].temp.max)
          $("#humdityToday").text("humidity: " + response.list[0].humidity)
          $("#windSpeedToday").text("Wind Speed: " + response.list[0].speed)
          $("#tempLow").text("tempLow:" + response.list[0].temp.min)
  
          // for loop for 5 day forecast
          for (var i = 1;  i < 6 ; i++){
          $("#tempHigh" + [i]).text("tempHigh: " + response.list[i].temp.max)
          $("#humdityToday" + [i]).text("humidity: " + response.list[i].humidity)
          $("#windSpeedToday" + [i]).text("Wind Speed: " + response.list[i].speed)
          $("#tempLow" + [i]).text("tempLow:" + response.list[i].temp.min)
          }
    });
  });