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
          $("#flag").attr("src", data.location.flag_url);
          $("#location_info").removeClass('invisible');
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
          $("#phone_info").removeClass('invisible');
        };

        if(data.location.weather){
          $("#weather_condition").html(data.location.weather.condition_text);
          $("#weather_temperature").html(data.location.weather.temperature_outside);
          $("#condition_icon").attr("class", "wi wi-owm-" + data.location.weather.code);
          $("#weather").removeClass('invisible');
        }

        if(data.oura_sleep){
          $("#body_temperature").html(data.oura_sleep.temperature);
          $("#steps").html(data.oura_sleep.steps);
          $("#sleep").html(data.oura_sleep.sleep_duration);
          var body_temp = data.oura_sleep.temperature;
          if(body_temp>0){
            $("#temp_qualifier").html("higher");
          } else {
            $("#temp_qualifier").html("lower");
          };
          $("#activity_info").removeClass('invisible');
        };

        if(data.netatmo.home_distance<3){
          $("#weather_temperature").html(data.netatmo.outdoor_temperature);
          $("#cotwo").html(data.netatmo.CO2);
          $("#extra_break").html("<br/>");
          $("#home_info").removeClass('invisible');
        }

        if(data.netatmo.noise<40){
        $('#volume').attr('class', 'fas fa-volume-mute')
        $("#volume_text").html('silent');
      } else if (data.netatmo.noise < 50) {
        $('#volume').attr('class', 'fas fa-volume-down')
        $("#volume_text").html('quiet');

      } else {
        $('#volume').attr('class', 'fas fa-volume-up')
        $("#volume_text").html('noisy');
      }

        if(data.music){
          $("#title").html(data.music.title);
          $("#artist").html(data.music.artist);
          $("#music_info").removeClass('invisible');
        };

    });
});
