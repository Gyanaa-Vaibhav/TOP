const startBtn = document.getElementById("start")
const pomo = document.getElementById("pomo")
const short = document.getElementById("short")
const long = document.getElementById("long")
const main = document.querySelector(".main")
const theme = document.getElementsByTagName("link")[0];
const timer = document.querySelector(".timer")

const startTimer = function () {
    setTimeout(() => {
        alert("Working YAY")
    }, 1000);
}

startBtn.addEventListener("click", startTimer)

pomo.addEventListener("click", function () {
    theme.setAttribute("href", "./css/index.css")
    // console.log(timer.value)
    timer.textContent = "25:00";
})

short.addEventListener("click", function () {
    theme.setAttribute("href", "./css/short_break.css")
    timer.textContent = "5:00";
})

long.addEventListener("click", function () {
    theme.setAttribute("href", "./css/long_break.css")
    timer.textContent = "15:00";
})


var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
