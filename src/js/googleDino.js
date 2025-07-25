import dinoRun0 from '../img/dino-images/dino-run-0.png';
import dinoRun1 from '../img/dino-images/dino-run-1.png';
import dinoStationaryImg from '../img/dino-images/dino-stationary.png';
import dinoLoseImg from '../img/dino-images/dino-lose.png';

import cactus1Img from '../img/dino-images/cactus_single_uncut_optimized.png';
import cactus2Img from '../img/dino-images/cactus_double_uncut_optimized.png';
import cactus3Img from '../img/dino-images/cactus_triple_uncut_optimized.png';

// DOM
const dino = document.querySelector("#dino");
const ground = document.querySelector("#ground");
const score = document.querySelector(".google-dino-score");
const startDisplay = document.querySelector("#toStartText");
const loseDisplay = document.querySelector("#loseMenu");
const restartDinoButton = document.querySelector(".google-dino-restart-button");
const obstaclesContainer = document.querySelector("#obstacles");

const frames = [dinoRun0, dinoRun1];

const MIN_SPAWN_DELAY = 600;           
const SPEED_INCREMENT_SCORE = 200;     
const SPAWN_DECREMENT_SCORE = 150;     

const cactusSprites = [
  { src: cactus1Img, w: 34,  h: 60 },
  { src: cactus2Img, w: 74,  h: 60 },
  { src: cactus3Img, w: 100, h: 60 },
];

let frameIndex = 0;
let runIntervalId = null;
let isJumping = false;
let isGameRunning = false;
let scoreValue = 0;
let scoreIntervalId = null;

let activeObstacles = [];     
let spawnTimerId = null;
let gameSpeed = 6;            
let spawnDelay = 2000;        
let lastTimestamp = null;     

const startScore = () => {
  scoreValue = 0;
  score.textContent = scoreValue;
  scoreIntervalId = setInterval(() => {
    scoreValue++;
    score.textContent = scoreValue;
    updateDifficulty(); 
  }, 100);
};

const stopScore = () => {
  clearInterval(scoreIntervalId);
};

function updateDifficulty() {
  const speedSteps = Math.floor(scoreValue / SPEED_INCREMENT_SCORE);
  gameSpeed = 6 + speedSteps * 0.8; 

  const spawnSteps = Math.floor(scoreValue / SPAWN_DECREMENT_SCORE);
  spawnDelay = Math.max(2000 - spawnSteps * 150, MIN_SPAWN_DELAY);
}

function getRandomCactusConfiguration() {
  return cactusSprites[Math.floor(Math.random() * cactusSprites.length)];
}

function spawnObstacle() {
  if (!isGameRunning) return;

  const cfg = getRandomCactusConfiguration();
  const img = document.createElement("img");

  img.src = cfg.src;
  img.alt = "cactus";
  img.className = "google-dino-cactus";
  
    if(cfg.src === cactus1Img) {
      img.classList.add("cactus1-img");
    } else if (cfg.src === cactus2Img) {
      img.classList.add("cactus2-img");
    } else {
      img.classList.add("cactus3-img");
    }

  const startX = obstaclesContainer.clientWidth + 10;
  img.style.left = startX + "px";
  img.style.bottom = "0px";

  obstaclesContainer.appendChild(img);

  activeObstacles.push({
    el: img,
    x: startX,
    w: cfg.w,
  });
}

function scheduleNextSpawn() {
  if (!isGameRunning) return;
  spawnTimerId = setTimeout(() => {
    spawnObstacle();
    scheduleNextSpawn();
  }, spawnDelay + Math.random() * 400); 
}

function isCollidingRect(a, b) {
  return !(
    a.bottom < b.top ||
    a.top > b.bottom ||
    a.right < b.left ||
    a.left > b.right
  );
}


const isColliding = function (dinoEl, cactusEl) {
  const dinoRect = dinoEl.getBoundingClientRect();
  const cactusRect = cactusEl.getBoundingClientRect();
  return isCollidingRect(dinoRect, cactusRect);
};

