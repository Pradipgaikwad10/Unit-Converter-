// Timer
const timerInput = document.getElementById("timer-input");
const startTimerBtn = document.getElementById("start-timer-btn");
const timerDisplay = document.getElementById("timer-display");
let timerInterval;

function startTimer() {
  clearInterval(timerInterval);
  const seconds = parseInt(timerInput.value);
  let timeLeft = seconds;
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "00:00";
      alert("Time's up!");
    } else {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
  }, 1000);
}

startTimerBtn.addEventListener("click", startTimer);

// Stopwatch
const startStopwatchBtn = document.getElementById("start-stopwatch-btn");
const stopStopwatchBtn = document.getElementById("stop-stopwatch-btn");
const resetStopwatchBtn = document.getElementById("reset-stopwatch-btn");
const stopwatchDisplay = document.getElementById("stopwatch-display");
let stopwatchInterval;
let stopwatchTime = 0;

function startStopwatch() {
  stopwatchInterval = setInterval(() => {
    stopwatchTime++;
    const hours = Math.floor(stopwatchTime / 3600);
    const minutes = Math.floor((stopwatchTime / 60) % 60);
    const seconds = stopwatchTime % 60;
    stopwatchDisplay.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  stopwatchDisplay.textContent = "00:00:00";
}

startStopwatchBtn.addEventListener("click", startStopwatch);
stopStopwatchBtn.addEventListener("click", stopStopwatch);
resetStopwatchBtn.addEventListener("click", resetStopwatch);