// // // Set up the canvas
// // const cvs = document.getElementById('canvas');
// // const ctx = canvas.getContext('2d');

// // // Create variables
// // let myCar       = new Image(),
// //     bg          = new Image(),
// //     obstacle    = new Image();

// // // Insirt source for images
// // _car.src        = ["./assets/red_car.png", "./assets/enemy_car.png"];
// // bg.src          = "./assets/bg.png";
// // obstacle.src    = ["./assets/box.png", "./assets/bush_1.png", "./assets/bush_2.png", "./assets/stone_1.png", "./assets/stone_2.png"];


// // // Create the car object
// // const car = {
// //   x: canvas.width / 2,
// //   y: canvas.height - 20,
// //   width: 20,
// //   height: 40,
// //   speed: 5,
// //   moveLeft: false,
// //   moveRight: false,
// //   my: _car.src[1],
// //   enemy: _car.src[2]
// // };

// // // Create the obstacles
// // const obstacles = [];
// // for (let i = 0; i < 5; i++) {
// //   obstacles.push({
// //     x: Math.random() * canvas.width,
// //     y: 0,
// //     width: 20,
// //     height: 40
// //   });
// // }

// // // Set up event listeners for the arrow keys
// // document.addEventListener('keydown', function(event) {
// //   if (event.keyCode === 37) {
// //     car.moveLeft = true;
// //   } else if (event.keyCode === 39) {
// //     car.moveRight = true;
// //   }
// // });

// // document.addEventListener('keyup', function(event) {
// //   if (event.keyCode === 37) {
// //     car.moveLeft = false;
// //   } else if (event.keyCode === 39) {
// //     car.moveRight = false;
// //   }
// // });

// // // Main game loop
// // function update() {
// //   // Move the car
// //   if (car.moveLeft) {
// //     car.x -= car.speed;
// //   } else if (car.moveRight) {
// //     car.x += car.speed;
// //   }

// //   // Keep the car inside the canvas
// //   if (car.x < 0) {
// //     car.x = 0;
// //   } else if (car.x + car.width > canvas.width) {
// //     car.x = canvas.width - car.width;
// //   }

// //   // Move the obstacles down
// //   for (let i = 0; i < obstacles.length; i++) {
// //     obstacles[i].y += 2;

// //     // Check if the car has hit an obstacle
// //     if (car.x < obstacles[i].x + obstacles[i].width &&
// //         car.x + car.width > obstacles[i].x &&
// //         car.y < obstacles[i].y + obstacles[i].height &&
// //         car.height + car.y > obstacles[i].y) {
// //       // Stop the game
// //       return;
// //     }
// //   }

// //   // Clear the canvas
// //   ctx.clearRect(0, 0, canvas.width, canvas.height);

// //   // Draw the car
// //   ctx.drawImage(car.my, car.x, car.y);

// //   // Draw the obstacles
// //   ctx.fillStyle = 'green';
// //   for (let i = 0; i < obstacles.length; i++) {
// //     c
// //   }
// // }
// // update();
// // Set up canvas and context
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// // Set up variables for the obstacle's position and movement
// let obstacleX = 0;
// let obstacleY = 0;
// const obstacleSpeed = 1;

// // Draw the obstacle on the canvas
// function drawObstacle() {
//   ctx.fillStyle = "red";
//   ctx.fillRect(obstacleX, obstacleY, 50, 50);
// }

// // Update the obstacle's position based on its speed
// function updateObstaclePosition() {
//   obstacleX += obstacleSpeed;
// }

// // Main game loop
// function gameLoop() {
//   // Clear the canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // Update the obstacle's position
//   updateObstaclePosition();

//   // Draw the obstacle
//   drawObstacle();

//   // Request the next frame
//   requestAnimationFrame(gameLoop);
// }

// // Start the game loop
// gameLoop();
// Set up canvas and context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set up variables for the player's position and movement
let playerX = 0;
let playerY = 0;
let playerVelocity = 0;
const playerAcceleration = 0.5;
const playerFriction = 0.1;
const playerMaxSpeed = 10;

// Set up variables for the obstacle's position and movement
let obstacleX = 0;
let obstacleY = 0;
const obstacleSpeed = 5;

// Handle player input
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    playerVelocity -= playerAcceleration;
  }
});

// Update the player's position based on its velocity
function updatePlayerPosition() {
  playerX += playerVelocity;

  // Apply friction to slow the player down
  playerVelocity *= (1 - playerFriction);

  // Limit the player's speed
  playerVelocity = Math.max(-playerMaxSpeed, Math.min(playerMaxSpeed, playerVelocity));
}

// Update the obstacle's position based on its speed
function updateObstaclePosition() {
  obstacleX -= obstacleSpeed;

  // Reset the obstacle's position when it goes off the screen
  if (obstacleX + 50 < 0) {
    obstacleX = canvas.width;
  }
}

// Draw the player on the canvas
function drawPlayer() {
  ctx.fillStyle = "blue";
  ctx.fillRect(playerX, playerY, 50, 50);
}

// Draw the obstacle on the canvas
function drawObstacle() {
  ctx.fillStyle = "red";
  ctx.fillRect(obstacleX, obstacleY, 50, 50);
}

// Check for collisions between the player and the obstacle
function checkCollision() {
  const playerLeft = playerX;
  const playerRight = playerX + 50;
  const playerTop = playerY;
  const playerBottom = playerY + 50;

  const obstacleLeft = obstacleX;
  const obstacleRight = obstacleX + 50;
  const obstacleTop = obstacleY;
  const obstacleBottom = obstacleY + 50;

  if (playerRight > obstacleLeft && playerLeft < obstacleRight && playerBottom > obstacleTop && playerTop < obstacleBottom) {
    console.log("Collision detected!");
  }
}

// Main game loop
function gameLoop() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update the player's and obstacle's positions
  updatePlayerPosition();
  updateObstaclePosition();

  // Draw the player and obstacle
  drawPlayer();
  drawObstacle();

  // Check for collisions
  checkCollision();

  // Request the next frame
  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();