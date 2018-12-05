// this code displays personal information about Bastian powered
// by the https://my-personal-api.herokuapp.com/ application. Build your own there!
$(function(){
    var json_url = $('#json_url').attr('href');
    $.get(json_url, function(data){
        if(data.location.tz){

          var local_time = new Date( new Date().getTime() + data.location.tz_offset * 1000).toUTCString().replace( / GMT$/, "" ).substring(17,22);
          $("#local_time").html(local_time);
          $("#time_zone").html(data.location.tz);
          $("#time_info").removeClass('invisible');
        };

        if(data.location.place){
          $("#location_name").html(data.location.place);
          $("#location_info").removeClass('invisible');
        };

        if(data.location.weather){
          $("#weather_condition").html(data.location.weather.condition_text);
          $("#weather_temperature").html(data.location.weather.temperature_outside);
          $("#condition_icon").attr("class", "wi wi-yahoo-" + data.location.weather.code);
          $("#weather").removeClass('invisible');
        }

        if(data.activity.heart_rate){
          $("#heart_rate").html(data.activity.heart_rate);
          $("#steps").html(data.activity.steps);
          $("#sleep").html(data.activity.hours_slept);
          var battery_level = data.location.battery_level*100;
          if(battery_level<10){
            $("#battery_icon").attr("class", "fas fa-battery-empty");
          } else if (battery_level < 30){
            $("#battery_icon").attr("class", "fas fa-battery-quarter");
          } else if (battery_level < 60){
            console.log('battery_should_be_half');
            $("#battery_icon").attr("class", "fas fa-battery-half");
          } else if (battery_level < 85){
            $("#battery_icon").attr("class", "fas fa-battery-three-quarters");
          } else {
            $("#battery_icon").attr("class", "fas fa-battery-full");
          };
          $("#battery_level").html(Math.floor(battery_level));
          $("#battery_state").html(data.location.battery_state);
          $("#activity_info").removeClass('invisible');
        };

        if(data.music){
          $("#title").html(data.music.title);
          $("#artist").html(data.music.artist);
          $("#music_info").removeClass('invisible');
        };

    });
});
