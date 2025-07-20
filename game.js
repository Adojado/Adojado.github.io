const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('startButton');

const gridSize = 20; // Size of each segment of the snake and food
let snake = [{ x: 10, y: 10 }]; // Initial snake position (array of segments)
let food = {}; // Food position
let dx = 0; // Horizontal movement
let dy = 0; // Vertical movement
let score = 0;
let gameInterval;
let gameRunning = false;

// Load images
const snakeHeadImg = new Image();
snakeHeadImg.src = 'snake-head.png'; // Make sure this path is correct!

const monsterImg = new Image();
monsterImg.src = 'white-monster.png'; // Make sure this path is correct!

// Wait for images to load before starting the game to avoid drawing issues
Promise.all([
    new Promise(resolve => snakeHeadImg.onload = resolve),
    new Promise(resolve => monsterImg.onload = resolve)
]).then(() => {
    // Images are loaded, we can now potentially show a "ready" state or allow game start
    console.log("Images loaded successfully!");
    // You might want to enable the start button here if it was initially disabled
});


function generateFood() {
    food = {
        x: Math.floor(Math.random() * (canvas.width / gridSize)),
        y: Math.floor(Math.random() * (canvas.height / gridSize))
    };
    // Ensure food doesn't spawn on the snake
    for (let i = 0; i < snake.length; i++) {
        if (food.x === snake[i].x && food.y === snake[i].y) {
            generateFood(); // Regenerate if collision
            return;
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    // Draw snake
    for (let i = 0; i < snake.length; i++) {
        const segment = snake[i];
        if (i === 0) { // Head of the snake
            ctx.drawImage(snakeHeadImg, segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
        } else { // Body segments
            ctx.fillStyle = '#4CAF50'; // Green color for body
            ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
            ctx.strokeStyle = '#388E3C';
            ctx.strokeRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
        }
    }

    // Draw food (white monster)
    ctx.drawImage(monsterImg, food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function update() {
    if (!gameRunning) return;

    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    // Game over conditions
    // Wall collision
    if (head.x < 0 || head.x >= canvas.width / gridSize ||
        head.y < 0 || head.y >= canvas.height / gridSize) {
        endGame();
        return;
    }

    // Self-collision
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            endGame();
            return;
        }
    }

    snake.unshift(head); // Add new head

    // Check for food collision
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreDisplay.textContent = score;
        generateFood(); // Generate new food
    } else {
        snake.pop(); // Remove tail if no food eaten
    }

    draw();
}

function changeDirection(event) {
    event.preventDefault();
    const keyPressed = event.keyCode;
    const LEFT_KEY = 37;
    const UP_KEY = 38;
    const RIGHT_KEY = 39;
    const DOWN_KEY = 40;

    const goingUp = dy === -1;
    const goingDown = dy === 1;
    const goingRight = dx === 1;
    const goingLeft = dx === -1;

    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -1;
        dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -1;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 1;
        dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 1;
    }
}

function startGame() {
    if (gameRunning) return; // Prevent multiple starts
    gameRunning = true;
    score = 0;
    scoreDisplay.textContent = score;
    snake = [{ x: 10, y: 10 }]; // Reset snake position
    dx = 0; // Reset direction
    dy = 0;
    generateFood();
    clearInterval(gameInterval); // Clear any existing interval
    gameInterval = setInterval(update, 100); // Game speed (lower value = faster)
    startButton.textContent = "Restart Game"; // Change button text
}

function endGame() {
    gameRunning = false;
    clearInterval(gameInterval);
    startButton.textContent = "Start Game"; // Reset button text

    if (score >= 100) {
        alert(`Game Over! Twoje punkty: ${score} Brawo prezenty niżej`);
        $('.gifts').removeClass('hidden');
    } else {
        alert(`Game Over! Twoje punkty: ${score} Dasz rade zebrać 100 będzie warto :))`);
    }
}

// Event Listeners
document.addEventListener('keydown', changeDirection);
startButton.addEventListener('click', startGame);

// Initial draw (optional, just to show something before start)
draw();
