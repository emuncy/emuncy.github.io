// paddles
rightPaddle = document.querySelector(".right-paddle");
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

function rotatePaddleR() {
  if (rotatedR) {
    rightPaddle.style.transform = "rotate(45deg)";
  } else {
    rightPaddle.style.transform = "rotate(0deg)";
  }
}

setInterval(rotatePaddleR, 100);

leftPaddle = document.querySelector(".left-paddle");
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

function rotatePaddleL() {
  if (rotatedL) {
    leftPaddle.style.transform = "rotate(-45deg)";
  } else {
    leftPaddle.style.transform = "rotate(0deg)";
  }
}

setInterval(rotatePaddleL, 100);



// paddles
const paddle = {
    width: 100,
    height: 18,
    color: "#031926"
}

function roundRect(x, y, width, height, radius) {
    const cornerRadius = { upperLeft: radius, upperRight: radius, lowerLeft: radius, lowerRight: radius };
    ctx.beginPath();
    ctx.moveTo(x + cornerRadius.upperLeft, y);
    ctx.lineTo(x + width - cornerRadius.upperRight, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + cornerRadius.upperRight);
    ctx.lineTo(x + width, y + height - cornerRadius.lowerRight);
    ctx.quadraticCurveTo(x + width, y + height, x + width - cornerRadius.lowerRight, y + height);
    ctx.lineTo(x + cornerRadius.lowerLeft, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - cornerRadius.lowerLeft);
    ctx.lineTo(x, y + cornerRadius.upperLeft);
    ctx.quadraticCurveTo(x, y, x + cornerRadius.upperLeft, y);
    ctx.closePath();
  }

function drawRightPaddle() {
    ctx.save();
    ctx.fillStyle = paddle.color;
    ctx.translate(40,350);
    ctx.rotate(Math.PI / -5);
    roundRect(40, 350, paddle.width, paddle.height, 10);
    ctx.fill();
    ctx.restore();
}
let leftPaddleRotationAngle = 1;

function drawLeftPaddle() {
    ctx.save();
    ctx.fillStyle = paddle.color;
    ctx.translate(50, 50);
    ctx.rotate(leftPaddleRotationAngle * Math.PI / 5);
    roundRect(50, 50, paddle.width, paddle.height, 10);
    ctx.fill();
    ctx.restore();
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    drawLeftPaddle();
    drawRightPaddle();
    requestAnimationFrame(draw);
  }
  
  draw();

  // rotation
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

function rotatePaddleR() {
  if (rotatedR) {
     "rotate(45deg)";
  } else {
    "rotate(0deg)";
  }
}

setInterval(rotatePaddleR, 100);

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

function rotatePaddleL() {
  if (rotatedL) {
    leftPaddleRotationAngle = 45;
  } else {
    leftPaddleRotationAngle = 1;
  }
}

setInterval(rotatePaddleL, 100);
// function moveLeftPaddle(event) {
//   if (window.event.keyCode === 37) {
//     20 -= 20;
//   }
// }

// function moveRightPaddle(event) {
//   if (window.event.keyCode === 39) {
//     rightPaddleX += 20;
//   }
// }

// document.addEventListener("keydown", moveLeftPaddle);
// document.addEventListener("keydown", moveRightPaddle);

/// use this:
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

function rotatePaddleL() {
    ctx.save();
    ctx.clearRect(0,0,width,height);
    if (rotatedL) {
    ctx.translate(200, 300);
    ctx.rotate(Math.PI / -4);
    
  } else {
    ctx.translate(200, 300);
    ctx.rotate(0);
  }
  ctx.drawImage(img, -img.width / 2, -img.height / 2);
  ctx.restore();
}

setInterval(rotatePaddleL, 100);