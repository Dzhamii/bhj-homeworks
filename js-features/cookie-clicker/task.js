let clickCounter = 0;
let lastClickTime = new Date().getTime();
let clickSpeed = 0;

const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const clickSpeedDisplay = document.getElementById("clickSpeed");

cookie.onclick = () => {
  const currentTime = new Date().getTime();
  const timeElapsed = (currentTime - lastClickTime) / 1000;
  clickSpeed = 1 / timeElapsed;

  clickCounter++;
  lastClickTime = currentTime;
  
  counter.textContent = clickCounter;
  clickSpeedDisplay.textContent = `Скорость клика: ${clickSpeed.toFixed(2)} кликов в секунду`;

  if (cookie.width === 200) {
    cookie.width = 220;
  } else {
    cookie.width = 200;
  }
};
