const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
const ground = document.querySelector("#ground");
const score = document.querySelector(".google-dino-score");
const dinoStationary = `dino-stationary.png`;
const startDisplay = document.querySelector("#toStartText");
const frames = ["dino-run-0.png", "dino-run-1.png"];
const dinoLose = `dino-lose.png`;
const loseDisplay = document.querySelector("#loseMenu");
const jumpAudio = new Audio('boing.wav') 

let frameIndex = 0;
let runIntervalId = null;
let isJumping = false;
let stillAlive = null;
let isGameRunning = false;
let scoreValue = 0;
let scoreIntervalId = null;

const startScore = () => {
  scoreValue = 0; 
  score.innerHTML = scoreValue; 
  scoreIntervalId = setInterval(() => {
    scoreValue++;
    score.innerHTML = scoreValue;
  }, 100); 
}

const stopScore = () => {
  clearInterval(scoreIntervalId);
}

const isColliding = function (dino, cactus) {
  const dinoRect = dino.getBoundingClientRect();
  const cactusRect = cactus.getBoundingClientRect();
  return !(
    dinoRect.bottom < cactusRect.top ||
    dinoRect.top > cactusRect.bottom ||
    dinoRect.right < cactusRect.left ||
    dinoRect.left > cactusRect.right
  );
};

const runAnimationDino = function () {
  stopRunAnimation();
  runIntervalId = setInterval(() => {
    dino.src = `./img/dino-images/${frames[frameIndex]}`;
    frameIndex = (frameIndex + 1) % frames.length;
  }, 150);
};

const stopRunAnimation = function () {
  clearInterval(runIntervalId);
};

const startGame = function () {
  isGameRunning = true;
  startDisplay.style.opacity = "0";
  loseDisplay.classList.remove("ShowLoseMenu");
  runAnimationDino();
  ground.classList.add("google-dino-ground-animated");
  startScore();

  setTimeout(() => {
    cactus.classList.add("cactus-move");
  }, 500);

  stillAlive = setInterval(() => {
    if (isColliding(dino, cactus)) {
      endGame();
    }
  }, 50);
};

const endGame = function () {
  isGameRunning = false;
  stopScore();
  ground.classList.remove("google-dino-ground-animated");
  cactus.classList.remove("cactus-move");
  dino.src = `./img/dino-images/${dinoLose}`;
  stopRunAnimation();
  dino.classList.remove("jump");
  loseDisplay.classList.add("ShowLoseMenu");
  clearInterval(stillAlive);
};

const restartGame = function () {
  if (!isGameRunning) {
    dino.src = `./img/dino-images/${dinoStationary}`;
    cactus.classList.remove("cactus-move");
    ground.classList.remove("google-dino-ground-animated");
    dino.classList.remove("jump");
    frameIndex = 0;
    isJumping = false;
    document.addEventListener("keyup", onKeyUpStart);
  }
};

const onKeyUpStart = function (event) {
  event.preventDefault()
  if (event.code === "Space" || event.code === "ArrowUp" || event.code === "KeyR") {
    startGame();
    document.removeEventListener("keyup", onKeyUpStart);
  }
};

document.addEventListener("keyup", onKeyUpStart);

document.addEventListener("keydown", function (event) {
  if ((event.code === "Space" || event.code === "ArrowUp") && isGameRunning) {
    event.preventDefault();

    if (!isJumping) {
      isJumping = true;
      stopRunAnimation();
      dino.src = `./img/dino-images/${dinoStationary}`;
      dino.classList.add("jump");
      jumpAudio.play()
      setTimeout(() => {
        dino.classList.remove("jump");
        if (isGameRunning) {
          runAnimationDino();
        }
        isJumping = false;
      }, 600);
    }
  }
});

document.addEventListener("keydown", function (event) {
  if (event.code === "KeyR") {
    restartGame();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Space" || event.code === "ArrowUp" || event.code === "KeyR") {
    event.preventDefault();
  }
});
