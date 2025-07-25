const timeInput = document.querySelector("#timeInput"); 
const enterBtn = document.querySelector(".search-button");
const calcTimeDisplay = document.querySelector(".calc-time-result")
let days = 0;
let seconds = 0; // 84,945.24
let minutes = 0;
let hours = 0;

function checkTime(i) {
  if (i < 10) {
    return "0" + i;
  } else {
    return i;
  }
}

function calcTime(userNumber) {
  let totalSeconds = parseFloat(userNumber);
  if (isNaN(totalSeconds)) {
   console.log("work");
    return;
  }
  const days = Math.floor(totalSeconds / (3600 * 24));
  const remainingAfterDays = totalSeconds % (3600 * 24);

  let hours = Math.floor(remainingAfterDays / 3600);
  let minutes = Math.floor((remainingAfterDays % 3600) / 60);
  let seconds = remainingAfterDays % 60;

  hours = checkTime(hours);
  minutes = checkTime(minutes);
  seconds = checkTime(seconds );

  calcTimeDisplay.innerHTML = `${days} дн. ${hours}:${minutes}:${seconds}` 
}

const onChangeCalculateTime = function(event) {
  const value = timeInput.value;
  calcTime(value);
}

timeInput.addEventListener("change", onChangeCalculateTime)