const runAnimationDino = function () {
  stopRunAnimation();
  runIntervalId = setInterval(() => {
    dino.src = frames[frameIndex];
    frameIndex = (frameIndex + 1) % frames.length;
  }, 150);
};

const stopRunAnimation = function () {
  clearInterval(runIntervalId);
};

function updateObstaclesLoop(timestamp) {
  if (!isGameRunning) return;

  if (lastTimestamp == null) lastTimestamp = timestamp;
  const dt = timestamp - lastTimestamp;
  lastTimestamp = timestamp;

  const step = gameSpeed * (dt / 16.67); 

  const dinoRect = dino.getBoundingClientRect();

  for (let i = activeObstacles.length - 1; i >= 0; i--) {
    const ob = activeObstacles[i];

    ob.x -= step;
    ob.el.style.left = ob.x + "px";

    const obRect = ob.el.getBoundingClientRect();
    if (isCollidingRect(dinoRect, obRect)) {
      endGame();
      return; 
    }

    if (ob.x + ob.w < 0) {
      ob.el.remove();
      activeObstacles.splice(i, 1);
    }
  }

  requestAnimationFrame(updateObstaclesLoop);
}

const startGame = function () {
  isGameRunning = true;

  startDisplay.style.opacity = "0";
  loseDisplay.classList.remove("Show");
  restartDinoButton.classList.remove("Show", "rotate");


  activeObstacles.forEach(o => o.el.remove());
  activeObstacles = [];
  lastTimestamp = null;

  gameSpeed = 6;
  spawnDelay = 2000;

  runAnimationDino();
  ground.classList.add("google-dino-ground-animated");

  startScore();

  scheduleNextSpawn();

  requestAnimationFrame(updateObstaclesLoop);
};

const endGame = function () {
  if (!isGameRunning) return;
  isGameRunning = false;

  stopScore();
  ground.classList.remove("google-dino-ground-animated");

  dino.src = dinoLoseImg;
  stopRunAnimation();
  dino.classList.remove("jump");

  loseDisplay.classList.add("Show");
  restartDinoButton.classList.add("Show");

  clearTimeout(spawnTimerId); 
};


const restartGame = function () {
  if (isGameRunning) return;

  loseDisplay.classList.remove("Show");
  restartDinoButton.classList.remove("Show", "rotate");

  stopScore();
  scoreValue = 0;
  score.textContent = 0;

  dino.src = dinoStationaryImg;
  dino.classList.remove("jump");
  frameIndex = 0;
  isJumping = false;

  activeObstacles.forEach(o => o.el.remove());
  activeObstacles = [];

  startGame();
};


restartDinoButton.addEventListener("click", function () {
  if (isGameRunning) return;
  restartDinoButton.classList.add("rotate");
  setTimeout(() => {
    restartGame();
  }, 600); 
});

const onKeyUpStart = function (event) {
  event.preventDefault();
  if (event.code === "Space" || event.code === "ArrowUp" || event.code === "KeyR" ) {
    if (!isGameRunning) {
      startGame();
    }
  }
};

document.addEventListener("keyup", onKeyUpStart);

document.addEventListener("touchstart", () => {
  if (!isGameRunning) {
    startGame();
  }
});

document.addEventListener('touchstart', function() {
  if (isGameRunning && !isJumping) {
    isJumping = true;
    stopRunAnimation();
    dino.src = dinoStationaryImg;
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
      if (isGameRunning) {
        runAnimationDino();
      }
      isJumping = false;
    }, 600);
  }
});

document.addEventListener("keydown", function (event) {
  if ((event.code === "Space" || event.code === "ArrowUp") && isGameRunning) {
    event.preventDefault();

    if (!isJumping) {
      isJumping = true;
      stopRunAnimation();
      dino.src = dinoStationaryImg;
      dino.classList.add("jump");
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
    event.preventDefault();
    if (!isGameRunning) {
      restartGame();
    } else {

    }
  }
});


document.addEventListener("keydown", function (event) {
  if (event.code === "Space" || event.code === "ArrowUp" || event.code === "KeyR") {
    event.preventDefault();
  }
});
