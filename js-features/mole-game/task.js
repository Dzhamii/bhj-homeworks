function getHole(index) {
    return document.getElementById("hole${index}");
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
    
    if (score === 10) {
        alert("Вы победили!");
        score = 0;
        misses = 0;
    } else if (misses === 5) {
        alert("Вы проиграли.");
        score = 0;
        misses = 0;
    }
}

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
        holeClick(i);
    };
}
