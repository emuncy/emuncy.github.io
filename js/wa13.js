

// function check() {
//     console.log('test');
// }

// function submit() {
//     alert("Volume is now: "+output.textContent);
// }

// function reset() {
//     outputInt = 0;
//     output.textContent = outputInt;
// }

// function minus() {
//     if (outputInt > 0) {
//     outputInt -=1;
//     output.textContent = outputInt; }
    
// }

// function plus() {
//     if (outputInt < 100) {
//     outputInt +=1;
//     output.textContent = outputInt;
//     }
// }

// function random() {
//     outputInt = randomNumber(0, 100);
//     output.textContent = outputInt;
// }

// function randomNumber(min, max) {
//     const num = Math.floor(Math.random() * (max - min + 1)) + min;
//     return num;
//   }



// const output = document.querySelector('.output');
// let outputInt = parseInt(output.textContent);
// console.log(outputInt);

// const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
// const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
// const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
// const randomButton = document.querySelector('.random-button').addEventListener('click', random);
// const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);


/* const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');
button.addEventListener('click', updateOutput);
function updateOutput() {
    output.textContent = phone_content.value;
    alert(phone_content.value);
}
*/


// var slider = document.getElementById("myRange");
// var sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('click', update);
// var sliderOutput = document.querySelector(".slider-output");


// Update the current slider value (each time you drag the slider handle)
// function update() {
//   sliderOutput.textContent = slider.value;
// }

var num1 = Math.floor(Math.random()*10);
var num2 = Math.floor(Math.random()*10);
var num3 = Math.floor(Math.random()*10);
// element.style.transform = 'translateY(' + stopValue + '%)';

const spinButton = document.querySelector('.spin-button');


function volume() {
    let highest = 0;
    let lowest = 0;
    if (num1 > num2 && num1 > num3) {
    highest = num1;    
    }
    if (num1 < num2 && num1 < num3) {
    lowest = num1;
    }
    if (num2 > num1 && num2 > num3) {
    highest = num2;    
    }
    if (num2 < num1 && num2 < num3) {
    lowest = num2;
    }
    if (num3 > num1 && num3 > num2) {
    highest = num3;    
    }
    if (num3 < num1 && num3 < num2) {
    lowest = num3;
    }
    console.log("The highest number is: " + highest);
    console.log("The lowest number is: " + lowest);
    
    let range = highest - lowest;
    finalVolume = 100 - (range*10);
    console.log(finalVolume)
}
volume();
const result = document.querySelector(".result");
result.textContent = "Your volume is now "+finalVolume+".";

var numberSpin = function(selector) {

}

spinButton.addEventListener('click', numberSpin('scroll1'))

var numberSpin = function(selector) {
  var element = document.getElementById(selector);
  var factor = 10 + Math.floor(Math.random()*10);
  var num = 10;
  var section = 100/(num + 1);
  var stopValue = 1;
  var spin = function(flag, x) {
    var value = element.style.transform;
    value = value ? parseFloat(value.split('(')[1].split(')').join('')) : 0;
    if(flag && flag == true){ 
      if(stopValue !=1 && (value <= stopValue || (value - section/factor) <= stopValue) && (typeof x != 'undefined' && (value >= x * -section && value <= (x-0.5>=0?x-0.5:stopValue==0?0:0.5) * -section))){ 
        element.style.transform = 'translateY(' + stopValue + '%)';
        stopValue = 1;
        return true; 
      }
      stopValue = Math.floor(value/section) >= -num ? Math.floor(value/section)*section : 0;
    }
    if (value && value <= -(section*(num))) {
      element.style.transform = 'translateY('+ section +'%)';
      value = 0;
    } else {
      value -= section/factor;
    }
    element.style.transform = 'translateY(' + value + '%)';    
    return false;
  }
  var spinTimer = setInterval(spin, 10);
  function stop(delay, x){ 
     setTimeout(function() {
        clearTimeout(spinTimer);
         var stopTimer = setInterval(function(){
            if(spin(true, x)) { clearInterval(stopTimer); }; 
        }, 10);
      }, delay);
  }
  return {
    stop: function(delay, x) {
      return stop(delay, x);
    }
  }
}
numberSpin('scroll1').stop(3000 + 100 + Math.floor(Math.random() * 100),9);
numberSpin('scroll2').stop(3000 + 200 + Math.floor(Math.random() * 100),2);
numberSpin('scroll3').stop(3000 + 300 + Math.floor(Math.random() * 100),0);
