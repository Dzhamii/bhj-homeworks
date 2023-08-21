const timerElement = document.getElementById('timer');

let seconds = 60; 

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateTimer() {
    seconds--;
    timerElement.textContent = formatTime(seconds);

    if (seconds === 0) {
        clearInterval(interval);
        alert("Вы победили в конкурсе!");
    }
}

const interval = setInterval(updateTimer, 1000);
