var gameArea = document.querySelector("section");
var gameInterval = null;
var score = 0;
var scoreSpan = document.querySelector(".scoredisplay");
var scoreInterval = null;
var lane = 6;
var player;
var laser = null;


document.querySelector(".startButton").addEventListener("click", () => {
    if (!gameInterval) {
        score = 0;
        updateScore(0);
        scoreInterval = setInterval(() => {
            updateScore(1);
        }, 1000);

        player = document.createElement("div");
        gameArea.appendChild(player);
        player.classList.add("player");
        player.style.left = 300 + "px";
        player.style.top = 600 + "px";

        gameInterval = setInterval(() => {
            var x = (Math.floor(Math.random() * 12) + 1) * 50;
            var enemy = new Enemy(x, 0, "section");
            enemy.fall();
        }, 1000);
    }
})

document.querySelector(".stopButton").addEventListener("click", () => {
    lose();
})

function lose() {
    clearInterval(gameInterval);
    gameInterval = null;
    clearInterval(scoreInterval);
    scoreInterval = null;

    document.querySelectorAll(".weak").forEach(weak => weak.remove());
    document.querySelectorAll(".strong").forEach(strong => strong.remove());
    player.remove();

   // alert("Game over!");
}

function updateScore(newScore) {
    score += newScore;
    scoreSpan.innerHTML = score;
}

document.addEventListener("keydown", (event)=>{
    var key = event.key;

    if (key == "ArrowLeft" && lane > 1) {
        lane -= 1;
        move();
    } else if (key == "ArrowRight" && lane < 12) {
        lane += 1;
        move();
    }

    if (key == "Space" && laser == null) {
        var laser = new Laser(lane * 50, 350, gameArea);
        laser.hit();
        setTimeout( () => {
            laser = null;
        }, 500);
    }

})

function move() {
    player.style.left = lane * 50 + "px";
}