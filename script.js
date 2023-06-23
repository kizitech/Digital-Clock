var day = document.getElementById("day");
var time = document.getElementById("time");
var midday = document.getElementById("midday");

var clock = setInterval(
    function calcTime(){
        var currentTime = new Date();
        var hr = currentTime.getHours();
        var min = currentTime.getMinutes();
        var sec = currentTime.getSeconds();
        
        var middayValue = "AM"

        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        day.textContent = days[currentTime.getDay()];

        middayValue = (hr >= 12) ? "PM" : "AM";

        if(hr == 0){
            hr = 12;
        }
        else if(hr > 12){
            hr-= 12;
        }

        hr = (hr < 10) ? "0" + hr : hr;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;

        time.textContent = hr + ":" + min + ":" + sec;
        midday.textContent = middayValue;
    },
    1000
);