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

// borders
function drawBorders() {
    ctx.clearRect(0,0,width,height);

    ctx.beginPath();
    ctx.moveTo(476, 625);
    ctx.lineTo(476,186);
    ctx.quadraticCurveTo(343,21,78,111);
    ctx.quadraticCurveTo(20,151,24,244);
    ctx.lineTo(20,534);
    ctx.quadraticCurveTo(30,586,78,611);
    ctx.lineTo(166,662);
    ctx.lineTo(166,700);
    ctx.lineTo(306,700);
    ctx.lineTo(306,662);
    ctx.lineTo(413,611);
    ctx.quadraticCurveTo(432,579,426,540);
    ctx.lineTo(426,207);
    ctx.quadraticCurveTo(432,198,437,207);
    ctx.lineTo(437,625);
    ctx.quadraticCurveTo(458,650,476,625);
    ctx.closePath();
    ctx.fillStyle = "#4d5348";
    ctx.fill();
    };

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
    drawBorders()
    ctx.save();
    
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
        // Position
        pinball.speedY += pinball.gravity;
        pinball.y += pinball.speedY;
        pinball.x += pinball.speedX;
      
        // Walls
        if (pinball.x - pinball.radius < 0 || pinball.x + pinball.radius > width) {
          pinball.speedX = -pinball.speedX;
        }
        if (pinball.y - pinball.radius < 0 || pinball.y + pinball.radius > height) {
          pinball.speedY = -pinball.speedY;
        }
        // Bumpers
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
        // Border
        let vertices = [
            {x: 476, y: 625},
            {x: 476, y: 186},
            {x: 408, y: 125},
            {x: 346, y: 93},
            {x: 247, y: 80},
            {x: 230, y: 78},
            {x: 173, y: 87},
            {x: 78, y: 111},
            {x: 24, y: 244},
            {x: 20, y: 534},
            {x: 78, y: 611},
            {x: 166, y: 662},
            {x: 166, y: 700},
            {x: 306, y: 700},
            {x: 306, y: 662},
            {x: 413, y: 611},
            {x: 426, y: 540},
            {x: 426, y: 207},
            {x: 437, y: 207},
            {x: 437, y: 625},
            {x: 476, y: 625}
          ];

        let pinballPosition = {x: pinball.x, y: pinball.y};
        pinballRadius = pinball.radius;

        function distanceToLineSegment(point, lineStart, lineEnd) {
            const A = point.x - lineStart.x;
            const B = point.y - lineStart.y;
            const C = lineEnd.x - lineStart.x;
            const D = lineEnd.y - lineStart.y;
          
            const dot = A * C + B * D;
            const len_sq = C * C + D * D;
            let param = -1;
            if (len_sq != 0) {
                param = dot / len_sq;
            }
          
            let xx, yy;
          
            if (param < 0) {
                xx = lineStart.x;
                yy = lineStart.y;
            } else if (param > 1) {
                xx = lineEnd.x;
                yy = lineEnd.y;
            } else {
                xx = lineStart.x + param * C;
                yy = lineStart.y + param * D;
            }
          
            const dx = point.x - xx;
            const dy = point.y - yy;
          
            return Math.sqrt(dx * dx + dy * dy);
        }
        
        for (let i = 0; i < vertices.length - 1; i++) {
            const lineStart = vertices[i];
            const lineEnd = vertices[i + 1];
            const distance = distanceToLineSegment(pinballPosition, lineStart, lineEnd);
            if (distance <= pinballRadius) {
                const dx = lineEnd.x - lineStart.x;
                const dy = lineEnd.y - lineStart.y;
                const angle = Math.atan2(dy, dx);
                
                pinball.speedX = -pinball.speedX;
                pinball.speedY = -pinball.speedY;
            }
        }



        
        // Draw pinball
        
        ctx.beginPath();
        ctx.arc(pinball.x, pinball.y, pinball.radius, 0, Math.PI*2);
        ctx.fillStyle = pinball.color;
        ctx.fill();
        ctx.closePath();
      
        requestAnimationFrame(pinballStart);
    };
    function gameArena() {
        
        pinballStart();

    }

    gameArena();