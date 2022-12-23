console.log("app.js is ready to start");

let cvs         = document.getElementById("canvas");
let cxt         = cvs.getContext("2d");

let bird        = new Image();
let bg          = new Image();
let fg          = new Image();
let pipeUp      = new Image();
let pipeBottom  = new Image();
let heart       = new Image();
let gameOver    = new Image();

bird.src        = "./assets/flappy_bird_bird.png";
bg.src          = "./assets/flappy_bird_bg.png";
fg.src          = "./assets/flappy_bird_fg.png";
pipeUp.src      = "./assets/flappy_bird_pipeUp.png";
heart.src       = "./assets/heart.png";
gameOver.src    = "./assets/game-over.png";
pipeBottom.src  = "./assets/flappy_bird_pipeBottom.png";

let sounds      = false;
let fly         = new Audio();
let scoreAudio  = new Audio();

fly.src         = "./assets/fly.mp3";
scoreAudio.src  = "./assets/score.mp3";

let xPos        = 10;
let yPos        = 150;
let gap         = 80;
let grav        = 1;
let pipes       = [];
let livesCount  = 3;
let score       = 0;
let revel       = false;
let revelTime   = 3000;

pipes[0] = {
    x : cvs.width,
    y : 0
};

document.addEventListener('keydown', birdUp);

function birdUp(e) {
    e = e || window.event;
    if(e.keyCode == '38') {
        yPos -= 25;
        if (sounds) fly.play();
    }
    if(e.keyCode == '40') {
        yPos += 15;
    }
};

function draw() {
    cxt.drawImage(bg, 0, 0); // draw background first of all

    for(let i = 0; i < pipes.length; i++) {

        cxt.drawImage(pipeUp, pipes[i].x, pipes[i].y);
        cxt.drawImage(pipeBottom, pipes[i].x, pipes[i].y + pipeUp.height + gap);
        pipes[i].x --;

        if(pipes[i].x == 125) {
            pipes.push({
                x : cvs.width + 80,
                y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
            if (sounds) scoreAudio.play();
        }
        if(xPos + bird.width >= pipes[i].x
            &&
            xPos <= pipes[i].x + pipeUp.width
            &&
            (yPos <= pipes[i].y + pipeUp.height
            ||
            yPos + bird.height >= pipes[i].y + pipeUp.height + gap)
            ||
            yPos + bird.height >= cvs.height - fg.height) {
                birdRevel();
            }
        if(xPos == pipes[i].x + pipeUp.width) {
                score++;
        }
        if(yPos + bird.height == cvs.height - fg.height) {
            yPos = bird.height - 10;
        }
    }

    cxt.drawImage(bird, xPos, yPos);
    cxt.drawImage(fg, 0, cvs.height - fg.height);
    yPos = yPos + grav;

    checkLives();
    drawScore();
    if (livesCount > 0) requestAnimationFrame(draw);

};

function checkLives() {
    for(let i = 0; i < livesCount; i++) {
        cxt.drawImage(heart, i * 30, 20)
    }
};

function birdRevel() {
    if(!revel) {
        revel = true;
        livesCount--;
        if (livesCount === 0) {
            cxt.drawImage(gameOver, 100, 150);
        }
        setTimeout(() => {
            revel = false;
        }, revelTime)
    }
};

function drawScore() {
    cxt.font = "25px serif";
    cxt.fillStyle = "yellow";
    cxt.fillText(score, cvs.width - 25, 50)
};

pipeBottom.onload = draw;