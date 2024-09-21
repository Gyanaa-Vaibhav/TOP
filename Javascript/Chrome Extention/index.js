const startBtn = document.getElementById("start")
const pomo = document.getElementById("pomo")
const short = document.getElementById("short")
const long = document.getElementById("long")
const main = document.querySelector(".main")
const theme = document.getElementsByTagName("link")[0];
const timer = document.querySelector(".timer")
const sCount = document.querySelector(".counter")
let count = 0;
let timeCounter = 1500000;
var x;
const reset = document.getElementById("reset");

if (localStorage.getItem("timer")) {
  timer.textContent = localStorage.getItem("timer")
}

pomo.addEventListener("click", function () {
  theme.setAttribute("href", "./css/index.css")
  // console.log(timer.value)
  timeCounter = 1500000
    if (localStorage.getItem("time")) {
    timer.textContent = localStorage.getItem("time");
  } else {
    timer.textContent = "25:00"
  }
})

short.addEventListener("click", function () {
  theme.setAttribute("href", "./css/short_break.css")
  timeCounter = 300000
    if (localStorage.getItem("time")) {
    timer.textContent = localStorage.getItem("time");
  } else {
    timer.textContent = "5:00"
  }
})

long.addEventListener("click", function () {
  theme.setAttribute("href", "./css/long_break.css")
  timeCounter = 900000
  if (localStorage.getItem("time")) {
    timer.textContent = localStorage.getItem("time");
  } else {
    timer.textContent = "15:00"
  }
})

if (localStorage.getItem("time")) {
  timer.textContent = localStorage.getItem("time");
} else {
  timer.textContent = "25:00"
}

const startTimer = function () {
  t = 0;
  var x = setInterval(function () {
    var distance = timeCounter - t;
    console.log(distance)
    
    // Time calculations for minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(minutes)
    console.log(seconds)
    
    // Output the result in an element with id="demo"

    if (minutes < 10 && seconds < 10) {
      let t = document.querySelector(".timer").textContent = "0" + minutes + ":0" + seconds;
      localStorage.setItem("time", t)
      localStorage.setItem("timeMS", distance)
    } else if (seconds < 10) {
      let t = document.querySelector(".timer").textContent = minutes + ":" + seconds + "0";
      localStorage.setItem("time", t)
      localStorage.setItem("timeMS", distance)
    } else if (minutes < 10) {
      let t = document.querySelector(".timer").textContent = `0${minutes}:${seconds}`;
      localStorage.setItem("time", t)
      localStorage.setItem("timeMS", distance)
    } else {
      let t = document.querySelector(".timer").textContent = `${minutes}:${seconds}`;
      localStorage.setItem("time", t)
      localStorage.setItem("timeMS", distance)
    }
    
    if (distance < 0) {
      clearInterval(x);
      document.querySelector(".timer").textContent = "25:00";
      count ++;
      sCount.textContent += count;
      localStorage.clear()
    }

    startBtn.addEventListener("click", function () {
      clearInterval(x);
      localStorage.clear();
      timer.textContent = "25:00"
      startBtn.textContent = "Start";
    })

    t += 1000;

  }, 1000);
}

startBtn.addEventListener("dblclick", function () {
  startTimer();
  startBtn.textContent = "Stop";
})

reset.addEventListener("click", function () {
  localStorage.clear();
  timer.textContent = "25:00"
})

