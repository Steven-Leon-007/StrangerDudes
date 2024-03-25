let sellButton = document.querySelector(".sell-button");

let textInside = document.getElementById('countdown');

let buttonWrapper = document.querySelector(".button-wrapper");

let isHovered = false;

var countDownDate = new Date("Dec 18, 2023 11:04:00").getTime(); //Modify when release date is available

var countdownTimer = setInterval(function () {

  var now = new Date().getTime();
  buttonHoverListener();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  textInside.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  if (isHovered) {
    textInside.classList.toggle("tick_disappear");
  }

  if (distance < 0) {
    // clearInterval(countdownTimer);
    textInside.innerHTML = "0d 0h 0m 0s"; // Just till before there's a release date

    // textInside.innerHTML = "They Arrived!"; for when we have release date
    // sellButton.removeAttribute("disabled");

  }
}, 1000);


function buttonHoverListener() {
  if (!buttonWrapper.hasListener) {
    buttonWrapper.addEventListener("mouseover", () => {
      isHovered = true;
    });
    buttonWrapper.addEventListener("mouseout", () => {
      textInside.classList.remove("tick_disappear");
      isHovered = false;
    });
    buttonWrapper.hasListener = true;
  }
}