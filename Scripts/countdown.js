var sellButton = document.querySelector(".sell-button");

var textInside = document.getElementById('countdown');

var countDownDate = new Date("Dec 18, 2023 11:04:00").getTime(); //Modify when release date is available

var x = setInterval(function() {

    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  

    textInside.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    if (distance < 0) {
      clearInterval(x);
      textInside.innerHTML = "0d 0h 0m 0s";

      // textInside.innerHTML = "They Arrived!"; for when we have release date
      // sellButton.removeAttribute("disabled");

    }
  }, 1000);