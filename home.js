const cakeShow = document.querySelector(".cake");
const hbdTEXT = document.querySelector(".hbdtext");
const times = document.querySelector(".times");
const confettiReveal = document.querySelector("#my-canvas");
const bgCrowd = document.querySelector(".bg-crowd");

// function for bg music to play and pause
function bgPlay() {
    bgCrowd.play();
};

let birthday = new Date("2022-03-17 00:00:00");
const day = document.querySelector(".dayTime");
const hour = document.querySelector(".hourTime");
const minute = document.querySelector(".minTime");
const second = document.querySelector(".secTime");
const intervalID = setInterval(() => {
  const current = new Date();
  const elapsed = birthday - current;
  const secondstotal = Math.floor(elapsed / 1000);
  const days = Math.floor(secondstotal / 3600 / 24);
  const hours = Math.floor(secondstotal / 3600) % 24;
  const minutes = Math.floor(secondstotal / 60) % 60;
  const seconds = Math.floor(secondstotal) % 60;
  day.innerText = days;
  hour.innerText = hours;
  minute.innerText = minutes;
  second.innerText = seconds;
  console.log(elapsed);
  if (elapsed <= 0) {
    bgPlay();
    confettiReveal.classList.toggle("reveal");
    cakeShow.classList.toggle("active");
    hbdTEXT.innerText = "It's your Birthday!";
    times.classList.toggle("disappear");
    clearInterval(intervalID);
  }
}, 1000);
