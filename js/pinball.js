// canvas basics
const canvas = document.querySelector('.canvas');
canvas.width = 500;
canvas.height = 700;

const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// find cords
canvas.addEventListener('click', function(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  console.log(`Clicked at (${x}, ${y})`);
});

// paddles
const img = new Image();
img.src = '/img/left_bumper.png';
img.onload = function() {
    ctx.drawImage(img, 20, 480);
}

let rotatedL = false;

document.addEventListener("keydown", function(event) {
  if (window.event.keyCode === 37) { 
    rotatedL = true;
  }
});

document.addEventListener("keyup", function(event) {
  if (window.event.keyCode === 37) {
    rotatedL = false;
  }
});

lbutton = document.querySelector(".left-trigger");

lbutton.addEventListener("mousedown", function() {
    rotatedL = true;
});

lbutton.addEventListener("mouseup", function() {
    rotatedL = false;
});

rbutton = document.querySelector(".right-trigger");

rbutton.addEventListener("mousedown", function() {
    rotatedR = true;
});

rbutton.addEventListener("mouseup", function() {
    rotatedR = false;
});

const img2 = new Image();
img2.src = '/img/right_bumper.png';
img2.onload = function() {
    ctx.drawImage(img2, 280, 480);
}

let rotatedR = false;

document.addEventListener("keydown", function(event) {
  if (window.event.keyCode === 39) { 
    rotatedR = true;
  }
});

document.addEventListener("keyup", function(event) {
  if (window.event.keyCode === 39) {
    rotatedR = false;
  }
});

let leftBumperX = 120;
let leftBumperY = 580;

let rightBumperX = 360;
let rightBumperY = 580;

function rotatePaddles() {
    ctx.save();
    ctx.clearRect(0,0,width,height);
    function rotateLeft() {
        if (rotatedL) {
            ctx.translate(120, 580);
            ctx.rotate(Math.PI / -4);
            leftBumperX = 169; 
            leftBumperY = 562;
        } else {
            ctx.translate(120, 580);
            ctx.rotate(0);
            leftBumperX = 120;
            leftBumperY = 580;
        }
        ctx.drawImage(img, -img.width / 2, -img.height / 2);
    }
    function rotateRight() {
        if (rotatedR) {
            ctx.translate(360, 580);
            ctx.rotate(Math.PI / 4);
            rightBumperX = 315; 
            rightBumperY = 563;
        } else {
            ctx.translate(360, 580);
            ctx.rotate(0);
            rightBumperX = 360; 
            rightBumperY = 580;
        }
        ctx.drawImage(img2, -img.width / 2, -img.height / 2);
    }
    
    rotateLeft();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    rotateRight();
    ctx.restore();
}

setInterval(rotatePaddles, 10);


// pinball
const pinball = {
    x: 200,
    y: 500,
    radius: 10,
    color: "#031926",
    speedX: 0,
    speedY: 0,
    gravity: 0.05,
    gravitySpeed: 0
};

function pinballStart () {
        // Update the pinball position
        pinball.speedY += pinball.gravity;
        pinball.y += pinball.speedY;
        pinball.x += pinball.speedX;
      
        // Handle collisions with the walls
        if (pinball.x - pinball.radius < 0 || pinball.x + pinball.radius > width) {
          pinball.speedX = -pinball.speedX;
        }
        if (pinball.y - pinball.radius < 0 || pinball.y + pinball.radius > height) {
          pinball.speedY = -pinball.speedY;
        }
        
        const leftBumperWidth = img.width / 2;
        const leftBumperHeight = img.height / 2;
        const dxl = pinball.x - Math.max(leftBumperX, Math.min(pinball.x, leftBumperX + leftBumperWidth));
        const dyl = pinball.y - Math.max(leftBumperY, Math.min(pinball.y, leftBumperY + leftBumperHeight));
        if (dxl * dxl + dyl * dyl < pinball.radius * pinball.radius) {
            pinball.speedX = -pinball.speedX;
            pinball.speedY = -pinball.speedY;
            pinball.speedX *= 1.05;
            pinball.speedY *= 1.05;
        }

        const rightBumperWidth = img.width / 2;
        const rightBumperHeight = img.height / 2;
        const dxr = pinball.x - Math.max(rightBumperX, Math.min(pinball.x, rightBumperX + rightBumperWidth));
        const dyr = pinball.y - Math.max(rightBumperY, Math.min(pinball.y, rightBumperY + rightBumperHeight));
        if (dxr * dxr + dyr * dyr < pinball.radius * pinball.radius) {
            pinball.speedX = -pinball.speedX;
            pinball.speedY = -pinball.speedY;
            pinball.speedX *= 1.05;
            pinball.speedY *= 1.05;
        }
      
        // Draw the pinball
        
        ctx.beginPath();
        ctx.arc(pinball.x, pinball.y, pinball.radius, 0, Math.PI*2);
        ctx.fillStyle = pinball.color;
        ctx.fill();
        ctx.closePath();
      
        // Request the next animation frame
        requestAnimationFrame(pinballStart);
    }
    
    function gameArena() {
        
        pinballStart();

    }

    gameArena();