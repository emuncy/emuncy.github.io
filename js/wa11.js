const button = document.querySelector('#js-new-quote');
button.addEventListener('click', getQuote);


const answerButton = document.querySelector('#js-tweet');
answerButton.addEventListener('click', getColors);

const endpoint = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en&type=json';

const endpoint2 = 'http://colormind.io/api/model=default'

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

async function getColors() {
    console.log('It works!');
    try {
        const response = await fetch(endpoint2);
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json();
        console.log(json);
        
        
    }
    catch (err) {
        console.log(err);
        alert('Failed to fetch new trivia');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
    // console.log('test')
}
