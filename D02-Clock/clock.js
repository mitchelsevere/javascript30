const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalTime = document.querySelector('.digital');

function setDate() {
  // time assignments
  const now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hour = now.getHours();
  // time conditionals 
  if (hour > 12) { hour = hour - 12 } 
  if (hour < 10) { hour = '0' + hour } 
  if (minutes < 10 ) { minutes = '0' + minutes } 
  if (seconds < 10) { seconds = '0' + seconds }
  // degrees assignments
  const secondsInDegrees = ((seconds / 60) * 360) + 90;
  const minutesInDegrees = ((minutes / 60) * 360) + 90;
  const hoursInDegrees = ((hour / 12) * 360) + 90;
  // time dom manipulation
  secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesInDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;
  digitalTime.innerHTML = `<span>${hour}:${minutes}:${seconds}</span>`;
}

setInterval(setDate, 1000);