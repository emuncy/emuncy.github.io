let sqr = document.querySelector("#square");

let para = document.querySelector("p");

let btn = document.querySelector("button");

let clickCount = 0;

function result() {
    // console.log("This worked!");
    if (clickCount <= 1) {
        clickCount++;
        para.textContent = "You've clicked 1 time.";
        // console.log(clickCount);
    }

    else {
        clickCount++;
        para.textContent = "You've clicked "+ clickCount +" times.";
        // console.log(clickCount);
    }
}

function reset() {
    clickCount = 0;
    para.textContent = "Click the box!";
}

sqr.addEventListener("click", result);
btn.addEventListener("click", reset);