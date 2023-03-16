const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 30 fahrenheit outside, so :insertx: bundled up to ski. When they got to :inserty:, they found the whole resort covered in snow, then :insertz:. Karen saw the whole thing, but was not surprised — :insertx: weighs 200 pounds, and it was a very cold day.'
const insertx = ['the college boy', 'ski racer', 'Snow Queen']
const inserty = ['Vail', 'Eldora', 'A Basin']
const insertz = ['slipped on ice', 'fell off the lift', 'turned into a slug and crawled away']

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace ('Karen', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(200*0.0714286) + ' stone';
    const temperature = Math.round((30-32) * (5/9) ) + ' centigrade';
    newStory = newStory.replace ('30 fahrenheit', temperature);
    newStory = newStory.replace ('200 pounds', weight);
  }

    
    const xItem = randomValueFromArray(insertx);
    const yItem = randomValueFromArray(inserty);
    const zItem = randomValueFromArray(insertz);

    newStory = newStory.replaceAll (':insertx:', xItem);
    newStory = newStory.replace (':inserty:', yItem);
    newStory = newStory.replace (':insertz:', zItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';

  
}

