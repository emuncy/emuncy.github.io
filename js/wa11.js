const button = document.querySelector('#js-new-quote');
button.addEventListener('click', getQuote);


const answerButton = document.querySelector('#js-tweet');
answerButton.addEventListener('click', getColors);

const endpoint = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en&type=json';

async function getQuote() {
    // console.log('It works!');
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json();
        // console.log(json.question);
        // console.log(json);
        displayQuote(json.text);
        
    }
    catch (err) {
        console.log(err);
        alert('Failed to fetch new trivia');
    }
}

const endpoint2 = "http://colormind.io/api/";
const proxy_url = "https://cors-anywhere.herokuapp.com/";

async function getColors() {
  try {
    const response = await fetch(proxy_url + endpoint2, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "default",
        input: [
          [44,43,44],
          [3,25,38],
          "N",
          "N",
          "N"
        ],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch color data");
    }

    const json = await response.json();
    const colors = json.result[1];
    console.log(colors);
    displayColors(colors);

  } catch (err) {
    console.log(err);
    alert("Failed to fetch color data");
  }
}

function displayColors(color) {
  const body = document.querySelector("body");
//   body.setAttribute('background-color','rgba('+color+')');
  body.style.backgroundColor = 'rgba('+color+')';
  console.log(body.getAttribute('background-color'))
  
}

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
    // console.log('test')
}

