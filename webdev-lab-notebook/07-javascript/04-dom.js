// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const userInput1 = document.getElementById('userInput1');
const copyButton = document.getElementById('copy');
const output1 = document.querySelector('section:nth-of-type(1) .output'); // More specific selector

// callback function to handle event
const handleClick = () => {
  if (output1) {
    output1.textContent = userInput1.value;
  }
};

// add an event listener on the target element
if (copyButton) {
  copyButton.addEventListener('click', handleClick);
}


// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const userInput2 = document.getElementById('userInput2');
const output2 = document.querySelector('#inputEventExample .output'); // More specific selector

// callback function to handle event
const handleInput = (event) => {
  if (output2) {
    output2.textContent = event.target.value;
  }
};

// add an event listener on the target element
if (userInput2) {
  userInput2.addEventListener('input', handleInput);
}