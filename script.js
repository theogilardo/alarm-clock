
var date, seconds, minutes, hours, secondsIf, minutesIf, hoursIf;

// SET CLOCK

setInterval(function() {


      date = new Date();
      seconds = date.getSeconds();
      minutes = date.getMinutes();
      hours = date.getHours();

      secondsIf = (seconds < 10) ? `0${seconds}` : seconds;
      minutesIf = (minutes < 10) ? `0${minutes}` : minutes;
      hoursIf = (hours < 10) ? `0${hours}` : hours;

      setTime = document.querySelector('.time');
      setTime.textContent = `${hoursIf}:${minutesIf}:${secondsIf}`;

      }, 1000
);

// RETRIEVE FUNCTION **************


function optionSelected(idSelector) {

    // Translate arg
    var argString = idSelector.id;

    // Select options within select tag
    var form = document.getElementById(argString).options;

    // Identify the option selected
    var indexForm = form.selectedIndex;

    // Return value from option selected
    var selectedForm = form[indexForm].value

    return selectedForm;
};

// CLICK FUNCTION **************

    buttonAlarm = document.getElementById('btn-alarm');

    buttonAlarm.addEventListener('click', function(){

    var alarmMinutes, alarmSeconds, newTime, clockCountDown;

        alarmMinutes = parseInt(optionSelected(selectMinutes));
        alarmSeconds = parseInt(optionSelected(selectSeconds));
        newTime = (alarmMinutes * 60) + (alarmSeconds);

        clockCountDown = setInterval(countDown, 1000);

        function countDown() {
          var newMinutes, newSeconds, el, countdown;

              newMinutes = Math.floor(newTime / 60);
              newSeconds = newTime % 60;

              newMinutes = (newMinutes < 10) ? `0${newMinutes}` : newMinutes;
              newSeconds = (newSeconds < 10) ? `0${newSeconds}` : newSeconds;

              el = document.querySelector('#btn-alarm');
              countdown = el.textContent = `${newMinutes}:${newSeconds}`;

              if(newTime <= -1) {
                  countdown = el.textContent = `Time's up !`;
                  clearInterval(clockCountDown);
                  var audio = new Audio('audio/iphone.mp3')
                         audio.play();
              };

              newTime--;
        };

    });









