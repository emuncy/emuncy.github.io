const button = document.querySelector('#js-new-quote');
button.addEventListener('click', getQuote);

//const answerButton = document.querySelector('#js-tweet');
//answerButton.addEventListener('click', showAnswer);

const endpoint = 'https://evilinsult.com/generate_insult.php?lang=en&type=json';

async function getQuote() {
    console.log('It works!');
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json();
        // console.log(json.question);
        console.log(json);
        displayQuote(json);
        
    }
    catch (err) {
        console.log(err);
        alert('Failed to fetch new trivia');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}
