"Use stirct";

// Dom variables
let timer=document.querySelector(".timer");
let startBtn=document.querySelector(".b1");
let stopBtn=document.querySelector(".b2");
let resetBtn = document.querySelector(".b3");


//Logic

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const  startTimer = () => {
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timer.textContent = formatTime(elapsedTime);
  }, 10);

  startBtn.disabled = true;
  stopBtn.disabled = false;
}

  const formatTime = (elapsedTime)  => {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}
const stopTimer = () => {
  clearInterval(timerInterval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}
const resetTimer = () => {
  clearInterval(timerInterval);

  elapsedTime = 0;
  timer.innerHTML = "00:00:00";

  startBtn.disabled = false;
  stopBtn.disabled = true;
}


//Eventlistners

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);