let clickCounter = 0;
let lastClickTime = new Date().getTime();
let clickSpeed = 0;

const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickSpeedDisplay = document.getElementById("clickSpeed");

cookie.onclick = () => {
  const currentTime = new Date().getTime();
  const timeElapsed = (currentTime - lastClickTime) / 1000;
  clickSpeed = 1 / timeElapsed;

  clickCounter++;
  lastClickTime = currentTime;
  
  counter.textContent = clickCounter;
  clickSpeedDisplay.textContent = "Скорость клика: ${clickSpeed.toFixed(2)} кликов в секунду";

  // Alternate between increasing and decreasing cookie size
  if (cookie.style.width === "200px") {
    cookie.style.width = "220px";
    cookie.style.height = "220px";
  } else {
    cookie.style.width = "200px";
    cookie.style.height = "200px";
  }
};
