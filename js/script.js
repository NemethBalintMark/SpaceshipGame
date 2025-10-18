var gameArea = document.querySelector("section");
var gameInterval = null;
var score = 0;
var scoreSpan = document.querySelector(".scoredisplay");

document.querySelector(".startButton").addEventListener("click", () => {
    score = 0;

    if (!gameInterval) {
        gameInterval = setInterval( () => {
            var x = (Math.floor(Math.random() * 12) + 1) * 50;
            var enemy = new Enemy(x, 0, "section");
            enemy.fall();
        }, 1000);
    }
})

function lose() {
    clearInterval(gameInterval);
    gameInterval = null;

    document.querySelectorAll(".weak").forEach(weak => weak.remove());
    document.querySelectorAll(".strong").forEach(strong => strong.remove());
}

function updateScore(newScore) {
    score += newScore;
    scoreSpan.innerHTML = score;
}