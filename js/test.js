const spinButton = document.querySelector('.spin-button');
const slotContainer = document.querySelector('.slot-container');
const slots = document.getElementsByClassName('slot');

// Function to generate random number between 1 and 3
function getRandomInt() {
  return Math.floor(Math.random() * 3) + 1;
}

// Function to animate slots
function scrollUp() {
  // Disable button to prevent multiple clicks
  spinButton.disabled = true;

  // Get random slot positions
  const slot1Pos = getRandomInt() * -100;
  const slot2Pos = getRandomInt() * -100;
  const slot3Pos = getRandomInt() * -100;

  // Animate slots
  let count = 0;
  const animationInterval = setInterval(() => {
    for (let i = 0; i < slots.length; i++) {
      const slot = slots[i];
      const slotPos = [slot1Pos, slot2Pos, slot3Pos][i];
      slot.style.transform = `translateY(${slotPos + count}%)`;
      if (count === -100) {
        slot.style.transform = `translateY(${slotPos + count + 300}%)`;
      }
    }
    count -= 10;
    if (count === -110) {
      clearInterval(animationInterval);
      spinButton.disabled = false;
      // Determine outcome of spin
      const outcome = [Math.abs(slot1Pos), Math.abs(slot2Pos), Math.abs(slot3Pos)];
      if (outcome[0] === outcome[1] && outcome[1] === outcome[2]) {
        alert("You won!");
      }
    }
  }, 50);
}

spinButton.addEventListener('click', scrollUp);
