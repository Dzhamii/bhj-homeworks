function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let score = 0; 
let misses = 0; 

function holeClick(index) {
    const hole = getHole(index);
    
    if (hole.classList.contains("hole_has-mole")) {
        score++; 
    } else {
        misses++; 
    }
    
    updateStats(); 
    
    if (score === 10) {
        alert("Вы победили!");
        resetStats();
    } else if (misses === 5) {
        alert("Вы проиграли.");
        resetStats();
    }
}

function updateStats() {
    const scoreDisplay = document.getElementById("score");
    const missesDisplay = document.getElementById("misses");
    
    scoreDisplay.textContent = `Попаданий: ${score}`;
    missesDisplay.textContent = `Промахов: ${misses}`;
}

function resetStats() {
    score = 0;
    misses = 0;
    updateStats();
}

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
        holeClick(i);
    };
}

updateStats();
